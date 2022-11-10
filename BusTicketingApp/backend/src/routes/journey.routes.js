import express from "express";
import {
  addJourney,
  updateJourney,
  getJourneyById,
  getAllJourneys,
  deleteJourneyById,
} from "../controllers/journey.controller";

const journeyRouter = express.Router();

journeyRouter.post("/", addJourney);
journeyRouter.patch("/:id", updateJourney);
journeyRouter.get("/:id", getJourneyById);
journeyRouter.get("/", getAllJourneys);
journeyRouter.delete("/:id", deleteJourneyById);

export default journeyRouter;
