const express = require('express');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const app = express();
const DATA_FILE = path.join(__dirname, 'data', 'credentials.json');
const SERVERS_FILE = path.join(__dirname, 'data', 'servers.json');
const FILES_FILE = path.join(__dirname, 'data', 'files.json');
const FILES_DIR = path.join(__dirname, 'files');
const PORT = 3000;

app.use(express.json({ limit: '10mb' }));
app.use(express.static(path.join(__dirname, 'public')));

const IDLE_TIMEOUT = 30 * 60 * 1000; // 30 minutes
let idleTimer = null;

function resetIdleTimer() {
  clearTimeout(idleTimer);
  idleTimer = setTimeout(() => {
    console.log('No activity for 30 minutes. Shutting down.');
    process.exit(0);
  }, IDLE_TIMEOUT);
}

app.use((req, res, next) => { resetIdleTimer(); next(); });

app.get('/api/ping', (req, res) => res.json({ ok: true }));

function ensureDataFile() {
  const dir = path.join(__dirname, 'data');
  if (!fs.existsSync(dir)) fs.mkdirSync(dir);
  if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, JSON.stringify({
      version: 1,
      lastModified: new Date().toISOString(),
      clients: []
    }, null, 2));
  }
}

function ensureServersFile() {
  if (!fs.existsSync(SERVERS_FILE)) {
    fs.writeFileSync(SERVERS_FILE, JSON.stringify({ encrypted: false, servers: [] }, null, 2));
  }
}

function ensureFilesDir() {
  if (!fs.existsSync(FILES_DIR)) fs.mkdirSync(FILES_DIR);
}

function ensureFilesFile() {
  if (!fs.existsSync(FILES_FILE)) {
    fs.writeFileSync(FILES_FILE, JSON.stringify({
      version: 1,
      lastModified: new Date().toISOString(),
      assignments: {}
    }, null, 2));
  }
}

function isValidFilesPayload(data) {
  if (typeof data !== 'object' || data === null) return false;
  if (data.encrypted) {
    return typeof data.salt === 'string'
        && typeof data.iv === 'string'
        && typeof data.data === 'string';
  }
  return typeof data.assignments === 'object' && data.assignments !== null;
}

function isValidServersPayload(data) {
  if (typeof data !== 'object' || data === null) return false;
  if (data.encrypted) {
    return typeof data.salt === 'string'
        && typeof data.iv === 'string'
        && typeof data.data === 'string';
  }
  return Array.isArray(data.servers);
}

function readData() {
  return JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
}

app.get('/api/data', (req, res) => {
  try {
    res.json(readData());
  } catch (e) {
    res.status(500).json({ error: 'Failed to read data' });
  }
});

function isValidPayload(data) {
  if (typeof data !== 'object' || data === null) return false;
  if (typeof data.version !== 'number') return false;
  if (data.encrypted) {
    return typeof data.salt === 'string'
        && typeof data.iv === 'string'
        && typeof data.data === 'string';
  }
  return Array.isArray(data.clients);
}

app.post('/api/data', (req, res) => {
  if (!isValidPayload(req.body)) return res.status(400).json({ error: 'Invalid payload' });
  try {
    const data = req.body;
    data.version = (data.version || 0) + 1;
    data.lastModified = new Date().toISOString();
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
    res.json({ success: true, version: data.version });
  } catch (e) {
    res.status(500).json({ error: 'Failed to save data' });
  }
});

app.get('/api/export', (req, res) => {
  try {
    const data = readData();
    const filename = `credentials_v${data.version}.json`;
    res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(data, null, 2));
  } catch (e) {
    res.status(500).json({ error: 'Failed to export' });
  }
});

app.get('/api/servers', (req, res) => {
  try {
    ensureServersFile();
    res.json(JSON.parse(fs.readFileSync(SERVERS_FILE, 'utf8')));
  } catch (e) {
    res.status(500).json({ error: 'Failed to read servers' });
  }
});

app.post('/api/servers', (req, res) => {
  if (!isValidServersPayload(req.body)) return res.status(400).json({ error: 'Invalid payload' });
  try {
    fs.writeFileSync(SERVERS_FILE, JSON.stringify(req.body, null, 2));
    res.json({ success: true });
  } catch (e) {
    res.status(500).json({ error: 'Failed to save servers' });
  }
});

app.get('/api/files', (req, res) => {
  try {
    ensureFilesDir();
    ensureFilesFile();
    const diskFiles = fs.readdirSync(FILES_DIR)
      .filter(f => fs.statSync(path.join(FILES_DIR, f)).isFile());
    const assignments = JSON.parse(fs.readFileSync(FILES_FILE, 'utf8'));
    res.json({ diskFiles, assignments });
  } catch (e) {
    res.status(500).json({ error: 'Failed to read files' });
  }
});

app.post('/api/files', (req, res) => {
  if (!isValidFilesPayload(req.body)) return res.status(400).json({ error: 'Invalid payload' });
  try {
    const data = req.body;
    data.version = (data.version || 0) + 1;
    data.lastModified = new Date().toISOString();
    fs.writeFileSync(FILES_FILE, JSON.stringify(data, null, 2));
    res.json({ success: true, version: data.version });
  } catch (e) {
    res.status(500).json({ error: 'Failed to save files' });
  }
});

app.post('/api/clipboard', (req, res) => {
  const { filename } = req.body;

  if (typeof filename !== 'string' || !filename.trim()) {
    return res.status(400).json({ error: 'Invalid filename' });
  }
  if (filename.includes('/') || filename.includes('\\') || filename.includes('..')) {
    return res.status(400).json({ error: 'Invalid filename' });
  }

  const filePath = path.resolve(path.join(FILES_DIR, filename));

  if (!filePath.startsWith(path.resolve(FILES_DIR) + path.sep)) {
    return res.status(400).json({ error: 'Invalid filename' });
  }
  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ error: 'File not found' });
  }

  // PowerShell single-quote escape: '' replaces '
  const escaped = filePath.replace(/'/g, "''");
  exec(
    `powershell.exe -NonInteractive -Command "Set-Clipboard -Path '${escaped}'"`,
    (err) => {
      if (err) return res.status(500).json({ error: 'Clipboard write failed' });
      res.json({ success: true });
    }
  );
});

app.post('/api/import/confirm', (req, res) => {
  if (!isValidPayload(req.body)) return res.status(400).json({ error: 'Invalid payload' });
  try {
    const incoming = req.body;
    fs.writeFileSync(DATA_FILE, JSON.stringify(incoming, null, 2));
    res.json({ success: true });
  } catch (e) {
    res.status(500).json({ error: 'Failed to import' });
  }
});

ensureDataFile();
ensureServersFile();
ensureFilesDir();
ensureFilesFile();
app.listen(PORT, () => {
  console.log(`Credential Dashboard running at http://localhost:${PORT}`);
  resetIdleTimer();
});
