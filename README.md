# Marketly — Full-stack multi-tenant commerce platform

Marketly includes the React/Vite storefront and dashboards plus a Node.js/Express API backed by MongoDB.

## Stack
React + Vite, Node.js + Express, MongoDB + Mongoose, JWT + bcrypt, Stripe Checkout + webhooks, Cloudinary image uploads, Nodemailer SMTP.

## Setup
1. `npm install`
2. `cd server && npm install`
3. Copy `server/.env.example` to `server/.env` and configure MongoDB, JWT, Stripe, Cloudinary and SMTP.
4. Copy root `.env.example` to `.env` if your API URL differs from `http://localhost:5000/api`.
5. Start MongoDB.
6. Terminal 1: `npm run dev`
7. Terminal 2: `npm run server`

Frontend: http://localhost:5173  |  API: http://localhost:5000/api/health

## API
- POST `/api/auth/register`, POST `/api/auth/login`, GET `/api/auth/me`
- GET/POST/PATCH `/api/stores`
- GET/POST/PATCH/DELETE `/api/products`
- POST `/api/upload` — Cloudinary
- POST `/api/orders`, GET `/api/orders/mine`
- POST `/api/payments/checkout-session`
- POST `/api/payments/webhook`

Production: use HTTPS, strong secrets, Stripe webhook signing, MongoDB Atlas, restricted Cloudinary credentials, an SMTP provider/app password, validation/rate limiting and a secret manager.
