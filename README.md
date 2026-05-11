# Consulting Portfolio Website

A modern, professional consulting portfolio website built for Hugo Waverly. This full-stack application showcases a consultant's expertise, case studies, testimonials, and provides a contact mechanism for potential clients.

## 🎯 Project Overview

This project is a stunning consulting portfolio website that combines:
- **Professional Design**: Dark theme with gold accents and elegant typography
- **Full-Stack Functionality**: Next.js frontend with REST API and database backend
- **Interactive Components**: Smooth animations, carousel galleries, and responsive layouts
- **Contact Management**: Email form with database persistence for lead capture
- **Video-Inspired Architecture**: Designed based on careful analysis of a professional consulting website concept

## 🛠 Technology Stack

### Frontend
- **Next.js 16.2.6** - React framework for production
- **React 19** - UI library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS 4** - Utility-first CSS framework
- **Shadcn/UI** - High-quality React components
- **Framer Motion** - Animation library
- **React Hook Form** - Form state management
- **Zod** - Schema validation

### Backend & Database
- **Next.js API Routes** - Serverless backend
- **Prisma 6.11.1** - ORM for database operations
- **SQLite** - Lightweight database
- **NextAuth.js** - Authentication (optional)

### Build & Deployment
- **Bun** - Fast JavaScript runtime
- **ESLint** - Code quality linting
- **Caddyfile** - Web server configuration (for production)

### UI & Utilities
- **Radix UI** - Accessible component primitives
- **TanStack Query** - Server state management
- **TanStack React Table** - Data table component
- **Lucide React** - Icon library
- **React Markdown** - Markdown rendering
- **Sharp** - Image optimization

## 📋 Features

### 🎨 Website Sections
1. **Navigation Bar** - Sticky header with smooth scrolling links and mobile hamburger menu
2. **Hero Section** - Eye-catching headline with profile photo and key statistics
3. **Strategy Section** - 3-step consulting process explanation
4. **About Section** - Professional biography and core competencies
5. **Case Studies** - Interactive carousel showcasing successful projects
6. **Testimonials** - Client feedback and success stories
7. **Certificates** - Credentials and qualifications with verified badges
8. **Contact Section** - Professional contact form with validation
9. **Footer** - Brand info, quick links, and contact details

### 🎬 Design Elements
- **Color Scheme**:
  - Dark Purple: `#1a0a2e` (primary background)
  - Cream: `#f5f0e8` (light sections)
  - Maroon: `#5c1a2a` (accent sections)
  - Gold: `#c9a84c` (highlights & buttons)
- **Animations**: Smooth fade-up effects, carousel transitions, and scroll-triggered animations
- **Responsive Design**: Mobile-first approach with desktop optimizations
- **Custom Scrollbar**: Styled for consistency with brand colors

## 📁 Project Structure

```
├── src/
│   ├── app/                    # Next.js app directory
│   │   ├── page.tsx           # Main portfolio page
│   │   ├── api/
│   │   │   └── contact/       # Contact form API endpoint
│   │   └── layout.tsx         # Root layout
│   ├── components/            # Reusable React components
│   ├── hooks/                 # Custom React hooks
│   └── lib/                   # Utility functions
├── prisma/
│   └── schema.prisma          # Database schema
├── public/                    # Static assets
├── download/                  # Generated/exported files
├── skills/                    # Custom AI skills & agents
├── examples/                  # Example code (websocket, etc.)
├── mini-services/             # Microservices
├── package.json              # Dependencies & scripts
├── next.config.ts            # Next.js configuration
├── tailwind.config.ts        # Tailwind CSS configuration
└── tsconfig.json             # TypeScript configuration
```

## 🗄 Database Schema

### User Model
```prisma
model User {
  id        String   @id @default(cuid())
  email     String   @unique
  name      String?
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

### ContactMessage Model
```prisma
model ContactMessage {
  id          String   @id @default(cuid())
  name        String
  company     String?
  email       String
  message     String
  read        Boolean  @default(false)
  createdAt   DateTime @default(now())
}
```

### Post Model
```prisma
model Post {
  id        String   @id @default(cuid())
  title     String
  content   String?
  published Boolean  @default(false)
  authorId  String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ or Bun
- npm or Bun package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd workspace-fab9e039-5fb2-4aeb-a404-f046b58e433e
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   bun install
   ```

3. **Set up environment variables**
   ```bash
   # Create .env.local file
   DATABASE_URL="file:./dev.db"
   ```

4. **Set up the database**
   ```bash
   npm run db:generate  # Generate Prisma client
   npm run db:push     # Sync database schema
   ```

### Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## 📦 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server on port 3000 |
| `npm run build` | Build for production with standalone optimization |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint to check code quality |
| `npm run db:push` | Sync Prisma schema with database |
| `npm run db:generate` | Generate Prisma client |
| `npm run db:migrate` | Run database migrations |
| `npm run db:reset` | Reset database to initial state |

## 🔌 API Endpoints

### POST /api/contact
Submit a contact form inquiry

**Request Body:**
```json
{
  "name": "string",
  "company": "string (optional)",
  "email": "string",
  "message": "string"
}
```

**Response:**
- `200 OK`: Contact message saved successfully
- `400 Bad Request`: Validation error
- `500 Internal Server Error`: Database error

**Features:**
- Zod schema validation
- Stores in ContactMessage database
- Error handling with toast notifications

## 🎨 Styling & Design System

- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Custom Colors**: Brand colors integrated into Tailwind config
- **Responsive Breakpoints**: Mobile, tablet, desktop optimized layouts
- **Animation Library**: Framer Motion for sophisticated transitions
- **Component Library**: Shadcn/UI for accessible, customizable components

## 🔐 Security Features

- **Input Validation**: Zod schema validation on all form inputs
- **Type Safety**: Full TypeScript implementation
- **Authentication Ready**: NextAuth.js configured for future auth
- **Environment Variables**: Sensitive config in `.env` files

## 📱 Responsive Design

- **Mobile First**: Designed for mobile, enhanced for desktop
- **Breakpoints**:
  - SM: 640px - Small devices
  - MD: 768px - Tablets
  - LG: 1024px - Laptops
  - XL: 1280px - Large screens
  
- **Mobile Features**:
  - Hamburger navigation menu
  - Touch-optimized components
  - Adjusted spacing and typography

## 🚀 Deployment

### Production Build

```bash
npm run build
npm start
```

The build process:
1. Compiles Next.js with optimizations
2. Creates a standalone server
3. Copies static assets to `.next/standalone`
4. Generates `server.js` for production execution

### Using Caddyfile

The included `Caddyfile` provides web server configuration for reverse proxy and SSL/TLS support.

### Environment Setup

For production deployment, ensure:
- `NODE_ENV=production` environment variable
- Proper database URL configuration
- Any API keys or secrets in environment variables

## 🔄 Workflow & Development

### Git Workflow
- Main branch for production-ready code
- Feature branches for development
- All changes tracked in worklog.md

### Development Process

**Phase 1: Analysis**
- Video extraction and frame analysis using VLM
- Design system identification (colors, sections, layout)

**Phase 2: Frontend Development**
- Section-by-section component building
- Animation integration with Framer Motion
- Responsive design implementation

**Phase 3: Backend Integration**
- Database schema design with Prisma
- API endpoint creation
- Form submission handling

## 📝 Skills & Agents

This project includes custom AI skills in the `/skills` directory for:
- Blog writing and content generation
- Academic research and paper analysis
- Video and image processing
- Market research and analysis
- And many more specialized tasks

## 🎓 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Shadcn/UI Components](https://ui.shadcn.com)
- [Framer Motion](https://www.framer.com/motion/)

## 📊 Current Status

✅ **Completed**
- Professional portfolio design and layout
- All 7 website sections implemented
- Responsive mobile design
- Smooth scroll animations
- Contact form with database integration
- Professional styling with brand colors

🔄 **In Development**
- Additional features and optimizations

## 🤝 Contributing

When contributing to this project:
1. Create a feature branch from `main`
2. Make your changes with clear commits
3. Test thoroughly on mobile and desktop
4. Update documentation as needed
5. Submit a pull request

## 📄 License

This project is private and proprietary.

## 👤 Contact

For inquiries about this consulting portfolio website, use the contact form on the website or reach out to the project maintainers.

---

**Last Updated**: May 2026
**Version**: 0.2.0
