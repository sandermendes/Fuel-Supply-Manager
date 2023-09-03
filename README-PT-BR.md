# Gerenciador de Abastecimento de Combustível

O Gerenciador de Abastecimento de Combustível é uma aplicação web full-stack para gerenciar o abastecimento de combustível. Ele oferece funcionalidades gerenciar dados de abastecimento de combustível.

## Me compre um café

Se você utiliza este projeto, aprendeu algo com ele ou simplesmente gosta dele, por favor, considere apoiá-lo. O seu apoio me ajuda a dedicar mais tempo a projetos de código aberto como este.

<a href="https://www.buymeacoffee.com/sandermendes" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Compre-me um café" style="height: auto !important;width: auto !important;" ></a>

## Índice

- [Visão Geral do Projeto](#visão-geral-do-projeto)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Pré-requisitos](#pré-requisitos)
- [Início Rápido](#início-rápido)
  - [Configuração](#configuração)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Uso](#uso)
- [Contribuições](#contribuições)

## Visão Geral do Projeto

O Gerenciador de Abastecimento de Combustível foi projetado para ajudar os usuários a gerenciar os dados de abastecimento de combustível. Ele oferece recursos como:

- Visualização de uma lista de todos os abastecimentos de combustível.
- Adição de novos registros de abastecimento de combustível.
- Exclusão de registros de abastecimento de combustível.

## Tecnologias Utilizadas

O Gerenciador de Abastecimento de Combustível é construído utilizando as seguintes tecnologias:

- **Backend:**
  - Spring Boot: Um framework baseado em Java para a construção de aplicativos robustos e escaláveis no backend.
  - Spring Data JPA: Simplifica o acesso e a persistência de dados em aplicativos baseados em Spring.
  - Swagger: Usado para a documentação da API.

- **Frontend:**
  - Angular: Um popular framework JavaScript para a construção de aplicativos web.
  - Angular Material: Uma biblioteca de componentes de interface do usuário para aplicativos Angular.

## Início Rápido

Siga estas etapas para configurar e executar o projeto Gerenciador de Abastecimento de Combustível com o Docker.

### Configuração

1. Clone o repositório:

   ```bash
   git clone https://github.com/sandermendes/Fuel-Supply-Manager.git
   cd Fuel-Supply-Manager
   ```

2. Crie e execute com a construção do Docker

   ```bash
   docker-compose up -d --build
   ```

3. O frontend agora deve ser acessível em `http://localhost:4200`.

## Estrutura do Projeto

A estrutura do diretório do projeto está organizada da seguinte forma:

```
root/
├── frontend/
│   ├── Fuel-Supply-Manager/
│   │   ├── src/
│   │   │   ├── app/
│   │   │   │   ├── dialogs/
│   │   │   │   ├── models/
│   │   │   │   ├── services/
│   │   │   │   ├── ...
│   │   ├── Dockerfile
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   ├── com/
│   │   │   │   ├── sandermendes/
│   │   │   │   │   ├── springboot/
│   │   │   │   │   │   ├── config/
│   │   │   │   │   │   ├── exception/
│   │   │   │   │   │   ├── supplyFuel/
│   │   │   │   │   │   ├── utils/
│   │   │   │   │   │   ├── ...
│   │   ├── resources/
│   │   │   ├── application-no-handler.properties
│   │   │   ├── application.properties
│── docker-compose.yml
│── Dockerfile
```

## DevContainer

Você pode usar o DevContainer para facilitar a manutenção do projeto.

## Desenvolvimento

Para fins de desenvolvimento, você pode acessar o Swagger em `http://localhost:8080/swagger-ui/`.

## Uso

O Gerenciador de Abastecimento de Combustível oferece uma interface de usuário amigável para gerenciar registros de abastecimento de combustível. Os usuários podem realizar as seguintes ações:

- Visualizar uma lista de todos os abastecimentos de combustível.
- Adicionar novos registros de abastecimento de combustível.
- Excluir registros de abastecimento de combustível por ID.

## Contribuições

Contribuições para o Gerenciador de Abastecimento de Combustível são bem-vindas! Você pode contribuir abrindo issues ou enviando pull requests.

Sinta-se à vontade para personalizar este modelo para atender às especificidades do seu projeto. Forneça o máximo de detalhes possível para facilitar o entendimento e o uso do seu aplicativo Spring Boot e Angular.