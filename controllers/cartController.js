import cart from "../models/cart.js";

//cart
export const getCartController = async (req, res) => {
    try {
      const carts = await cart.find({ buyer: req.user._id }).populate("products", "-photo").populate("buyer", "name");
      res.json(carts);
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Error While Geting Cart",
        error,
      });
    }
  };
  
//carts
export const getAllCartsController = async (req, res) => {
    try {
        const carts = await cart.find({}).populate("products", "-photo").populate("buyer", "name").sort({ createdAt: "-1" });
        res.json(carts);
    } catch (error) {
        console.log(error);
        res.status(500).send({
        success: false,
        message: "Error WHile Getting carts",
        error,
        });
    }
};

//cart status
export const cartStatusController = async (req, res) => {
    try {
        const { cartId } = req.params;
        const { status } = req.body;
        const carts = await cart.findByIdAndUpdate(cartId,{ status },{ new: true });
        res.json(carts);
    } catch (error) {
        console.log(error);
        res.status(500).send({
        success: false,
        message: "Error While Updateing cart",
        error,
        });
    }
};