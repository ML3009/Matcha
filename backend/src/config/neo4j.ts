import neo4j, { Driver, Session } from "neo4j-driver";
import { initializeDemoData } from "../scripts/initDemoData";

let driver: Driver | null = null;

export const initNeo4j = async () => {
  try {
    const uri = process.env.NEO4J_URI || "bolt://localhost:7687";
    const user = process.env.NEO4J_USER || "neo4j";
    const password = process.env.NEO4J_PASSWORD || "password";

    console.log("uri", uri)

    driver = neo4j.driver(uri, neo4j.auth.basic(user, password));

    // Test de connexion
    await driver.getServerInfo();
    console.log("Connecté à Neo4j");

    // Créer les contraintes et index
    await createConstraints();
  } catch (error) {
    console.error("Erreur de connexion à Neo4j:", error);
    throw error;
  }
};

const createConstraints = async () => {
  if (!driver) {
    throw new Error("Il y a un soucis avec le driver!");
  }
  const session = driver.session();

  try {
    // Contraintes d'unicité
    await session.run(
      "CREATE CONSTRAINT user_email IF NOT EXISTS FOR (u:User) REQUIRE u.email IS UNIQUE"
    );

    await session.run(
      "CREATE CONSTRAINT unique_tag_name IF NOT EXISTS FOR (t:Tag) REQUIRE t.name IS UNIQUE;"
    )

    // Index pour les recherches
    await session.run(
      "CREATE INDEX user_name IF NOT EXISTS FOR (u:User) ON (u.firstName, u.lastName)"
    );
    await session.run(
      "CREATE INDEX user_location IF NOT EXISTS FOR (u:User) ON (u.location)"
    );

    console.log("Contraintes et index Neo4j créés avec succès");
  } finally {
    await session.close();
  }
};

export const getSession = (): Session => {
  if (!driver) {
    throw new Error("Il y a un problème avec la session!");
  }
  return driver.session();
};

export const closeDriver = async () => {
  if (driver) {
    await driver.close();
  }
};

export default driver;
