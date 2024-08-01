# Docker image name for the application
APP_IMAGE_NAME=my-node-app

# Docker image name for the database
DB_IMAGE_NAME=my-postgres-db

# Default targets
.PHONY: help build up down clean

help:
	@echo "Usage:"
	@echo "  make build       # Build Docker images"
	@echo "  make up          # Start Docker containers"
	@echo "  make down        # Stop Docker containers"
	@echo "  make clean       # Remove Docker containers and images"

# Build Docker images
build:
	@echo "Building Docker images..."
	docker compose -f docker-compose.yml build

# Start Docker containers in background
up:
	@echo "Starting Docker containers..."
	docker compose -f docker-compose.yml up -d

# Stop Docker containers
down:
	@echo "Stopping Docker containers..."
	docker compose -f docker-compose.yml down

# Clean up Docker containers and images
clean: down
	@echo "Removing Docker images..."
	docker image rm $(APP_IMAGE_NAME) $(DB_IMAGE_NAME) || true
	@echo "Removing Docker volumes..."
	docker volume prune -f
	@echo "Cleaning up unused Docker resources..."
	docker system prune -f

re : clean build up