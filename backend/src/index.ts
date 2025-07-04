import express from "express";
import cors from "cors";
import graphRouter from "./config/routes/graph";
import { initNeo4j, closeDriver } from "./config/neo4j";
import { initializeDemoData } from "./scripts/initDemoData";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/api/graph", graphRouter);

// Route de test
app.get("/health", (req, res) => {
  res.json({
    service: "Neo4j API",
    status: "OK",
    database: "Connected to Neo4j",
  });
});

const startServer = async () => {
  try {
    await initNeo4j();
    const test = await initializeDemoData();
    console.log("test", test)

    app.listen(PORT, () => {
      console.log(`Serveur Neo4j API démarré sur le port ${PORT}`);
      console.log(`Endpoints disponibles:`);
      console.log(`   GET    /health`);
      console.log(`   POST   /api/graph/user`);
      console.log(`   POST   /api/graph/tag`);
      console.log(`   POST   /api/graph/like`);
      console.log(`   POST   /api/graph/dislike`);
      console.log(`   POST   /api/graph/friendship`);
      console.log(`   GET    /api/graph/user/:email/liked`);
      console.log(`   GET    /api/graph/tag/:name/users`);
      console.log(`   GET    /api/graph/users`);
      console.log(`   GET    /api/graph/user/:email`);
      console.log(`   GET    /api/graph/stats`);
      console.log(`   DELETE /api/graph/user/:email`);
    });
  } catch (error) {
    console.error("Impossible de démarrer le serveur:", error);
    process.exit(1);
  }
};

// Gestion propre de l'arrêt
process.on("SIGINT", async () => {
  console.log("\n🛑 Arrêt du serveur...");
  await closeDriver();
  process.exit(0);
});

process.on("SIGTERM", async () => {
  console.log("\n🛑 Arrêt du serveur...");
  await closeDriver();
  process.exit(0);
});

startServer();
