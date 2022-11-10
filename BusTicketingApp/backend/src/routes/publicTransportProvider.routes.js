import express from "express";
import {
  addPublicTransportProvider,
  updatePublicTransportProvider,
  getPublicTransportProviderById,
  getAllPublicTransportProviders,
  deletePublicTransportProviderById,
} from "../controllers/publicTransportProvider.controller";

const publicTransportProviderRouter = express.Router();

publicTransportProviderRouter.post("/", addPublicTransportProvider);
publicTransportProviderRouter.patch("/:id", updatePublicTransportProvider);
publicTransportProviderRouter.get("/:id", getPublicTransportProviderById);
publicTransportProviderRouter.get("/", getAllPublicTransportProviders);
publicTransportProviderRouter.delete("/:id", deletePublicTransportProviderById);

export default publicTransportProviderRouter;
