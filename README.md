# Fuel Supply Manager

Fuel Supply Manager is a full-stack web application for managing fuel supplies. It provides functionality to track and manage fuel supply data, making it easier to manage fuel-related records.


## Buy me a coffee

Whether you use this project, have learned something from it, or just like it, please consider supporting it. Your support helps me dedicate more time to open-source projects like this one.


<a href="https://www.buymeacoffee.com/sandermendes" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: auto !important;width: auto !important;" ></a>

## Table of Contents

- [Project Overview](#project-overview)
- [Technologies Used](#technologies-used)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
  - [Setup](#setup)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Contributing](#contributing)

## Project Overview

The Fuel Supply Manager is designed to help users manage fuel supply data efficiently. It offers features such as:

- Viewing a list of all fuel supplies.
- Adding new fuel supply records.
- Deleting fuel supply records by ID.

## Technologies Used

The Fuel Supply Manager is built using the following technologies:

- **Backend:**
  - Spring Boot: A Java-based framework for building robust and scalable backend applications.
  - Spring Data JPA: Simplifies data access and persistence in Spring-based applications.
  - Swagger: Used for API documentation.

- **Frontend:**
  - Angular: A popular JavaScript framework for building web applications.
  - Angular Material: A UI component library for Angular applications.

## Getting Started

Follow these steps to set up and run the Fuel Supply Manager project with Docker.

### Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/sandermendes/Fuel-Supply-Manager.git
   cd Fuel-Supply-Manager
   ```

2. Build and run with Docker build

   ```bash
   docker-compose up -d --build
   ```

3. The frontend should now be accessible at `http://localhost:4200`.

## Project Structure

The project directory structure is organized as follows:

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
You can use DevContainer to easyly maintain the project

## Development
For development purposes, you can access Swagger at `http://localhost:8080/swagger-ui/`.


## Usage

The Fuel Supply Manager offers a user-friendly interface for managing fuel supply records. Users can perform the following actions:

- View a list of all fuel supplies.
- Add new fuel supply records.
- Delete fuel supply records by ID.

## Contributing

Contributions to the Fuel Supply Manager are welcome! You can contribute by opening issues or submitting pull requests.

Feel free to customize this template to match the specifics of your project. Provide as much detail as possible to make it easy for users and contributors to understand and use your Spring Boot and Angular application.