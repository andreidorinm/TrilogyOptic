import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
const getProducts = asyncHandler(async (req, res) => {
  const pageSize = 8
  const page = Number(req.query.pageNumber) || 1

  const keyword = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: 'i',
        },
      }
    : {}

  const count = await Product.countDocuments({ ...keyword })
  const products = await Product.find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1))

  res.json({ products, page, pages: Math.ceil(count / pageSize) })
})

// @desc    Fetch all Armani products
// @route   GET /api/products/armani
// @access  Public
const getProductsArmani = asyncHandler(async (req, res) => {
  const pageSize = 8
  const page = Number(req.query.pageNumber) || 1

  const keyword = 'Emporio Armani'
    ? {
        brand: {
          $regex: 'Emporio Armani',
          $options: 'i',
        },
      }
    : {}

  const count = await Product.countDocuments({ ...keyword })
  const products = await Product.find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1))

  res.json({ products, page, pages: Math.ceil(count / pageSize) })

  //res.json(products)
})

// @desc    Fetch all Hilfiger products
// @route   GET /api/products/hilfiger
// @access  Public
const getProductsHilfiger = asyncHandler(async (req, res) => {
  const pageSize = 8
  const page = Number(req.query.pageNumber) || 1

  const keyword = 'Tommy Hilfiger'
    ? {
        brand: {
          $regex: 'Tommy Hilfiger',
          $options: 'i',
        },
      }
    : {}

  const count = await Product.countDocuments({ ...keyword })
  const products = await Product.find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1))

  res.json({ products, page, pages: Math.ceil(count / pageSize) })

  //res.json(products)
})

// @desc    Fetch all Moschino products
// @route   GET /api/products/moschino
// @access  Public
const getProductsMoschino = asyncHandler(async (req, res) => {
  const pageSize = 8
  const page = Number(req.query.pageNumber) || 1

  const keyword = 'Moschino'
    ? {
        brand: {
          $regex: 'Moschino',
          $options: 'i',
        },
      }
    : {}

  const count = await Product.countDocuments({ ...keyword })
  const products = await Product.find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1))

  res.json({ products, page, pages: Math.ceil(count / pageSize) })

  //res.json(products)
})

// @desc    Fetch all Marc Jacobs products
// @route   GET /api/products/jacobs
// @access  Public
const getProductsJacobs = asyncHandler(async (req, res) => {
  const pageSize = 8
  const page = Number(req.query.pageNumber) || 1

  const keyword = 'Marc Jacobs'
    ? {
        brand: {
          $regex: 'Marc Jacobs',
          $options: 'i',
        },
      }
    : {}

  const count = await Product.countDocuments({ ...keyword })
  const products = await Product.find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1))

  res.json({ products, page, pages: Math.ceil(count / pageSize) })

  //res.json(products)
})

// @desc    Fetch all Ray-Ban products
// @route   GET /api/products/rayban
// @access  Public
const getProductsRayBan = asyncHandler(async (req, res) => {
  const pageSize = 8
  const page = Number(req.query.pageNumber) || 1

  const keyword = 'Ray-Ban'
    ? {
        brand: {
          $regex: 'Ray-Ban',
          $options: 'i',
        },
      }
    : {}

  const count = await Product.countDocuments({ ...keyword })
  const products = await Product.find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1))

  res.json({ products, page, pages: Math.ceil(count / pageSize) })

  //res.json(products)
})

// @desc    Fetch all Hugo Boss products
// @route   GET /api/products/boss
// @access  Public
const getProductsBoss = asyncHandler(async (req, res) => {
  const pageSize = 8
  const page = Number(req.query.pageNumber) || 1

  const keyword = 'Hugo Boss'
    ? {
        brand: {
          $regex: 'Hugo Boss',
          $options: 'i',
        },
      }
    : {}

  const count = await Product.countDocuments({ ...keyword })
  const products = await Product.find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1))

  res.json({ products, page, pages: Math.ceil(count / pageSize) })

  //res.json(products)
})

// @desc    Fetch all Persol products
// @route   GET /api/products/persol
// @access  Public
const getProductsPersol = asyncHandler(async (req, res) => {
  const pageSize = 8
  const page = Number(req.query.pageNumber) || 1

  const keyword = 'Persol'
    ? {
        brand: {
          $regex: 'Persol',
          $options: 'i',
        },
      }
    : {}

  const count = await Product.countDocuments({ ...keyword })
  const products = await Product.find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1))

  res.json({ products, page, pages: Math.ceil(count / pageSize) })

  //res.json(products)
})

// @desc    Fetch all Gucci products
// @route   GET /api/products/gucci
// @access  Public
const getProductsGucci = asyncHandler(async (req, res) => {
  const pageSize = 8
  const page = Number(req.query.pageNumber) || 1

  const keyword = 'Gucci'
    ? {
        brand: {
          $regex: 'Gucci',
          $options: 'i',
        },
      }
    : {}

  const count = await Product.countDocuments({ ...keyword })
  const products = await Product.find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1))

  res.json({ products, page, pages: Math.ceil(count / pageSize) })

  //res.json(products)
})

// @desc    Fetch all D&G products
// @route   GET /api/products/gabbana
// @access  Public
const getProductsDG = asyncHandler(async (req, res) => {
  const pageSize = 8
  const page = Number(req.query.pageNumber) || 1

  const keyword = 'D&G'
    ? {
        brand: {
          $regex: 'D&G',
          $options: 'i',
        },
      }
    : {}

  const count = await Product.countDocuments({ ...keyword })
  const products = await Product.find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1))

  res.json({ products, page, pages: Math.ceil(count / pageSize) })

  //res.json(products)
})

// @desc    Fetch all Baldinininini products
// @route   GET /api/products/Baldinininini
// @access  Public
const getProductsBaldinini = asyncHandler(async (req, res) => {
  const pageSize = 8
  const page = Number(req.query.pageNumber) || 1

  const keyword = 'Baldinini'
    ? {
        brand: {
          $regex: 'Baldinini',
          $options: 'i',
        },
      }
    : {}

  const count = await Product.countDocuments({ ...keyword })
  const products = await Product.find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1))

  res.json({ products, page, pages: Math.ceil(count / pageSize) })

  //res.json(products)
})

// @desc    Fetch all Burberry products
// @route   GET /api/products/burberry
// @access  Public
const getProductsBurberry = asyncHandler(async (req, res) => {
  const pageSize = 8
  const page = Number(req.query.pageNumber) || 1

  const keyword = 'Burberry'
    ? {
        brand: {
          $regex: 'Burberry',
          $options: 'i',
        },
      }
    : {}

  const count = await Product.countDocuments({ ...keyword })
  const products = await Product.find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1))

  res.json({ products, page, pages: Math.ceil(count / pageSize) })

  //res.json(products)
})

// @desc    Fetch all Bvlgari products
// @route   GET /api/products/bvlgari
// @access  Public
const getProductsBvlgari = asyncHandler(async (req, res) => {
  const pageSize = 8
  const page = Number(req.query.pageNumber) || 1

  const keyword = 'Bvlgari'
    ? {
        brand: {
          $regex: 'Bvlgari',
          $options: 'i',
        },
      }
    : {}

  const count = await Product.countDocuments({ ...keyword })
  const products = await Product.find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1))

  res.json({ products, page, pages: Math.ceil(count / pageSize) })

  //res.json(products)
})

// @desc    Fetch all Dior products
// @route   GET /api/products/dior
// @access  Public
const getProductsDior = asyncHandler(async (req, res) => {
  const pageSize = 8
  const page = Number(req.query.pageNumber) || 1

  const keyword = 'Dior'
    ? {
        brand: {
          $regex: 'Dior',
          $options: 'i',
        },
      }
    : {}

  const count = await Product.countDocuments({ ...keyword })
  const products = await Product.find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1))

  res.json({ products, page, pages: Math.ceil(count / pageSize) })

  //res.json(products)
})

// @desc    Fetch all Prada products
// @route   GET /api/products/prada
// @access  Public
const getProductsPrada = asyncHandler(async (req, res) => {
  const pageSize = 8
  const page = Number(req.query.pageNumber) || 1

  const keyword = 'Prada'
    ? {
        brand: {
          $regex: 'Prada',
          $options: 'i',
        },
      }
    : {}

  const count = await Product.countDocuments({ ...keyword })
  const products = await Product.find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1))

  res.json({ products, page, pages: Math.ceil(count / pageSize) })

  //res.json(products)
})

// @desc    Fetch all Tom Ford products
// @route   GET /api/products/tom-ford
// @access  Public
const getProductsFord = asyncHandler(async (req, res) => {
  const pageSize = 8
  const page = Number(req.query.pageNumber) || 1

  const keyword = 'Tom Ford'
    ? {
        brand: {
          $regex: 'Tom Ford',
          $options: 'i',
        },
      }
    : {}

  const count = await Product.countDocuments({ ...keyword })
  const products = await Product.find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1))

  res.json({ products, page, pages: Math.ceil(count / pageSize) })

  //res.json(products)
})

// @desc    Fetch all Valentino products
// @route   GET /api/products/valentino
// @access  Public
const getProductsValentino = asyncHandler(async (req, res) => {
  const pageSize = 8
  const page = Number(req.query.pageNumber) || 1

  const keyword = 'Valentino'
    ? {
        brand: {
          $regex: 'Valentino',
          $options: 'i',
        },
      }
    : {}

  const count = await Product.countDocuments({ ...keyword })
  const products = await Product.find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1))

  res.json({ products, page, pages: Math.ceil(count / pageSize) })

  //res.json(products)
})

// @desc    Fetch all For Art's Sake products
// @route   GET /api/products/for-art-sake
// @access  Public
const getProductsArt = asyncHandler(async (req, res) => {
  const pageSize = 8
  const page = Number(req.query.pageNumber) || 1

  const keyword = 'For Art Sake'
    ? {
        brand: {
          $regex: 'For Art Sake',
          $options: 'i',
        },
      }
    : {}

  const count = await Product.countDocuments({ ...keyword })
  const products = await Product.find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1))

  res.json({ products, page, pages: Math.ceil(count / pageSize) })

  //res.json(products)
})

// @desc    Fetch all Fossil products
// @route   GET /api/products/fossil
// @access  Public
const getProductsFossil = asyncHandler(async (req, res) => {
  const pageSize = 8
  const page = Number(req.query.pageNumber) || 1

  const keyword = 'Fossil'
    ? {
        brand: {
          $regex: 'Fossil',
          $options: 'i',
        },
      }
    : {}

  const count = await Product.countDocuments({ ...keyword })
  const products = await Product.find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1))

  res.json({ products, page, pages: Math.ceil(count / pageSize) })

  //res.json(products)
})

// @desc    Fetch all Gant products
// @route   GET /api/products/Gant
// @access  Public
const getProductsGant = asyncHandler(async (req, res) => {
  const pageSize = 8
  const page = Number(req.query.pageNumber) || 1

  const keyword = 'Gant'
    ? {
        brand: {
          $regex: 'Gant',
          $options: 'i',
        },
      }
    : {}

  const count = await Product.countDocuments({ ...keyword })
  const products = await Product.find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1))

  res.json({ products, page, pages: Math.ceil(count / pageSize) })

  //res.json(products)
})

// @desc    Fetch all Vogue products
// @route   GET /api/products/vogue
// @access  Public
const getProductsVogue = asyncHandler(async (req, res) => {
  const pageSize = 8
  const page = Number(req.query.pageNumber) || 1

  const keyword = 'Vogue'
    ? {
        brand: {
          $regex: 'Vogue',
          $options: 'i',
        },
      }
    : {}

  const count = await Product.countDocuments({ ...keyword })
  const products = await Product.find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1))

  res.json({ products, page, pages: Math.ceil(count / pageSize) })

  //res.json(products)
})

// @desc    Fetch all Blumarine products
// @route   GET /api/products/blumarine
// @access  Public
const getProductsBlumarine = asyncHandler(async (req, res) => {
  const pageSize = 8
  const page = Number(req.query.pageNumber) || 1

  const keyword = 'Blumarine'
    ? {
        brand: {
          $regex: 'Blumarine',
          $options: 'i',
        },
      }
    : {}

  const count = await Product.countDocuments({ ...keyword })
  const products = await Product.find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1))

  res.json({ products, page, pages: Math.ceil(count / pageSize) })

  //res.json(products)
})

// @desc    Fetch all Swarovski products
// @route   GET /api/products/swarovski
// @access  Public
const getProductsSwarovski = asyncHandler(async (req, res) => {
  const pageSize = 8
  const page = Number(req.query.pageNumber) || 1

  const keyword = 'Swarovski'
    ? {
        brand: {
          $regex: 'Swarovski',
          $options: 'i',
        },
      }
    : {}

  const count = await Product.countDocuments({ ...keyword })
  const products = await Product.find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1))

  res.json({ products, page, pages: Math.ceil(count / pageSize) })

  //res.json(products)
})

// @desc    Fetch all Victoria Secret products
// @route   GET /api/products/victoria-secret
// @access  Public
const getProductsVictoria = asyncHandler(async (req, res) => {
  const pageSize = 8
  const page = Number(req.query.pageNumber) || 1

  const keyword = 'Victoria Secret'
    ? {
        brand: {
          $regex: 'Victoria Secret',
          $options: 'i',
        },
      }
    : {}

  const count = await Product.countDocuments({ ...keyword })
  const products = await Product.find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1))

  res.json({ products, page, pages: Math.ceil(count / pageSize) })

  //res.json(products)
})

// @desc    Fetch all Robert Cavalli products
// @route   GET /api/products/cavalli
// @access  Public
const getProductsCavalli = asyncHandler(async (req, res) => {
  const pageSize = 8
  const page = Number(req.query.pageNumber) || 1

  const keyword = 'Roberto Cavalli'
    ? {
        brand: {
          $regex: 'Roberto Cavalli',
          $options: 'i',
        },
      }
    : {}

  const count = await Product.countDocuments({ ...keyword })
  const products = await Product.find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1))

  res.json({ products, page, pages: Math.ceil(count / pageSize) })

  //res.json(products)
})

// @desc    Fetch all Carolina Herrera products
// @route   GET /api/products/carolina-herrera
// @access  Public
const getProductsCarolina = asyncHandler(async (req, res) => {
  const pageSize = 8
  const page = Number(req.query.pageNumber) || 1

  const keyword = 'Carolina Herrera'
    ? {
        brand: {
          $regex: 'Carolina Herrera',
          $options: 'i',
        },
      }
    : {}

  const count = await Product.countDocuments({ ...keyword })
  const products = await Product.find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1))

  res.json({ products, page, pages: Math.ceil(count / pageSize) })

  //res.json(products)
})

// @desc    Fetch all Escada products
// @route   GET /api/products/escada
// @access  Public
const getProductsEscada = asyncHandler(async (req, res) => {
  const pageSize = 8
  const page = Number(req.query.pageNumber) || 1

  const keyword = 'Escada'
    ? {
        brand: {
          $regex: 'Escada',
          $options: 'i',
        },
      }
    : {}

  const count = await Product.countDocuments({ ...keyword })
  const products = await Product.find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1))

  res.json({ products, page, pages: Math.ceil(count / pageSize) })

  //res.json(products)
})

// @desc    Fetch all Furla products
// @route   GET /api/products/furla
// @access  Public
const getProductsFurla = asyncHandler(async (req, res) => {
  const pageSize = 8
  const page = Number(req.query.pageNumber) || 1

  const keyword = 'Furla'
    ? {
        brand: {
          $regex: 'Furla',
          $options: 'i',
        },
      }
    : {}

  const count = await Product.countDocuments({ ...keyword })
  const products = await Product.find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1))

  res.json({ products, page, pages: Math.ceil(count / pageSize) })

  //res.json(products)
})

// @desc    Fetch all Max & Co. products
// @route   GET /api/products/max-co
// @access  Public
const getProductsMax = asyncHandler(async (req, res) => {
  const pageSize = 8
  const page = Number(req.query.pageNumber) || 1

  const keyword = 'Max & Co'
    ? {
        brand: {
          $regex: 'Max & Co',
          $options: 'i',
        },
      }
    : {}

  const count = await Product.countDocuments({ ...keyword })
  const products = await Product.find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1))

  res.json({ products, page, pages: Math.ceil(count / pageSize) })

  //res.json(products)
})

// @desc    Fetch all Diesel products
// @route   GET /api/products/diesel
// @access  Public
const getProductsDiesel = asyncHandler(async (req, res) => {
  const pageSize = 8
  const page = Number(req.query.pageNumber) || 1

  const keyword = 'Diesel'
    ? {
        brand: {
          $regex: 'Diesel',
          $options: 'i',
        },
      }
    : {}

  const count = await Product.countDocuments({ ...keyword })
  const products = await Product.find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1))

  res.json({ products, page, pages: Math.ceil(count / pageSize) })

  //res.json(products)
})

// @desc    Fetch all Michael Kors products
// @route   GET /api/products/michael-kors
// @access  Public
const getProductsKors = asyncHandler(async (req, res) => {
  const pageSize = 8
  const page = Number(req.query.pageNumber) || 1

  const keyword = 'Michael Kors'
    ? {
        brand: {
          $regex: 'Michael Kors',
          $options: 'i',
        },
      }
    : {}

  const count = await Product.countDocuments({ ...keyword })
  const products = await Product.find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1))

  res.json({ products, page, pages: Math.ceil(count / pageSize) })

  //res.json(products)
})

// @desc    Fetch all Rodenstock products
// @route   GET /api/products/rodenstock
// @access  Public
const getProductsRodenstock = asyncHandler(async (req, res) => {
  const pageSize = 8
  const page = Number(req.query.pageNumber) || 1

  const keyword = 'Rodenstock'
    ? {
        brand: {
          $regex: 'Rodenstock',
          $options: 'i',
        },
      }
    : {}

  const count = await Product.countDocuments({ ...keyword })
  const products = await Product.find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1))

  res.json({ products, page, pages: Math.ceil(count / pageSize) })

  //res.json(products)
})

// @desc    Fetch all Henri Lloyd products
// @route   GET /api/products/henri-lloyd
// @access  Public
const getProductsLloyd = asyncHandler(async (req, res) => {
  const pageSize = 8
  const page = Number(req.query.pageNumber) || 1

  const keyword = 'Henri Lloyd'
    ? {
        brand: {
          $regex: 'Henri Lloyd',
          $options: 'i',
        },
      }
    : {}

  const count = await Product.countDocuments({ ...keyword })
  const products = await Product.find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1))

  res.json({ products, page, pages: Math.ceil(count / pageSize) })

  //res.json(products)
})

// @desc    Fetch all Puma products
// @route   GET /api/products/puma
// @access  Public
const getProductsPuma = asyncHandler(async (req, res) => {
  const pageSize = 8
  const page = Number(req.query.pageNumber) || 1

  const keyword = 'Puma'
    ? {
        brand: {
          $regex: 'Puma',
          $options: 'i',
        },
      }
    : {}

  const count = await Product.countDocuments({ ...keyword })
  const products = await Product.find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1))

  res.json({ products, page, pages: Math.ceil(count / pageSize) })

  //res.json(products)
})

// @desc    Fetch single product
// @route   GET /api/products/:id
// @access  Public
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)

  if (product) {
    res.json(product)
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
})

// @desc    Delete a product
// @route   DELETE /api/products/:id
// @access  Private/Admin
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)

  if (product) {
    await product.remove()
    res.json({ message: 'Product removed' })
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
})

// @desc    Create a product
// @route   POST /api/products
// @access  Private/Admin
const createProduct = asyncHandler(async (req, res) => {
  const product = new Product({
    name: 'Sample name',
    price: 0,
    user: req.user._id,
    image: '/images/sample.jpg',
    brand: 'Sample brand',
    category: 'Sample category',
    countInStock: 0,
    numReviews: 0,
    description: 'Sample description',
  })

  const createdProduct = await product.save()
  res.status(201).json(createdProduct)
})

// @desc    Update a product
// @route   PUT /api/products/:id
// @access  Private/Admin
const updateProduct = asyncHandler(async (req, res) => {
  const { name, price, description, image, brand, category, countInStock } =
    req.body

  const product = await Product.findById(req.params.id)

  if (product) {
    product.name = name
    product.price = price
    product.description = description
    product.image = image
    product.brand = brand
    product.category = category
    product.countInStock = countInStock

    const updatedProduct = await product.save()
    res.json(updatedProduct)
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
})

// @desc    Create new review
// @route   POST /api/products/:id/reviews
// @access  Private
const createProductReview = asyncHandler(async (req, res) => {
  const { rating, comment } = req.body

  const product = await Product.findById(req.params.id)

  if (product) {
    const alreadyReviewed = product.reviews.find(
      (r) => r.user.toString() === req.user._id.toString()
    )

    if (alreadyReviewed) {
      res.status(400)
      throw new Error('Product already reviewed')
    }

    const review = {
      name: req.user.name,
      rating: Number(rating),
      comment,
      user: req.user._id,
    }

    product.reviews.push(review)

    product.numReviews = product.reviews.length

    product.rating =
      product.reviews.reduce((acc, item) => item.rating + acc, 0) /
      product.reviews.length

    await product.save()
    res.status(201).json({ message: 'Review added' })
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
})

// @desc    Get top rated products
// @route   GET /api/products/top
// @access  Public
const getTopProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({}).sort({ rating: -1 }).limit(3)

  res.json(products)
})

// @desc    Get a single product of every brand
// @route   GET /api/products/brand
// @access  Public
const getProductsByBrand = asyncHandler(async (req, res) => {
  const products = await Product.aggregate([
    {
      $match: {
        brand: {
          $in: [
            'Emporio Armani',
            'Escada',
            'Ray-Ban',
            'Bvlgari',
            'Roberto Cavalli',
            'For Art Sake',
            'Baldinini',
            'Blumarine',
            'Hugo Boss',
            'Dior',
            'Carolina Herrera',
            'Tom Ford',
            'Fossil',
            'Michael Kors',
            'Furla',
            'Diesel',
            'D&G',
            'Gant',
            'Gucci',
            'Burberry',
            'Henri Lloyd',
            'Marc Jacobs',
            'Max & Co',
            'Moschino',
            'Persol',
            'Prada',
            'Puma',
            'Rodenstock',
            'Swarovski',
            'Valentino',
            'Victorias Secret',
            'Vogue',
            'Tommy Hilfiger',
          ],
        },
      },
    },
    {
      $group: {
        _id: '$brand',
      },
    },
    {
      $sort: {
        _id: 1,
      },
    },
  ])
  res.json(products)
})

export {
  getProducts,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct,
  createProductReview,
  getProductsByBrand,
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
}
