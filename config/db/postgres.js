import { Pool } from "pg";

const pgPool = new Pool({
  connectionString: process.env.POSTGRES_URI,
});

pgPool.connect()
  .then(() => console.log("PostgreSQL connected"))
  .catch(err => console.error("PostgreSQL error:", err));

module.exports = pgPool;