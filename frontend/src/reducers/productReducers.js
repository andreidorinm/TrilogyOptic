import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DELETE_REQUEST,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_DELETE_FAIL,
  PRODUCT_CREATE_RESET,
  PRODUCT_CREATE_FAIL,
  PRODUCT_CREATE_SUCCESS,
  PRODUCT_CREATE_REQUEST,
  PRODUCT_UPDATE_REQUEST,
  PRODUCT_UPDATE_SUCCESS,
  PRODUCT_UPDATE_FAIL,
  PRODUCT_UPDATE_RESET,
  PRODUCT_CREATE_REVIEW_REQUEST,
  PRODUCT_CREATE_REVIEW_SUCCESS,
  PRODUCT_CREATE_REVIEW_FAIL,
  PRODUCT_CREATE_REVIEW_RESET,
  PRODUCT_TOP_REQUEST,
  PRODUCT_TOP_SUCCESS,
  PRODUCT_TOP_FAIL,
  PRODUCT_ARMANI_SUCCESS,
  PRODUCT_ARMANI_REQUEST,
  PRODUCT_ARMANI_FAIL,
  PRODUCT_BALDININI_SUCCESS,
  PRODUCT_BALDININI_REQUEST,
  PRODUCT_BALDININI_FAIL,
  PRODUCT_BLUMARINE_REQUEST,
  PRODUCT_BLUMARINE_SUCCESS,
  PRODUCT_BLUMARINE_FAIL,
  PRODUCT_BVLGARI_REQUEST,
  PRODUCT_BVLGARI_SUCCESS,
  PRODUCT_BVLGARI_FAIL,
  PRODUCT_HERRERA_REQUEST,
  PRODUCT_HERRERA_SUCCESS,
  PRODUCT_HERRERA_FAIL,
  PRODUCT_CAVALLI_REQUEST,
  PRODUCT_CAVALLI_SUCCESS,
  PRODUCT_CAVALLI_FAIL,
  PRODUCT_DIESEL_REQUEST,
  PRODUCT_DIESEL_SUCCESS,
  PRODUCT_DIESEL_FAIL,
  PRODUCT_DIOR_REQUEST,
  PRODUCT_DIOR_SUCCESS,
  PRODUCT_DIOR_FAIL,
  PRODUCT_GABBANA_REQUEST,
  PRODUCT_GABBANA_SUCCESS,
  PRODUCT_GABBANA_FAIL,
  PRODUCT_ESCADA_REQUEST,
  PRODUCT_ESCADA_SUCCESS,
  PRODUCT_ESCADA_FAIL,
  PRODUCT_ART_REQUEST,
  PRODUCT_ART_SUCCESS,
  PRODUCT_ART_FAIL,
  PRODUCT_FOSSIL_REQUEST,
  PRODUCT_FOSSIL_SUCCESS,
  PRODUCT_FOSSIL_FAIL,
  PRODUCT_FURLA_REQUEST,
  PRODUCT_FURLA_SUCCESS,
  PRODUCT_FURLA_FAIL,
  PRODUCT_GANT_REQUEST,
  PRODUCT_GANT_SUCCESS,
  PRODUCT_GANT_FAIL,
  PRODUCT_GUCCI_REQUEST,
  PRODUCT_GUCCI_SUCCESS,
  PRODUCT_GUCCI_FAIL,
  PRODUCT_BOSS_REQUEST,
  PRODUCT_BOSS_SUCCESS,
  PRODUCT_BOSS_FAIL,
  PRODUCT_KORS_REQUEST,
  PRODUCT_KORS_SUCCESS,
  PRODUCT_KORS_FAIL,
  PRODUCT_LLOYD_REQUEST,
  PRODUCT_LLOYD_SUCCESS,
  PRODUCT_LLOYD_FAIL,
  PRODUCT_MARC_REQUEST,
  PRODUCT_MARC_SUCCESS,
  PRODUCT_MARC_FAIL,
  PRODUCT_MAX_REQUEST,
  PRODUCT_MAX_SUCCESS,
  PRODUCT_MAX_FAIL,
  PRODUCT_MOSCHINO_REQUEST,
  PRODUCT_MOSCHINO_SUCCESS,
  PRODUCT_MOSCHINO_FAIL,
  PRODUCT_PERSOL_REQUEST,
  PRODUCT_PERSOL_SUCCESS,
  PRODUCT_PERSOL_FAIL,
  PRODUCT_PRADA_REQUEST,
  PRODUCT_PRADA_SUCCESS,
  PRODUCT_PRADA_FAIL,
  PRODUCT_PUMA_REQUEST,
  PRODUCT_PUMA_SUCCESS,
  PRODUCT_PUMA_FAIL,
  PRODUCT_RAYBAN_REQUEST,
  PRODUCT_RAYBAN_SUCCESS,
  PRODUCT_RAYBAN_FAIL,
  PRODUCT_RODENSTOCK_REQUEST,
  PRODUCT_RODENSTOCK_SUCCESS,
  PRODUCT_RODENSTOCK_FAIL,
  PRODUCT_SWAROVSKI_REQUEST,
  PRODUCT_SWAROVSKI_SUCCESS,
  PRODUCT_SWAROVSKI_FAIL,
  PRODUCT_TOM_REQUEST,
  PRODUCT_TOM_SUCCESS,
  PRODUCT_TOM_FAIL,
  PRODUCT_FORD_REQUEST,
  PRODUCT_FORD_SUCCESS,
  PRODUCT_FORD_FAIL,
  PRODUCT_VALENTINO_REQUEST,
  PRODUCT_VALENTINO_SUCCESS,
  PRODUCT_VALENTINO_FAIL,
  PRODUCT_VICTORIA_SUCCESS,
  PRODUCT_VICTORIA_FAIL,
  PRODUCT_VICTORIA_REQUEST,
  PRODUCT_VOGUE_REQUEST,
  PRODUCT_VOGUE_SUCCESS,
  PRODUCT_VOGUE_FAIL,
  PRODUCT_BURBERRY_REQUEST,
  PRODUCT_BURBERRY_SUCCESS,
  PRODUCT_BURBERRY_FAIL,
  PRODUCT_BRAND_REQUEST,
  PRODUCT_BRAND_SUCCESS,
  PRODUCT_BRAND_FAIL,
} from '../constants/productConstants'

export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] }
    case PRODUCT_LIST_SUCCESS:
      return {
        loading: false,
        products: action.payload.products,
        pages: action.payload.pages,
        page: action.payload.page,
      }
    case PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const productDetailsReducer = (
  state = { product: { reviews: [] } },
  action
) => {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST:
      return { ...state, loading: true }
    case PRODUCT_DETAILS_SUCCESS:
      return { loading: false, product: action.payload }
    case PRODUCT_DETAILS_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const productDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_DELETE_REQUEST:
      return { loading: true }
    case PRODUCT_DELETE_SUCCESS:
      return { loading: false, success: true }
    case PRODUCT_DELETE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const productCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_CREATE_REQUEST:
      return { loading: true }
    case PRODUCT_CREATE_SUCCESS:
      return { loading: false, success: true, product: action.payload }
    case PRODUCT_CREATE_FAIL:
      return { loading: false, error: action.payload }
    case PRODUCT_CREATE_RESET:
      return {}
    default:
      return state
  }
}

export const productUpdateReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case PRODUCT_UPDATE_REQUEST:
      return { loading: true }
    case PRODUCT_UPDATE_SUCCESS:
      return { loading: false, success: true, product: action.payload }
    case PRODUCT_UPDATE_FAIL:
      return { loading: false, error: action.payload }
    case PRODUCT_UPDATE_RESET:
      return { product: {} }
    default:
      return state
  }
}

export const productReviewCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_CREATE_REVIEW_REQUEST:
      return { loading: true }
    case PRODUCT_CREATE_REVIEW_SUCCESS:
      return { loading: false, success: true }
    case PRODUCT_CREATE_REVIEW_FAIL:
      return { loading: false, error: action.payload }
    case PRODUCT_CREATE_REVIEW_RESET:
      return {}
    default:
      return state
  }
}

export const productTopRatedReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_TOP_REQUEST:
      return { loading: true, products: [] }
    case PRODUCT_TOP_SUCCESS:
      return { loading: false, products: action.payload }
    case PRODUCT_TOP_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const productArmaniReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_ARMANI_REQUEST:
      return { loading: true, products: [] }
    case PRODUCT_ARMANI_SUCCESS:
      return {
        loading: false,
        products: action.payload.products,
        pages: action.payload.pages,
        page: action.payload.page,
      }
    case PRODUCT_ARMANI_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const productBaldininiReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_BALDININI_REQUEST:
      return { loading: true, products: [] }
    case PRODUCT_BALDININI_SUCCESS:
      return {
        loading: false,
        products: action.payload.products,
        pages: action.payload.pages,
        page: action.payload.page,
      }
    case PRODUCT_BALDININI_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const productBlumarineReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_BLUMARINE_REQUEST:
      return { loading: true, products: [] }
    case PRODUCT_BLUMARINE_SUCCESS:
      return {
        loading: false,
        products: action.payload.products,
        pages: action.payload.pages,
        page: action.payload.page,
      }
    case PRODUCT_BLUMARINE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const productBurberryReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_BURBERRY_REQUEST:
      return { loading: true, products: [] }
    case PRODUCT_BURBERRY_SUCCESS:
      return {
        loading: false,
        products: action.payload.products,
        pages: action.payload.pages,
        page: action.payload.page,
      }
    case PRODUCT_BURBERRY_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const productBvlgariReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_BVLGARI_REQUEST:
      return { loading: true, products: [] }
    case PRODUCT_BVLGARI_SUCCESS:
      return {
        loading: false,
        products: action.payload.products,
        pages: action.payload.pages,
        page: action.payload.page,
      }
    case PRODUCT_BVLGARI_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const productHerreraReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_HERRERA_REQUEST:
      return { loading: true, products: [] }
    case PRODUCT_HERRERA_SUCCESS:
      return {
        loading: false,
        products: action.payload.products,
        pages: action.payload.pages,
        page: action.payload.page,
      }
    case PRODUCT_HERRERA_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const productCavalliReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_CAVALLI_REQUEST:
      return { loading: true, products: [] }
    case PRODUCT_CAVALLI_SUCCESS:
      return {
        loading: false,
        products: action.payload.products,
        pages: action.payload.pages,
        page: action.payload.page,
      }
    case PRODUCT_CAVALLI_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const productDieselReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_DIESEL_REQUEST:
      return { loading: true, products: [] }
    case PRODUCT_DIESEL_SUCCESS:
      return {
        loading: false,
        products: action.payload.products,
        pages: action.payload.pages,
        page: action.payload.page,
      }
    case PRODUCT_DIESEL_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const productDiorReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_DIOR_REQUEST:
      return { loading: true, products: [] }
    case PRODUCT_DIOR_SUCCESS:
      return {
        loading: false,
        products: action.payload.products,
        pages: action.payload.pages,
        page: action.payload.page,
      }
    case PRODUCT_DIOR_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const productGabbanaReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_GABBANA_REQUEST:
      return { loading: true, products: [] }
    case PRODUCT_GABBANA_SUCCESS:
      return {
        loading: false,
        products: action.payload.products,
        pages: action.payload.pages,
        page: action.payload.page,
      }
    case PRODUCT_GABBANA_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const productEscadaReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_ESCADA_REQUEST:
      return { loading: true, products: [] }
    case PRODUCT_ESCADA_SUCCESS:
      return {
        loading: false,
        products: action.payload.products,
        pages: action.payload.pages,
        page: action.payload.page,
      }
    case PRODUCT_ESCADA_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const productArtReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_ART_REQUEST:
      return { loading: true, products: [] }
    case PRODUCT_ART_SUCCESS:
      return {
        loading: false,
        products: action.payload.products,
        pages: action.payload.pages,
        page: action.payload.page,
      }
    case PRODUCT_ART_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const productFossilReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_FOSSIL_REQUEST:
      return { loading: true, products: [] }
    case PRODUCT_FOSSIL_SUCCESS:
      return {
        loading: false,
        products: action.payload.products,
        pages: action.payload.pages,
        page: action.payload.page,
      }
    case PRODUCT_FOSSIL_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const productFurlaReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_FURLA_REQUEST:
      return { loading: true, products: [] }
    case PRODUCT_FURLA_SUCCESS:
      return {
        loading: false,
        products: action.payload.products,
        pages: action.payload.pages,
        page: action.payload.page,
      }
    case PRODUCT_FURLA_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const productGantReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_GANT_REQUEST:
      return { loading: true, products: [] }
    case PRODUCT_GANT_SUCCESS:
      return {
        loading: false,
        products: action.payload.products,
        pages: action.payload.pages,
        page: action.payload.page,
      }
    case PRODUCT_GANT_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const productGucciReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_GUCCI_REQUEST:
      return { loading: true, products: [] }
    case PRODUCT_GUCCI_SUCCESS:
      return {
        loading: false,
        products: action.payload.products,
        pages: action.payload.pages,
        page: action.payload.page,
      }
    case PRODUCT_GUCCI_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const productBossReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_BOSS_REQUEST:
      return { loading: true, products: [] }
    case PRODUCT_BOSS_SUCCESS:
      return {
        loading: false,
        products: action.payload.products,
        pages: action.payload.pages,
        page: action.payload.page,
      }
    case PRODUCT_BOSS_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const productKorsReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_KORS_REQUEST:
      return { loading: true, products: [] }
    case PRODUCT_KORS_SUCCESS:
      return {
        loading: false,
        products: action.payload.products,
        pages: action.payload.pages,
        page: action.payload.page,
      }
    case PRODUCT_KORS_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const productLloydReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_LLOYD_REQUEST:
      return { loading: true, products: [] }
    case PRODUCT_LLOYD_SUCCESS:
      return {
        loading: false,
        products: action.payload.products,
        pages: action.payload.pages,
        page: action.payload.page,
      }
    case PRODUCT_LLOYD_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const productMarcReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_MARC_REQUEST:
      return { loading: true, products: [] }
    case PRODUCT_MARC_SUCCESS:
      return {
        loading: false,
        products: action.payload.products,
        pages: action.payload.pages,
        page: action.payload.page,
      }
    case PRODUCT_MARC_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const productMaxReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_MAX_REQUEST:
      return { loading: true, products: [] }
    case PRODUCT_MAX_SUCCESS:
      return {
        loading: false,
        products: action.payload.products,
        pages: action.payload.pages,
        page: action.payload.page,
      }
    case PRODUCT_MAX_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const productMoschinoReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_MOSCHINO_REQUEST:
      return { loading: true, products: [] }
    case PRODUCT_MOSCHINO_SUCCESS:
      return {
        loading: false,
        products: action.payload.products,
        pages: action.payload.pages,
        page: action.payload.page,
      }
    case PRODUCT_MOSCHINO_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const productPersolReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_PERSOL_REQUEST:
      return { loading: true, products: [] }
    case PRODUCT_PERSOL_SUCCESS:
      return {
        loading: false,
        products: action.payload.products,
        pages: action.payload.pages,
        page: action.payload.page,
      }
    case PRODUCT_PERSOL_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const productPradaReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_PRADA_REQUEST:
      return { loading: true, products: [] }
    case PRODUCT_PRADA_SUCCESS:
      return {
        loading: false,
        products: action.payload.products,
        pages: action.payload.pages,
        page: action.payload.page,
      }
    case PRODUCT_PRADA_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const productPumaReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_PUMA_REQUEST:
      return { loading: true, products: [] }
    case PRODUCT_PUMA_SUCCESS:
      return {
        loading: false,
        products: action.payload.products,
        pages: action.payload.pages,
        page: action.payload.page,
      }
    case PRODUCT_PUMA_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const productRaybanReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_RAYBAN_REQUEST:
      return { loading: true, products: [] }
    case PRODUCT_RAYBAN_SUCCESS:
      return {
        loading: false,
        products: action.payload.products,
        pages: action.payload.pages,
        page: action.payload.page,
      }
    case PRODUCT_RAYBAN_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const productRodenstockReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_RODENSTOCK_REQUEST:
      return { loading: true, products: [] }
    case PRODUCT_RODENSTOCK_SUCCESS:
      return {
        loading: false,
        products: action.payload.products,
        pages: action.payload.pages,
        page: action.payload.page,
      }
    case PRODUCT_RODENSTOCK_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const productSwarovskiReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_SWAROVSKI_REQUEST:
      return { loading: true, products: [] }
    case PRODUCT_SWAROVSKI_SUCCESS:
      return {
        loading: false,
        products: action.payload.products,
        pages: action.payload.pages,
        page: action.payload.page,
      }
    case PRODUCT_SWAROVSKI_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const productHilfigerReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_TOM_REQUEST:
      return { loading: true, products: [] }
    case PRODUCT_TOM_SUCCESS:
      return {
        loading: false,
        products: action.payload.products,
        pages: action.payload.pages,
        page: action.payload.page,
      }
    case PRODUCT_TOM_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const productFordReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_FORD_REQUEST:
      return { loading: true, products: [] }
    case PRODUCT_FORD_SUCCESS:
      return {
        loading: false,
        products: action.payload.products,
        pages: action.payload.pages,
        page: action.payload.page,
      }
    case PRODUCT_FORD_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const productValentinoReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_VALENTINO_REQUEST:
      return { loading: true, products: [] }
    case PRODUCT_VALENTINO_SUCCESS:
      return {
        loading: false,
        products: action.payload.products,
        pages: action.payload.pages,
        page: action.payload.page,
      }
    case PRODUCT_VALENTINO_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const productVictoriaReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_VICTORIA_REQUEST:
      return { loading: true, products: [] }
    case PRODUCT_VICTORIA_SUCCESS:
      return {
        loading: false,
        products: action.payload.products,
        pages: action.payload.pages,
        page: action.payload.page,
      }
    case PRODUCT_VICTORIA_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const productVogueReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_VOGUE_REQUEST:
      return { loading: true, products: [] }
    case PRODUCT_VOGUE_SUCCESS:
      return {
        loading: false,
        products: action.payload.products,
        pages: action.payload.pages,
        page: action.payload.page,
      }
    case PRODUCT_VOGUE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const productBrandReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_BRAND_REQUEST:
      return { loading: true, products: [] }
    case PRODUCT_BRAND_SUCCESS:
      return { loading: false, products: action.payload }
    case PRODUCT_BRAND_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}