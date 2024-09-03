if [ -f .env ]; then
    export $(cat .env | grep -v '#' | awk '/=/ {print $1}')
fi

if [ -z "$DB_USER" ] || [ -z "$DB_NAME" ]; then
    echo "Error: DB_USER and DB_NAME environment variables must be set."
    exit 1
fi


for file in /docker-entrypoint-initdb.d/*.sql; do
    sed -i "s/\${DB_NAME}/$DB_NAME/g" "$file"
    sed -i "s/\${DB_USER}/$DB_USER/g" "$file"
done