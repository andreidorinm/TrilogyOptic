import asyncHandler from 'express-async-handler'
import Brands from '../models/brandsModel.js'

const getProductsByBrand = asyncHandler(async (req, res) => {
  const brands = await Brands.aggregate([
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
      $sort: {
        brand: 1,
      },
    },
  ])
  res.json(brands)
})

export { getProductsByBrand }
