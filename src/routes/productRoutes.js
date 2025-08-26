const express = require("express");
const router = express.Router();
const {
  createProduct,
  findProductById,
  updateProductById,
  getAllProducts,
  deleteProductById,
  advancedQuerying 
} = require("../controllers/productController");

// router.get("/", getAllProducts);
router.get("/:id", findProductById);
router.post("/", createProduct);
router.put("/:id", updateProductById);
router.delete("/:id", deleteProductById);
router.get("/",advancedQuerying)

module.exports = router;
