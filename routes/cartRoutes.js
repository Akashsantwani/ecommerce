import express from "express";
import {
    getCartController,
    getAllCartsController,
    cartStatusController,
} from "../controllers/cartController.js";
import { isAdmin, requireSignIn } from "../service/authService.js";

const router = express.Router();

//carts
router.get("/carts", requireSignIn, getCartController);

//all carts
router.get("/all-carts", requireSignIn, isAdmin, getAllCartsController);

// cart status update
router.put("/order-status/:orderId",requireSignIn,isAdmin,cartStatusController);

export default router;