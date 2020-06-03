const express = require("express");
const router = express.Router();

const adminController = require('../controllers/admin.js')



//we dont't execute the getAddProductPage function, that's why we didn't write it like adminController.getAddProductPage().
//We just pass a reference to the function, so we are just telling express that it should take this function and store it
//and whenever a request is made to /admin/add-product route, then it should execute it

router.get("/add-product", adminController.getAddProductPage);

router.post("/add-product", adminController.postAddProduct );

router.get("/products", adminController.getProductsPage)

router.get("/edit-product/:productId", adminController.getEditProductPage)

router.post("/edit-product", adminController.postEditProduct)

router.post("/delete-product/:productId", adminController.postDeleteProduct)


module.exports = router
