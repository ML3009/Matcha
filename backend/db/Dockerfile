# Use the official PostgreSQL image as base image
FROM postgres:latest

# Copy init scripts to container
# These scripts can be SQL files or shell scripts for initial configuration
COPY ./init-db.sql /docker-entrypoint-initdb.d/

# Set environment variables (you can override or add them here if needed)
ENV POSTGRES_DB=api
ENV POSTGRES_USER=me
ENV POSTGRES_PASSWORD=password

# Expose port 5432 for connection
EXPOSE 5432