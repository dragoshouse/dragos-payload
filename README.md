# Dragos Payload CMS

This repository contains a clean setup for [Payload CMS](https://payloadcms.com) using an Express server and the SQLite database adapter.

## Requirements

- Node.js 20+
- npm or another package manager

## Development

1. Install dependencies:
   ```bash
   npm install
   ```
2. Create a `.env` file based on `.env.example` and set `PAYLOAD_SECRET` and any other options.
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Access the admin panel at `http://localhost:3000/admin`.
