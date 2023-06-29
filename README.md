# Sistema de Cadastro de Eventos 📅📋
Este é um projeto de um Sistema de Cadastro de Eventos, desenvolvido utilizando React JS para o frontend, PHP no padrão MVC para o backend e banco de dados MySQL. O sistema permite o gerenciamento de usuários, eventos, inscrições, avaliações e autenticação de usuários.

## Ferramentas Utilizadas 🛠️
- [XAMPP](https://www.apachefriends.org/): Ambiente de desenvolvimento que inclui Apache, MySQL, PHP e Perl.
- [Visual Studio Code](https://code.visualstudio.com/): Editor de código-fonte utilizado para desenvolvimento do projeto.
- [Git](https://git-scm.com/): Sistema de controle de versão para rastrear as alterações no código-fonte.
- [Insomnia](https://insomnia.rest/): Ferramenta para testar e documentar APIs.

### Frontend:
- React JS v18
- Styled Components
- Yarn
- Vite
- Material Icons
- React Router DOM v6

### Backend:
- PHP
- MySQL

## Funcionalidades 🚀
### Usuários 👥
- Cadastro de usuários com informações como nome, e-mail e senha.
- Autenticação e autorização de usuários para realizar login no sistema.
- Diferenciação de tipos de usuários: organizador, participante e administrador.

### Eventos 🎉
- Cadastro de eventos com informações como título, descrição, data, hora, local, categoria, preço e imagens.
- Listagem de eventos na página inicial, destacando os eventos em destaque.
- Barra de pesquisa para filtrar eventos por título, categoria ou data.
- Página detalhada de um evento específico, exibindo todas as informações do evento, mapa de localização e opção de inscrição.
- Opção de criação de novos eventos.
- Opção de edição de eventos existentes.

### Inscrições 📝
- Gerenciamento de inscrições em eventos.
- Registro de informações sobre o usuário, evento e status do pagamento.
- Página de registro para novos usuários.
- Histórico de eventos do usuário, mostrando os eventos nos quais ele se inscreveu.

### Avaliações ⭐
- Gerenciamento de avaliações e comentários de eventos.
- Registro de informações sobre o usuário, evento, pontuação e texto do comentário.

### Administração 🧑‍💼
- Painel de administração para gerenciar eventos, inscrições, participantes e relatórios.
- Acesso restrito aos administradores do sistema.

## Estrutura do Projeto 🏗️
### Classes (PHP) 🖥️
- User.php: Classe responsável por gerenciar usuários e suas informações.
- Event.php: Classe responsável por gerenciar eventos e suas informações.
- Registration.php: Classe responsável por gerenciar inscrições e pagamentos de eventos.
- Review.php: Classe responsável por gerenciar avaliações e comentários de eventos.
- Authentication.php: Classe responsável por gerenciar a autenticação e autorização de usuários.

### Páginas (React JS) 🌐
- Home: Página inicial com uma lista de eventos em destaque e uma barra de pesquisa.
- EventList: Página com a lista de eventos filtrada por pesquisa e categorias.
- EventDetails: Página detalhada de um evento específico, incluindo informações completas, mapa e opção de inscrição.
- UserRegistration: Página de registro para novos usuários.
- UserLogin: Página de login para usuários existentes.
- UserProfile: Página de perfil do usuário, mostrando informações pessoais e histórico de eventos.
- CreateEvent: Página para criar um novo evento.
- EditEvent: Página para editar um evento existente.
- AdminDashboard: Página para gerenciar eventos, inscrições, participantes e relatórios.

### Tabelas (MySQL) 🗃️
- users: Armazena informações sobre os usuários, como nome, e-mail, senha e tipo de usuário.
- events: Armazena informações sobre os eventos, como título, descrição, data, hora, local, categoria, preço e imagens.
- registrations: Armazena informações sobre as inscrições nos eventos, incluindo o usuário, o evento e o status do pagamento.
- reviews: Armazena informações sobre avaliações e comentários de eventos, incluindo o usuário, o evento, a pontuação e o texto do comentário.
- categories: Armazena informações sobre as categorias de eventos, como festas, bares, shows, música ao vivo, teatros, cursos, feiras, etc.

## Licença 📜
Este projeto está licenciado sob a licença [MIT](https://opensource.org/licenses/MIT).
