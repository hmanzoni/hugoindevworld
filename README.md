# Hugo Carrizo Manzoni — Portfolio

> **Software Engineer** | AWS, Node.js, TypeScript, Python

A modern, type-safe portfolio website showcasing skills, experience, and professional projects. Built with **React + TypeScript** using **Vite**, following **Hexagonal Architecture** principles for clean, maintainable code.

🔗 **[View Live Site](https://hugoindevworld.netlify.app/)** | 📚 **[Source Code](https://github.com/hmanzoni/hugoindevworld)**

---

## ✨ Features

- **🌍 Multi-Language Support** — English, Spanish, and Italian with automatic language detection
- **⚡ Performance Optimized** — Lazy loading for sections, optimized Vite build, fast load times
- **🏗️ Hexagonal Architecture** — Clean separation of concerns with domain, application, infrastructure, and presentation layers
- **📱 Responsive Design** — Fully responsive across all device sizes
- **🎨 Icon System** — Custom icon registry using `@iconscout/react-unicons`
- **🔒 Type-Safe** — Full TypeScript coverage with strict typing
- **🐳 Docker Ready** — Containerized for consistent deployments
- **🚀 Netlify Deployed** — Automated CI/CD with branch previews

---

## 🚀 Quick Start

### Prerequisites
- **Node.js** 16+ and **npm** (or yarn)

### Installation

```bash
# Clone the repository
git clone https://github.com/hmanzoni/hugoindevworld.git
cd hugoindevworld

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:3000` with hot module reload enabled.

### Build for Production

```bash
# Build with TypeScript checking + Vite optimization
npm run build

# Preview the production build locally
npm run preview
```

---

## 🏛️ Architecture — Hexagonal (Clean Architecture)

This project demonstrates **Hexagonal Architecture** (Ports & Adapters) principles, ensuring domain logic is independent of frameworks and infrastructure.

### Directory Structure

```
src/
├── domain/                      # Core business logic (framework-agnostic)
│   ├── models/                  # TypeScript interfaces, value objects, types
│   ├── ports/                   # Adapter contracts (ContentRepository, IconProvider)
│   └── services/                # Pure domain logic (e.g., calcYears)
│
├── application/                 # Use cases & state management
│   ├── state/                   # AppState, AppActions, appReducer (typed)
│   └── useCases/                # Business logic (DetectLanguage, GetIcons)
│
├── infrastructure/              # Adapter implementations
│   ├── adapters/                # JsonContentRepository, UniconIconProvider, etc.
│   └── data/                    # JSON content (i18n data for all languages)
│
├── presentation/                # React UI layer
│   ├── context/                 # AppContext, AppProvider, useAppContext hook
│   ├── components/              # Reusable UI components
│   ├── sections/                # Page sections (Header, Home, About, Skills, etc.)
│   ├── hooks/                   # Custom React hooks (useContent)
│   ├── utils/                   # Helper utilities (foundIcon, rolesListHandler)
│   ├── App.tsx                  # Root component
│   └── main.tsx                 # Entry point
│
├── assets/                      # CSS, images, PDFs
├── types/                       # Global type declarations (.d.ts)
└── components/                  # Dormant legacy JS components (not in use)
```

### Path Aliases

For cleaner imports, the project uses TypeScript path aliases configured in `tsconfig.json` and `vite.config.ts`:

```typescript
// Instead of: import { Language } from '../../../domain/models/Language'
// Use:
import { Language } from '@domain/models/Language'

// Available aliases:
// @domain/*         → src/domain/*
// @application/*    → src/application/*
// @infrastructure/* → src/infrastructure/*
// @presentation/*   → src/presentation/*
// @assets/*         → src/assets/*
```

### Key Architectural Decisions

1. **Domain Layer Independence** — Business logic has zero framework dependencies
2. **Port-Adapter Pattern** — Infrastructure adapters implement domain ports, allowing easy swapping
3. **Typed State Management** — Context API with TypeScript discriminated union actions
4. **Lazy Loading** — Sections load on-demand with React Suspense for optimal performance
5. **Separation of Concerns** — Clear boundaries between layers reduce coupling and improve testability

---

## 🎯 Core Systems

### State Management — Typed Context API

Uses React Context API with a typed reducer pattern:

```typescript
// Define actions with discriminated unions
type AppAction =
  | { type: 'SET_LANGUAGE'; payload: Language }
  | { type: 'SET_ICONS'; payload: IconRegistry }
  | { type: 'SET_LOADING'; payload: boolean }

// Use context hook in components
const { language, icons, dispatch } = useAppContext()
```

**Files:**
- `src/application/state/AppState.ts` — State shape definition
- `src/application/state/appReducer.ts` — Action reducer logic
- `src/presentation/context/AppProvider.tsx` — Provider component
- `src/presentation/context/useAppContext.ts` — Type-safe hook

```typescript
// Access content in components
const { language } = useAppContext()
const content = data[language || 'en']
```

### Icon System

Custom icon registry implementation:

1. **Config** — Define icons in `src/presentation/components/icons.ts`
2. **Adapter** — `UniconIconProvider` creates React elements from configs
3. **Storage** — Icons stored in context with key `iconName.className`
4. **Retrieval** — Use `foundIcon()` utility to fetch icons

```typescript
// Usage in components
const scrollUpIcon = foundIcon(icons, 'UilArrowUp', 'scrollup__icon')
```

### Performance Optimizations

- **Code Splitting** — Sections use `React.lazy()` + `Suspense` for on-demand loading
- **Vite Build** — Fast rebuilds and optimized production bundles
- **CSS** — Component-scoped styling to prevent bloat
- **Lazy Sections** — Skills, Services, Qualification load only when needed

---

## 🐳 Docker & Deployment

### Docker Support

The project includes containerization for consistent deployments:

```bash
# Build Docker image
docker build -t hugoindevworld .

# Run container
docker run -p 3000:3000 hugoindevworld
```

### Netlify Deployment

The site is deployed on **Netlify** with:
- **Automatic CI/CD** — Deploys on push to `master` branch
- **Branch Previews** — Pull requests get preview URLs
- **Environment Variables** — Managed in Netlify settings
- **Live URL** — https://hugoindevworld.netlify.app/

---

## 🛠️ Technology Stack

| Layer | Technology |
|-------|-----------|
| **Runtime** | Node.js 16+ |
| **Framework** | React 19 |
| **Language** | TypeScript 5.9 |
| **Build Tool** | Vite 7 |
| **Icons** | @iconscout/react-unicons |
| **Styling** | CSS (component-scoped) |
| **State** | React Context API |
| **Deployment** | Netlify |
| **Containerization** | Docker |

---

## 📋 Development Workflow

### Commands

```bash
npm run dev      # Start dev server with hot reload
npm run build    # TypeScript check + Vite build
npm run preview  # Preview production build locally
```

### Git Strategy

- **Main Branch** — `master` (production-ready code)
- **Features** — Feature branches follow naming: `feature/feature-name`

---

## 🔮 Roadmap

- ✅ Hexagonal Architecture implementation
- ✅ Multi-language support (EN/ES/IT)
- ✅ Docker containerization
- 🔄 **Unit & Integration Tests** (planned)
- 🔄 Performance monitoring & analytics
- 🔄 Enhanced project showcase with filters

---

## 📚 Adding Content

### Adding a New Section

1. **Create Domain Model** — `src/domain/models/YourModel.ts`
   ```typescript
   export interface YourContent {
     title: string
     description: string
   }
   ```

2. **Add JSON Data** — `src/infrastructure/data/your-content.json`
   ```json
   {
     "en": { "title": "...", "description": "..." },
     "es": { "title": "...", "description": "..." },
     "it": { "title": "...", "description": "..." }
   }
   ```

3. **Update Repository** — Add getter to `ContentRepository` port and `JsonContentRepository` adapter

4. **Create Component** — `src/presentation/sections/YourSection.tsx`
   ```typescript
   const YourSection = () => {
     const { language } = useAppContext()
     const content = yourData[language || 'en']
     return <section>{/* ... */}</section>
   }
   ```

5. **Add to App** — Import and add to `src/presentation/App.tsx` (wrap in Suspense for lazy loading)

6. **Style** — Create `src/assets/css/your-section.css`

### Adding Icons

1. Add icon config to `arrIcons` in `src/presentation/components/icons.ts`
2. Add type declaration in `src/types/react-unicons.d.ts` (if new icon type)
3. Retrieve in components: `foundIcon(icons, 'IconName', 'className')`

---

## 📄 License

This project is licensed under the **GNU General Public License v3.0** — see LICENSE file for details.

---

## 📧 Contact

**Hugo Carrizo Manzoni**
Software Engineer | AWS, Node.js, TypeScript, Python

- 💼 [Portfolio](https://hugoindevworld.netlify.app/)
- 🐙 [GitHub](https://github.com/hmanzoni)
- 📧 [Email](mailto:hugocmdesign@gmail.com)

---

**Built with ❤️ using React, TypeScript, and clean architecture principles.**
