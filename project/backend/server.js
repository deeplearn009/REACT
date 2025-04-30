import express from 'express'
import router from './routes/bookRoutes.js'
import connectDB from './configs/config.js'
import cors from 'cors'

const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors('*'))

app.use('/', router)

connectDB()

app.listen(5000, () => console.log('connected'));
