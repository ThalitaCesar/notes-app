<h2 align="Notas Criativas</h2>

# 📌 Overview

This project is a simple note CRUD website called Notas Criativas, built using the Create T3 Stack. The purpose is to create a notes app where users can view, edit, and delete notes. Notas Criativas is a project built with Next.js, Prisma and SQLite for local database storage. The project includes various dependencies such as React, Tailwind CSS, and TypeScript.

## Requirements

To run this project, ensure you have the following installed:

- [Node.js](https://nodejs.org/en/) (version 20)
- [SQLite](https://www.sqlite.org/download.html) (for database storage)

## 🔍Technologies

* [T3 Stack](https://create.t3.gg/) as the base technology stack.

* [Next.js](https://nextjs.org) for building the user interface.
  
* [Tailwind CSS](https://tailwindcss.com) for styling.
  
* [Prisma](https://www.prisma.io) with SQLite for database management.
  
* [tRPC](https://trpc.io) for type-safe remote procedure calls.
  
* [TypeScript](https://www.typescriptlang.org) for type safety.


## 📁 Project Structure

```bash
├── .next
├── .vercel
├── node_modules
├── prisma
│   ├── migrations
│   ├── db.sqlite
│   └── schema.prisma
├── public
│   ├── favicon.ico
├── src
│   ├── app
│   │   ├── api
│   │   │   └── trpc
│   │   │       ├── [trpc]
│   │   │       │   └── route.ts
│   │   ├── components
│   │   │   ├── CreateNote.tsx
│   │   │   ├── DarkModeSwitch.tsx
│   │   │   ├── DeleteNote.tsx
│   │   │   ├── EditNote.tsx
│   │   │   ├── NoteCard.tsx
│   │   │   └── NotesCards.tsx
│   │   ├── pages
│   │   │   └── HomePage.tsx
│   │   ├── types
│   │   │   └── Notes.ts
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── assets
│   ├── server
│   │   ├── api
│   │   │   ├── routers
│   │   │   │   └── post.ts
│   │   │   ├── root.ts
│   │   │   └── trpc.ts
│   │   └── db.ts
│   ├── styles
│   └── trpc
│       ├── react.tsx
│       └── server.ts
├── .env
├── .env.example
├── .eslintrc.cjs
├── .gitignore
├── next-env.d.ts
├── next.config.js
├── package-lock.json
├── package.json
├── postcss.config.cjs
├── prettier.config.js
├── README.md
├── tailwind.config.ts
├── tsconfig.json
└── vercel.json

```

## 📝 Project Summary

- [**.next**]: Contains Next.js build artifacts and configuration.
- [**.vercel**]: Vercel deployment configuration and metadata.
- [**node_modules**]: Node.js dependencies installed by npm or yarn.
- [**prisma**]: Prisma configuration and database setup.
- [**prisma\migrations**]: Prisma database migrations.
- [**prisma\db.sqlite**]: SQLite database file managed by Prisma.
- [**prisma\schema.prisma**]: Prisma schema definition file.
- [**public**]: Publicly accessible assets like images and favicon.
- [**src**]: Source code directory for the project.
- [**src\app**]: Application-specific code and components.
- [**src\app\api\trpc\[trpc]**]: tRPC API routes and configurations.
- [**src\app\components**]: Reusable React components.
- [**src\app\pages**]: React pages for different views.
- [**src\app\types**]: TypeScript type definitions.
- [**src\app\layout.tsx**]: Main layout component.
- [**src\app\page.tsx**]: Base page component.
- [**src\assets**]: Project assets like images and fonts.
- [**src\server**]: Server-side code for backend logic.
- [**src\server\api**]: API endpoints and routers.
- [**src\server\api\routers**]: Specific API routers.
- [**src\server\db.ts**]: Database connection and queries.
- [**src\styles**]: Stylesheets and global CSS.
- [**src\trpc**]: tRPC configuration for server and client.
- [**src\env.js**]: Environment configuration file.
- [**.env** and **.env.example**]: Environment variable configuration.
- [**.eslintrc.cjs** and **.gitignore**]: ESLint configuration and Git ignore rules.
- [**next-env.d.ts** and **next.config.js**]: Next.js environment declarations and configuration.
- [**package-lock.json** and **package.json**]: Node.js package manager files.
- [**postcss.config.cjs** and **prettier.config.js**]: PostCSS and Prettier configuration.
- [**tailwind.config.ts**]: Tailwind CSS configuration.
- [**tsconfig.json**]: TypeScript configuration file.
- [**vercel.json**]: Vercel deployment configuration.


## ⚙️ Setting Up

1. **Clone the repository:**

   ```bash
   git clone https://github.com/ThalitaCesar/notes-app.git
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Migrate the database:**

   Use Prisma to apply migrations and set up the SQLite database.

   ```bash
   npx prisma migrate dev
   ```
4. **Start the development mode:**
```bash
npm run dev
```

## Screenshots


