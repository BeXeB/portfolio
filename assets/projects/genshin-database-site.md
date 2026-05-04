# Kalandorok Kézikönyve

## About

Kalandorok Kézikönyve is a Hungarian-language wiki and guide site for the game Genshin Impact.

The project combines structured game data with written guides, providing players with a centralized resource for characters, equipment, and progression systems.

## Features

- Character database
  - Stats, talents, and progression data
- Dedicated build and gameplay guides
- Weapons
  - Full stat tables and passive effects
- Artifacts
  - Set bonuses and scaling information
- Materials
  - Sources and usage across the game
- Guides
  - General gameplay and progression help
- Tier list
  - Relative strength ranking of characters

## Architecture

The current implementation uses a static-first approach:

Game data stored in JSON files
Guides written in Markdown
Loaded dynamically via HTTP requests on the frontend

This approach enables fast iteration and simple deployment, but introduces limitations in scalability and content management.

## Limitations

- No centralized backend for data management
- Content updates require repository changes
- Limited support for multi-user content editing
- Data fetching is not optimized for larger datasets

## Planned Improvements

### Backend system

- Implemented in Go with a PostgreSQL database
- Expose data through a REST API
- Content management
- Allow multiple contributors to update data without code changes
- New features
  - Material farming planner
  - Team tier list
  - Team builder based on owned characters
  - Automated feedback on character builds

## Tech Stack

- Frontend: Angular, TypeScript, CSS
- JSON + Markdown content
- Planned backend: Go + PostgreSQL
