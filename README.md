# Modern Web Template

Based on:

- Vite 8
- React 19
- Oxlint
- Oxfmt
- Vitest
- GitHub Actions
- TailwindCSS 4
- PNPM 12

Focus on:

- Security by default (supply chain, web security, etc.)
- Performance by default
- Latest technologies
- Easy VSCode configuration
- LLMs friendly
- Deterministic code style (Oxlint + Oxfmt)

## Cloudflare Deployment

Settings -> Build configuration

Deploy command:

```bash
pnpx wrangler deploy
```

Version command:

```bash
pnpx wrangler versions upload
```

Settings -> Variables and secrets

```properties
NODE_VERSION=26
PNPM_VERSION=12
```
