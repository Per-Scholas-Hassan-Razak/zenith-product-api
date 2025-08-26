const productService = require("../services/productService");
const handleError = require("../error/handleError");

const createProduct = async (req, res) => {
  try {
    const rawProduct = req.body;
    const product = await productService.createProduct(rawProduct);
    res.status(201).json(product);
  } catch (error) {
    handleError(res, error);
  }
};

const findProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await productService.findProductById(id);
    res.status(200).json(product);
  } catch (error) {
    handleError(res, error);
  }
};

const updateProductById = async (req, res) => {
  try {
    const id = req.params.id;
    console.log("id", id);
    const rawUpdate = req.body;
    const product = await productService.updateProductById(id, rawUpdate);
    res.status(200).json(product);
  } catch (error) {
    handleError(res, error);
  }
};

const getAllProducts = async (req, res) => {
  try {
    const productsList = await productService.getAllProducts();
    res.status(200).json(productsList);
  } catch (error) {
    handleError(res, error);
  }
};

const deleteProductById = async (req, res) => {
  try {
    const id = req.params.id;
    const product = productService.deleteProductById(id);
    res.status(200).json(`Product with ${id} successfully deleted`);
  } catch (error) {
    handleError(res, error);
  }
};


const advancedQuerying = async (req, res) => {
  try {
    const {category, minPrice, maxPrice} = req.query
    console.log(`
        category       ${category}
        minPrice        ${minPrice}
        maxPrice       ${maxPrice}
       
        `)
    const products = await productService.advancedQuerying(category,minPrice,maxPrice);
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createProduct,
  findProductById,
  updateProductById,
  getAllProducts,
  deleteProductById,
  advancedQuerying,
};
