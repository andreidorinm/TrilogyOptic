import mongoose from 'mongoose'

const brandsSchema = mongoose.Schema(
  {
    brand: {
        type: String,
        required: true,
      },
    image: {
      type: String,
      required: true,
    },
}
)

const Brands = mongoose.model('Brands', brandsSchema)

export default Brands
