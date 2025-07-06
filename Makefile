# **************************************************************************** #
#                                                                              #
#                                                         :::      ::::::::    #
#    Makefile                                          :+:      :+:    :+:    #
#                                                     +:+ +:+         +:+      #
#    By: mvautrot & medpurple.                      +#+  +:+       +#+         #
#                                                 +#+#+#+#+#+   +#+            #
#    Created: 2025/01/01 00:00:00 by your_login      #+#    #+#              #
#    Updated: 2025/01/01 00:00:00 by your_login     ###   ########.fr        #
#                                                                              #
# **************************************************************************** #

# =============================================================================
# 🌟 MATCHA - Dating App Project (42 School)
# =============================================================================
# 
# Une application de rencontres moderne construite avec :
# 🚀 Frontend : React + Vite (port 5173)
# 🔧 Backend  : Node.js API (port 3004)
# 📊 Database : Neo4j Graph Database (ports 7474/7687)
# 
# Architecture containerisée avec Docker Compose pour un développement simplifié
# =============================================================================

# ┌─────────────────────────────────────────────────────────────────────────┐
# │                            CONFIGURATION                                │
# └─────────────────────────────────────────────────────────────────────────┘

# Colors for beautiful output
RED     := \033[31m
GREEN   := \033[32m
YELLOW  := \033[33m
BLUE    := \033[34m
MAGENTA := \033[35m
CYAN    := \033[36m
WHITE   := \033[37m
BOLD    := \033[1m
RESET   := \033[0m

# Docker configuration
COMPOSE_FILE := docker-compose.yml
PROJECT_NAME := matcha
FRONTEND_SERVICE := frontend
BACKEND_SERVICE := backend
NEO4J_SERVICE := neo4j

# Default target
.DEFAULT_GOAL := help

# ┌─────────────────────────────────────────────────────────────────────────┐
# │                              MAIN TARGETS                               │
# └─────────────────────────────────────────────────────────────────────────┘

.PHONY: help build up down restart clean re status

help: ## 📋 Affiche ce menu d'aide
	@echo "$(BOLD)$(MAGENTA)"
	@echo "╔══════════════════════════════════════════════════════════════════════╗"
	@echo "║                        🎯 MATCHA - MAKEFILE                          ║"
	@echo "║                      Dating App Project (42)                        ║"
	@echo "╚══════════════════════════════════════════════════════════════════════╝"
	@echo "$(RESET)"
	@echo "$(BOLD)$(CYAN)🚀 COMMANDES PRINCIPALES:$(RESET)"
	@echo "  $(YELLOW)build$(RESET)        🏗️  Construit les images Docker"
	@echo "  $(YELLOW)up$(RESET)           🚀 Démarre tous les services"
	@echo "  $(YELLOW)down$(RESET)         🛑 Arrête tous les services"
	@echo "  $(YELLOW)restart$(RESET)      🔄 Redémarre tous les services"
	@echo "  $(YELLOW)re$(RESET)           🔄 Reconstruction complète (clean + build + up)"
	@echo ""
	@echo "$(BOLD)$(CYAN)📊 MONITORING & LOGS:$(RESET)"
	@awk 'BEGIN {FS = ":.*##"} /^[a-zA-Z_-]+:.*?##/ { printf "  $(YELLOW)%-12s$(RESET) %s\n", $$1, $$2 }' $(MAKEFILE_LIST) | grep -E "(logs|status|health|monitor)"
	@echo ""
	@echo "$(BOLD)$(CYAN)🔧 MAINTENANCE:$(RESET)"
	@awk 'BEGIN {FS = ":.*##"} /^[a-zA-Z_-]+:.*?##/ { printf "  $(YELLOW)%-12s$(RESET) %s\n", $$1, $$2 }' $(MAKEFILE_LIST) | grep -E "(clean|reset|prune)"
	@echo ""
	@echo "$(BOLD)$(GREEN)💡 Exemple d'utilisation:$(RESET)"
	@echo "  make up        # Démarre l'application"
	@echo "  make logs      # Affiche les logs en temps réel"
	@echo "  make status    # Vérifie l'état des services"
	@echo ""

build: ## 🏗️  Construit les images Docker
	@echo "$(BOLD)$(BLUE)🏗️  Construction des images Docker...$(RESET)"
	@docker compose -f $(COMPOSE_FILE) build --no-cache
	@echo "$(BOLD)$(GREEN)✅ Images construites avec succès!$(RESET)"

up: ## 🚀 Démarre tous les services
	@echo "$(BOLD)$(GREEN)🚀 Démarrage de Matcha...$(RESET)"
	@docker compose -f $(COMPOSE_FILE) up -d
	@echo "$(BOLD)$(GREEN)✅ Services démarrés!$(RESET)"
	@echo "$(CYAN)🌐 Frontend: http://localhost:5173$(RESET)"
	@echo "$(CYAN)🔧 Backend API: http://localhost:3004$(RESET)"
	@echo "$(CYAN)📊 Neo4j Browser: http://localhost:7474$(RESET)"
	@echo "$(YELLOW)⏳ Attente du démarrage complet...$(RESET)"
	@sleep 3
	@make status

down: ## 🛑 Arrête tous les services
	@echo "$(BOLD)$(YELLOW)🛑 Arrêt des services...$(RESET)"
	@docker compose -f $(COMPOSE_FILE) down
	@echo "$(BOLD)$(GREEN)✅ Services arrêtés!$(RESET)"

restart: down up ## 🔄 Redémarre tous les services

re: clean build up ## 🔄 Reconstruction complète (clean + build + up)

# ┌─────────────────────────────────────────────────────────────────────────┐
# │                            LOGS & MONITORING                             │
# └─────────────────────────────────────────────────────────────────────────┘

logs: ## 📜 Affiche les logs de tous les services
	@echo "$(BOLD)$(CYAN)📜 Logs en temps réel (Ctrl+C pour quitter)...$(RESET)"
	@docker compose -f $(COMPOSE_FILE) logs -f

logs-front: ## 📜 Logs du frontend uniquement
	@echo "$(BOLD)$(CYAN)📜 Logs Frontend (React)...$(RESET)"
	@docker compose -f $(COMPOSE_FILE) logs -f $(FRONTEND_SERVICE)

logs-back: ## 📜 Logs du backend uniquement
	@echo "$(BOLD)$(CYAN)📜 Logs Backend (Node.js)...$(RESET)"
	@docker compose -f $(COMPOSE_FILE) logs -f $(BACKEND_SERVICE)

logs-db: ## 📜 Logs de Neo4j uniquement
	@echo "$(BOLD)$(CYAN)📜 Logs Neo4j Database...$(RESET)"
	@docker compose -f $(COMPOSE_FILE) logs -f $(NEO4J_SERVICE)

status: ## 📊 Affiche l'état des services
	@echo "$(BOLD)$(CYAN)📊 État des services Matcha:$(RESET)"
	@echo ""
	@docker compose -f $(COMPOSE_FILE) ps --format "table {{.Name}}\t{{.Status}}\t{{.Ports}}"
	@echo ""
	@echo "$(BOLD)$(YELLOW)🔍 Vérification de la santé des services:$(RESET)"
	@make health-check

health-check: ## 🏥 Vérifie la santé des services
	@echo "$(CYAN)Frontend (React):$(RESET)"
	@if curl -s http://localhost:5173 > /dev/null 2>&1; then \
		echo "  $(GREEN)✅ Frontend accessible$(RESET)"; \
	else \
		echo "  $(RED)❌ Frontend non accessible$(RESET)"; \
	fi
	@echo "$(CYAN)Backend (API):$(RESET)"
	@if curl -s http://localhost:3004 > /dev/null 2>&1; then \
		echo "  $(GREEN)✅ Backend accessible$(RESET)"; \
	else \
		echo "  $(RED)❌ Backend non accessible$(RESET)"; \
	fi
	@echo "$(CYAN)Neo4j Database:$(RESET)"
	@if curl -s http://localhost:7474 > /dev/null 2>&1; then \
		echo "  $(GREEN)✅ Neo4j accessible$(RESET)"; \
	else \
		echo "  $(RED)❌ Neo4j non accessible$(RESET)"; \
	fi

monitor: ## 📈 Monitoring en temps réel
	@echo "$(BOLD)$(CYAN)📈 Monitoring des containers (Ctrl+C pour quitter)...$(RESET)"
	@watch -n 2 'docker compose -f $(COMPOSE_FILE) ps; echo ""; docker stats --no-stream'

# ┌─────────────────────────────────────────────────────────────────────────┐
# │                          DEVELOPMENT TOOLS                               │
# └─────────────────────────────────────────────────────────────────────────┘

shell-front: ## 🐚 Shell dans le container frontend
	@echo "$(BOLD)$(CYAN)🐚 Accès au shell frontend...$(RESET)"
	@docker compose -f $(COMPOSE_FILE) exec $(FRONTEND_SERVICE) sh

shell-back: ## 🐚 Shell dans le container backend
	@echo "$(BOLD)$(CYAN)🐚 Accès au shell backend...$(RESET)"
	@docker compose -f $(COMPOSE_FILE) exec $(BACKEND_SERVICE) sh

shell-db: ## 🐚 Shell Cypher Neo4j
	@echo "$(BOLD)$(CYAN)🐚 Accès au shell Neo4j...$(RESET)"
	@docker compose -f $(COMPOSE_FILE) exec $(NEO4J_SERVICE) cypher-shell -u neo4j -p password

install-front: ## 📦 Installation des dépendances frontend
	@echo "$(BOLD)$(CYAN)📦 Installation des dépendances frontend...$(RESET)"
	@docker compose -f $(COMPOSE_FILE) exec $(FRONTEND_SERVICE) npm install

install-back: ## 📦 Installation des dépendances backend
	@echo "$(BOLD)$(CYAN)📦 Installation des dépendances backend...$(RESET)"
	@docker compose -f $(COMPOSE_FILE) exec $(BACKEND_SERVICE) npm install

# ┌─────────────────────────────────────────────────────────────────────────┐
# │                            MAINTENANCE                                   │
# └─────────────────────────────────────────────────────────────────────────┘

clean: ## 🧹 Nettoyage des containers et volumes
	@echo "$(BOLD)$(YELLOW)🧹 Nettoyage en cours...$(RESET)"
	@docker compose -f $(COMPOSE_FILE) down -v --remove-orphans
	@echo "$(BOLD)$(GREEN)✅ Containers et volumes supprimés!$(RESET)"

clean-images: ## 🗑️  Supprime les images du projet
	@echo "$(BOLD)$(YELLOW)🗑️  Suppression des images...$(RESET)"
	@docker compose -f $(COMPOSE_FILE) down --rmi all --volumes --remove-orphans
	@echo "$(BOLD)$(GREEN)✅ Images supprimées!$(RESET)"

prune: ## 🧽 Nettoyage complet Docker
	@echo "$(BOLD)$(YELLOW)🧽 Nettoyage complet Docker...$(RESET)"
	@docker system prune -af --volumes
	@echo "$(BOLD)$(GREEN)✅ Nettoyage terminé!$(RESET)"

reset: clean-images build up ## 🔄 Reset complet (supprime tout et reconstruit)

# ┌─────────────────────────────────────────────────────────────────────────┐
# │                              UTILITIES                                   │
# └─────────────────────────────────────────────────────────────────────────┘

neo4j-backup: ## 💾 Sauvegarde de la base Neo4j
	@echo "$(BOLD)$(CYAN)💾 Sauvegarde Neo4j...$(RESET)"
	@mkdir -p backups
	@docker compose -f $(COMPOSE_FILE) exec $(NEO4J_SERVICE) neo4j-admin database dump --to-path=/tmp system
	@docker cp nosql-neo4j:/tmp/system.dump ./backups/neo4j-backup-$(shell date +%Y%m%d-%H%M%S).dump
	@echo "$(BOLD)$(GREEN)✅ Sauvegarde terminée!$(RESET)"

env-example: ## 📝 Crée un fichier .env.example
	@echo "$(BOLD)$(CYAN)📝 Création du fichier .env.example...$(RESET)"
	@echo "# Configuration pour Matcha" > .env.example
	@echo "# Frontend" >> .env.example
	@echo "VITE_API_URL=http://localhost:3004" >> .env.example
	@echo "" >> .env.example
	@echo "# Backend" >> .env.example
	@echo "NODE_ENV=development" >> .env.example
	@echo "PORT=3000" >> .env.example
	@echo "" >> .env.example
	@echo "# Neo4j" >> .env.example
	@echo "NEO4J_URI=bolt://localhost:7687" >> .env.example
	@echo "NEO4J_USER=neo4j" >> .env.example
	@echo "NEO4J_PASSWORD=password" >> .env.example
	@echo "$(BOLD)$(GREEN)✅ Fichier .env.example créé!$(RESET)"

info: ## ℹ️  Informations sur le projet
	@echo "$(BOLD)$(MAGENTA)"
	@echo "╔══════════════════════════════════════════════════════════════════════╗"
	@echo "║                        📊 MATCHA - INFOS                            ║"
	@echo "╚══════════════════════════════════════════════════════════════════════╝"
	@echo "$(RESET)"
	@echo "$(BOLD)$(CYAN)🎯 Projet:$(RESET) Application de rencontres (42 School)"
	@echo "$(BOLD)$(CYAN)📁 Structure:$(RESET)"
	@echo "  ├── frontend/     (React + Vite)"
	@echo "  ├── backend/      (Node.js API)"
	@echo "  └── database/     (Neo4j Graph DB)"
	@echo ""
	@echo "$(BOLD)$(CYAN)🌐 URLs:$(RESET)"
	@echo "  Frontend:    http://localhost:5173"
	@echo "  Backend:     http://localhost:3004"
	@echo "  Neo4j:       http://localhost:7474"
	@echo ""
	@echo "$(BOLD)$(CYAN)🔧 Commandes utiles:$(RESET)"
	@echo "  make up       # Démarre l'application"
	@echo "  make logs     # Affiche les logs"
	@echo "  make status   # Vérifie l'état"
	@echo "  make clean    # Nettoie les containers"
	@echo ""

# ┌─────────────────────────────────────────────────────────────────────────┐
# │                          SPECIAL TARGETS                                 │
# └─────────────────────────────────────────────────────────────────────────┘

# Ensure all targets are properly declared as phony
.PHONY: help build up down restart clean re status logs logs-front logs-back logs-db
.PHONY: health-check monitor shell-front shell-back shell-db install-front install-back
.PHONY: clean-images prune reset neo4j-backup env-example info