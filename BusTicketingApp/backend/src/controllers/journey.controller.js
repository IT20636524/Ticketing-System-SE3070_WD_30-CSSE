import asyncHandler from "../middleware/async";
import {
  getJourneys,
  createJourney,
  getJourney,
  deleteJourney,
  updateJourneyById,
} from "../services/journey";
import { makeResponse } from "../utils/response";

export const addJourney = asyncHandler(async (req, res) => {
  try {
    const result = await createJourney(req.body);
    if (!result)
      return makeResponse({
        res,
        status: 500,
        message: "Failed to add Journey",
      });
    console.log(result.status);
    if (result.status) return makeResponse({ res, ...result });
    return makeResponse({
      res,
      message: "Journey added successfully",
    });
  } catch (error) {
    return makeResponse({ res, status: 500, message: error.message });
  }
});

export const getAllJourneys = asyncHandler(async (req, res) => {
  const data = await getJourneys();
  return makeResponse({
    res,
    data,
    message: "Journey retrieved successfully",
  });
});

export const getJourneyById = asyncHandler(async (req, res) => {
  const result = await getJourney(req.params.id);
  return makeResponse({ res, data: result.data, message: result.message });
});

export const updateJourney = asyncHandler(async (req, res) => {
  const result = await updateJourneyById(req.params.id, req.body);
  if (!result)
    return makeResponse({
      res,
      status: 500,
      message: "Failed to update Journey",
    });
  if (result.status) return makeResponse({ res, ...result });
  return makeResponse({
    res,
    data: result,
    message: "Journey updated successfully",
  });
});

export const deleteJourneyById = asyncHandler(async (req, res) => {
  const result = await deleteJourney(req.params.id);
  if (!result)
    return makeResponse({
      res,
      status: 500,
      message: "Failed to delete Journey",
    });
  if (result.status) return makeResponse({ res, ...result });
  return makeResponse({
    res,
    message: "Journey  deleted successfully",
  });
});
