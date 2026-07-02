// ---- Translations ----
const LANGS = {
  en: {
    locale: 'en-US',
    langLabel: 'Language',
    appTitle: 'Credentials',
    btnPrint: 'Export .txt',
    btnExport: 'Backup',
    btnImport: 'Import',
    btnSweep: 'Sweep',
    sidebarClients: 'Clients',
    sidebarServers: 'Servers',
    noClientsYet: 'No clients yet',
    noServersYet: 'No servers',
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
    statusLabel: 'Status:',
    statusPending: 'Pending',
    statusGood: 'Good',
    statusIssue: 'Issue',
    statusClosed: 'Closed',
    modalAddClient: 'Add Client',
    modalRenameClient: 'Rename Client',
    modalAddLocation: 'Add Location',
    modalRenameLocation: 'Rename Location',
    modalEditCert: 'Edit Cert Password',
    modalAddUser: 'Add User',
    modalEditUser: 'Edit User',
    modalAddServer: 'Add Server',
    modalEditServer: 'Edit Server',
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
    labelServerLabel: 'Label',
    labelServerAddress: 'Address',
    phClientName: 'e.g. Acme Corp',
    phLocationName: 'e.g. Store 2, Downtown',
    phCertPass: 'Certificate password',
    phUsername: 'e.g. john.doe',
    phPassword: 'Password',
    phNewPassword: 'Enter new password to change',
    phServerLabel: 'e.g. Main, DR, Staging',
    phServerAddress: 'e.g. 192.168.1.1',
    btnCancel: 'Cancel',
    btnConfirm: 'Confirm',
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
    toastAddressRequired: 'Address is required',
    confirmDeleteClient: (name) => `Delete "${name}" and all its data?`,
    confirmDeleteLocation: (name) =>
      `Delete location "${name}" and all its users?`,
    confirmDeleteUser: (name) => `Delete user "${name}"?`,
    confirmDeleteServer: (label) => `Delete server "${label}"?`,
    confirmSweep: 'Mark all clients and users as Pending?',
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
    settingsTitle: 'Settings',
    sectionCerts: 'Certificates',
    tooltipCopy: 'Copy',
    tooltipDelete: 'Delete',
    sidebarFiles: 'Files',
    fileManagerTitle: 'File Manager',
    unassignedFiles: 'Unassigned',
    assignedFiles: 'Assigned',
    btnAssign: 'Assign',
    btnReassign: 'Re-assign',
    assignModalTitle: 'Assign',
    labelDisplayName: 'Display Name',
    phDisplayName: 'e.g. Main Cert',
    noFilesFound: 'No files found in the files/ folder',
    toastFilesSaved: 'Assignments saved',
    sectionFiles: 'Files',
    noFilesAssigned: 'No files assigned',
    btnCopyFile: 'Copy File',
    fileMissing: 'File missing',
    toastClipboardOk: 'File copied to clipboard',
    toastClipboardFail: 'Clipboard write failed',
  },
  'pt-br': {
    locale: 'pt-BR',
    langLabel: 'Idioma',
    appTitle: 'Credenciais',
    btnPrint: 'Exportar .txt',
    btnExport: 'Backup',
    btnImport: 'Importar',
    btnSweep: 'Varredura',
    sidebarClients: 'Clientes',
    sidebarServers: 'Servidores',
    noClientsYet: 'Nenhum cliente ainda',
    noServersYet: 'Nenhum servidor',
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
    statusLabel: 'Status:',
    statusPending: 'Pendente',
    statusGood: 'Bom',
    statusIssue: 'Problema',
    statusClosed: 'Fechado',
    modalAddClient: 'Adicionar Cliente',
    modalRenameClient: 'Renomear Cliente',
    modalAddLocation: 'Adicionar Localização',
    modalRenameLocation: 'Renomear Localização',
    modalEditCert: 'Editar Senha do Certificado',
    modalAddUser: 'Adicionar Usuário',
    modalEditUser: 'Editar Usuário',
    modalAddServer: 'Adicionar Servidor',
    modalEditServer: 'Editar Servidor',
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
    labelServerLabel: 'Rótulo',
    labelServerAddress: 'Endereço',
    phClientName: 'Ex: Empresa XYZ',
    phLocationName: 'Ex: Loja 2, Centro',
    phCertPass: 'Senha do certificado',
    phUsername: 'Ex: joao.silva',
    phPassword: 'Senha',
    phNewPassword: 'Digite a nova senha para alterar',
    phServerLabel: 'Ex: Principal, DR, Staging',
    phServerAddress: 'Ex: 192.168.1.1',
    btnCancel: 'Cancelar',
    btnConfirm: 'Confirmar',
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
    toastAddressRequired: 'Endereço é obrigatório',
    confirmDeleteClient: (name) => `Excluir "${name}" e todos os seus dados?`,
    confirmDeleteLocation: (name) =>
      `Excluir a localização "${name}" e todos os seus usuários?`,
    confirmDeleteUser: (name) => `Excluir o usuário "${name}"?`,
    confirmDeleteServer: (label) => `Excluir servidor "${label}"?`,
    confirmSweep: 'Marcar todos os clientes e usuários como Pendente?',
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
    settingsTitle: 'Configurações',
    sectionCerts: 'Certificados',
    tooltipCopy: 'Copiar',
    tooltipDelete: 'Excluir',
    sidebarFiles: 'Arquivos',
    fileManagerTitle: 'Gerenciar Arquivos',
    unassignedFiles: 'Não atribuídos',
    assignedFiles: 'Atribuídos',
    btnAssign: 'Atribuir',
    btnReassign: 'Reatribuir',
    assignModalTitle: 'Atribuir',
    labelDisplayName: 'Nome de exibição',
    phDisplayName: 'Ex: Cert Principal',
    noFilesFound: 'Nenhum arquivo na pasta files/',
    toastFilesSaved: 'Atribuições salvas',
    sectionFiles: 'Arquivos',
    noFilesAssigned: 'Nenhum arquivo atribuído',
    btnCopyFile: 'Copiar Arquivo',
    fileMissing: 'Arquivo não encontrado',
    toastClipboardOk: 'Arquivo copiado para a área de transferência',
    toastClipboardFail: 'Falha ao copiar para área de transferência',
  },
};

// ---- Status ----
const STATUS_ORDER = ['pending', 'good', 'issue', 'closed'];
const STATUS_ICONS = { pending: '–', good: '✓', issue: '!', closed: '○' };

// ---- State ----
let appData = null;
let serversData = [];
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
let activeDropdown = null;
let filesData = null;
let filesAssignments = {};
let showingFileMgr = false;

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
  document.getElementById('sweep-btn').textContent = t.btnSweep;
  document.getElementById('right-panel-title').textContent = t.settingsTitle;
  const langSelect = document.getElementById('lang-select');
  langSelect.options[0].textContent = t.langLabel;
  langSelect.value = '';
  document.getElementById('clients-label').textContent = t.sidebarClients;
  document.getElementById('servers-label').textContent = t.sidebarServers;
  document.getElementById('files-label').textContent = t.sidebarFiles;
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

function getStatusLabel(status) {
  const map = { pending: t.statusPending, good: t.statusGood, issue: t.statusIssue, closed: t.statusClosed };
  return map[status] || status;
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

// ---- Status dropdown ----

function closeStatusDropdown() {
  if (activeDropdown) {
    activeDropdown.remove();
    activeDropdown = null;
    document.removeEventListener('click', closeStatusDropdown, true);
  }
}

function showStatusDropdown(anchorEl, currentStatus, onSelect) {
  closeStatusDropdown();

  const dropdown = document.createElement('div');
  dropdown.className = 'status-dropdown';

  STATUS_ORDER.forEach((s) => {
    const opt = document.createElement('button');
    opt.className = `status-dropdown-option${s === currentStatus ? ' current' : ''}`;
    opt.innerHTML = `<span class="status-dot status-${s}"></span><span>${getStatusLabel(s)}</span>`;
    opt.onclick = (e) => {
      e.stopPropagation();
      onSelect(s);
      closeStatusDropdown();
    };
    dropdown.appendChild(opt);
  });

  document.getElementById('app').appendChild(dropdown);
  activeDropdown = dropdown;

  const rect = anchorEl.getBoundingClientRect();
  const estimatedH = STATUS_ORDER.length * 34 + 2;
  const winH = window.innerHeight;
  const winW = window.innerWidth;

  let top = rect.bottom + 4;
  if (top + estimatedH > winH) top = rect.top - estimatedH - 4;
  top = Math.max(4, top);

  let left = rect.left;
  if (left + 140 > winW) left = winW - 144;
  left = Math.max(4, left);

  dropdown.style.top = `${top}px`;
  dropdown.style.left = `${left}px`;

  setTimeout(() => {
    document.addEventListener('click', closeStatusDropdown, true);
  }, 0);
}

// ---- Modal ----

function showConfirm(message, isDanger = false) {
  return new Promise((resolve) => {
    const overlay = document.getElementById('modal-overlay');
    const savedOnclick = overlay.onclick;
    const done = (value) => { overlay.onclick = savedOnclick; closeModal(); resolve(value); };

    document.getElementById('modal-title').textContent = '';
    document.getElementById('modal-body').innerHTML =
      `<p class="confirm-message">${escapeHtml(message).replace(/\n/g, '<br>')}</p>`;
    overlay.classList.remove('hidden');

    const oldConfirm = document.getElementById('modal-confirm');
    const oldCancel = document.getElementById('modal-cancel');
    const newConfirm = oldConfirm.cloneNode(true);
    const newCancel = oldCancel.cloneNode(true);

    newConfirm.textContent = t.btnConfirm;
    newConfirm.className = isDanger ? 'btn-danger' : 'btn-primary';
    newCancel.textContent = t.btnCancel;
    newCancel.style.display = '';

    oldConfirm.parentNode.replaceChild(newConfirm, oldConfirm);
    oldCancel.parentNode.replaceChild(newCancel, oldCancel);

    newConfirm.onclick = () => done(true);
    newCancel.onclick = () => done(false);

    overlay.onclick = (e) => { if (e.target.id === 'modal-overlay') done(false); };
    overlay.onkeydown = (e) => {
      if (e.key === 'Enter') done(true);
      if (e.key === 'Escape') done(false);
    };
  });
}

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
  closeRightPanel();
  document.getElementById('sidebar').classList.add('open');
  document.getElementById('sidebar-overlay').classList.add('visible');
  document.getElementById('hamburger-btn').classList.add('active');
}

function closeSidebar() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('sidebar-overlay').classList.remove('visible');
  document.getElementById('hamburger-btn').classList.remove('active');
}

function openRightPanel() {
  closeSidebar();
  document.getElementById('right-panel').classList.add('open');
  document.getElementById('right-panel-overlay').classList.add('visible');
  document.getElementById('right-panel-btn').classList.add('active');
}

function closeRightPanel() {
  document.getElementById('right-panel').classList.remove('open');
  document.getElementById('right-panel-overlay').classList.remove('visible');
  document.getElementById('right-panel-btn').classList.remove('active');
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
    const savedOnclick = overlay.onclick;
    const done = (value) => { overlay.onclick = savedOnclick; closeModal(); resolve(value); };

    newConfirm.textContent = confirmLabel;
    if (cancellable) {
      newCancel.textContent = t.btnCancel;
      newCancel.onclick = () => done(false);
    } else {
      newCancel.style.display = 'none';
    }
    oldConfirm.parentNode.replaceChild(newConfirm, oldConfirm);
    oldCancel.parentNode.replaceChild(newCancel, oldCancel);

    overlay.onclick = null;
    overlay.onkeydown = (e) => {
      if (e.key === 'Enter') newConfirm.click();
      if (e.key === 'Escape' && cancellable) done(false);
    };

    newConfirm.onclick = async () => {
      const result = await onConfirm();
      if (result !== false) done(true);
    };

    setTimeout(() => overlay.querySelector('input')?.focus(), 30);
  });
}

function migrateClients(clients) {
  let migrated = false;
  clients.forEach((client) => {
    client.locations.forEach((loc) => {
      if (!loc.certs) {
        migrated = true;
        loc.certs = (loc.certPassword || loc.certPasswordHistory?.length)
          ? [{ id: generateId(), label: 'Cert', password: loc.certPassword || '', history: loc.certPasswordHistory || [] }]
          : [];
        delete loc.certPassword;
        delete loc.certPasswordHistory;
      }
    });
  });
  return migrated;
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

  const needsMigration = migrateClients(appData.clients);

  if (!raw.encrypted || needsMigration) await saveData();
}

// ---- Admin mode ----

function applyAdminMode() {
  document.getElementById('app').classList.toggle('admin-mode', isAdminMode);
  document.getElementById('admin-btn').classList.toggle('active', isAdminMode);
  renderFilesBadge();
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

async function saveData(quiet = false) {
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
  if (!quiet) showToast(t.toastSaved);
}

async function loadServers() {
  try {
    const res = await fetch('/api/servers');
    const raw = await res.json();
    if (raw.encrypted && raw.salt && raw.iv && raw.data) {
      const plaintext = await crypto.subtle.decrypt(
        { name: 'AES-GCM', iv: base64ToBuf(raw.iv) },
        cryptoKey,
        base64ToBuf(raw.data),
      );
      serversData = JSON.parse(new TextDecoder().decode(plaintext));
    } else {
      serversData = raw.servers || [];
      if (serversData.length > 0 || raw.encrypted === false) await saveServers();
    }
  } catch {
    serversData = [];
  }
}

async function saveServers() {
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const ciphertext = await crypto.subtle.encrypt(
    { name: 'AES-GCM', iv },
    cryptoKey,
    new TextEncoder().encode(JSON.stringify(serversData)),
  );
  const payload = {
    encrypted: true,
    salt: bufToBase64(cryptoSalt),
    iv: bufToBase64(iv),
    data: bufToBase64(new Uint8Array(ciphertext)),
  };
  await fetch('/api/servers', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
}

// ---- Files ----

async function loadFiles() {
  try {
    const res = await fetch('/api/files');
    const raw = await res.json();
    const diskFiles = raw.diskFiles || [];
    const blob = raw.assignments || {};
    if (blob.encrypted) {
      const plaintext = await crypto.subtle.decrypt(
        { name: 'AES-GCM', iv: base64ToBuf(blob.iv) },
        cryptoKey,
        base64ToBuf(blob.data),
      );
      filesAssignments = JSON.parse(new TextDecoder().decode(plaintext));
    } else {
      filesAssignments = blob.assignments || {};
      await saveFiles();
    }
    filesData = { diskFiles };
  } catch {
    filesData = { diskFiles: [] };
    filesAssignments = {};
  }
}

async function saveFiles() {
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const ciphertext = await crypto.subtle.encrypt(
    { name: 'AES-GCM', iv },
    cryptoKey,
    new TextEncoder().encode(JSON.stringify(filesAssignments)),
  );
  const payload = {
    encrypted: true,
    salt: bufToBase64(cryptoSalt),
    iv: bufToBase64(iv),
    data: bufToBase64(new Uint8Array(ciphertext)),
  };
  await fetch('/api/files', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
}

function renderFilesBadge() {
  if (!filesData) return;
  const unassigned = filesData.diskFiles.filter(
    (f) => !filesAssignments[f]?.assignments?.length,
  ).length;
  const badge = document.getElementById('files-unassigned-badge');
  if (badge) {
    badge.textContent = unassigned;
    badge.classList.toggle('hidden', unassigned === 0);
  }
  const btn = document.getElementById('file-manager-btn');
  if (btn) {
    btn.disabled = !isAdminMode;
    btn.classList.toggle('active', showingFileMgr);
  }
}

function buildAssignmentSummary(assignments) {
  if (!assignments?.length) return '';
  const parts = assignments.map(({ clientId, locationId, userId }) => {
    const client = appData.clients.find((c) => c.id === clientId);
    if (!client) return null;
    const loc = client.locations.find((l) => l.id === locationId);
    if (!loc) return null;
    if (userId) {
      const user = loc.users.find((u) => u.id === userId);
      return user ? `${client.name} / ${loc.name} / ${user.username}` : null;
    }
    return `${client.name} / ${loc.name}`;
  }).filter(Boolean);
  return parts.join('; ');
}

function renderFileRowHTML(filename, isAssigned) {
  const entry = filesAssignments[filename];
  const displayName = entry?.displayName || filename;
  const summary = isAssigned ? escapeHtml(buildAssignmentSummary(entry.assignments)) : '';
  return `
    <div class="fm-file-row">
      <div class="fm-file-info">
        <span class="fm-file-name">${escapeHtml(displayName)}</span>
        ${displayName !== filename ? `<span class="fm-file-raw">${escapeHtml(filename)}</span>` : ''}
        ${summary ? `<span class="fm-file-assignment">${summary}</span>` : ''}
      </div>
      <button class="btn-sm assign-file-btn" data-filename="${escapeHtml(filename)}">
        ${isAssigned ? t.btnReassign : t.btnAssign}
      </button>
    </div>`;
}

function renderFileManager() {
  const panel = document.getElementById('main-panel');
  if (!filesData) {
    panel.innerHTML = `<p class="placeholder">${t.selectClientHint}</p>`;
    return;
  }
  const { diskFiles } = filesData;
  const unassigned = diskFiles.filter((f) => !filesAssignments[f]?.assignments?.length);
  const assigned = diskFiles.filter((f) => filesAssignments[f]?.assignments?.length > 0);

  panel.innerHTML = `
    <div class="file-manager">
      <div class="client-header">
        <h2>${t.fileManagerTitle}</h2>
      </div>
      <div class="fm-body">
        ${diskFiles.length === 0 ? `<p class="placeholder" style="margin-top:32px">${t.noFilesFound}</p>` : ''}
        ${unassigned.length > 0 ? `
          <div class="fm-section">
            <div class="section-header"><h3>${t.unassignedFiles} (${unassigned.length})</h3></div>
            <div class="fm-file-list">${unassigned.map((f) => renderFileRowHTML(f, false)).join('')}</div>
          </div>` : ''}
        ${assigned.length > 0 ? `
          <div class="fm-section">
            <div class="section-header"><h3>${t.assignedFiles} (${assigned.length})</h3></div>
            <div class="fm-file-list">${assigned.map((f) => renderFileRowHTML(f, true)).join('')}</div>
          </div>` : ''}
      </div>
    </div>`;

  panel.querySelectorAll('.assign-file-btn').forEach((btn) => {
    btn.onclick = () => showAssignModal(btn.dataset.filename);
  });
}

function showAssignModal(filename) {
  const existing = filesAssignments[filename] || { displayName: '', assignments: [] };
  const currentAssignments = existing.assignments || [];

  const hierarchyHTML = appData.clients.map((client) => {
    const locsHTML = client.locations.map((loc) => {
      const locChecked = currentAssignments.some(
        (a) => a.clientId === client.id && a.locationId === loc.id && a.userId === null,
      );
      const usersHTML = loc.users.map((user) => {
        const userChecked = currentAssignments.some(
          (a) => a.clientId === client.id && a.locationId === loc.id && a.userId === user.id,
        );
        return `
          <label class="assign-row assign-user-row">
            <input type="checkbox" class="assign-user-cb"
              data-client-id="${client.id}"
              data-location-id="${loc.id}"
              data-user-id="${user.id}"
              ${userChecked ? 'checked' : ''}>
            <span>${escapeHtml(user.username)}</span>
          </label>`;
      }).join('');
      return `
        <label class="assign-row assign-location-row">
          <input type="checkbox" class="assign-location-cb"
            data-client-id="${client.id}"
            data-location-id="${loc.id}"
            ${locChecked ? 'checked' : ''}>
          <span>${escapeHtml(loc.name)}</span>
        </label>
        ${loc.users.length ? `<div class="assign-users">${usersHTML}</div>` : ''}`;
    }).join('');

    const clientChecked = client.locations.length > 0 && client.locations.every((loc) =>
      currentAssignments.some((a) => a.clientId === client.id && a.locationId === loc.id && a.userId === null),
    );
    return `
      <div class="assign-client-block">
        <label class="assign-row assign-client-row">
          <input type="checkbox" class="assign-client-cb" data-client-id="${client.id}" ${clientChecked ? 'checked' : ''}>
          <span class="assign-client-name">${escapeHtml(client.name)}</span>
        </label>
        <div class="assign-locations">${locsHTML}</div>
      </div>`;
  }).join('');

  const shortName = filename.length > 28 ? filename.slice(0, 25) + '…' : filename;

  showModal(
    `${t.assignModalTitle}: ${shortName}`,
    `
    <div class="form-group">
      <label>${t.labelDisplayName}</label>
      <input type="text" id="f-display-name" value="${escapeHtml(existing.displayName || '')}"
        placeholder="${escapeHtml(filename)}" autocomplete="off">
    </div>
    <div class="assign-hierarchy">
      ${hierarchyHTML || `<p class="list-empty" style="padding:10px 12px">${t.noClientsYet}</p>`}
    </div>`,
    () => {
      const displayName = document.getElementById('f-display-name').value.trim();
      const newAssignments = [];

      document.querySelectorAll('.assign-location-cb:checked').forEach((cb) => {
        newAssignments.push({ clientId: cb.dataset.clientId, locationId: cb.dataset.locationId, userId: null });
      });

      document.querySelectorAll('.assign-user-cb:checked').forEach((cb) => {
        const locCb = document.querySelector(
          `.assign-location-cb[data-client-id="${cb.dataset.clientId}"][data-location-id="${cb.dataset.locationId}"]`,
        );
        if (!locCb?.checked) {
          newAssignments.push({ clientId: cb.dataset.clientId, locationId: cb.dataset.locationId, userId: cb.dataset.userId });
        }
      });

      filesAssignments[filename] = { displayName: displayName || filename, assignments: newAssignments };
      saveFiles();
      showToast(t.toastFilesSaved);
      renderFilesBadge();
      renderFileManager();
    },
    t.btnSave,
  );

  setTimeout(() => {
    document.querySelectorAll('.assign-client-cb').forEach((clientCb) => {
      clientCb.onchange = () => {
        const cid = clientCb.dataset.clientId;
        document.querySelectorAll(`.assign-location-cb[data-client-id="${cid}"]`).forEach((cb) => { cb.checked = clientCb.checked; });
        document.querySelectorAll(`.assign-user-cb[data-client-id="${cid}"]`).forEach((cb) => { cb.checked = clientCb.checked; });
      };
    });
    document.querySelectorAll('.assign-location-cb').forEach((locCb) => {
      locCb.onchange = () => {
        const { clientId, locationId } = locCb.dataset;
        document.querySelectorAll(`.assign-user-cb[data-client-id="${clientId}"][data-location-id="${locationId}"]`).forEach((cb) => { cb.checked = locCb.checked; });
      };
    });
  }, 30);
}

function getFilesForLocation(clientId, locationId) {
  const result = [];
  Object.entries(filesAssignments).forEach(([filename, entry]) => {
    if (!entry.assignments) return;
    entry.assignments.forEach((a) => {
      if (a.clientId === clientId && a.locationId === locationId) {
        result.push({
          filename,
          displayName: entry.displayName || filename,
          userId: a.userId || null,
          onDisk: filesData?.diskFiles?.includes(filename) ?? false,
        });
      }
    });
  });
  return result;
}

async function copyFileToClipboard(filename, btn) {
  const orig = btn.textContent;
  btn.disabled = true;
  try {
    const res = await fetch('/api/clipboard', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ filename }),
    });
    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      showToast(err.error === 'File not found' ? t.fileMissing : t.toastClipboardFail, 'error');
      btn.disabled = false;
      return;
    }
    btn.textContent = '✓';
    showToast(t.toastClipboardOk);
    setTimeout(() => { btn.textContent = orig; btn.disabled = false; }, 1500);
  } catch {
    showToast(t.toastClipboardFail, 'error');
    btn.disabled = false;
  }
}

function renderLocationFilesHTML(client, location) {
  const files = getFilesForLocation(client.id, location.id);
  if (!files.length) return `<p class="list-empty">${t.noFilesAssigned}</p>`;
  return files.map(({ filename, displayName, userId, onDisk }) => {
    const user = userId ? location.users.find((u) => u.id === userId) : null;
    const userTag = user ? `<span class="file-user-tag">${escapeHtml(user.username)}</span>` : '';
    if (!onDisk) {
      return `
        <div class="file-row">
          <span class="loc-file-name">${escapeHtml(displayName)}</span>
          ${userTag}
          <span class="file-missing-badge">${t.fileMissing}</span>
        </div>`;
    }
    return `
      <div class="file-row">
        <span class="loc-file-name">${escapeHtml(displayName)}</span>
        ${userTag}
        <button class="btn-copy copy-file-btn" data-filename="${escapeHtml(filename)}">${t.btnCopyFile}</button>
      </div>`;
  }).join('');
}

// ---- Sweep ----

async function sweepAllPending() {
  if (!appData) return;
  if (!await showConfirm(t.confirmSweep)) return;
  appData.clients.forEach((client) => {
    client.status = 'pending';
    client.locations.forEach((loc) => {
      loc.users.forEach((user) => { user.status = 'pending'; });
    });
  });
  saveData();
  render();
}

// ---- Render ----

function render() {
  renderClientList();
  renderMainPanel();
  renderServerList();
  renderFilesBadge();
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
    .map((c) => {
      const status = c.status || 'pending';
      return `
        <div class="client-item ${c.id === selectedClientId ? 'active' : ''}${status === 'closed' ? ' status-closed' : ''}" data-client-id="${c.id}">
          <button class="status-icon status-${status}" data-client-id="${c.id}" title="${getStatusLabel(status)}">${STATUS_ICONS[status]}</button>
          <span class="client-name">${escapeHtml(c.name)}</span>
        </div>
      `;
    })
    .join('');

  list.querySelectorAll('.client-item').forEach((item) => {
    item.onclick = () => selectClient(item.dataset.clientId);
  });

  list.querySelectorAll('.status-icon').forEach((icon) => {
    icon.onclick = (e) => {
      e.stopPropagation();
      const client = appData.clients.find((c) => c.id === icon.dataset.clientId);
      if (!client) return;
      showStatusDropdown(icon, client.status || 'pending', (newStatus) => {
        client.status = newStatus;
        client.locations.forEach((loc) => {
          loc.users.forEach((user) => { user.status = newStatus; });
        });
        saveData(true);
        render();
      });
    };
  });
}

function selectClient(id) {
  showingFileMgr = false;
  selectedClientId = id;
  const client = appData.clients.find((c) => c.id === id);
  selectedLocationId = client?.locations[0]?.id || null;
  closeSidebar();
  render();
}

function renderServerList() {
  const list = document.getElementById('server-list');
  if (!list) return;

  if (!serversData.length) {
    list.innerHTML = `<p class="list-empty" style="padding:8px 14px">${t.noServersYet}</p>`;
    return;
  }

  list.innerHTML = serversData
    .map((s) => `
      <div class="server-item" data-server-id="${s.id}">
        <div class="server-info">
          <span class="server-label-text">${escapeHtml(s.label)}</span>
          <span class="server-address-text">${escapeHtml(s.address)}</span>
        </div>
        <div class="server-actions">
          <button class="btn-copy copy-server-btn" data-address="${escapeHtml(s.address)}" title="${t.tooltipCopy}">⧉</button>
          <button class="btn-sm admin-only edit-server-btn" data-server-id="${s.id}">${t.btnEdit}</button>
          <button class="btn-danger-sm admin-only delete-server-btn" data-server-id="${s.id}" title="${t.tooltipDelete}">✕</button>
        </div>
      </div>
    `)
    .join('');

  list.querySelectorAll('.copy-server-btn').forEach((btn) => {
    btn.onclick = () => copyToClipboard(btn.dataset.address, btn);
  });
  list.querySelectorAll('.edit-server-btn').forEach((btn) => {
    btn.onclick = () => editServer(btn.dataset.serverId);
  });
  list.querySelectorAll('.delete-server-btn').forEach((btn) => {
    btn.onclick = () => deleteServer(btn.dataset.serverId);
  });
}

function renderMainPanel() {
  if (showingFileMgr) { renderFileManager(); return; }

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
        <button class="btn-copy copy-cert-btn" data-cert-id="${cert.id}" title="${t.tooltipCopy}" ${!cert.password ? 'disabled' : ''}>⧉</button>
        <button class="btn-sm admin-only edit-cert-btn" data-cert-id="${cert.id}">${t.btnEdit}</button>
        <button class="btn-danger-sm admin-only delete-cert-btn" data-cert-id="${cert.id}" title="${t.tooltipDelete}">✕</button>
      </div>
      ${histCount > 0 ? `<div class="cert-hist-row"><button class="btn-sm toggle-cert-hist-btn" data-cert-id="${cert.id}">${t.btnOldPasswords(histCount)}</button></div>` : ''}
      <div class="cert-history hidden" id="cert-history-${cert.id}">
        <div class="history-row">
          <span class="history-row-label">${t.labelCurrent}</span>
          <span class="history-value">${cert.password ? (passwordsVisible ? escapeHtml(cert.password) : '••••••••') : `<em style="color:var(--text-muted)">${t.certNone}</em>`}</span>
          ${cert.password ? `<button class="btn-copy copy-cert-current-btn" data-cert-id="${cert.id}" title="${t.tooltipCopy}">⧉</button>` : ''}
        </div>
        ${histCount ? `
          <div class="history-prev-list">
            ${cert.history.map((h) => `
              <div class="history-prev-item">
                <span class="history-row-label" style="font-size:11px;color:var(--text-muted)">${t.labelPreviously}</span>
                <span class="history-value">${passwordsVisible ? escapeHtml(h.password) : '••••••••'}</span>
                <button class="btn-copy copy-cert-hist-btn" data-cert-id="${cert.id}" data-password="${escapeHtml(h.password)}" title="${t.tooltipCopy}">⧉</button>
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
        <button class="btn-sm admin-only" id="rename-location-btn">${t.btnEdit}</button>
        ${
          client.locations.length > 1
            ? `<button class="btn-danger-sm admin-only" id="delete-location-btn" title="${t.tooltipDelete}">✕</button>`
            : ''
        }
      </div>

      <div class="cert-section">
        <div class="section-header">
          <h3>${t.sectionCerts}</h3>
          <button class="btn-sm admin-only" id="add-cert-btn">${t.addCertBtn}</button>
        </div>
        ${location.certs.length === 0 ? `<p class="list-empty">${t.noCertsYet}</p>` : ''}
        ${location.certs.map((cert) => renderCertRowHTML(cert)).join('')}
      </div>

      <div class="location-files-section">
        <div class="section-header">
          <h3>${t.sectionFiles}</h3>
        </div>
        ${renderLocationFilesHTML(client, location)}
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
  const status = user.status || 'pending';
  return `
    <div class="user-row${status === 'closed' ? ' status-closed' : ''}" data-user-id="${user.id}">
      <div class="user-card">
        <div class="user-status-row">
          <button class="status-icon status-${status} open-status-dropdown" title="${getStatusLabel(status)}">${STATUS_ICONS[status]}</button>
          <span class="user-status-text status-text-${status}">${t.statusLabel} ${getStatusLabel(status)}</span>
        </div>
        <div class="user-creds">
          <div class="user-cred-item${lastCopied === `user-${user.id}-username` ? ' copy-highlight' : ''}" data-copy-key="user-${user.id}-username">
            <span class="cred-label">${t.credUser}</span>
            <span class="cred-value">${escapeHtml(user.username)}</span>
            <button class="btn-copy copy-username-btn" title="${t.tooltipCopy} ${t.labelUsername}">⧉</button>
          </div>
          <div class="user-cred-item${lastCopied === `user-${user.id}-password` ? ' copy-highlight' : ''}" data-copy-key="user-${user.id}-password">
            <span class="cred-label">${t.credPass}</span>
            <span class="cred-value">${passwordsVisible ? escapeHtml(user.currentPassword) : '••••••••'}</span>
            <button class="btn-copy copy-password-btn" title="${t.tooltipCopy} ${t.labelPassword}">⧉</button>
          </div>
        </div>
        <div class="user-corner-actions">
          <button class="btn-sm edit-user-btn admin-only">${t.btnEdit}</button>
          <button class="btn-danger-sm delete-user-btn admin-only" title="${t.tooltipDelete}">✕</button>
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
          <button class="btn-copy copy-history-btn" data-password="${escapeHtml(user.currentPassword)}" title="${t.tooltipCopy}">⧉</button>
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
                <button class="btn-copy copy-history-btn" data-password="${escapeHtml(h.password)}" title="${t.tooltipCopy}">⧉</button>
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

  document.querySelector('.location-files-section').addEventListener('click', (e) => {
    if (e.target.classList.contains('copy-file-btn')) {
      copyFileToClipboard(e.target.dataset.filename, e.target);
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
    } else if (e.target.classList.contains('open-status-dropdown')) {
      showStatusDropdown(e.target, user.status || 'pending', (newStatus) => {
        user.status = newStatus;
        const allUsers = client.locations.flatMap((loc) => loc.users);
        const statuses = [...new Set(allUsers.map((u) => u.status || 'pending'))];
        client.status = statuses.length === 1 ? statuses[0] : 'pending';
        saveData(true);
        render();
      });
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
        status: 'pending',
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

async function deleteClient(clientId) {
  const client = appData.clients.find((c) => c.id === clientId);
  if (!await showConfirm(t.confirmDeleteClient(client.name), true)) return;
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

async function deleteLocation(clientId, locationId) {
  const client = appData.clients.find((c) => c.id === clientId);
  if (client.locations.length <= 1) return;
  const loc = client.locations.find((l) => l.id === locationId);
  if (!await showConfirm(t.confirmDeleteLocation(loc.name), true)) return;
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

async function deleteCert(clientId, locationId, certId) {
  const client = appData.clients.find((c) => c.id === clientId);
  const loc = client.locations.find((l) => l.id === locationId);
  const cert = loc.certs.find((c) => c.id === certId);
  if (!await showConfirm(t.confirmDeleteCert(cert.label), true)) return;
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
        status: 'pending',
      });
      const allUsers = client.locations.flatMap((l) => l.users);
      const statuses = [...new Set(allUsers.map((u) => u.status || 'pending'))];
      client.status = statuses.length === 1 ? statuses[0] : 'pending';
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

async function deleteUser(clientId, locationId, userId) {
  const client = appData.clients.find((c) => c.id === clientId);
  const loc = client.locations.find((l) => l.id === locationId);
  const user = loc.users.find((u) => u.id === userId);
  if (!await showConfirm(t.confirmDeleteUser(user.username), true)) return;
  loc.users = loc.users.filter((u) => u.id !== userId);
  saveData();
  renderMainPanel();
}

// ---- Server CRUD ----

function addServer() {
  showModal(
    t.modalAddServer,
    `
    <div class="form-group">
      <label>${t.labelServerLabel}</label>
      <input type="text" id="f-server-label" placeholder="${t.phServerLabel}" autocomplete="off">
    </div>
    <div class="form-group">
      <label>${t.labelServerAddress}</label>
      <input type="text" id="f-server-address" placeholder="${t.phServerAddress}" autocomplete="off">
    </div>
    `,
    async () => {
      const label = document.getElementById('f-server-label').value.trim();
      const address = document.getElementById('f-server-address').value.trim();
      if (!label) { showToast(t.toastNameRequired, 'error'); return false; }
      if (!address) { showToast(t.toastAddressRequired, 'error'); return false; }
      serversData.push({ id: generateId(), label, address });
      await saveServers();
      renderServerList();
    },
  );
}

function editServer(serverId) {
  const server = serversData.find((s) => s.id === serverId);
  if (!server) return;
  showModal(
    t.modalEditServer,
    `
    <div class="form-group">
      <label>${t.labelServerLabel}</label>
      <input type="text" id="f-server-label" value="${escapeHtml(server.label)}" autocomplete="off">
    </div>
    <div class="form-group">
      <label>${t.labelServerAddress}</label>
      <input type="text" id="f-server-address" value="${escapeHtml(server.address)}" autocomplete="off">
    </div>
    `,
    async () => {
      const label = document.getElementById('f-server-label').value.trim();
      const address = document.getElementById('f-server-address').value.trim();
      if (!label) { showToast(t.toastNameRequired, 'error'); return false; }
      if (!address) { showToast(t.toastAddressRequired, 'error'); return false; }
      server.label = label;
      server.address = address;
      await saveServers();
      renderServerList();
    },
  );
}

async function deleteServer(serverId) {
  const server = serversData.find((s) => s.id === serverId);
  if (!server) return;
  if (!await showConfirm(t.confirmDeleteServer(server.label), true)) return;
  serversData = serversData.filter((s) => s.id !== serverId);
  saveServers();
  renderServerList();
}

// ---- Export / Import ----

function exportJson() {
  fetch('/api/export')
    .then(async (res) => {
      if (!res.ok) throw new Error();
      const blob = await res.blob();
      const disposition = res.headers.get('Content-Disposition') || '';
      const filename = disposition.match(/filename="(.+?)"/)?.[1] || 'credentials.json';
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    })
    .catch(() => showToast(t.toastImportFail, 'error'));
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

    if (!await showConfirm(msg)) return;

    migrateClients(incomingClients);

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
  await loadServers();
  await loadFiles();
  render();

  document.getElementById('admin-btn').onclick = () =>
    isAdminMode ? exitAdminMode() : enterAdminMode();

  document.getElementById('sweep-btn').onclick = sweepAllPending;

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
  document.getElementById('add-server-btn').onclick = addServer;
  document.getElementById('file-manager-btn').onclick = () => {
    if (!isAdminMode) return;
    showingFileMgr = true;
    selectedClientId = null;
    selectedLocationId = null;
    closeSidebar();
    renderMainPanel();
    renderFilesBadge();
  };
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

  document.getElementById('right-panel-btn').onclick = () => {
    document.getElementById('right-panel').classList.contains('open')
      ? closeRightPanel()
      : openRightPanel();
  };
  document.getElementById('right-panel-close').onclick = closeRightPanel;
  document.getElementById('right-panel-overlay').onclick = closeRightPanel;

  document.getElementById('modal-overlay').onclick = (e) => {
    if (e.target.id === 'modal-overlay') closeModal();
  };

  setInterval(() => fetch('/api/ping').catch(() => {}), 2 * 60 * 1000);
}

init();
