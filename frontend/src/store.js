import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
  productListReducer,
  productDetailsReducer,
  productDeleteReducer,
  productCreateReducer,
  productUpdateReducer,
  productReviewCreateReducer,
  productTopRatedReducer,
  productArmaniReducer,
  productArtReducer,
  productBaldininiReducer,
  productBlumarineReducer,
  productBossReducer,
  productBurberryReducer,
  productBvlgariReducer,
  productCavalliReducer,
  productDieselReducer,
  productDiorReducer,
  productEscadaReducer,
  productFordReducer,
  productFossilReducer,
  productFurlaReducer,
  productGabbanaReducer,
  productGantReducer,
  productGucciReducer,
  productHerreraReducer,
  productHilfigerReducer,
  productKorsReducer,
  productLloydReducer,
  productMarcReducer,
  productMaxReducer,
  productMoschinoReducer,
  productPersolReducer,
  productPradaReducer,
  productPumaReducer,
  productRaybanReducer,
  productRodenstockReducer,
  productSwarovskiReducer,
  productValentinoReducer,
  productVictoriaReducer,
  productVogueReducer,
  productBrandReducer
} from './reducers/productReducers'
import { cartReducer } from './reducers/cartReducers'
import {
  userLoginReducer,
  userRegisterReducer,
  userDetailsReducer,
  userUpdateProfileReducer,
  userListReducer,
  userDeleteReducer,
  userUpdateReducer,
} from './reducers/userReducers'
import {
  orderCreateReducer,
  orderDetailsReducer,
  orderPayReducer,
  orderDeliverReducer,
  orderListMyReducer,
  orderListReducer,
} from './reducers/orderReducers'

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  productDelete: productDeleteReducer,
  productCreate: productCreateReducer,
  productUpdate: productUpdateReducer,
  productReviewCreate: productReviewCreateReducer,
  productTopRated: productTopRatedReducer,
  productBrand: productBrandReducer,
  productArmani: productArmaniReducer,
  productArt: productArtReducer,
  productBaldinini: productBaldininiReducer,
  productBlumarine: productBlumarineReducer,
  productBoss: productBossReducer,
  productBurberry: productBurberryReducer,
  productBvlgari: productBvlgariReducer,
  productCavalli: productCavalliReducer,
  productDiesel: productDieselReducer,
  productDior: productDiorReducer,
  productEscada: productEscadaReducer,
  productFord: productFordReducer,
  productFossil: productFossilReducer,
  productFurla: productFurlaReducer,
  productGabbana: productGabbanaReducer,
  productGant: productGantReducer,
  productGucci: productGucciReducer,
  productHerrera: productHerreraReducer,
  productHilfiger: productHilfigerReducer,
  productKors: productKorsReducer,
  productLloyd: productLloydReducer,
  productMarc: productMarcReducer,
  productMax: productMaxReducer,
  productMoschino: productMoschinoReducer,
  productPersol: productPersolReducer,
  productPrada: productPradaReducer,
  productPuma: productPumaReducer,
  productRayban: productRaybanReducer,
  productRodenstock: productRodenstockReducer,
  productSwarovski: productSwarovskiReducer,
  productValentino: productValentinoReducer,
  productVictoria: productVictoriaReducer,
  productVogue: productVogueReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  userList: userListReducer,
  userDelete: userDeleteReducer,
  userUpdate: userUpdateReducer,
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
  orderPay: orderPayReducer,
  orderDeliver: orderDeliverReducer,
  orderListMy: orderListMyReducer,
  orderList: orderListReducer,
})

const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : []

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null

const shippingAddressFromStorage = localStorage.getItem('shippingAddress')
  ? JSON.parse(localStorage.getItem('shippingAddress'))
  : {}

const initialState = {
  cart: {
    cartItems: cartItemsFromStorage,
    shippingAddress: shippingAddressFromStorage,
  },
  userLogin: { userInfo: userInfoFromStorage },
}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
