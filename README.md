# Matcha

This project is a dating site application using a modern tech stack: PostgreSQL, Express, React, and Node.js. Docker is used to manage the development environment, with docker-compose orchestrating the services.

.
├── backend/
│   ├── app/
│   │   ├── Dockerfile
│   │   ├── package.json
│   │   ├── package-lock.json
│   │   └── src/
│   │       └── ... (source code for the Node.js backend application)
│   └── db/
│       ├── Dockerfile
│       └── init-db.sql
├── frontend/
│   ├── Dockerfile
│   ├── package.json
│   ├── package-lock.json
│   └── src/
│       └── ... (source code for the React frontend application)
├── .env
├── docker-compose.yml
└── Makefile


## Important Files
- Dockerfile (in backend/app): Defines the Docker image for the Node.js backend application.
- Dockerfile (in backend/db): Defines the Docker image for PostgreSQL and includes the initialization script.
- init-db.sql (in backend/db): Contains SQL commands to initialize the PostgreSQL database.
- Dockerfile (in frontend): Defines the Docker image for the React frontend application.
- docker-compose.yml: Configures Docker services, including images, environments, and dependencies for all components.
- .env: Contains sensitive environment variables used by Docker.
- Makefile: Simplifies common Docker commands.

## Environment Variables

Create a .env file at the root of the project with the necessary environment variables. Here is an example of what your .env file should contain:

# PostgreSQL
POSTGRES_PASSWORD=your_postgres_password
POSTGRES_USER=your_postgres_user
POSTGRES_DB=your_postgres_db

# Node.js
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_HOST=db
DB_NAME=your_db_name

## Make Commands

Docker containers. Here are the available commands:

- make build: Builds Docker images for the Node.js backend, PostgreSQL database, and React frontend.
- make up: Starts Docker containers in the background.
- make down: Stops Docker containers.
- make clean: Stops Docker containers, then removes unused images and volumes.

## Usage

1. Set Up the Environment
    - Ensure Docker and docker-compose are installed on your machine.

    - Create the .env file at the root of the project with the necessary environment variables.

2. Build Docker Images
```make build```

3. Start Containers
```make up```

Containers will run in the background. You can check the container logs if needed:
```docker-compose logs```

4. Stop Containers
```make down```

5. Clean Up Docker Resources
```make clean```


## Project Details
This project is a dating site application, aiming to provide a platform for users to create profiles, connect with others, and engage in interactions. The application utilizes:

- PostgreSQL for data storage and management.
- Express as the backend framework to handle API requests.
- React for building a dynamic and responsive user interface.
- Node.js as the runtime environment for executing the backend application.
