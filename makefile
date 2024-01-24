help:
	@echo "Please use \`make <target>\` where <target> is one of:"
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; \
	{printf "\033[36m%-40s\033[0m %s\n", $$1, $$2}'

db-push: db-reset format ## Push structure to db (resets struture first)
	yarn prisma db push

db-migrate-init:  ## Init migration
	yarn prisma migrate dev --name init

db-migrate:  ## Migrate
	yarn prisma migrate dev

db-reset:	## Reset db
	yarn prisma migrate reset --force

format: ## Format schema.prisma
	yarn prisma format
