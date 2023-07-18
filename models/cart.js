import mongoose from "mongoose";

const cartSchema = new mongoose.Schema(
  {
    products: [
      {
        type: mongoose.ObjectId,
        ref: "Products",
      },
    ],
    payment: {
      type:Boolean,
      default: 0,
    },
    buyer: {
      type: mongoose.ObjectId,
      ref: "users",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Cart", cartSchema);
