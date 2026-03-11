import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },

    slug: {
      type: String,
      unique: true
    },

    description: {
      type: String
    },

    price: {
      type: Number,
      required: true
    },

    stock: {
      type: Number,
      default: 0
    },

    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true
    },

    images: [
      {
        type: String
      }
    ],

    status: {
      type: Boolean,
      default: true
    }
  },
  {
    timestamps: true
  }
);

export default mongoose.model("Product", productSchema);