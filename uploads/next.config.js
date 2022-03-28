/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    MONGO_DB_URL: "mongodb+srv://general:madhav12@cluster0.bslmm.mongodb.net/daily-events?retryWrites=true&w=majority",
    ADMIN_USERNAME: "GeneralMadhav",
    ADMIN_PASSWORD: "bharatmatakijai",
    JWT_SECRET_KEY: "GeneralMadhavIsGreat"
  }
}

module.exports = nextConfig
