const express = require("express");
const router = express.Router();
const {
  createProduct,
  findProductById,
  updateProductById,
  getAllProducts,
  deleteProductById,
} = require("../controllers/productController");

router.get("/", getAllProducts);
router.get("/:id", findProductById);
router.post("/", createProduct);
router.put("/:id", updateProductById);
router.delete("/:id", deleteProductById);

module.exports = router;
