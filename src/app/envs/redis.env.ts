import "dotenv/config";

export const redis_env = {
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT!),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
};