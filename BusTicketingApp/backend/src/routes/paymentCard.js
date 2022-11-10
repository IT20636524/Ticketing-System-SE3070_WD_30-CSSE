import express from "express";
import {
    addNewPaymentCard,
    getAllPaymentCard,
    getPaymentByIdCard,
    deletePaymentByIdCard,
    updatePaymentByIdCard,getPaymentCardByUserId
} from "../controllers/paymentCard";
// import { protect, companyProtect } from "../middleware/auth";

const paymentCardRouter = express.Router();

paymentCardRouter.post("/add",  addNewPaymentCard);
paymentCardRouter.put("/update/:id",  updatePaymentByIdCard);
paymentCardRouter.get("/get/:id", getPaymentByIdCard);
paymentCardRouter.get("/get/user/:id", getPaymentCardByUserId);
paymentCardRouter.get("/", getAllPaymentCard);
paymentCardRouter.delete("/delete/:id",  deletePaymentByIdCard)

export default paymentCardRouter;
