const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const DATA_FILE = path.join(__dirname, 'data', 'credentials.json');
const SERVERS_FILE = path.join(__dirname, 'data', 'servers.json');
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
app.listen(PORT, () => {
  console.log(`Credential Dashboard running at http://localhost:${PORT}`);
  resetIdleTimer();
});
