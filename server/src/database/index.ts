import pg from "pg";
import dotenv from 'dotenv'
const { Pool } = pg;

dotenv.config()

export default new Pool({
	user: 'postgres',
	database: 'bookkeeping',
	password: process.env.DATABASE_PASSWORD,
	host: 'localhost',
	port: 5432
})