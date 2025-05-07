# 🚀 FullyHacks 2025

**Welcome to FullyHacks 2025 — CSUF's first 24-hour in-person hackathon!** This repository contains the codebase for the official website and supporting tools. See more [info.](https://acmcsuf.com/hackathons) about FullyHacks!

## 🛠 Tech Stack

- **Framework:** [Next.js](https://nextjs.org/)
- **Styling:** [TailwindCSS](https://tailwindcss.com/), [DaisyUI](https://daisyui.com/)
- **ORM:** [Prisma](https://www.prisma.io/)
- **Database:** [MongoDB](https://www.mongodb.com/)

## ⚙️ Local Development Setup

### 1. Fork & Clone the Repo

```bash
git clone https://github.com/acmcsufoss/fullyhacks.git
cd fullyhacks
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create a `.env` File

Add the following to your `.env` file to enable local development:

```env
NEXT_PUBLIC_API_URL="http://localhost:3000"
NEXTAUTH_URL="http://localhost:3000"
NODE_ENV=dev
```

> 💡 Refer to `.env.example` for all supported environment variables.

## 🏃‍♂️ Running the Project

### Start the Website

```bash
npm run dev
```

### Open Prisma Studio (for database inspection)

```bash
npx prisma studio
```

## ✅ Before You Commit

- Format your code using:

```bash
npm run format
```

## 🔐 Environment Variables & Privacy

- Server environment variables are **confidential** to protect participant data.
- Only the **FullyHacks Web Team** should use the production variables.
- You’re welcome to connect your own database locally to explore.

## ⚠️ Note

This repo is **not** connected to the live Vercel deployment due to Vercel’s team organization costs.
