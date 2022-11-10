import asyncHandler from "../middleware/async";
import {
  getTimeTables,
  createTimeTable,
  updateTimeTableById,
  getTimeTable,
  deleteTimeTable,
} from "../services/timeTable";
import { makeResponse } from "../utils/response";
  // addTimeTable,
  // updateTimeTable,
  // getOneTimeTable,
  // getAllTimeTables,
  // removeTimeTable,
export const addTimeTable = asyncHandler(async (req, res) => {
  try {
    const result = await createTimeTable(req.body);
    if (!result)
      return makeResponse({
        res,
        status: 500,
        message: "Failed to add Time Table",
      });
    console.log(result.status);
    if (result.status) return makeResponse({ res, ...result });
    return makeResponse({
      res,
      message: "Time Table added successfully",
    });
  } catch (error) {
    return makeResponse({ res, status: 500, message: error.message });
  }
});

export const getAllTimeTables = asyncHandler(async (req, res) => {
  const data = await getTimeTables();
  return makeResponse({
    res,
    data,
    message: "Time Table retrieved successfully",
  });
});

export const getOneTimeTable = asyncHandler(async (req, res) => {
  const result = await getTimeTable(req.params.id);
  return makeResponse({ res, data: result.data, message: result.message });
});

export const updateTimeTable = asyncHandler(async (req, res) => {
  const result = await updateTimeTableById(req.params.id, req.body);
  if (!result)
    return makeResponse({
      res,
      status: 500,
      message: "Failed to update Public Time Table",
    });
  if (result.status) return makeResponse({ res, ...result });
  return makeResponse({
    res,
    data: result,
    message: "Time Table updated successfully",
  });
});

export const removeTimeTable = asyncHandler(async (req, res) => {
  const result = await deleteTimeTable(req.params.id);
  if (!result)
    return makeResponse({
      res,
      status: 500,
      message: "Failed to delete Time Table",
    });
  if (result.status) return makeResponse({ res, ...result });
  return makeResponse({
    res,
    message: "Time Table deleted successfully",
  });
});
