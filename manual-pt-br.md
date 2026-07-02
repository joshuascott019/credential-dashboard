# Credential Dashboard — Manual do Usuário

> *Tradução gerada por IA. Em caso de dúvida, consulte o manual em inglês (`manual-en.md`).*

---

## 1. O que é este app?

O Credential Dashboard é uma ferramenta local para armazenar e acessar credenciais de clientes — nomes de usuário, senhas e senhas de certificado. Em vez de procurar em arquivos de texto, você abre o app, encontra o cliente e copia a credencial que precisa com um clique.

Todos os dados são criptografados no seu computador. Uma senha mestra é exigida toda vez que você abre o app.

---

## 2. Iniciando o app

1. Dê um duplo clique em **`launch.bat`** na pasta do app.
2. Uma janela de terminal abrirá — deixe-a aberta em segundo plano.
3. O navegador abrirá automaticamente em `http://localhost:3000`.
4. O app solicitará sua senha mestra antes de exibir qualquer dado.

> **Observação:** Na primeira execução, o app instalará as dependências automaticamente. Isso leva cerca de um minuto e ocorre apenas uma vez.

## 3. Encerrando o app

Basta fechar a aba ou a janela do navegador. O servidor detecta que o navegador não está mais ativo e se desliga automaticamente após **30 minutos de inatividade**.

Não é necessário localizar ou fechar a janela do terminal — ela se fechará sozinha.

Se precisar encerrar o servidor imediatamente, feche a janela do terminal manualmente ou encerre o processo `node.exe` no Gerenciador de Tarefas.

---

## 4. Configuração inicial (criptografia)

Na primeira vez que o app iniciar, ele solicitará que você crie uma senha mestra. Essa senha criptografa todos os seus dados.

1. Digite uma senha forte no primeiro campo.
2. Digite novamente no campo **Confirmar Senha**.
3. Clique em **Criptografar e Continuar**.

O app criptografará os dados existentes e os salvará. A partir desse momento, a senha mestra será exigida toda vez que o app for aberto.

> **Importante:** Não há opção de "esqueci a senha". Se a senha mestra for perdida, os dados não poderão ser recuperados. Guarde-a em local seguro e certifique-se de que seus colegas também a conheçam.

---

## 5. Desbloqueando o app

Toda vez que você abrir o app, uma tela de senha aparecerá antes de qualquer dado ser exibido.

1. Digite sua senha mestra.
2. Clique em **Desbloquear** (ou pressione `Enter`).

Se a senha estiver correta, o app carregará os dados. Se não, uma mensagem de erro aparecerá e você poderá tentar novamente. A tela não pode ser fechada — é obrigatório digitar a senha correta para continuar.

---

## 6. Navegando pelo app

O app possui duas áreas principais:

- **Barra lateral (esquerda):** lista todos os clientes. Clique em um cliente para ver suas credenciais.
- **Painel principal (direita):** exibe os locais, a senha do certificado e os usuários do cliente selecionado.

Em telas estreitas (ou quando a janela está comprimida ao lado do monitor), a barra lateral fica recolhida. Use o botão **≡** no canto superior esquerdo para abri-la.

As **abas de localização** aparecem abaixo do nome do cliente. Se um cliente tem múltiplos locais (ex: Matriz, Filial), clique na aba para alternar entre eles.

**Ordenação** — o botão **↕** no cabeçalho da barra lateral ordena a lista de clientes; o mesmo botão na seção Usuários ordena os usuários. Clique para alternar: sem ordenação → A–Z → Z–A.

**Badge de versão** — exibido no cabeçalho. Mostra o formato `clientes-locais-usuários.salvamento` (por exemplo, `2-3-12.38`). Os três primeiros números indicam quantos clientes, locais e usuários existem no arquivo. O número após o ponto é um contador sequencial de salvamentos e é o identificador único real — quanto maior, mais recente é o arquivo.

---

## 7. Copiando credenciais

Cada credencial tem um botão **⧉** à sua direita. Clique nele para copiar o valor para a área de transferência.

- O botão exibe brevemente **✓** para confirmar a cópia.
- Os botões de cópia estão disponíveis tanto no modo leitura quanto no modo admin.

Use o botão **Visível/Oculto** no cabeçalho para exibir ou ocultar todas as senhas (certificado e usuário) no app de uma vez. A linha da última credencial copiada é destacada com um realce verde para confirmar qual valor foi copiado.

---

## 8. Modo administrador

Por padrão, o app abre em **modo leitura** — você pode visualizar e copiar credenciais, mas não pode fazer alterações. Isso previne edições acidentais.

Para fazer alterações, é necessário ativar o modo admin:

1. Clique no botão **Admin** no canto superior direito do cabeçalho. Ele aparece apagado/cinza quando inativo.
2. Um modal de confirmação aparece, avisando que você está entrando no modo de edição.
3. Digite sua **senha mestra** no campo indicado.
4. Clique em **Entrar no Modo Admin**.

Quando o modo admin está ativo, o botão Admin fica vermelho e a borda do cabeçalho muda para vermelho — um indicador visual claro de que você está no modo de edição.

Para sair do modo admin, clique no botão **Admin** novamente. Não é necessária confirmação para sair.

> **Sistema de honra:** Apenas uma pessoa deve estar no modo admin por vez. Combine com seus colegas antes de fazer alterações.

---

## 9. Gerenciando clientes

> Requer modo admin.

**Adicionar um cliente:**
Clique no botão **+** no topo da barra lateral. Digite o nome do cliente e clique em Salvar. Uma localização padrão "Matriz" é criada automaticamente.

**Renomear um cliente:**
Selecione o cliente e clique em **Editar** ao lado do nome do cliente no cabeçalho do painel principal.

**Excluir um cliente:**
Selecione o cliente e clique em **✕** ao lado do nome. Isso exclui o cliente e todos os seus locais, usuários e credenciais — essa ação não pode ser desfeita.

---

## 10. Gerenciando localizações

> Requer modo admin.

Cada cliente pode ter uma ou mais localizações. Elas aparecem como abas abaixo do nome do cliente.

**Adicionar uma localização:**
Clique na aba **+** (última aba à direita) enquanto um cliente estiver selecionado.

**Renomear uma localização:**
Clique em **Editar** na barra de ações da localização (abaixo das abas).

**Excluir uma localização:**
Clique em **✕** na barra de ações da localização. Um cliente deve ter pelo menos uma localização — o botão de exclusão fica oculto quando há apenas uma.

---

## 11. Gerenciando usuários

> Requer modo admin.

Os usuários pertencem a uma localização específica. Cada usuário tem um nome de usuário e uma senha.

**Adicionar um usuário:**
Clique em **+ Adicionar Usuário** na seção Usuários do painel de localização.

**Editar um usuário:**
Clique em **Editar** no cartão do usuário. Você pode atualizar o nome de usuário e definir uma nova senha. Deixe o campo de senha em branco para manter a atual.

**Excluir um usuário:**
Clique em **✕** no cartão do usuário. Essa ação não pode ser desfeita.

> Quando uma senha é alterada, a senha antiga é salva automaticamente no histórico de senhas do usuário.

---

## 12. Certificados

> A edição requer modo admin. Visualização e cópia estão disponíveis no modo leitura.

Cada local pode ter múltiplos certificados, cada um identificado por um rótulo (ex: Principal, Admin, VPN). Os certificados são listados na seção de cert no topo do painel de localização.

**Adicionar um certificado:**
Clique em **+ Adicionar Cert.** (visível no modo admin). Digite um rótulo e, opcionalmente, uma senha, depois clique em Salvar.

**Editar um certificado:**
Clique em **Editar** na linha do certificado. Você pode atualizar o rótulo e definir uma nova senha. Deixe o campo de senha em branco para manter a atual. A senha anterior é salva no histórico automaticamente.

**Excluir um certificado:**
Clique em **✕** na linha do certificado. Essa ação não pode ser desfeita.

**Ver histórico da senha do certificado:**
Clique em **Senhas Antigas** na linha do certificado para expandir o painel de histórico.

---

## 13. Arquivos

> Visualização e cópia estão disponíveis no modo leitura. As atribuições são gerenciadas pelo Gerenciador de Arquivos (consulte a seção 14, requer modo admin).

Cada local pode ter um ou mais arquivos associados — geralmente arquivos de certificado que precisam ser transferidos para uma sessão remota. Os arquivos atribuídos aparecem na seção **Arquivos** do painel de localização, entre Certificados e Usuários.

**Copiando um arquivo para a área de transferência:**
Clique em **Copiar Arquivo** ao lado do nome do arquivo. O app pede ao servidor para copiar o arquivo para a área de transferência do Windows como objeto de arquivo — equivalente a clicar com o botão direito em um arquivo no Explorador de Arquivos e escolher Copiar. Você pode então colá-lo (Ctrl+V) diretamente no Explorador de Arquivos, inclusive dentro de uma sessão RDP com redirecionamento de área de transferência de arquivos ativado.

O botão exibe brevemente **✓** para confirmar. Se o arquivo foi removido da pasta `files/`, uma badge **Arquivo ausente** aparece no lugar do botão de cópia. A atribuição é mantida mesmo que o arquivo esteja temporariamente ausente.

Se um arquivo for atribuído especificamente a um usuário dentro do local (em vez de ao local como um todo), uma pequena tag de usuário aparece ao lado do nome do arquivo.

---

## 14. Gerenciador de Arquivos

> Requer modo admin.

O Gerenciador de Arquivos é acessado pelo botão **Gerenciador de Arquivos** na seção **Arquivos** da barra lateral. Ele fica desativado no modo leitura. Ao clicar, o painel principal é substituído pela visualização de gerenciamento de arquivos.

O Gerenciador de Arquivos lista todos os arquivos encontrados na pasta `files/` dentro do diretório do app, divididos em dois grupos:

- **Não atribuídos** — arquivos que ainda não foram atribuídos a nenhum local.
- **Atribuídos** — arquivos atribuídos a pelo menos um local.

Uma **badge laranja** ao lado de "Arquivos" na barra lateral mostra quantos arquivos estão sem atribuição.

**Adicionando arquivos:**
Os arquivos devem ser colocados manualmente na pasta `files/` dentro do diretório do app. O app não faz upload de arquivos — basta copiar ou mover seus arquivos de certificado para lá e eles aparecerão no Gerenciador de Arquivos na próxima vez que for aberto.

**Atribuindo um arquivo:**
Clique em **Atribuir** (ou **Reatribuir** para um arquivo que já tem atribuições) em qualquer linha. Um modal abre com:

- **Nome de exibição** — um rótulo opcional exibido no lugar do nome real do arquivo. Deixe em branco para exibir o nome do arquivo como está.
- **Hierarquia de atribuição** — uma árvore de todos os clientes, locais e usuários. Marque as caixas para definir onde este arquivo aparece:
  - Marque um **local** para atribuir o arquivo a todos naquele local.
  - Marque **usuários** individuais dentro de um local para atribuir o arquivo apenas a usuários específicos.
  - Marque um **cliente** para atribuir a todos os locais daquele cliente de uma vez.

Marcar um pai marca automaticamente todos os filhos. Desmarcar um pai desmarca todos os filhos. Os filhos podem ser marcados independentemente sem afetar o pai.

Clique em **Salvar** para confirmar. As atribuições são criptografadas com sua senha mestra e armazenadas em `data/files.json`.

---

## 15. Histórico de senhas

O histórico de senhas está disponível para usuários e senhas de certificado. Exibe cada senha antiga e a data em que foi alterada.

- Para usuários: clique em **Senhas Antigas (n)** no canto inferior direito do cartão do usuário para expandir.
- Para certificados: clique em **Senhas Antigas (n)** na linha do certificado.

Cada entrada tem um botão **⧉** para copiar.

O botão de histórico fica oculto se não houver histórico ainda.

---

## 16. Exportando o arquivo de dados

Clique em **Exportar** no cabeçalho para baixar o arquivo `credentials.json` atual. O arquivo é criptografado — não pode ser lido sem a senha mestra.

Use isso para compartilhar seus dados com um colega, criar um backup ou transferir dados para outro computador.

---

## 17. Imprimindo e copiando credenciais

**Imprimir tudo:** Clique em **Imprimir** no cabeçalho para gerar e baixar um arquivo `.txt` formatado com todas as credenciais em texto simples.

**Imprimir um cliente:** Selecione um cliente e clique em **Imprimir** ao lado do nome do cliente no painel principal. Isso baixa um arquivo somente para aquele cliente.

**Copiar um cliente:** Clique em **Copiar** ao lado do botão Imprimir para copiar as credenciais do cliente diretamente para a área de transferência — sem baixar nenhum arquivo. Útil para colar em uma mensagem ou documento.

O resultado usa o idioma atualmente selecionado. Senhas que contêm espaços são exibidas entre aspas (ex: `"minha senha "`).

> Os arquivos de impressão são em texto simples (não criptografados) por design — são para leitura, não para armazenamento.

---

## 18. Importando um arquivo

> Requer modo admin.

Para receber um arquivo atualizado de um colega:

1. Clique em **Importar** no cabeçalho.
2. Selecione o arquivo `.json`.
3. O app compara o número de versão recebido com sua versão atual e pede confirmação.
4. Confirme para substituir seus dados locais pelo arquivo importado.

Se os números de versão forem diferentes, o app informará qual arquivo é mais recente antes de pedir confirmação.

> Se o arquivo foi criptografado com uma senha mestra diferente, o app solicitará que você a informe. Após a descriptografia, os dados são automaticamente re-criptografados com a sua própria senha. Não será necessário informar a senha do outro arquivo novamente.

---

## 19. Compartilhando arquivos com colegas

O fluxo recomendado para uma equipe que compartilha esta ferramenta:

1. Uma pessoa (o "admin") faz as alterações e clica em **Exportar**.
2. O arquivo exportado é enviado ao colega (ex: via pasta compactada no WhatsApp).
3. O colega abre seu app, clica em **Importar**, seleciona o arquivo e confirma.
4. Ambos os usuários terão os mesmos dados.

**A senha mestra nunca é enviada com o arquivo.** Cada pessoa pode usar sua própria senha. Se um colega importar um arquivo criptografado com uma senha diferente, o app solicitará que ele a informe uma vez — após isso, os dados ficam armazenados sob a senha própria dele automaticamente.

---

## 20. Alterando o idioma

Clique no menu suspenso **Idioma** no cabeçalho e selecione **Português** ou **English**. Sua preferência é salva no navegador e será lembrada na próxima vez que abrir o app.

---

## 21. Notas de segurança

- **A senha mestra nunca é armazenada em nenhum lugar.** Ela existe apenas na memória enquanto o app está aberto. Fechar a aba a apaga.
- **O arquivo criptografado é seguro para compartilhar.** Sem a senha mestra, o conteúdo do arquivo é ilegível.
- **Arquivos de impressão/TXT não são criptografados.** Trate-os como documentos sensíveis — não os deixe sem proteção.
- **Não há recuperação de senha.** Se a senha mestra for perdida, os dados não poderão ser descriptografados. Mantenha um backup e certifique-se de que todos os colegas conheçam a senha.
- **O modo admin não é um bloqueio de segurança.** Qualquer pessoa pode clicar no botão Admin. Seu objetivo é prevenir edições acidentais, não controlar o acesso.
