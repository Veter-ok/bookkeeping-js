import express, {Express, Request} from 'express'
import dotenv from 'dotenv'

dotenv.config()
const app:Express = express()
const PORT = process.env.PORT || 8080

app.get("/", (req:Request, res) => {
	res.send("Hello world")
})

app.listen(PORT, () => {
	console.log(`[server]: Server is running at https://localhost:${PORT}`)
})