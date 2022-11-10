import express from 'express';
import { addNewPayment, getAllPayment, getPaymentById, updatePaymentById, deletePaymentById } from "../controllers/payment";

const paymentRouter = express.Router();

paymentRouter.post("/add",  addNewPayment);
paymentRouter.put("/update/:id",  updatePaymentById);
paymentRouter.get("/:id", getPaymentById);
paymentRouter.get("/", getAllPayment);
paymentRouter.delete("/delete/:id",  deletePaymentById)

export default paymentRouter;