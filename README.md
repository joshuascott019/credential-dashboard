# Credential Dashboard

---

## Português

> *Tradução gerada por IA. Em caso de dúvida, consulte a versão em inglês abaixo.*

### O que é

Um painel local para gerenciar credenciais de clientes — usuários, senhas e senhas de certificado. Feito para uso interno, permite visualizar e copiar credenciais com um clique, sem precisar abrir arquivos de texto. Os dados são protegidos por criptografia AES-256-GCM com senha mestra.

### Como iniciar

1. Certifique-se de ter o [Node.js](https://nodejs.org) instalado.
2. Dê um duplo clique em **`launch.bat`**.
3. O navegador abrirá automaticamente em `http://localhost:3000`.

> Na primeira execução, as dependências serão instaladas automaticamente.

O servidor encerra automaticamente após **30 minutos de inatividade** — ou seja, basta fechar o navegador e o servidor se desligará sozinho. Não é necessário encerrar manualmente.

### Funcionalidades

- **Criptografia** — dados protegidos com AES-256-GCM. Uma senha mestra é exigida para desbloquear o app.
- **Modo leitura / Modo admin** — o app abre somente leitura por padrão. O modo admin requer confirmação e a senha mestra para ser ativado.
- **Clientes** — cadastre e gerencie múltiplos clientes na barra lateral.
- **Locais** — cada cliente pode ter um ou mais locais (ex: Matriz, Filial).
- **Usuários** — cada local possui seus próprios usuários com nome de usuário e senha.
- **Senha do certificado** — armazenada por local, com histórico de alterações.
- **Histórico de senhas** — senhas antigas ficam salvas automaticamente ao alterar.
- **Copiar com um clique** — botão ⧉ ao lado de cada credencial copia para a área de transferência.
- **Copiar cliente** — botão Copiar ao lado de Imprimir copia todas as credenciais do cliente para a área de transferência em texto simples.
- **Exportar / Importar** — compartilhe o arquivo JSON com colegas. Conflitos de versão são detectados automaticamente. Se o arquivo importado foi criptografado com uma senha diferente, o app solicita essa senha e re-criptografa com a sua própria automaticamente.
- **Versão identificada** — o badge de versão exibe `clientes-locais-usuários.salvamento` (ex: `2-3-12.38`), mostrando o estado exato do arquivo carregado.
- **Imprimir** — gera um arquivo `.txt` formatado com todas as credenciais (ou de um cliente específico). Senhas com espaços são exibidas entre aspas.
- **Idioma** — suporte a Português (PT-BR) e Inglês. A preferência é salva localmente no navegador.

### Compartilhamento de arquivo

O arquivo de dados fica em `data/credentials.json` (criptografado). Cada vez que algo é salvo, a versão aumenta automaticamente. Para compartilhar com um colega:

1. Clique em **Exportar** (requer modo admin) para baixar o arquivo JSON atual.
2. Envie o arquivo para o colega.
3. O colega clica em **Importar**, seleciona o arquivo e confirma.
4. Se houver conflito de versão, o sistema avisará qual arquivo é mais recente.

> Se o arquivo foi criptografado com uma senha diferente da sua, o app solicitará essa senha no momento da importação. Os dados serão automaticamente re-criptografados com a sua própria senha — você só precisa informar a senha do arquivo uma única vez.

### Sistema de honra

Não há contas de usuário individuais. Recomenda-se que apenas uma pessoa edite os dados por vez. O modo admin exige a senha mestra para ser ativado, o que reduz o risco de edições acidentais.

### Estrutura de dados

```
Cliente
└── Local (ex: Matriz, Filial)
    ├── Senha do certificado
    └── Usuários
        ├── Nome de usuário
        ├── Senha atual
        └── Histórico de senhas
```

---

## Backlog / Planejamento futuro

### Alterar senha mestra

Adicionar um fluxo de interface para trocar a senha mestra: verificar senha atual → definir nova senha → re-criptografar todos os dados → salvar. Requer comunicar a nova senha a todos os colegas.

---

## English

### What it is

A local dashboard for managing client credentials — usernames, passwords, and certificate passwords. Built for internal use, it lets you view and copy credentials with one click instead of hunting through text files. All data is protected with AES-256-GCM encryption behind a master passphrase.

### How to start

1. Make sure [Node.js](https://nodejs.org) is installed.
2. Double-click **`launch.bat`**.
3. Your browser will open automatically at `http://localhost:3000`.

> On first run, dependencies will be installed automatically.

The server shuts down automatically after **30 minutes of inactivity** — just close the browser and it will stop on its own. No manual shutdown needed.

### Features

- **Encryption** — data protected with AES-256-GCM. A master passphrase is required to unlock the app.
- **Read-only / Admin mode** — the app opens read-only by default. Admin mode requires confirmation and the master passphrase to activate.
- **Clients** — add and manage multiple clients in the sidebar.
- **Locations** — each client can have one or more locations (e.g. Main, Branch).
- **Users** — each location has its own users with username and password.
- **Certificate password** — stored per location, with change history.
- **Password history** — old passwords are saved automatically when changed.
- **One-click copy** — ⧉ button next to each credential copies it to the clipboard.
- **Copy client** — Copy button next to Print copies all of a client's credentials to the clipboard in plain text.
- **Export / Import** — share the JSON file with coworkers. Version conflicts are detected automatically. If the incoming file was encrypted with a different passphrase, the app prompts for it and re-encrypts with your own — no passphrase coordination required upfront.
- **Identified version** — the version badge displays `clients-locations-users.save` (e.g. `2-3-12.38`), so you can verify the exact state of the loaded file at a glance.
- **Print** — generates a formatted `.txt` file with all credentials (or a specific client). Passwords containing spaces are shown in quotes.
- **Language** — supports English and Portuguese (PT-BR). Preference is saved locally in the browser.

### File sharing

The data file lives at `data/credentials.json` (encrypted). Every save increments the version number automatically. To share with a coworker:

1. Click **Export** (requires admin mode) to download the current JSON file.
2. Send the file to your coworker.
3. They click **Import**, select the file, and confirm.
4. If there's a version conflict, the app will show which file is newer.

> If the file was encrypted with a different passphrase, the app will prompt for it on import. The data is then re-encrypted with your own passphrase automatically — you only need to enter the other passphrase once.

### Honor system

There are no individual user accounts. Only one person should edit data at a time. Admin mode requires the master passphrase to activate, which reduces the risk of accidental edits.

### Data structure

```
Client
└── Location (e.g. Main, Branch)
    ├── Certificate password
    └── Users
        ├── Username
        ├── Current password
        └── Password history
```

---

## Backlog / Future plans

### Change master passphrase

Add a UI flow to change the master passphrase: verify current passphrase → set new passphrase → re-encrypt all data → save. Requires notifying all coworkers of the new passphrase.
