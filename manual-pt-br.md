# Credential Dashboard — Manual do Usuário

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

**Badge de versão** — exibido no cabeçalho. Mostra o formato `clientes-locais-usuários.salvamento` (por exemplo, `2-3-12.38`). Os três primeiros números indicam quantos clientes, locais e usuários existem no arquivo. O número após o ponto é um contador sequencial de salvamentos e é o identificador único real — quanto maior, mais recente é o arquivo.

---

## 7. Copiando credenciais

Cada credencial tem um botão **⧉** à sua direita. Clique nele para copiar o valor para a área de transferência.

- O botão exibe brevemente **✓** para confirmar a cópia.
- Os botões de cópia estão disponíveis tanto no modo leitura quanto no modo admin.

A senha do certificado é mascarada (••••••••) na visualização principal, mas fica visível no painel de histórico.

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

## 12. Senhas de certificado

> A edição requer modo admin. Visualização e cópia estão disponíveis no modo leitura.

Cada localização tem um campo de senha de certificado, exibido no topo do painel de localização.

**Editar a senha do certificado:**
Clique em **Editar** ao lado do campo de senha do certificado. Digite a nova senha e clique em Salvar. A senha anterior é salva no histórico automaticamente.

**Ver histórico da senha do certificado:**
Clique no botão **Senhas Antigas** na linha da senha do certificado para expandir o painel de histórico.

---

## 13. Histórico de senhas

O histórico de senhas está disponível para usuários e senhas de certificado. Exibe cada senha antiga e a data em que foi alterada.

- Para usuários: clique em **Senhas Antigas (n)** no canto inferior direito do cartão do usuário para expandir.
- Para senhas de certificado: clique em **Senhas Antigas (n)** na linha da senha do certificado.

Cada entrada tem um botão **⧉** para copiar.

O botão de histórico fica oculto se não houver histórico ainda.

---

## 14. Exportando o arquivo de dados

Clique em **Exportar** no cabeçalho para baixar o arquivo `credentials.json` atual. O arquivo é criptografado — não pode ser lido sem a senha mestra.

Use isso para compartilhar seus dados com um colega, criar um backup ou transferir dados para outro computador.

---

## 15. Imprimindo e copiando credenciais

**Imprimir tudo:** Clique em **Imprimir** no cabeçalho para gerar e baixar um arquivo `.txt` formatado com todas as credenciais em texto simples.

**Imprimir um cliente:** Selecione um cliente e clique em **Imprimir** ao lado do nome do cliente no painel principal. Isso baixa um arquivo somente para aquele cliente.

**Copiar um cliente:** Clique em **Copiar** ao lado do botão Imprimir para copiar as credenciais do cliente diretamente para a área de transferência — sem baixar nenhum arquivo. Útil para colar em uma mensagem ou documento.

O resultado usa o idioma atualmente selecionado. Senhas que contêm espaços são exibidas entre aspas (ex: `"minha senha "`).

> Os arquivos de impressão são em texto simples (não criptografados) por design — são para leitura, não para armazenamento.

---

## 16. Importando um arquivo

> Requer modo admin.

Para receber um arquivo atualizado de um colega:

1. Clique em **Importar** no cabeçalho.
2. Selecione o arquivo `.json`.
3. O app compara o número de versão recebido com sua versão atual e pede confirmação.
4. Confirme para substituir seus dados locais pelo arquivo importado.

Se os números de versão forem diferentes, o app informará qual arquivo é mais recente antes de pedir confirmação.

> Se o arquivo foi criptografado com uma senha mestra diferente, o app solicitará que você a informe. Após a descriptografia, os dados são automaticamente re-criptografados com a sua própria senha. Não será necessário informar a senha do outro arquivo novamente.

---

## 17. Compartilhando arquivos com colegas

O fluxo recomendado para uma equipe que compartilha esta ferramenta:

1. Uma pessoa (o "admin") faz as alterações e clica em **Exportar**.
2. O arquivo exportado é enviado ao colega (ex: via pasta compactada no WhatsApp).
3. O colega abre seu app, clica em **Importar**, seleciona o arquivo e confirma.
4. Ambos os usuários terão os mesmos dados.

**A senha mestra nunca é enviada com o arquivo.** Cada pessoa pode usar sua própria senha. Se um colega importar um arquivo criptografado com uma senha diferente, o app solicitará que ele a informe uma vez — após isso, os dados ficam armazenados sob a senha própria dele automaticamente.

---

## 18. Alterando o idioma

Clique no menu suspenso **Idioma** no cabeçalho e selecione **Português** ou **English**. Sua preferência é salva no navegador e será lembrada na próxima vez que abrir o app.

---

## 19. Notas de segurança

- **A senha mestra nunca é armazenada em nenhum lugar.** Ela existe apenas na memória enquanto o app está aberto. Fechar a aba a apaga.
- **O arquivo criptografado é seguro para compartilhar.** Sem a senha mestra, o conteúdo do arquivo é ilegível.
- **Arquivos de impressão/TXT não são criptografados.** Trate-os como documentos sensíveis — não os deixe sem proteção.
- **Não há recuperação de senha.** Se a senha mestra for perdida, os dados não poderão ser descriptografados. Mantenha um backup e certifique-se de que todos os colegas conheçam a senha.
- **O modo admin não é um bloqueio de segurança.** Qualquer pessoa pode clicar no botão Admin. Seu objetivo é prevenir edições acidentais, não controlar o acesso.
