#!/bin/bash

# Charger les variables d'environnement depuis le fichier .env
if [ -f .env ]; then
    export $(cat .env | grep -v '#' | awk '/=/ {print $1}')
fi

# Vérifier si les variables d'environnement requises sont définies
if [ -z "$DB_USER" ] || [ -z "$DB_NAME" ]; then
    echo "Error: DB_USER and DB_NAME environment variables must be set."
    exit 1
fi

TEMPLATE_FILE="create_db_template.sql"
OUTPUT_FILE="001_create_db.sql"

# Remplacer les placeholders par les valeurs réelles des variables d'environnement
sed -e "s/\${DB_USER}/$DB_USER/g" \
    -e "s/\${DB_NAME}/$DB_NAME/g" \
    $TEMPLATE_FILE > "/docker-entrypoint-initdb.d/$OUTPUT_FILE"