# Use the official PostgreSQL image as base image
FROM postgres:latest

# Copy init scripts to container
# These scripts can be SQL files or shell scripts for initial configuration
COPY database_creation/ .

RUN chmod +x create_db_script.sh create_role_script.sh placeholder.sh
RUN ./create_role_script.sh
RUN ./create_db_script.sh


COPY table_creation/ /docker-entrypoint-initdb.d/

RUN ./placeholder.sh

RUN rm create_db_script.sh create_role_script.sh placeholder.sh .env create_db_template.sql create_role_template.sql

# Expose port 5432 for connection
EXPOSE 5432