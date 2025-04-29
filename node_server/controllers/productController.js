import productModel from "../models/productModel.js"


const getProducts = async (req, res) => {
    const products = await productModel.find()
    res.json(products)
}

const postProduct = async (req, res) => {
    const {title, price, image} = req.body
    console.log(req.body);
    

    const product = {title, price, image}
    await productModel.create(product)
    res.json(product)
}

const updateProduct = async (req, res) => {
    const {title, price, image} = req.body
    const updatedProduct = await productModel.findByIdAndUpdate(
        req.params.id,
        {title, price, image},
        {new: true}
    )
    res.json(updatedProduct)
}

const deleteProduct = async (req, res) => {

    const product = await productModel.findByIdAndDelete(req.params.id)
    console.log(req.params.id);
    
    res.json(product)
}

export {getProducts, postProduct, updateProduct, deleteProduct}