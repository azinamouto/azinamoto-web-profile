
 <div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&height=180&color=0:14191E,50:36434E,100:14191E&section=header&text=SEIJAKU&fontSize=56&fontColor=FFFFFF&fontAlignY=38&desc=%E9%9D%99%E5%AF%82%20%2F%20THE%20QUIET%20ENGINEER&descAlignY=61&descSize=15&animation=fadeIn" width="100%" alt="SEIJAKU Header"/>

### `静寂 — SEIJAKU`

# AJ Rienze — Engineering Portfolio

**Full-Stack Engineer · Systems Architecture Enthusiast · Founder & CTO**

A personal space for software engineering, thoughtful design, and the systems behind the interface.

[![React](https://img.shields.io/badge/React-20262B?style=flat-square&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-20262B?style=flat-square&logo=typescript&logoColor=3178C6)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-20262B?style=flat-square&logo=vite&logoColor=646CFF)](https://vite.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-20262B?style=flat-square&logo=tailwindcss&logoColor=06B6D4)](https://tailwindcss.com/)
[![NestJS](https://img.shields.io/badge/NestJS-Optional-20262B?style=flat-square&logo=nestjs&logoColor=E0234E)](https://nestjs.com/)

<br/>

**[GitHub](https://github.com/azinamouto)** · **[Projects](#featured-projects)** · **[Architecture](#architecture)**

*静かに創り、世界を変える。*

*Create quietly. Change the world.*

</div>

---

## 01. Overview — 概要

**SEIJAKU** is my personal engineering portfolio, created to showcase the software systems, tools, and digital experiences I've built or contributed to.

The name *Seijaku* (静寂) represents stillness and quietness.

The idea is simple: **strong engineering doesn't need unnecessary noise.**

This portfolio focuses on three things:

- **Engineering:** Real software, technical decisions, and maintainable architecture.
- **Design:** Clear, accessible interfaces with premium visual craftsmanship.
- **Exploration:** Experiments across algorithms, security, and developer tooling.

Rather than presenting projects as a collection of screenshots, SEIJAKU aims to explain the thinking behind them.

---

## 02. About the Developer — 開発者

```text
┌──────────────────────────────────────────────────┐
│                                                  │
│  USER       AJ Rienze Josol                      │
│  ALIAS      azinamouto                           │
│  ROLE       Founder & CTO                        │
│  COMPANY    ALZA.Net IT Solutions                │
│  FOCUS      Full-Stack / Systems Architecture    │
│  LOCATION   Bohol, Philippines                   │
│                                                  │
│  "Build quietly. Engineer deliberately."        │
│                                                  │
└──────────────────────────────────────────────────┘
```

I'm AJ Rienze, a full-stack developer and BS Information Systems student from Bohol, Philippines.

As Founder and CTO of **ALZA.Net IT Solutions**, I work on technical planning, software architecture, and full-stack applications, particularly systems designed for organizational and government-oriented workflows.

My interests extend beyond interface development into database design, backend services, information security, algorithms, and developer infrastructure.

I enjoy understanding how software works beneath its interface.

---

## 03. Design Philosophy — 設計思想

<div align="center">

### LESS NOISE. MORE PRECISION.

</div>

SEIJAKU follows a visual direction called **Soft Architectural Minimalism**.

Instead of aggressive gradients, neon effects, and crowded dashboards, the design emphasizes clarity and controlled detail.

| Principle | Design Approach |
|---|---|
| **Minimalism** | Strong typography, whitespace, and clear hierarchy |
| **Soft Depth** | Layered drop shadows and subtle inset surfaces |
| **Glass UI** | Selective translucency and restrained material effects |
| **Motion** | Purposeful parallax, transitions, and micro-interactions |
| **Readability** | Comfortable spacing, accessible contrast, responsive text |
| **Precision** | Consistent components, alignment, and interaction feedback |

The interface is designed to feel calm at rest and responsive during interaction.

---

## 04. Technology Stack — 技術構成

The portfolio is designed around a modern React and TypeScript architecture.

| Area | Technologies |
|---|---|
| Frontend | React, TypeScript, Vite |
| Styling | Tailwind CSS, custom CSS design tokens |
| Animation | Motion for React, optional GSAP |
| Routing | React Router |
| Visualization | SVG, optional React Flow |
| Backend | NestJS, when server-side functionality is required |
| Testing | Vitest, Playwright |
| Deployment | Vercel, with optional Railway backend |

> **Architecture note:** Core portfolio content should remain available without a backend. Server infrastructure is reserved for functionality that actually requires it.

---

## 05. Architecture — 構造

```text
                         VISITOR
                            │
                            ▼
                ┌───────────────────────┐
                │                       │
                │   REACT APPLICATION   │
                │                       │
                └───────────┬───────────┘
                            │
             ┌──────────────┼──────────────┐
             │              │              │
             ▼              ▼              ▼
        DESIGN SYSTEM   CONTENT LAYER   INTERACTIONS
             │              │              │
        Components       Projects       Animation
        Typography       Experience     Parallax
        Materials        Skills         Navigation
        Responsive UI    Case Studies   Visualizations
             │              │              │
             └──────────────┼──────────────┘
                            │
                            ▼
                   PORTFOLIO ROUTES
                            │
                    Optional API
                            │
                            ▼
                   ┌────────────────┐
                   │ NESTJS BACKEND │
                   │ Contact / API  │
                   └────────────────┘
```

### Architectural Goals

- Separate content from presentation.
- Reuse components and design tokens.
- Keep project information structured.
- Minimize unnecessary dependencies.
- Load complex visualizations only when needed.
- Support responsive and accessible interactions.
- Maintain reliable build and testing workflows.

---

## 06. Featured Projects — 作品

My work spans government-oriented systems, developer infrastructure, security tooling, and frontend engineering.

### 01 / TAGAD

**Government Technology · Data Systems**

A Gender and Development reporting and analytics system focused on structured data, controlled access, and administrative workflows.

**Engineering focus:** Database modeling, validation, role-based authorization, reporting architecture.

**Technologies:** React, TypeScript, Express, Prisma, PostgreSQL, Supabase.

[View TAGAD Repository →](https://github.com/azinamouto/TAGAD-FOUNDATION)

### 02 / One Talibon Intra-Office Workspace

**Government Workspace · Frontend Engineering**

A role-aware internal workspace frontend designed to support organized navigation, responsive dashboards, and government-oriented operational workflows.

**Engineering focus:** Frontend architecture, role-aware UI, responsive design, accessibility, integration readiness.

### 03 / Shinigami

**Security Engineering · Developer Tools**

A Go-based security scanning toolkit that combines native detection rules, external scanner integrations, and structured security reporting.

**Engineering focus:** Scanner adapters, Gitleaks, OSV Scanner, SARIF reporting.

**Technologies:** Go, React, TypeScript, Vite.

[View Shinigami Repository →](https://github.com/azinamouto/Shinigami)

### 04 / ALZA DevKit

**Developer Infrastructure · Data Engineering**

An internal developer toolkit for generating structured test data, configuring custom datasets, and importing supported database schema definitions.

**Engineering focus:** Synthetic data generation, schema relationships, data validation, exports.

**Technologies:** Python, FastAPI, Next.js, TypeScript, SQLite.

[View ALZA DevKit Repository →](https://github.com/SPATIBAIII/alza-devkit)

### Other Engineering Work

| Project | Focus |
|---|---|
| **ARKO** | Algorithm visualization and graph-based problem solving |
| **KURO** | Experimental security testing framework |
| **ALZA Finstation** | Internal finance tracking and planning |
| **Kopi Site** | Interactive frontend and motion design |
| **Sportzone** | Sports-oriented web application |
| **TALGov** | Government-oriented software development |

Project descriptions represent different stages of development. Inclusion does not imply that every system is publicly deployed or production-ready.

---

## 07. Portfolio Experience — 体験

The portfolio is designed around meaningful, interactive exploration.

**Soft Material Interface**

A light-first interface using restrained glassmorphism, inset shadows, and layered elevation.

**Responsive Motion**

Smooth transitions, subtle parallax, and carefully coordinated scroll-based interactions.

**Project Case Studies**

Dedicated pages that explain project motivation, engineering approaches, architecture, and technical challenges.

**Interactive Architecture**

Optional system diagrams that help visitors understand how selected projects are structured.

**Command Palette**

Keyboard-driven navigation for quickly discovering projects and portfolio sections.

**Engineering Lab**

An area for security tooling, algorithm experiments, developer utilities, and other technical explorations.

These describe the portfolio's design goals; feature availability depends on the implemented version.

---

## 08. Getting Started — 開始

### Prerequisites

- Node.js LTS
- npm
- Git

### Clone the Repository

```bash
git clone <YOUR_REPOSITORY_URL>
cd <YOUR_REPOSITORY_DIRECTORY>
```

### Install Dependencies

For an npm-workspace implementation:

```bash
npm install
```

### Start Development

```bash
npm run dev --workspace=apps/web
```

### Build

```bash
npm run build --workspace=apps/web
```

### Optional Backend

If the NestJS application is configured:

```bash
npm run start:dev --workspace=apps/api
```

**Note:** Replace the repository placeholders and confirm these workspace scripts match the actual `package.json` files before publishing.

---

## 09. Engineering Principles — 開発原則

```text
01  INSPECT BEFORE MODIFYING
02  SEPARATE FACTS FROM ASSUMPTIONS
03  VERIFY BEFORE CLAIMING
04  BUILD FOR MAINTAINABILITY
05  PROTECT USERS AND THEIR DATA
06  TEST MEANINGFUL BEHAVIOR
07  DESIGN FOR THE PEOPLE USING THE SYSTEM
```

I believe good software is more than a successful build.

It requires thoughtful architecture, reliable data handling, clear interfaces, practical testing, and an understanding of the real environment in which it will operate.

Technical completion and production readiness are not necessarily the same thing.

---

## 10. Project Direction — 今後

SEIJAKU is intended to evolve as my engineering experience grows.

Development areas include:

- Refined responsive interface design.
- Project-specific engineering case studies.
- Interactive system architecture explorers.
- Accessible motion and parallax.
- Keyboard-first navigation.
- Performance optimization.
- Expanded engineering experiments.
- Reliable automated testing.

Roadmap items are not claims of completed implementation.

---

## 11. Connect — 接続

<div align="center">

### HAVE SOMETHING WORTH BUILDING?

I'm interested in thoughtful software projects, systems architecture, developer tooling, and technical collaboration.

[![GitHub](https://img.shields.io/badge/GitHub-azinamouto-171B20?style=for-the-badge&logo=github&logoColor=white)](https://github.com/azinamouto)

<br/>

**AJ Rienze Josol**

Founder & CTO — ALZA.Net IT Solutions  
Full-Stack Engineer & Systems Architecture Enthusiast  
Bohol, Philippines

<br/>

**静かに創り、世界を変える。**

*Create quietly. Change the world.*

<br/>

<img src="https://capsule-render.vercel.app/api?type=waving&height=110&color=0:14191E,50:36434E,100:14191E&section=footer" width="100%" alt="SEIJAKU Footer"/>

</div>
