import express, {urlencoded} from 'express'
import cors from 'cors'
import productRoute from './routes/productRoute.js'
import { connectDB } from './config/config.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

app.use('/', productRoute)

connectDB()

app.listen(5000, () => {
    console.log('running');    
})