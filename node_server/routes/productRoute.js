import express from 'express'
import { deleteProduct, getProducts, postProduct, updateProduct } from '../controllers/productController.js'

const router = express.Router()

router
.get('/products', getProducts)
.post('/products', postProduct)
.put('/products/:id', updateProduct)
.delete('/products/:id', deleteProduct)

export default router