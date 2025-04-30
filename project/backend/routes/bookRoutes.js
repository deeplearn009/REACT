import express from 'express'
import { deleteBook, getBooks, postBook } from '../controllers/bookController.js'

const router = express.Router()

router
.get('/books', getBooks)
.post('/books', postBook)
.delete('/books/:id', deleteBook)

export default router