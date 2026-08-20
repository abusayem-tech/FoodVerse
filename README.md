# FoodVerse

Food delivery web app (React + Vite frontend, Express API) with Capacitor Android support.

Demo users and restaurants are **hardcoded** in the backend (no `.env` / MongoDB required).

## Live demo

https://foodverse-roza.vercel.app

## Demo accounts

| Role | Email | Password | Phone |
|------|-------|----------|-------|
| **Customer** | `customer@foodverse.com` | `Customer@123` | `01711111111` |
| **Owner** | `owner@foodverse.com` | `Owner@123` | `01722222222` |
| **Admin** | `admin@foodverse.com` | `Admin@123` | `01733333333` |

Login accepts **email or phone** plus password.

## Run locally

```bash
# Terminal 1 — API (http://localhost:5001)
cd backend
npm install
npm run server

# Terminal 2 — Web app (http://localhost:3000)
cd frontend
npm install
npm start
```

Frontend calls `/api/...` and Vite proxies that to port 5001.

## Deploy (Vercel)

From the repo root:

```bash
npx vercel --prod
```

## Tech stack

- **Frontend:** React 18, Vite, React Router
- **Backend:** Node.js, Express, JWT, bcrypt (hardcoded demo store)
- **Mobile:** Capacitor (Android)
