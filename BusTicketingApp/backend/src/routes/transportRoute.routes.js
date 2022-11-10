import express from "express";
import {
  addTransportRoute,
  updateTransportRoute,
  getOneTransportRoute,
  getAllTransportRoutes,
  removeTransportRoute,
} from "../controllers/transportRoute.controller";

const transportRouter = express.Router();

transportRouter.post("/", addTransportRoute);
transportRouter.patch("/:id", updateTransportRoute);
transportRouter.get("/:id", getOneTransportRoute);
transportRouter.get("/", getAllTransportRoutes);
transportRouter.delete("/:id", removeTransportRoute);

export default transportRouter;
