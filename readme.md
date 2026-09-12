# LOG
- Practice making a monorepo.

1. pnpm init
2. create ppnpm-workspace.yaml
3. define what is part of the workspace
4. pnpm init in all the folders
5. define a dev script for both the services in root package.json -> "dev": "pnpm --parallel -filter './apps/*' dev"