import express, {Express, Request} from 'express' 
import path from 'path'
import fileUpload from 'express-fileupload'
import {fileURLToPath} from 'url';
import cors from 'cors'
import dotenv from 'dotenv'
import {router} from './api/index.js'

dotenv.config()
const app:Express = express()
//const PORT = process.env.PORT || 8080
const PORT = 5000

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors())
app.use(express.json())
app.use(fileUpload({}))
app.use('/api/v1/', router)
app.disable('x-powered-by');

app.use('/static', express.static(path.join(__dirname, 'public')))

app.get("/", (req:Request, res) => {
	res.send("Hello world")
})

app.listen(PORT, '0.0.0.0', () => {
	console.log(`[server]: Server is running at https://localhost:${PORT}`)
})