# AudioTag - Voice Artist Platform

## Overview

AudioTag is a dual-sided platform connecting voice artists with producers, directors, and content creators. Artists showcase their demo reels, while producers discover and connect with talent. The application features a mobile-first, audio-centric design inspired by Spotify/SoundCloud aesthetics with Material Design patterns for clear user flows.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- React 18+ with TypeScript for type-safe component development
- Vite as the build tool and development server
- Wouter for lightweight client-side routing
- TanStack React Query for server state management and caching

**UI Component Strategy**
- Radix UI primitives for accessible, unstyled components (dialogs, dropdowns, navigation menus, etc.)
- shadcn/ui component library with custom styling via Tailwind CSS
- Class Variance Authority (CVA) for managing component variants
- Mobile-first responsive design with 430px max-width constraint

**Design System**
- Tailwind CSS for utility-first styling with custom configuration
- HSL-based color system supporting dark mode
- Custom spacing scale (2, 3, 4, 6, 8, 12, 16 units)
- Typography: Inter (primary), JetBrains Mono (technical data)
- Design philosophy implementation following Norman's principles (discoverability, feedback, constraints, mapping, signifiers)

**State Management**
- React Query for async server state
- Local component state with React hooks
- Form handling with React Hook Form and Zod validation

### Backend Architecture

**Server Framework**
- Express.js with TypeScript for API routes
- RESTful API design with `/api` prefix for all endpoints
- Custom error handling middleware
- HTTP server creation for potential WebSocket support

**Storage Layer**
- In-memory storage implementation (`MemStorage`) as the current data layer
- Interface-based storage design (`IStorage`) allowing for database swapping
- UUID-based entity identification using crypto module

**Development Environment**
- Hot Module Replacement (HMR) via Vite middleware in development
- Custom logging system with timestamp formatting
- Replit-specific plugins for development experience

### Data Storage Solutions

**Current Implementation**
- In-memory Map-based storage for rapid prototyping
- User entity with username/password fields

**Planned Database Integration**
- PostgreSQL via Neon serverless driver (`@neondatabase/serverless`)
- Drizzle ORM for type-safe database queries
- Connection pooling via `@neondatabase/serverless` Pool
- Schema-first approach with migrations in `/migrations` directory
- Zod integration for runtime validation via `drizzle-zod`

**Schema Design**
- Users table with UUID primary keys, unique usernames
- Designed for extension to include: artist profiles, demos, producer accounts, connections, notifications, lists/groups

### External Dependencies

**Database & ORM**
- Neon Serverless PostgreSQL (planned integration via `DATABASE_URL` environment variable)
- Drizzle ORM with PostgreSQL dialect
- WebSocket support via `ws` package for Neon connection

**UI Libraries**
- Radix UI component primitives (18+ packages for dialogs, menus, forms, etc.)
- Lucide React for iconography
- date-fns for date formatting
- cmdk for command palette functionality

**Development Tools**
- Replit-specific Vite plugins (cartographer, dev banner, runtime error overlay)
- ESBuild for production server bundling
- TypeScript with strict mode enabled

**Session Management**
- `connect-pg-simple` for PostgreSQL-backed session storage (configured but not yet active)

**API Communication**
- Custom fetch wrapper with credential support
- Centralized error handling for non-OK responses
- JSON request/response handling