import express from 'express'
const router = express.Router()
import {
  getProducts,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct,
  createProductReview,
  getTopProducts,
  getProductsArmani,
  getProductsHilfiger,
  getProductsBoss,
  getProductsRayBan,
  getProductsMoschino,
  getProductsJacobs,
  getProductsPersol,
  getProductsGucci,
  getProductsDG,
  getProductsBaldinini,
  getProductsBurberry,
  getProductsBvlgari,
  getProductsDior,
  getProductsFord,
  getProductsPrada,
  getProductsValentino,
  getProductsArt,
  getProductsFossil,
  getProductsGant,
  getProductsVogue,
  getProductsBlumarine,
  getProductsCavalli,
  getProductsSwarovski,
  getProductsVictoria,
  getProductsCarolina,
  getProductsDiesel,
  getProductsEscada,
  getProductsFurla,
  getProductsKors,
  getProductsMax,
  getProductsRodenstock,
  getProductsLloyd,
  getProductsPuma,
  // getProductsByBrand
} from '../controllers/productController.js'
import {getProductsByBrand} from '../controllers/brandsContoller.js'
import { protect, admin } from '../middleware/authMiddleware.js'

router.route('/').get(getProducts).post(protect, admin, createProduct)
router.route('/:id/reviews').post(protect, createProductReview)
router.get('/top', getTopProducts)
router.route('/brand').get(getProductsByBrand);
router.get('/armani', getProductsArmani)
router.get('/hilfiger', getProductsHilfiger)
router.get('/boss', getProductsBoss)
router.get('/rayban', getProductsRayBan)
router.get('/moschino', getProductsMoschino)
router.get('/marc-jacobs', getProductsJacobs)
router.get('/persol', getProductsPersol)
router.get('/gucci', getProductsGucci)
router.get('/gabbana', getProductsDG)
router.get('/baldinini', getProductsBaldinini)
router.get('/burberry', getProductsBurberry)
router.get('/bvlgari', getProductsBvlgari)
router.get('/dior', getProductsDior)
router.get('/tom-ford', getProductsFord)
router.get('/prada', getProductsPrada)
router.get('/valentino', getProductsValentino)
router.get('/for-art-sake', getProductsArt)
router.get('/fossil', getProductsFossil)
router.get('/gant', getProductsGant)
router.get('/vogue', getProductsVogue)
router.get('/blumarine', getProductsBlumarine)
router.get('/cavalli', getProductsCavalli)
router.get('/swarovski', getProductsSwarovski)
router.get('/victoria-secret', getProductsVictoria)
router.get('/carolina-herrera', getProductsCarolina)
router.get('/diesel', getProductsDiesel)
router.get('/escada', getProductsEscada)
router.get('/furla', getProductsFurla)
router.get('/michael-kors', getProductsKors)
router.get('/max-and-co', getProductsMax)
router.get('/rodenstock', getProductsRodenstock)
router.get('/henri-lloyd', getProductsLloyd)
router.get('/puma', getProductsPuma)
router
  .route('/:id')
  .get(getProductById)
  .delete(protect, admin, deleteProduct)
  .put(protect, admin, updateProduct)



export default router
