
import express from "express";
import {
  addTimeTable,
  updateTimeTable,
  getOneTimeTable,
  getAllTimeTables,
  removeTimeTable,
} from "../controllers/timeTable.controller";

const timeTableRouter = express.Router();

timeTableRouter.post("/", addTimeTable);
timeTableRouter.patch("/:id", updateTimeTable);
timeTableRouter.get("/:id", getOneTimeTable);
timeTableRouter.get("/", getAllTimeTables);
timeTableRouter.delete("/:id", removeTimeTable);

export default timeTableRouter;
