const { addSubCategory, addCategory, getAllCategories, getAllSubCategories } = require('../controllers/admin/categoryController')
const { addProduct, getAllProduct, addProductType, getAllProductTypes } = require('../controllers/admin/productController')
const { createOffer, getCreatedOffers } = require('../controllers/admin/offerController')
const { getAllUsers } = require('../controllers/admin/userController')
const express = require('express')

const router = express.Router()

router.post('/addcategory', addCategory)
router.post('/addsubcategory', addSubCategory)
router.post('/addproduct', addProduct)
router.post('/addproducttype', addProductType)
router.post('offer/createoffer', createOffer)
router.get('/getallproducts', getAllProduct)
router.get('/getallcategories', getAllCategories)
router.get('/getallsubcategories', getAllSubCategories)
router.get('/getallproducttypes', getAllProductTypes)
router.get('/offer/getcreatedoffers', getCreatedOffers)
router.get('/user/getusers', getAllUsers)



// exporting the router object
module.exports = router