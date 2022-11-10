import asyncHandler from "../middleware/async";
import {
  getTransportRoutes,
  createTransportRoute,
  updateTransportRouteById,
  getTransportRoute,
  deleteTransportRoute,
} from "../services/transportRoute";
import { makeResponse } from "../utils/response";

export const addTransportRoute = asyncHandler(async (req, res) => {
  try {
    const result = await createTransportRoute(req.body);
    if (!result)
      return makeResponse({
        res,
        status: 500,
        message: "Failed to add Transport Route",
      });
    console.log(result.status);
    if (result.status) return makeResponse({ res, ...result });
    return makeResponse({
      res,
      message: "Transport Route added successfully",
    });
  } catch (error) {
    return makeResponse({ res, status: 500, message: error.message });
  }
});

export const getAllTransportRoutes = asyncHandler(async (req, res) => {
  const data = await getTransportRoutes();
  return makeResponse({
    res,
    data,
    message: "Transport Route retrieved successfully",
  });
});

export const getOneTransportRoute = asyncHandler(async (req, res) => {
  const result = await getTransportRoute(req.params.id);
  return makeResponse({ res, data: result.data, message: result.message });
});

export const updateTransportRoute = asyncHandler(async (req, res) => {
  const result = await updateTransportRouteById(req.params.id, req.body);
  if (!result)
    return makeResponse({
      res,
      status: 500,
      message: "Failed to update Public Transport Route",
    });
  if (result.status) return makeResponse({ res, ...result });
  return makeResponse({
    res,
    data: result,
    message: "Transport Route updated successfully",
  });
});

export const removeTransportRoute = asyncHandler(async (req, res) => {
  const result = await deleteTransportRoute(req.params.id);
  if (!result)
    return makeResponse({
      res,
      status: 500,
      message: "Failed to delete Transport Route",
    });
  if (result.status) return makeResponse({ res, ...result });
  return makeResponse({
    res,
    message: "Transport Route deleted successfully",
  });
});
