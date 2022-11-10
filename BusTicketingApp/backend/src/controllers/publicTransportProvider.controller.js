import asyncHandler from "../middleware/async";
import {
  getPublicTransportProviders,
  createPublicTransportProvider,
  updatePublicTransportProviderById,
  getPublicTransportProvider,
  deletePublicTransportProvider,
} from "../services/publicTransportProvider";
import { makeResponse } from "../utils/response";

export const addPublicTransportProvider = asyncHandler(async (req, res) => {
  try {
    const result = await createPublicTransportProvider(req.body);
    if (!result)
      return makeResponse({
        res,
        status: 500,
        message: "Failed to add Public Transport Provider",
      });
    console.log(result.status);
    if (result.status) return makeResponse({ res, ...result });
    return makeResponse({
      res,
      message: "Public Transport Provider added successfully",
    });
  } catch (error) {
    return makeResponse({ res, status: 500, message: error.message });
  }
});

export const getAllPublicTransportProviders = asyncHandler(async (req, res) => {
  const data = await getPublicTransportProviders();
  return makeResponse({
    res,
    data,
    message: "Public Transport Providers retrieved successfully",
  });
});

export const getPublicTransportProviderById = asyncHandler(async (req, res) => {
  const result = await getPublicTransportProvider(req.params.id);
  return makeResponse({ res, data: result.data, message: result.message });
});

export const updatePublicTransportProvider = asyncHandler(async (req, res) => {
  const result = await updatePublicTransportProviderById(req.params.id, req.body);
  if (!result)
    return makeResponse({
      res,
      status: 500,
      message: "Failed to update Public Transport Provider",
    });
  if (result.status) return makeResponse({ res, ...result });
  return makeResponse({
    res,
    data: result,
    message: "Public Transport Provider updated successfully",
  });
});

export const deletePublicTransportProviderById = asyncHandler(
  async (req, res) => {
    const result = await deletePublicTransportProvider(req.params.id);
    if (!result)
      return makeResponse({
        res,
        status: 500,
        message: "Failed to delete Public Transport Provider",
      });
    if (result.status) return makeResponse({ res, ...result });
    return makeResponse({
      res,
      message: "Public Transport Provider deleted successfully",
    });
  }
);
