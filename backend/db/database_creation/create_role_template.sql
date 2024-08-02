-- 01_create_role_template.sql
-- Check if the role exists before creating it
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_roles WHERE rolname = '${DB_USER}') THEN
        CREATE ROLE ${DB_USER} WITH LOGIN PASSWORD '${DB_PASSWORD}';
        ALTER ROLE ${DB_USER} CREATEDB;
    END IF;
END
$$;