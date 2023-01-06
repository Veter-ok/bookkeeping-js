import pg from "pg";
const { Pool } = pg;

export default new Pool({
	user: 'postgres',
	database: 'bookkeeping',
	password: 'Rodion66_veterOk',
	host: 'localhost',
	port: 5432
})