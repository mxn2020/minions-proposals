![CI](https://github.com/mxn2020/minions-proposals-workspace/actions/workflows/ci.yml/badge.svg) ![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

# minions-proposals

**Proposal drafts, answer sets, scoring, and prompt version references**

Built on the [Minions SDK](https://github.com/mxn2020/minions).

---

## Quick Start

```bash
# TypeScript / Node.js
npm install @minions-proposals/sdk minions-sdk

# Python
pip install minions-proposals

# CLI (global)
npm install -g @minions-proposals/cli
```

---

## CLI

```bash
# Show help
proposals --help
```

---

## Python SDK

```python
from minions_proposals import create_client

client = create_client()
```

---

## Project Structure

```
minions-proposals/
  packages/
    core/           # TypeScript core library (@minions-proposals/sdk on npm)
    python/         # Python SDK (minions-proposals on PyPI)
    cli/            # CLI tool (@minions-proposals/cli on npm)
  apps/
    web/            # Playground web app
    docs/           # Astro Starlight documentation site
    blog/           # Blog
  examples/
    typescript/     # TypeScript usage examples
    python/         # Python usage examples
```

---

## Development

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm run build

# Run tests
pnpm run test

# Type check
pnpm run lint
```

---

## Documentation

- Docs: [proposals.minions.help](https://proposals.minions.help)
- Blog: [proposals.minions.blog](https://proposals.minions.blog)
- App: [proposals.minions.wtf](https://proposals.minions.wtf)

---

## License

[MIT](LICENSE)
