# AI Yacht Intake & Operational Briefing System

> Repository scope: this repository contains the interactive React/TypeScript frontend case study. The backend, AI, RAG and data components shown in the architecture represent the proposed system design and are not implemented in this public repository.

## Live Demo

[View the interactive case study](https://ai-yacht-intake-case-study.vercel.app/)

A one-page interactive case study demonstrating how AI-driven intake systems can convert unclear yacht charter enquiries into structured operational briefs — complete with risk flags, missing-context detection, and recommended next actions.

## Overview

Yacht charter enquiries often arrive with incomplete details around dates, destinations, guests, budgets, and service expectations. By the time operational teams review them, vague assumptions may have already created friction across the process.

This system acts as an upstream intake layer that:

- Extracts structured data from messy multi-channel inputs (emails, WhatsApp, call transcripts)
- Detects missing context by checking parameters against required operational profiles
- Flags operational risks such as seasonal congestion, unrealistic routing, and vessel-capacity mismatches
- Generates standardised briefs with verified facts, risk flags, and recommended next actions

> Design principle: AI should not create more work for operations teams. It should reduce ambiguity before the work reaches them.

## Tech Stack

| Layer | Technologies |
| --- | --- |
| Frontend | React 19, TypeScript, Vite 7 |
| Styling | Tailwind CSS 4, custom design tokens |
| Fonts | Playfair Display, Libre Baskerville, Jost, Inter |
| Icons | Lucide React |
| Tooling | ESLint, TypeScript strict mode |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or later
- npm v9 or later

### Installation

```bash
# Clone the repository
git clone https://github.com/Code21435/ai-yacht-intake-case-study.git
cd ai-yacht-intake-case-study

# Install dependencies
npm install

# Start the development server
npm run dev
```

The application will be available at `http://localhost:5173`.

### Build for Production

```bash
npm run build
npm run preview
```

## Project Structure

```bash
├── index.html              # Entry point with SEO meta tags and Open Graph data
├── src/
│   ├── main.tsx            # React DOM mount
│   ├── App.tsx             # Root application component
│   ├── CaseStudyPage.tsx   # Main case study page (all sections)
│   └── index.css           # Global styles and design system
├── vite.config.ts          # Vite + React + Tailwind configuration
├── tsconfig.json           # TypeScript configuration
├── eslint.config.js        # ESLint configuration
├── package.json            # Dependencies and scripts
└── README.md               # Project documentation
```

## Case Study Sections

1. Problem Statement — why unclear intake creates downstream operational pressure
2. Solution Design — structuring context before commitments harden
3. Operational Workflow — five-step intake pipeline from raw input to structured brief
4. Output Demonstration — realistic simulation of a messy enquiry transformed into an operational brief
5. Technical Architecture — frontend, backend, AI layer, data layer, and reliability design
6. Industry Impact — transferable use cases across maritime logistics and port operations
7. Skills Demonstrated — LLM workflow design, RAG architecture, structured extraction, and more

## Key Concepts

- Human-in-the-Loop AI — the system supports, rather than replaces, operations staff
- Retrieval-Augmented Generation (RAG) — context-aware knowledge retrieval over operational data and policy information
- Structured Schema Extraction — converting freeform text into validated, machine-readable formats
- Operational Risk Classification — proactive flagging of seasonal, routing, and capacity constraints

## Author

**Usman Saleem**

Designing and building AI-assisted operational systems, LLM extraction pipelines, and workflow automation solutions for maritime, charter, and logistics operations.

## License

This project is licensed under the [MIT License](LICENSE).
