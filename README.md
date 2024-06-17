![GitHub License](https://img.shields.io/github/license/tothdanielax/nextjs-template)

## [API Documentation](docs/index.html)

### Table of Contents

- [Description](#description)
- [Setup](#setup)
  - [Development setup](#development-setup)
  - [Testing setup](#testing-setup)

---

# Description

## Snomed CT Component Quick Search MVP with Next.js, Mantine, TypeScript, Storybook and more.

# Setup

## Development setup

- Install dependencies (preferred package manager is 'pnpm'):

```bash
pnpm install
```

- Create '.env' file based on '.env.example' file
- Start the development server:

```bash
pnpm run start:dev
```

---

## Testing setup

'.env.test' file is used for testing. If you want to run the tests, you need to create this file
based on '.env.example' file.

#### Unit & integration tests (Vitest + React Testing Library):

```bash
pnpm test:unit
```

#### End-to-end tests (Playwright):

```bash
# not necessary to start the server, but you can with 'pnpm start:dev'
pnpm test:e2e
```

---
