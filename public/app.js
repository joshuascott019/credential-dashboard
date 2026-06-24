// ---- Translations ----
const LANGS = {
  en: {
    locale: 'en-US',
    langLabel: 'Language',
    appTitle: 'Credentials',
    btnPrint: 'Print',
    btnExport: 'Export',
    btnImport: 'Import',
    sidebarClients: 'Clients',
    noClientsYet: 'No clients yet',
    selectClientHint: 'Select a client to view credentials',
    noLocations: 'No locations',
    headquarters: 'Headquarters',
    branch: 'Branch',
    btnEdit: 'Edit',
    btnPrintClient: 'Print',
    btnCopyClient: 'Copy',
    toastCopied: 'Copied',
    certPassword: 'Cert Password',
    certNone: 'none',
    btnOldPasswords: (n) => `Old Passwords (${n})`,
    labelCurrent: 'Current:',
    labelPreviously: 'Previously:',
    credUser: 'user',
    credPass: 'pass',
    sectionUsers: 'Users',
    addUserBtn: '+ Add User',
    noUsersYet: 'No users yet',
    modalAddClient: 'Add Client',
    modalRenameClient: 'Rename Client',
    modalAddLocation: 'Add Location',
    modalRenameLocation: 'Rename Location',
    modalEditCert: 'Edit Cert Password',
    modalAddUser: 'Add User',
    modalEditUser: 'Edit User',
    labelClientName: 'Client Name',
    labelLocationName: 'Location Name',
    labelCertCurrent: 'Current',
    labelCertNew: 'Cert Password',
    labelCertLeaveBlank: '<small>(leave blank to keep current)</small>',
    labelCertHistory: 'Cert Password History',
    labelUsername: 'Username',
    labelPassword: 'Password',
    labelCurrentPass: 'Current Password',
    labelNewPass: 'New Password',
    labelNewPassHint: '<small>(leave blank to keep current)</small>',
    labelPassHistory: 'Password History',
    phClientName: 'e.g. Acme Corp',
    phLocationName: 'e.g. Store 2, Downtown',
    phCertPass: 'Certificate password',
    phUsername: 'e.g. john.doe',
    phPassword: 'Password',
    phNewPassword: 'Enter new password to change',
    btnCancel: 'Cancel',
    btnSave: 'Save',
    toastSaved: 'Saved',
    toastCopyFailed: 'Copy failed',
    toastImportOk: 'Import successful',
    toastImportFail: 'Import failed',
    toastReadFail: 'Failed to read file',
    toastInvalidFile: 'Invalid credentials file',
    toastNameRequired: 'Name is required',
    toastUsernameRequired: 'Username is required',
    toastPasswordRequired: 'Password is required',
    confirmDeleteClient: (name) => `Delete "${name}" and all its data?`,
    confirmDeleteLocation: (name) =>
      `Delete location "${name}" and all its users?`,
    confirmDeleteUser: (name) => `Delete user "${name}"?`,
    confirmImportNewer: (iv, cv) =>
      `Incoming file is newer (v${iv}) than your data (v${cv}).\n\nReplace your data?`,
    confirmImportOlder: (iv, cv) =>
      `Warning: Incoming file is OLDER (v${iv}) than your data (v${cv}).\n\nReplace anyway?`,
    confirmImportSame: (cv) =>
      `Both files are version v${cv}.\n\nReplace your data?`,
    txtTitle: 'CREDENTIAL DASHBOARD',
    txtExported: 'Exported:',
    txtVersion: 'Version:',
    txtCertLabel: 'Cert PW:',
    txtCertHistLabel: 'Old Cert PW:',
    txtUsersNone: 'Users: (none)',
    txtUsersLabel: 'Users:',
    txtNone: '(none)',
    txtPasswordLabel: 'PW:',
    txtPrevLabel: 'Old PW:',
    txtEnd: 'End of export',
    exportAllFilename: (v) => `all_credentials_v${v}.txt`,
    exportClientFilename: (name) => `${name}_credentials.txt`,
    passphraseUnlockTitle: 'Enter Passphrase',
    passphraseUnlockHint: 'Enter your master passphrase to unlock.',
    passphraseSetupTitle: 'Set Up Encryption',
    passphraseSetupHint: 'Your data is not yet encrypted. Set a master passphrase to secure it. Keep this passphrase safe — if lost, your data cannot be recovered.',
    passphraseLabel: 'Passphrase',
    passphraseConfirmLabel: 'Confirm Passphrase',
    passphrasePlaceholder: 'Enter passphrase',
    passphraseConfirmPlaceholder: 'Confirm passphrase',
    btnUnlock: 'Unlock',
    btnSetupEncryption: 'Encrypt & Continue',
    passphraseWrong: 'Incorrect passphrase.',
    passphraseEmpty: 'Passphrase cannot be empty.',
    passphraseMismatch: 'Passphrases do not match.',
    toastImportDecryptFail: 'Could not decrypt file. Wrong passphrase?',
    importPassphraseTitle: 'Enter File Passphrase',
    importPassphraseHint: 'This file was encrypted with a different passphrase. Enter the passphrase used to encrypt it.',
    adminConfirmTitle: 'Enter Admin Mode',
    adminConfirmBody: 'You are about to enter admin mode. In this mode you can add, edit, and delete clients, locations, users, and credentials. Only proceed if you intend to make changes.',
    btnEnterAdmin: 'Enter Admin Mode',
    btnPwVisible: 'Visible',
    btnPwHidden: 'Hidden',
    noCertsYet: 'No certs',
    addCertBtn: '+ Add Cert',
    modalAddCert: 'Add Cert',
    modalEditCert2: 'Edit Cert',
    labelCertLabel: 'Cert Label',
    phCertLabel: 'e.g. Main, Admin, VPN',
    confirmDeleteCert: (label) => `Delete cert "${label}"?`,
    btnSortNone: '↕',
    btnSortAsc: 'A–Z',
    btnSortDesc: 'Z–A',
  },
  'pt-br': {
    locale: 'pt-BR',
    langLabel: 'Idioma',
    appTitle: 'Credenciais',
    btnPrint: 'Imprimir',
    btnExport: 'Exportar',
    btnImport: 'Importar',
    sidebarClients: 'Clientes',
    noClientsYet: 'Nenhum cliente ainda',
    selectClientHint: 'Selecione um cliente para ver as credenciais',
    noLocations: 'Nenhuma localização',
    headquarters: 'Matriz',
    branch: 'Filial',
    btnEdit: 'Editar',
    btnPrintClient: 'Imprimir',
    btnCopyClient: 'Copiar',
    toastCopied: 'Copiado',
    certPassword: 'Senha do Cert.',
    certNone: 'nenhuma',
    btnOldPasswords: (n) => `Senhas Antigas (${n})`,
    labelCurrent: 'Atual:',
    labelPreviously: 'Anterior:',
    credUser: 'usu.',
    credPass: 'senha',
    sectionUsers: 'Usuários',
    addUserBtn: '+ Adicionar Usuário',
    noUsersYet: 'Nenhum usuário ainda',
    modalAddClient: 'Adicionar Cliente',
    modalRenameClient: 'Renomear Cliente',
    modalAddLocation: 'Adicionar Localização',
    modalRenameLocation: 'Renomear Localização',
    modalEditCert: 'Editar Senha do Certificado',
    modalAddUser: 'Adicionar Usuário',
    modalEditUser: 'Editar Usuário',
    labelClientName: 'Nome do Cliente',
    labelLocationName: 'Nome da Localização',
    labelCertCurrent: 'Atual',
    labelCertNew: 'Senha do Certificado',
    labelCertLeaveBlank: '<small>(deixe em branco para manter a atual)</small>',
    labelCertHistory: 'Histórico de Senha do Cert.',
    labelUsername: 'Usuário',
    labelPassword: 'Senha',
    labelCurrentPass: 'Senha Atual',
    labelNewPass: 'Nova Senha',
    labelNewPassHint: '<small>(deixe em branco para manter a atual)</small>',
    labelPassHistory: 'Histórico de Senhas',
    phClientName: 'Ex: Empresa XYZ',
    phLocationName: 'Ex: Loja 2, Centro',
    phCertPass: 'Senha do certificado',
    phUsername: 'Ex: joao.silva',
    phPassword: 'Senha',
    phNewPassword: 'Digite a nova senha para alterar',
    btnCancel: 'Cancelar',
    btnSave: 'Salvar',
    toastSaved: 'Salvo',
    toastCopyFailed: 'Falha ao copiar',
    toastImportOk: 'Importação bem-sucedida',
    toastImportFail: 'Falha na importação',
    toastReadFail: 'Falha ao ler o arquivo',
    toastInvalidFile: 'Arquivo de credenciais inválido',
    toastNameRequired: 'Nome é obrigatório',
    toastUsernameRequired: 'Usuário é obrigatório',
    toastPasswordRequired: 'Senha é obrigatória',
    confirmDeleteClient: (name) => `Excluir "${name}" e todos os seus dados?`,
    confirmDeleteLocation: (name) =>
      `Excluir a localização "${name}" e todos os seus usuários?`,
    confirmDeleteUser: (name) => `Excluir o usuário "${name}"?`,
    confirmImportNewer: (iv, cv) =>
      `O arquivo recebido é mais recente (v${iv}) que seus dados (v${cv}).\n\nSubstituir seus dados?`,
    confirmImportOlder: (iv, cv) =>
      `Atenção: O arquivo é MAIS ANTIGO (v${iv}) que seus dados (v${cv}).\n\nSubstituir mesmo assim?`,
    confirmImportSame: (cv) =>
      `Os dois arquivos são a versão v${cv}.\n\nSubstituir seus dados?`,
    txtTitle: 'PAINEL DE CREDENCIAIS',
    txtExported: 'Exportado em:',
    txtVersion: 'Versão:',
    txtCertLabel: 'Cert.:',
    txtCertHistLabel: 'Cert. Antigas:',
    txtUsersNone: 'Usuários: (nenhum)',
    txtUsersLabel: 'Usuários:',
    txtNone: '(nenhum)',
    txtPasswordLabel: 'Senha:',
    txtPrevLabel: 'Senhas Antigas:',
    txtEnd: 'Fim da exportação',
    exportAllFilename: (v) => `todas_credenciais_v${v}.txt`,
    exportClientFilename: (name) => `${name}_credenciais.txt`,
    passphraseUnlockTitle: 'Digite a Senha Mestra',
    passphraseUnlockHint: 'Digite sua senha mestra para desbloquear o aplicativo.',
    passphraseSetupTitle: 'Configurar Criptografia',
    passphraseSetupHint: 'Seus dados ainda não estão criptografados. Defina uma senha mestra para protegê-los. Guarde bem essa senha — se perdida, os dados não poderão ser recuperados.',
    passphraseLabel: 'Senha Mestra',
    passphraseConfirmLabel: 'Confirmar Senha',
    passphrasePlaceholder: 'Digite a senha mestra',
    passphraseConfirmPlaceholder: 'Confirme a senha mestra',
    btnUnlock: 'Desbloquear',
    btnSetupEncryption: 'Criptografar e Continuar',
    passphraseWrong: 'Senha incorreta.',
    passphraseEmpty: 'A senha não pode ser vazia.',
    passphraseMismatch: 'As senhas não coincidem.',
    toastImportDecryptFail: 'Não foi possível descriptografar o arquivo. Senha incorreta?',
    importPassphraseTitle: 'Digite a Senha do Arquivo',
    importPassphraseHint: 'Este arquivo foi criptografado com uma senha diferente. Digite a senha usada para criptografá-lo.',
    adminConfirmTitle: 'Entrar no Modo Admin',
    adminConfirmBody: 'Você está prestes a entrar no modo administrador. Neste modo é possível adicionar, editar e excluir clientes, locais, usuários e credenciais. Prossiga somente se quiser fazer alterações.',
    btnEnterAdmin: 'Entrar no Modo Admin',
    btnPwVisible: 'Visível',
    btnPwHidden: 'Oculto',
    noCertsYet: 'Nenhum cert.',
    addCertBtn: '+ Adicionar Cert.',
    modalAddCert: 'Adicionar Certificado',
    modalEditCert2: 'Editar Certificado',
    labelCertLabel: 'Rótulo do Cert.',
    phCertLabel: 'Ex: Principal, Admin, VPN',
    confirmDeleteCert: (label) => `Excluir certificado "${label}"?`,
    btnSortNone: '↕',
    btnSortAsc: 'A–Z',
    btnSortDesc: 'Z–A',
  },
};

// ---- State ----
let appData = null;
let selectedClientId = null;
let selectedLocationId = null;
let currentLang = 'pt-br';
let t = LANGS['pt-br'];
let isAdminMode = false;
let passwordsVisible = true;
let lastCopied = null;
let clientSort = null; // null | 'asc' | 'desc'
let userSort = null;   // null | 'asc' | 'desc'
let cryptoKey = null;
let cryptoSalt = null;
let masterPassphrase = null;

// ---- Language ----

function initLanguage() {
  const saved = localStorage.getItem('cred-dash-lang');
  if (saved && LANGS[saved]) {
    currentLang = saved;
  } else {
    const sys = (navigator.language || '').toLowerCase();
    currentLang = sys.startsWith('en') ? 'en' : 'pt-br';
  }
  t = LANGS[currentLang];
}

function setLanguage(lang) {
  if (!LANGS[lang]) return;
  currentLang = lang;
  t = LANGS[lang];
  localStorage.setItem('cred-dash-lang', lang);
  applyStaticText();
  render();
}

function applyStaticText() {
  document.getElementById('app-title').textContent = t.appTitle;
  document.getElementById('export-txt-btn').textContent = t.btnPrint;
  document.getElementById('export-btn').textContent = t.btnExport;
  document.getElementById('import-btn').textContent = t.btnImport;
  const langSelect = document.getElementById('lang-select');
  langSelect.options[0].textContent = t.langLabel;
  langSelect.value = '';
  document.getElementById('clients-label').textContent = t.sidebarClients;
  document.getElementById('pw-toggle-btn').textContent = passwordsVisible ? t.btnPwVisible : t.btnPwHidden;
}

// ---- Utilities ----

function generateId() {
  return crypto.randomUUID();
}

function escapeHtml(str) {
  if (str === null || str === undefined) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

async function copyToClipboard(text, button) {
  try {
    await navigator.clipboard.writeText(text);
    const orig = button.textContent;
    button.textContent = '✓';
    button.disabled = true;
    setTimeout(() => {
      button.textContent = orig;
      button.disabled = false;
    }, 1500);
  } catch {
    showToast(t.toastCopyFailed, 'error');
  }
}

function setLastCopied(key) {
  lastCopied = key;
  document.querySelectorAll('.copy-highlight').forEach((el) => el.classList.remove('copy-highlight'));
  const el = document.querySelector(`[data-copy-key="${key}"]`);
  if (el) el.classList.add('copy-highlight');
}

function showToast(message, type = 'success') {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.className = `show ${type}`;
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => {
    toast.className = '';
  }, 2500);
}

// ---- Modal ----

function showModal(title, bodyHTML, onConfirm, confirmLabel) {
  const overlay = document.getElementById('modal-overlay');
  document.getElementById('modal-title').textContent = title;
  document.getElementById('modal-body').innerHTML = bodyHTML;
  overlay.classList.remove('hidden');

  const oldConfirm = document.getElementById('modal-confirm');
  const oldCancel = document.getElementById('modal-cancel');
  const newConfirm = oldConfirm.cloneNode(true);
  const newCancel = oldCancel.cloneNode(true);
  newConfirm.textContent = confirmLabel || t.btnSave;
  newCancel.textContent = t.btnCancel;
  oldConfirm.parentNode.replaceChild(newConfirm, oldConfirm);
  oldCancel.parentNode.replaceChild(newCancel, oldCancel);

  newConfirm.onclick = async () => {
    const result = await onConfirm();
    if (result !== false) closeModal();
  };
  newCancel.onclick = closeModal;

  overlay.onkeydown = (e) => {
    if (e.key === 'Enter') newConfirm.click();
    if (e.key === 'Escape') closeModal();
  };

  setTimeout(() => overlay.querySelector('input')?.focus(), 30);
}

function closeModal() {
  document.getElementById('modal-overlay').classList.add('hidden');
}

// ---- Sidebar toggle ----

function openSidebar() {
  document.getElementById('sidebar').classList.add('open');
  document.getElementById('sidebar-overlay').classList.add('visible');
}

function closeSidebar() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('sidebar-overlay').classList.remove('visible');
}

// ---- Crypto ----

function bufToBase64(buf) {
  let binary = '';
  for (const byte of buf) binary += String.fromCharCode(byte);
  return btoa(binary);
}

function base64ToBuf(b64) {
  return Uint8Array.from(atob(b64), (c) => c.charCodeAt(0));
}

async function deriveKey(passphrase, salt) {
  const enc = new TextEncoder();
  const keyMaterial = await crypto.subtle.importKey(
    'raw',
    enc.encode(passphrase),
    'PBKDF2',
    false,
    ['deriveKey'],
  );
  return crypto.subtle.deriveKey(
    { name: 'PBKDF2', salt, iterations: 200000, hash: 'SHA-256' },
    keyMaterial,
    { name: 'AES-GCM', length: 256 },
    false,
    ['encrypt', 'decrypt'],
  );
}

async function decryptClients(raw, key) {
  const iv = base64ToBuf(raw.iv);
  const data = base64ToBuf(raw.data);
  const plaintext = await crypto.subtle.decrypt({ name: 'AES-GCM', iv }, key, data);
  return new TextDecoder().decode(plaintext);
}

function setFieldError(id, message) {
  const el = document.getElementById(id);
  if (el) { el.textContent = message; el.style.display = 'block'; }
}

function showPassphraseModal(title, bodyHTML, confirmLabel, onConfirm, cancellable = false) {
  return new Promise((resolve) => {
    const overlay = document.getElementById('modal-overlay');
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-body').innerHTML = bodyHTML;
    overlay.classList.remove('hidden');

    const oldConfirm = document.getElementById('modal-confirm');
    const oldCancel = document.getElementById('modal-cancel');
    const newConfirm = oldConfirm.cloneNode(true);
    const newCancel = oldCancel.cloneNode(true);
    newConfirm.textContent = confirmLabel;
    if (cancellable) {
      newCancel.textContent = t.btnCancel;
      newCancel.onclick = () => { closeModal(); resolve(false); };
    } else {
      newCancel.style.display = 'none';
    }
    oldConfirm.parentNode.replaceChild(newConfirm, oldConfirm);
    oldCancel.parentNode.replaceChild(newCancel, oldCancel);

    overlay.onclick = null;
    overlay.onkeydown = (e) => {
      if (e.key === 'Enter') newConfirm.click();
      if (e.key === 'Escape' && cancellable) { closeModal(); resolve(false); }
    };

    newConfirm.onclick = async () => {
      const result = await onConfirm();
      if (result !== false) { closeModal(); resolve(true); }
    };

    setTimeout(() => overlay.querySelector('input')?.focus(), 30);
  });
}

async function unlockAndLoadData() {
  const res = await fetch('/api/data');
  const raw = await res.json();

  if (raw.encrypted) {
    let decryptedClients = null;
    await showPassphraseModal(
      t.passphraseUnlockTitle,
      `<p class="passphrase-hint">${t.passphraseUnlockHint}</p>
       <div class="form-group">
         <label>${t.passphraseLabel}</label>
         <input type="password" id="f-pass" placeholder="${t.passphrasePlaceholder}" autocomplete="current-password">
         <p id="f-pass-err" class="field-error" style="display:none"></p>
       </div>`,
      t.btnUnlock,
      async () => {
        const pass = document.getElementById('f-pass').value;
        if (!pass) { setFieldError('f-pass-err', t.passphraseEmpty); return false; }
        try {
          const salt = base64ToBuf(raw.salt);
          const key = await deriveKey(pass, salt);
          const plaintext = await decryptClients(raw, key);
          decryptedClients = JSON.parse(plaintext);
          cryptoSalt = salt;
          cryptoKey = key;
          masterPassphrase = pass;
        } catch {
          setFieldError('f-pass-err', t.passphraseWrong);
          return false;
        }
      },
    );
    appData = {
      version: raw.version,
      lastModified: raw.lastModified || new Date().toISOString(),
      clients: decryptedClients,
    };
  } else {
    await showPassphraseModal(
      t.passphraseSetupTitle,
      `<p class="passphrase-hint">${t.passphraseSetupHint}</p>
       <div class="form-group">
         <label>${t.passphraseLabel}</label>
         <input type="password" id="f-pass" placeholder="${t.passphrasePlaceholder}" autocomplete="new-password">
       </div>
       <div class="form-group">
         <label>${t.passphraseConfirmLabel}</label>
         <input type="password" id="f-pass-confirm" placeholder="${t.passphraseConfirmPlaceholder}" autocomplete="new-password">
         <p id="f-pass-err" class="field-error" style="display:none"></p>
       </div>`,
      t.btnSetupEncryption,
      async () => {
        const pass = document.getElementById('f-pass').value;
        const confirm = document.getElementById('f-pass-confirm').value;
        if (!pass) { setFieldError('f-pass-err', t.passphraseEmpty); return false; }
        if (pass !== confirm) { setFieldError('f-pass-err', t.passphraseMismatch); return false; }
        cryptoSalt = crypto.getRandomValues(new Uint8Array(16));
        cryptoKey = await deriveKey(pass, cryptoSalt);
        masterPassphrase = pass;
      },
    );
    appData = {
      version: raw.version || 1,
      lastModified: raw.lastModified || new Date().toISOString(),
      clients: raw.clients || [],
    };
  }

  let needsMigration = false;
  appData.clients.forEach((client) => {
    client.locations.forEach((loc) => {
      if (!loc.certs) {
        needsMigration = true;
        loc.certs = (loc.certPassword || loc.certPasswordHistory?.length)
          ? [{ id: generateId(), label: 'Cert', password: loc.certPassword || '', history: loc.certPasswordHistory || [] }]
          : [];
        delete loc.certPassword;
        delete loc.certPasswordHistory;
      }
    });
  });

  if (!raw.encrypted || needsMigration) await saveData();
}

// ---- Admin mode ----

function applyAdminMode() {
  document.getElementById('app').classList.toggle('admin-mode', isAdminMode);
  document.getElementById('admin-btn').classList.toggle('active', isAdminMode);
}

function enterAdminMode() {
  showModal(
    t.adminConfirmTitle,
    `<p style="font-size:13px;line-height:1.7;color:var(--text-muted);margin-bottom:14px">${t.adminConfirmBody}</p>
     <div class="form-group">
       <label>${t.passphraseLabel}</label>
       <input type="password" id="f-admin-pass" placeholder="${t.passphrasePlaceholder}" autocomplete="current-password">
       <p id="f-admin-pass-err" class="field-error" style="display:none"></p>
     </div>`,
    async () => {
      const pass = document.getElementById('f-admin-pass').value;
      if (pass !== masterPassphrase) {
        setFieldError('f-admin-pass-err', t.passphraseWrong);
        return false;
      }
      isAdminMode = true;
      applyAdminMode();
    },
    t.btnEnterAdmin,
  );
}

function exitAdminMode() {
  isAdminMode = false;
  applyAdminMode();
}

// ---- API ----

async function saveData() {
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const ciphertext = await crypto.subtle.encrypt(
    { name: 'AES-GCM', iv },
    cryptoKey,
    new TextEncoder().encode(JSON.stringify(appData.clients)),
  );
  const payload = {
    version: appData.version,
    encrypted: true,
    salt: bufToBase64(cryptoSalt),
    iv: bufToBase64(iv),
    data: bufToBase64(new Uint8Array(ciphertext)),
  };
  const res = await fetch('/api/data', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  const result = await res.json();
  appData.version = result.version;
  updateVersionBadge();
  showToast(t.toastSaved);
}

// ---- Render ----

function render() {
  renderClientList();
  renderMainPanel();
  updateVersionBadge();
}

function formatVersion() {
  const clients = appData.clients.length;
  const locations = appData.clients.reduce((s, c) => s + c.locations.length, 0);
  const users = appData.clients.reduce((s, c) => s + c.locations.reduce((ls, l) => ls + l.users.length, 0), 0);
  return `${clients}-${locations}-${users}.${appData.version}`;
}

function updateVersionBadge() {
  document.getElementById('version-badge').textContent = formatVersion();
}

function renderClientList() {
  const list = document.getElementById('client-list');

  const btn = document.getElementById('client-sort-btn');
  if (btn) {
    btn.textContent = clientSort === 'asc' ? t.btnSortAsc : clientSort === 'desc' ? t.btnSortDesc : t.btnSortNone;
    btn.classList.toggle('active', clientSort !== null);
  }

  if (!appData.clients.length) {
    list.innerHTML = `<p class="list-empty" style="padding:10px 14px">${t.noClientsYet}</p>`;
    return;
  }

  let clients = [...appData.clients];
  if (clientSort === 'asc') clients.sort((a, b) => a.name.localeCompare(b.name, t.locale));
  else if (clientSort === 'desc') clients.sort((a, b) => b.name.localeCompare(a.name, t.locale));

  list.innerHTML = clients
    .map((c) => `
    <div class="client-item ${c.id === selectedClientId ? 'active' : ''}" data-client-id="${c.id}">
      ${escapeHtml(c.name)}
    </div>
  `)
    .join('');
  list.querySelectorAll('.client-item').forEach((item) => {
    item.onclick = () => selectClient(item.dataset.clientId);
  });
}

function selectClient(id) {
  selectedClientId = id;
  const client = appData.clients.find((c) => c.id === id);
  selectedLocationId = client?.locations[0]?.id || null;
  closeSidebar();
  render();
}

function renderMainPanel() {
  const panel = document.getElementById('main-panel');

  if (!selectedClientId) {
    panel.innerHTML = `<p class="placeholder">${t.selectClientHint}</p>`;
    return;
  }

  const client = appData.clients.find((c) => c.id === selectedClientId);
  if (!client) {
    selectedClientId = null;
    panel.innerHTML = `<p class="placeholder">${t.selectClientHint}</p>`;
    return;
  }

  let location = client.locations.find((l) => l.id === selectedLocationId);
  if (!location && client.locations.length) {
    location = client.locations[0];
    selectedLocationId = location.id;
  }

  panel.innerHTML = `
    <div class="client-header">
      <h2>${escapeHtml(client.name)}</h2>
      <div class="client-actions">
        <button class="btn-sm admin-only" id="rename-client-btn">${t.btnEdit}</button>
        <button class="btn-secondary" id="export-client-txt-btn">${t.btnPrintClient}</button>
        <button class="btn-secondary" id="copy-client-btn">${t.btnCopyClient}</button>
        <button class="btn-danger admin-only" id="delete-client-btn">✕</button>
      </div>
    </div>

    <div class="location-tabs">
      ${client.locations
        .map(
          (loc) => `
        <button class="tab-btn ${loc.id === selectedLocationId ? 'active' : ''}" data-location-id="${loc.id}">
          ${escapeHtml(loc.name)}
        </button>
      `,
        )
        .join('')}
      <button class="tab-btn add-location-btn admin-only" id="add-location-btn">+</button>
    </div>

    ${location ? renderLocationHTML(client, location) : `<p class="placeholder" style="margin-top:32px">${t.noLocations}</p>`}
  `;

  document.getElementById('rename-client-btn').onclick = () =>
    renameClient(client.id);
  document.getElementById('export-client-txt-btn').onclick = () =>
    exportTxt(client.id);
  document.getElementById('copy-client-btn').onclick = () =>
    copyClientData(client.id);
  document.getElementById('delete-client-btn').onclick = () =>
    deleteClient(client.id);
  document.getElementById('add-location-btn').onclick = () =>
    addLocation(client.id);

  panel.querySelectorAll('.tab-btn[data-location-id]').forEach((btn) => {
    btn.onclick = () => {
      selectedLocationId = btn.dataset.locationId;
      renderMainPanel();
    };
  });

  if (location) bindLocationActions(client, location);
}

function renderCertRowHTML(cert) {
  const histCount = cert.history?.length || 0;
  return `
    <div class="cert-entry">
      <div class="cert-row${lastCopied === `cert-${cert.id}` ? ' copy-highlight' : ''}" data-copy-key="cert-${cert.id}">
        <span class="field-label">${escapeHtml(cert.label)}</span>
        <span class="field-masked">${cert.password ? (passwordsVisible ? escapeHtml(cert.password) : '••••••••') : `<em>${t.certNone}</em>`}</span>
        <button class="btn-copy copy-cert-btn" data-cert-id="${cert.id}" ${!cert.password ? 'disabled' : ''}>⧉</button>
        <button class="btn-sm admin-only edit-cert-btn" data-cert-id="${cert.id}">${t.btnEdit}</button>
        <button class="btn-danger-sm admin-only delete-cert-btn" data-cert-id="${cert.id}">✕</button>
        <button class="btn-sm toggle-cert-hist-btn" data-cert-id="${cert.id}">${t.btnOldPasswords(histCount)}</button>
      </div>
      <div class="cert-history hidden" id="cert-history-${cert.id}">
        <div class="history-row">
          <span class="history-row-label">${t.labelCurrent}</span>
          <span class="history-value">${cert.password ? (passwordsVisible ? escapeHtml(cert.password) : '••••••••') : `<em style="color:var(--text-muted)">${t.certNone}</em>`}</span>
          ${cert.password ? `<button class="btn-copy copy-cert-current-btn" data-cert-id="${cert.id}">⧉</button>` : ''}
        </div>
        ${histCount ? `
          <div class="history-prev-list">
            ${cert.history.map((h) => `
              <div class="history-prev-item">
                <span class="history-row-label" style="font-size:11px;color:var(--text-muted)">${t.labelPreviously}</span>
                <span class="history-value">${passwordsVisible ? escapeHtml(h.password) : '••••••••'}</span>
                <button class="btn-copy copy-cert-hist-btn" data-cert-id="${cert.id}" data-password="${escapeHtml(h.password)}">⧉</button>
                <span class="history-date">${new Date(h.changedAt).toLocaleDateString(t.locale)}</span>
              </div>
            `).join('')}
          </div>
        ` : ''}
      </div>
    </div>
  `;
}

function renderLocationHTML(client, location) {
  return `
    <div class="location-content">
      <div class="location-actions-bar">
        <span class="location-label"><strong>${escapeHtml(location.name)}</strong></span>
        <button class="btn-sm admin-only" id="rename-location-btn">${t.btnEdit}</button>
        ${
          client.locations.length > 1
            ? `<button class="btn-danger-sm admin-only" id="delete-location-btn">✕</button>`
            : ''
        }
      </div>

      <div class="cert-section">
        ${location.certs.length === 0 ? `<p class="list-empty">${t.noCertsYet}</p>` : ''}
        ${location.certs.map((cert) => renderCertRowHTML(cert)).join('')}
        <button class="btn-sm admin-only" id="add-cert-btn" style="margin-top:8px">${t.addCertBtn}</button>
      </div>

      <div class="users-section">
        <div class="section-header">
          <h3>${t.sectionUsers}</h3>
          <div class="section-header-actions">
            <button class="btn-sort btn-sm${userSort !== null ? ' active' : ''}" id="user-sort-btn">${userSort === 'asc' ? t.btnSortAsc : userSort === 'desc' ? t.btnSortDesc : t.btnSortNone}</button>
            <button class="btn-primary admin-only" id="add-user-btn">${t.addUserBtn}</button>
          </div>
        </div>
        <div class="users-list" id="users-list">
          ${(() => {
            let users = [...location.users];
            if (userSort === 'asc') users.sort((a, b) => a.username.localeCompare(b.username, t.locale));
            else if (userSort === 'desc') users.sort((a, b) => b.username.localeCompare(a.username, t.locale));
            return users.length
              ? users.map((user) => renderUserRowHTML(user)).join('')
              : `<p class="list-empty">${t.noUsersYet}</p>`;
          })()}
        </div>
      </div>
    </div>
  `;
}

function renderUserRowHTML(user) {
  const histCount = user.passwordHistory.length;
  return `
    <div class="user-row" data-user-id="${user.id}">
      <div class="user-card">
        <div class="user-creds">
          <div class="user-cred-item${lastCopied === `user-${user.id}-username` ? ' copy-highlight' : ''}" data-copy-key="user-${user.id}-username">
            <span class="cred-label">${t.credUser}</span>
            <span class="cred-value">${escapeHtml(user.username)}</span>
            <button class="btn-copy copy-username-btn" title="${t.labelUsername}">⧉</button>
          </div>
          <div class="user-cred-item${lastCopied === `user-${user.id}-password` ? ' copy-highlight' : ''}" data-copy-key="user-${user.id}-password">
            <span class="cred-label">${t.credPass}</span>
            <span class="cred-value">${passwordsVisible ? escapeHtml(user.currentPassword) : '••••••••'}</span>
            <button class="btn-copy copy-password-btn" title="${t.labelPassword}">⧉</button>
          </div>
        </div>
        <div class="user-corner-actions">
          <button class="btn-sm edit-user-btn admin-only">${t.btnEdit}</button>
          <button class="btn-danger-sm delete-user-btn admin-only">✕</button>
        </div>
        ${
          histCount
            ? `
        <div class="user-card-footer">
          <button class="btn-disclosure toggle-history-btn">${t.btnOldPasswords(histCount)}</button>
        </div>`
            : ''
        }
      </div>
      <div class="user-history hidden" id="history-${user.id}">
        <div class="history-row">
          <span class="history-row-label">${t.labelCurrent}</span>
          <span class="history-value">${passwordsVisible ? escapeHtml(user.currentPassword) : '••••••••'}</span>
          <button class="btn-copy copy-history-btn" data-password="${escapeHtml(user.currentPassword)}">⧉</button>
        </div>
        ${
          histCount
            ? `
          <div class="history-prev-list">
            ${user.passwordHistory
              .map(
                (h) => `
              <div class="history-prev-item">
                <span class="history-row-label" style="font-size:11px;color:var(--text-muted)">${t.labelPreviously}</span>
                <span class="history-value">${passwordsVisible ? escapeHtml(h.password) : '••••••••'}</span>
                <button class="btn-copy copy-history-btn" data-password="${escapeHtml(h.password)}">⧉</button>
                <span class="history-date">${new Date(h.changedAt).toLocaleDateString(t.locale)}</span>
              </div>
            `,
              )
              .join('')}
          </div>
        `
            : ''
        }
      </div>
    </div>
  `;
}

function bindLocationActions(client, location) {
  document.getElementById('rename-location-btn').onclick = () =>
    renameLocation(client.id, location.id);

  const delLocBtn = document.getElementById('delete-location-btn');
  if (delLocBtn)
    delLocBtn.onclick = () => deleteLocation(client.id, location.id);

  document.getElementById('add-cert-btn').onclick = () =>
    addCert(client.id, location.id);

  document.querySelector('.cert-section').addEventListener('click', (e) => {
    const certId = e.target.dataset.certId;
    if (!certId) return;
    const cert = location.certs.find((c) => c.id === certId);
    if (e.target.classList.contains('copy-cert-btn') || e.target.classList.contains('copy-cert-current-btn')) {
      if (cert) { setLastCopied(`cert-${certId}`); copyToClipboard(cert.password, e.target); }
    } else if (e.target.classList.contains('copy-cert-hist-btn')) {
      setLastCopied(`cert-${certId}`);
      copyToClipboard(e.target.dataset.password, e.target);
    } else if (e.target.classList.contains('edit-cert-btn')) {
      editCert(client.id, location.id, certId);
    } else if (e.target.classList.contains('delete-cert-btn')) {
      deleteCert(client.id, location.id, certId);
    } else if (e.target.classList.contains('toggle-cert-hist-btn')) {
      document.getElementById(`cert-history-${certId}`).classList.toggle('hidden');
      e.target.classList.toggle('open');
    }
  });

  document.getElementById('user-sort-btn').onclick = () => {
    userSort = userSort === null ? 'asc' : userSort === 'asc' ? 'desc' : null;
    renderMainPanel();
  };

  document.getElementById('add-user-btn').onclick = () =>
    addUser(client.id, location.id);

  document.getElementById('users-list').addEventListener('click', (e) => {
    const row = e.target.closest('.user-row');
    if (!row) return;
    const user = location.users.find((u) => u.id === row.dataset.userId);
    if (!user) return;

    if (e.target.classList.contains('copy-username-btn')) {
      setLastCopied(`user-${user.id}-username`);
      copyToClipboard(user.username, e.target);
    } else if (e.target.classList.contains('copy-password-btn')) {
      setLastCopied(`user-${user.id}-password`);
      copyToClipboard(user.currentPassword, e.target);
    } else if (e.target.classList.contains('toggle-history-btn')) {
      document.getElementById(`history-${user.id}`).classList.toggle('hidden');
      e.target.classList.toggle('open');
    } else if (e.target.classList.contains('edit-user-btn')) {
      editUser(client.id, location.id, user.id);
    } else if (e.target.classList.contains('delete-user-btn')) {
      deleteUser(client.id, location.id, user.id);
    } else if (e.target.classList.contains('copy-history-btn')) {
      setLastCopied(`user-${user.id}-password`);
      copyToClipboard(e.target.dataset.password, e.target);
    }
  });
}

// ---- Client CRUD ----

function addClient() {
  showModal(
    t.modalAddClient,
    `
    <div class="form-group">
      <label>${t.labelClientName}</label>
      <input type="text" id="f-name" placeholder="${t.phClientName}" autocomplete="off">
    </div>
  `,
    () => {
      const name = document.getElementById('f-name').value.trim();
      if (!name) {
        showToast(t.toastNameRequired, 'error');
        return false;
      }
      const client = {
        id: generateId(),
        name,
        locations: [
          {
            id: generateId(),
            name: t.headquarters,
            certs: [],
            users: [],
          },
        ],
      };
      appData.clients.push(client);
      selectedClientId = client.id;
      selectedLocationId = client.locations[0].id;
      saveData();
      render();
    },
  );
}

function renameClient(clientId) {
  const client = appData.clients.find((c) => c.id === clientId);
  showModal(
    t.modalRenameClient,
    `
    <div class="form-group">
      <label>${t.labelClientName}</label>
      <input type="text" id="f-name" value="${escapeHtml(client.name)}" autocomplete="off">
    </div>
  `,
    () => {
      const name = document.getElementById('f-name').value.trim();
      if (!name) {
        showToast(t.toastNameRequired, 'error');
        return false;
      }
      client.name = name;
      saveData();
      render();
    },
  );
}

function deleteClient(clientId) {
  const client = appData.clients.find((c) => c.id === clientId);
  if (!confirm(t.confirmDeleteClient(client.name))) return;
  appData.clients = appData.clients.filter((c) => c.id !== clientId);
  selectedClientId = null;
  selectedLocationId = null;
  saveData();
  render();
}

// ---- Location CRUD ----

function addLocation(clientId) {
  const client = appData.clients.find((c) => c.id === clientId);
  showModal(
    t.modalAddLocation,
    `
    <div class="form-group">
      <label>${t.labelLocationName}</label>
      <input type="text" id="f-name" placeholder="${t.phLocationName}" autocomplete="off">
    </div>
  `,
    () => {
      const name = document.getElementById('f-name').value.trim();
      if (!name) {
        showToast(t.toastNameRequired, 'error');
        return false;
      }
      const loc = {
        id: generateId(),
        name,
        certs: [],
        users: [],
      };
      client.locations.push(loc);
      selectedLocationId = loc.id;
      saveData();
      renderMainPanel();
    },
  );
}

function renameLocation(clientId, locationId) {
  const client = appData.clients.find((c) => c.id === clientId);
  const loc = client.locations.find((l) => l.id === locationId);
  showModal(
    t.modalRenameLocation,
    `
    <div class="form-group">
      <label>${t.labelLocationName}</label>
      <input type="text" id="f-name" value="${escapeHtml(loc.name)}" autocomplete="off">
    </div>
  `,
    () => {
      const name = document.getElementById('f-name').value.trim();
      if (!name) {
        showToast(t.toastNameRequired, 'error');
        return false;
      }
      loc.name = name;
      saveData();
      renderMainPanel();
    },
  );
}

function deleteLocation(clientId, locationId) {
  const client = appData.clients.find((c) => c.id === clientId);
  if (client.locations.length <= 1) return;
  const loc = client.locations.find((l) => l.id === locationId);
  if (!confirm(t.confirmDeleteLocation(loc.name))) return;
  client.locations = client.locations.filter((l) => l.id !== locationId);
  selectedLocationId = client.locations[0]?.id || null;
  saveData();
  renderMainPanel();
}

// ---- Cert CRUD ----

function addCert(clientId, locationId) {
  const client = appData.clients.find((c) => c.id === clientId);
  const loc = client.locations.find((l) => l.id === locationId);
  showModal(
    t.modalAddCert,
    `
    <div class="form-group">
      <label>${t.labelCertLabel}</label>
      <input type="text" id="f-cert-label" placeholder="${t.phCertLabel}" autocomplete="off">
    </div>
    <div class="form-group">
      <label>${t.labelCertNew}</label>
      <input type="text" id="f-cert" placeholder="${t.phCertPass}" autocomplete="off">
    </div>
    `,
    () => {
      const label = document.getElementById('f-cert-label').value.trim();
      if (!label) { showToast(t.toastNameRequired, 'error'); return false; }
      loc.certs.push({ id: generateId(), label, password: document.getElementById('f-cert').value, history: [] });
      saveData();
      renderMainPanel();
    },
  );
}

function editCert(clientId, locationId, certId) {
  const client = appData.clients.find((c) => c.id === clientId);
  const loc = client.locations.find((l) => l.id === locationId);
  const cert = loc.certs.find((c) => c.id === certId);
  if (!cert.history) cert.history = [];

  const histHTML = cert.history.length
    ? `
    <div class="form-group">
      <label>${t.labelCertHistory}</label>
      <div class="modal-history-list">
        ${cert.history.map((h) => `
          <div class="modal-history-item">
            <span>${escapeHtml(h.password)}</span>
            <small>${new Date(h.changedAt).toLocaleDateString(t.locale)}</small>
          </div>
        `).join('')}
      </div>
    </div>
    `
    : '';

  showModal(
    t.modalEditCert2,
    `
    <div class="form-group">
      <label>${t.labelCertLabel}</label>
      <input type="text" id="f-cert-label" value="${escapeHtml(cert.label)}" autocomplete="off">
    </div>
    ${cert.password ? `
      <div class="form-group">
        <label>${t.labelCertCurrent}</label>
        <div class="current-pass-display">${escapeHtml(cert.password)}</div>
      </div>
    ` : ''}
    <div class="form-group">
      <label>${t.labelCertNew}${cert.password ? ' ' + t.labelCertLeaveBlank : ''}</label>
      <input type="text" id="f-cert" placeholder="${t.phCertPass}" autocomplete="off">
    </div>
    ${histHTML}
    `,
    () => {
      const newLabel = document.getElementById('f-cert-label').value.trim();
      if (!newLabel) { showToast(t.toastNameRequired, 'error'); return false; }
      cert.label = newLabel;
      const newPass = document.getElementById('f-cert').value;
      if (newPass !== '' && newPass !== cert.password) {
        if (cert.password) cert.history.unshift({ password: cert.password, changedAt: new Date().toISOString() });
        cert.password = newPass;
      }
      saveData();
      renderMainPanel();
    },
  );
}

function deleteCert(clientId, locationId, certId) {
  const client = appData.clients.find((c) => c.id === clientId);
  const loc = client.locations.find((l) => l.id === locationId);
  const cert = loc.certs.find((c) => c.id === certId);
  if (!confirm(t.confirmDeleteCert(cert.label))) return;
  loc.certs = loc.certs.filter((c) => c.id !== certId);
  saveData();
  renderMainPanel();
}

// ---- User CRUD ----

function addUser(clientId, locationId) {
  showModal(
    t.modalAddUser,
    `
    <div class="form-group">
      <label>${t.labelUsername}</label>
      <input type="text" id="f-username" placeholder="${t.phUsername}" autocomplete="off">
    </div>
    <div class="form-group">
      <label>${t.labelPassword}</label>
      <input type="text" id="f-password" placeholder="${t.phPassword}" autocomplete="off">
    </div>
  `,
    () => {
      const username = document.getElementById('f-username').value.trim();
      const password = document.getElementById('f-password').value;
      if (!username) {
        showToast(t.toastUsernameRequired, 'error');
        return false;
      }
      if (!password) {
        showToast(t.toastPasswordRequired, 'error');
        return false;
      }
      const client = appData.clients.find((c) => c.id === clientId);
      const loc = client.locations.find((l) => l.id === locationId);
      loc.users.push({
        id: generateId(),
        username,
        currentPassword: password,
        passwordHistory: [],
      });
      saveData();
      renderMainPanel();
    },
  );
}

function editUser(clientId, locationId, userId) {
  const client = appData.clients.find((c) => c.id === clientId);
  const loc = client.locations.find((l) => l.id === locationId);
  const user = loc.users.find((u) => u.id === userId);

  const histHTML = user.passwordHistory.length
    ? `
    <div class="form-group">
      <label>${t.labelPassHistory}</label>
      <div class="modal-history-list">
        ${user.passwordHistory
          .map(
            (h) => `
          <div class="modal-history-item">
            <span>${escapeHtml(h.password)}</span>
            <small>${new Date(h.changedAt).toLocaleDateString(t.locale)}</small>
          </div>
        `,
          )
          .join('')}
      </div>
    </div>
  `
    : '';

  showModal(
    t.modalEditUser,
    `
    <div class="form-group">
      <label>${t.labelUsername}</label>
      <input type="text" id="f-username" value="${escapeHtml(user.username)}" autocomplete="off">
    </div>
    <div class="form-group">
      <label>${t.labelCurrentPass}</label>
      <div class="current-pass-display">${escapeHtml(user.currentPassword)}</div>
    </div>
    <div class="form-group">
      <label>${t.labelNewPass} ${t.labelNewPassHint}</label>
      <input type="text" id="f-password" placeholder="${t.phNewPassword}" autocomplete="off">
    </div>
    ${histHTML}
  `,
    () => {
      const username = document.getElementById('f-username').value.trim();
      const newPassword = document.getElementById('f-password').value;
      if (!username) {
        showToast(t.toastUsernameRequired, 'error');
        return false;
      }
      user.username = username;
      if (newPassword && newPassword !== user.currentPassword) {
        user.passwordHistory.unshift({
          password: user.currentPassword,
          changedAt: new Date().toISOString(),
        });
        user.currentPassword = newPassword;
      }
      saveData();
      renderMainPanel();
    },
  );
}

function deleteUser(clientId, locationId, userId) {
  const client = appData.clients.find((c) => c.id === clientId);
  const loc = client.locations.find((l) => l.id === locationId);
  const user = loc.users.find((u) => u.id === userId);
  if (!confirm(t.confirmDeleteUser(user.username))) return;
  loc.users = loc.users.filter((u) => u.id !== userId);
  saveData();
  renderMainPanel();
}

// ---- Export / Import ----

function exportJson() {
  window.location.href = '/api/export';
}

function exportTxt(clientId = null) {
  const targets = clientId
    ? appData.clients.filter((c) => c.id === clientId)
    : appData.clients;

  const fmtPW = (pw) => (/\s/.test(pw) ? `"${pw}"` : pw);
  const fmtDateLong = (iso) =>
    new Date(iso).toLocaleDateString(t.locale, {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  const fmtDate = (iso) => new Date(iso).toLocaleDateString(t.locale);
  const today = fmtDateLong(new Date().toISOString());
  const div = '═'.repeat(52);
  const sub = '─'.repeat(40);
  const lines = [];

  lines.push(t.txtTitle);
  lines.push(`${t.txtExported} ${today}  |  ${t.txtVersion} ${formatVersion()}`);
  lines.push(div);

  targets.forEach((client, ci) => {
    lines.push('');
    lines.push(`${ci + 1}. ${client.name.toUpperCase()}`);
    lines.push(sub);

    client.locations.forEach((loc, li) => {
      lines.push('');
      lines.push(`  ${ci + 1}.${li + 1}  ${loc.name}`);
      if (loc.certs?.length) {
        loc.certs.forEach((cert) => {
          lines.push(`       ${t.txtCertLabel} [${cert.label}] ${cert.password ? fmtPW(cert.password) : t.txtNone}`);
          if (cert.history?.length) {
            lines.push(`       ${t.txtCertHistLabel} [${cert.label}]`);
            cert.history.forEach((h) => {
              lines.push(`         - ${fmtPW(h.password)}  (${fmtDate(h.changedAt)})`);
            });
          }
        });
      }

      if (!loc.users.length) {
        lines.push(`       ${t.txtUsersNone}`);
      } else {
        lines.push('');
        lines.push(`       ${t.txtUsersLabel}`);
        loc.users.forEach((user, ui) => {
          lines.push('');
          lines.push(`       ${ci + 1}.${li + 1}.${ui + 1}  ${user.username}`);
          lines.push(`              ${t.txtPasswordLabel} ${fmtPW(user.currentPassword)}`);
          if (user.passwordHistory.length) {
            lines.push(`              ${t.txtPrevLabel}`);
            user.passwordHistory.forEach((h) => {
              lines.push(`                - ${fmtPW(h.password)}  (${fmtDate(h.changedAt)})`);
            });
          }
        });
      }
    });
  });

  lines.push('');
  lines.push(div);
  lines.push(t.txtEnd);

  const blob = new Blob([lines.join('\n')], {
    type: 'text/plain;charset=utf-8',
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  if (clientId) {
    const client = appData.clients.find((c) => c.id === clientId);
    a.download = t.exportClientFilename(
      client.name.replace(/[^a-z0-9]/gi, '_'),
    );
  } else {
    a.download = t.exportAllFilename(appData.version);
  }
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function copyClientData(clientId) {
  const client = appData.clients.find((c) => c.id === clientId);
  const fmtPW = (pw) => (/\s/.test(pw) ? `"${pw}"` : pw);
  const fmtDate = (iso) => new Date(iso).toLocaleDateString(t.locale);
  const lines = [];

  lines.push(client.name.toUpperCase());

  client.locations.forEach((loc) => {
    lines.push('');
    lines.push(`  ${loc.name}`);

    loc.certs?.forEach((cert) => {
      if (cert.password) lines.push(`  ${t.txtCertLabel} [${cert.label}] ${fmtPW(cert.password)}`);
      if (cert.history?.length) {
        lines.push(`  ${t.txtCertHistLabel} [${cert.label}]`);
        cert.history.forEach((h) => lines.push(`    - ${fmtPW(h.password)}  (${fmtDate(h.changedAt)})`));
      }
    });

    if (loc.users.length) {
      lines.push('');
      lines.push(`  ${t.txtUsersLabel}`);
      loc.users.forEach((user) => {
        lines.push('');
        lines.push(`  ${user.username}`);
        lines.push(`    ${t.txtPasswordLabel} ${fmtPW(user.currentPassword)}`);
        if (user.passwordHistory.length) {
          lines.push(`    ${t.txtPrevLabel}`);
          user.passwordHistory.forEach((h) => {
            lines.push(`      - ${fmtPW(h.password)}  (${fmtDate(h.changedAt)})`);
          });
        }
      });
    }
  });

  navigator.clipboard.writeText(lines.join('\n'))
    .then(() => showToast(t.toastCopied))
    .catch(() => showToast(t.toastCopyFailed, 'error'));
}

async function handleImportFile(file) {
  try {
    const incoming = JSON.parse(await file.text());
    if (typeof incoming.version !== 'number') {
      showToast(t.toastInvalidFile, 'error');
      return;
    }

    let incomingClients;
    if (incoming.encrypted) {
      if (!incoming.salt || !incoming.iv || !incoming.data) {
        showToast(t.toastInvalidFile, 'error');
        return;
      }

      // Try current passphrase first — works when both users share the same passphrase
      let decryptedOk = false;
      try {
        const importSalt = base64ToBuf(incoming.salt);
        const importKey = await deriveKey(masterPassphrase, importSalt);
        const plaintext = await decryptClients(incoming, importKey);
        incomingClients = JSON.parse(plaintext);
        decryptedOk = true;
      } catch { /* passphrase mismatch — fall through to prompt */ }

      if (!decryptedOk) {
        const confirmed = await showPassphraseModal(
          t.importPassphraseTitle,
          `<p class="passphrase-hint">${t.importPassphraseHint}</p>
           <div class="form-group">
             <label>${t.passphraseLabel}</label>
             <input type="password" id="f-import-pass" placeholder="${t.passphrasePlaceholder}" autocomplete="current-password">
             <p id="f-import-pass-err" class="field-error" style="display:none"></p>
           </div>`,
          t.btnUnlock,
          async () => {
            const pass = document.getElementById('f-import-pass').value;
            if (!pass) { setFieldError('f-import-pass-err', t.passphraseEmpty); return false; }
            try {
              const importSalt = base64ToBuf(incoming.salt);
              const importKey = await deriveKey(pass, importSalt);
              const plaintext = await decryptClients(incoming, importKey);
              incomingClients = JSON.parse(plaintext);
            } catch {
              setFieldError('f-import-pass-err', t.passphraseWrong);
              return false;
            }
          },
          true,
        );
        if (!confirmed) return;
      }
    } else {
      if (!Array.isArray(incoming.clients)) {
        showToast(t.toastInvalidFile, 'error');
        return;
      }
      incomingClients = incoming.clients;
    }

    const cv = appData.version;
    const incomingVer = incoming.version;
    const msg =
      incomingVer > cv
        ? t.confirmImportNewer(incomingVer, cv)
        : incomingVer < cv
          ? t.confirmImportOlder(incomingVer, cv)
          : t.confirmImportSame(cv);

    if (!confirm(msg)) return;

    // Re-encrypt with the current user's key so the stored file stays in their encryption context
    const iv = crypto.getRandomValues(new Uint8Array(12));
    const ciphertext = await crypto.subtle.encrypt(
      { name: 'AES-GCM', iv },
      cryptoKey,
      new TextEncoder().encode(JSON.stringify(incomingClients)),
    );
    const payload = {
      version: incomingVer,
      encrypted: true,
      salt: bufToBase64(cryptoSalt),
      iv: bufToBase64(iv),
      data: bufToBase64(new Uint8Array(ciphertext)),
      lastModified: incoming.lastModified,
    };

    const res = await fetch('/api/import/confirm', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      appData.clients = incomingClients;
      appData.version = incomingVer;
      appData.lastModified = incoming.lastModified;
      selectedClientId = null;
      selectedLocationId = null;
      render();
      showToast(t.toastImportOk);
    } else {
      showToast(t.toastImportFail, 'error');
    }
  } catch {
    showToast(t.toastReadFail, 'error');
  }
}

// ---- Init ----

async function init() {
  initLanguage();
  applyStaticText();
  await unlockAndLoadData();
  render();

  document.getElementById('admin-btn').onclick = () =>
    isAdminMode ? exitAdminMode() : enterAdminMode();

  document.getElementById('client-sort-btn').onclick = () => {
    clientSort = clientSort === null ? 'asc' : clientSort === 'asc' ? 'desc' : null;
    renderClientList();
  };

  document.getElementById('pw-toggle-btn').onclick = () => {
    passwordsVisible = !passwordsVisible;
    document.getElementById('pw-toggle-btn').textContent = passwordsVisible ? t.btnPwVisible : t.btnPwHidden;
    render();
  };

  document.getElementById('add-client-btn').onclick = addClient;
  document.getElementById('export-btn').onclick = exportJson;
  document.getElementById('export-txt-btn').onclick = () => exportTxt();

  document.getElementById('import-btn').onclick = () =>
    document.getElementById('import-file').click();
  document.getElementById('import-file').onchange = (e) => {
    const file = e.target.files[0];
    if (file) {
      handleImportFile(file);
      e.target.value = '';
    }
  };

  document.getElementById('lang-select').onchange = (e) => {
    setLanguage(e.target.value);
  };

  document.getElementById('hamburger-btn').onclick = () => {
    document.getElementById('sidebar').classList.contains('open')
      ? closeSidebar()
      : openSidebar();
  };

  document.getElementById('sidebar-overlay').onclick = closeSidebar;

  document.getElementById('modal-overlay').onclick = (e) => {
    if (e.target.id === 'modal-overlay') closeModal();
  };

  setInterval(() => fetch('/api/ping').catch(() => {}), 2 * 60 * 1000);
}

init();
