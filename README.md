# Next.js Authentication Template

A production-ready Next.js template with authentication, database integration, and modern development practices.

## 🚀 Features

- **Authentication**: NextAuth.js with Google OAuth and Magic Link
- **Database**: PostgreSQL with Prisma ORM
- **Email**: Resend integration with custom HTML templates
- **UI**: Tailwind CSS with responsive design
- **TypeScript**: Full type safety
- **Security**: Session management and protected routes

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- Node.js 18+ 
- npm, yarn, or pnpm
- PostgreSQL database
- Git

## ⚡ Quick Start

### 1. Clone and Install

```bash
git clone <your-repo-url>
cd next-auth-template
npm install
```

### 2. Environment Setup

Copy the environment file and configure your variables:

```bash
cp .env.example .env.local
```

Configure the following variables in `.env.local`:

```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/nextauth_template"

# NextAuth.js
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-here-use-openssl-rand-base64-32"

# Google OAuth (optional)
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"

# Email Provider
RESEND_API_KEY="your-resend-api-key"
EMAIL_FROM="noreply@yourdomain.com"

# Application
NODE_ENV="development"
```

### 3. Database Setup

```bash
# Generate Prisma client
npx prisma generate

# Run database migrations
npx prisma migrate dev --name init
```

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🏗️ Architecture Overview

### Project Structure

```
src/
├── app/                    # Next.js 13+ app directory
│   ├── api/               # API routes
│   │   └── auth/          # NextAuth.js API routes
│   ├── auth/              # Authentication pages
│   │   ├── signin/        # Custom sign-in page
│   │   └── error/         # Authentication error page
│   ├── secure/            # Protected routes
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # Reusable React components
│   ├── providers.tsx      # Context providers
│   ├── signinGoogleButton.tsx
│   └── signinMagicLinkForm.tsx
├── constants/             # Application constants
│   └── EmailTemplate.ts   # Email templates
├── lib/                   # Utility libraries
│   ├── auth.ts            # NextAuth.js configuration
│   └── prisma.ts          # Prisma client
├── types/                 # TypeScript type definitions
│   └── next-auth.d.ts     # NextAuth.js type extensions
└── middleware.ts          # Next.js middleware
```

### Core Technologies

- **Framework**: Next.js 15 with App Router
- **Authentication**: NextAuth.js v4
- **Database**: PostgreSQL with Prisma ORM
- **Styling**: Tailwind CSS
- **Email**: Resend
- **TypeScript**: Full type safety
- **Deployment**: Vercel-ready

### Authentication Flow

1. **OAuth Flow**: Google OAuth with account linking
2. **Magic Link**: Email-based passwordless authentication
3. **Session Management**: Database sessions with Prisma adapter
4. **Route Protection**: Middleware-based route protection

### Database Schema

The application uses the standard NextAuth.js schema with additional fields:

- **User**: Extended with `createdAt` and `updatedAt`
- **Account**: OAuth account linking
- **Session**: Database session storage
- **VerificationToken**: Magic link tokens
- **Authenticator**: WebAuthn support (optional)

## 🛠️ Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript compiler
```

### Database Commands

```bash
npx prisma studio          # Open Prisma Studio
npx prisma generate        # Generate Prisma client
npx prisma migrate dev     # Create and apply migration
npx prisma migrate reset   # Reset database
npx prisma db push         # Push schema without migration
```

### Development Workflow

1. **Feature development**:
   - Create feature branch
   - Implement changes
   - Add tests if applicable
   - Test locally

2. **Database changes**:
   - Modify `prisma/schema.prisma`
   - Run `npx prisma migrate dev`
   - Update types if needed

3. **Authentication changes**:
   - Modify `src/lib/auth.ts`
   - Test auth flows
   - Update middleware if needed


## 🔧 Configuration

### Environment Variables

| Variable | Description | Required | Default |
|----------|-------------|----------|---------|
| `DATABASE_URL` | PostgreSQL connection string | ✅ | - |
| `NEXTAUTH_URL` | Application URL | ✅ | `http://localhost:3000` |
| `NEXTAUTH_SECRET` | NextAuth.js secret | ✅ | - |
| `GOOGLE_CLIENT_ID` | Google OAuth client ID | ✅ | - |
| `GOOGLE_CLIENT_SECRET` | Google OAuth client secret | ✅ | - |
| `RESEND_API_KEY` | Resend API key | ✅ | - |
| `EMAIL_FROM` | From email address | ✅ | - |

### Custom Configuration

- **Auth providers**: Add/remove in `src/lib/auth.ts`
- **Protected routes**: Modify `src/middleware.ts`
- **Email templates**: Edit `src/constants/EmailTemplate.ts`
- **Database schema**: Modify `prisma/schema.prisma`

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


**Happy coding!** 🎉
