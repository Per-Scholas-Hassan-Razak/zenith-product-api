const Product = require("../models/Product");

const createProduct = async (data) => {
  const product = await Product.create(data);
  return product;
};

const findProductById = async (id) => {
  const product = await Product.findById(id);
  if (!product) {
    const error = new Error(`product with ${id} NOT FOUND`);
    error.statusCode = 404;
    throw error;
  }
  return product;
};

const updateProductById = async (id, update) => {
  const options = {
    new: true,
    runValidators: true,
  };

  const product = await Product.findByIdAndUpdate(id, update, options);

  if (!product) {
    const error = new Error(`product with ${id} NOT FOUND`);
    error.statusCode = 404;
    throw error;
  }

  return product;
};

const getAllProducts = async () => {
  const productsList = await Product.find({});
  return productsList;
};

const deleteProductById = async (id) => {
  const product = await Product.findByIdAndDelete(id);
  if (!product) {
    const error = new Error(`product with ${id} NOT FOUND`);
    error.statusCode = 404;
    throw error;
  }
  return product;
};

const advancedQuerying = async (category, minPrice, maxPrice) => {
  if (typeof category !== "string") {
    throw new Error("Invalid category type passed to DB query");
  }

  return await Product.find({
    category,
    price: { $gte: minPrice, $lte: maxPrice },
  }).sort({ price: -1 })
};

module.exports = {
  createProduct,
  findProductById,
  updateProductById,
  getAllProducts,
  deleteProductById,
  advancedQuerying,
};
