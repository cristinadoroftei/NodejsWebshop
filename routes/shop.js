const express = require("express")
const router = express.Router()

const shopController = require('../controllers/shop.js')


router.get('/', shopController.getIndexPage)

router.get('/products', shopController.getListOfProductsPage);

router.get('/products/:productId', shopController.getProduct)

router.get('/cart', shopController.getCartPage);

router.post('/cart', shopController.postCart)

router.post('/cart-delete-item', shopController.postCartDeleteProduct)


router.get('/orders', shopController.getOrdersPage)

router.post('/create-order', shopController.postOrderNow)


module.exports = router