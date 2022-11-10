
import express from "express";
import authRouter from "./auth.routes";

import publicTransportProviderRouter from "./publicTransportProvider.routes";
import transportRouteRouter from "./transportRoute.routes";
import journey from "./journey.routes";
import timeTable from "./timeTable.routes";
import userRouter from './user.routes';
import paymentRouter from "./payment.routes";
import paymentAccountRouter from "./paymentAccount";
import paymentCardRouter from "./paymentCard";

const router = express.Router();

router.use("/auth", authRouter);
router.use("/user", userRouter);
router.use("/publicTransportProvider", publicTransportProviderRouter);
router.use("/transportRoute", transportRouteRouter);
router.use("/journey", journey);
router.use("/timeTable", timeTable);
router.use('/payment', paymentRouter);
router.use('/account', paymentAccountRouter);
router.use('/card', paymentCardRouter);

export default router;

