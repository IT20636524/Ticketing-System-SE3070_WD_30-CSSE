import {
  getAllPublicTransportProviders,
  findPublicTransportProvider,
  lastPublicTransportProvider,
  insertPublicTransportProvider,
  findAndUpdatePublicTransportProvider,
  removePublicTransportProvider,
} from "../repository/publicTransportProvider";

export const createPublicTransportProvider = async (data) => {
  const result = await lastPublicTransportProvider();
  if (result) {
    data.ptpId = "PTPID-" + (parseInt(result.ptpId.split("-")[1]) + 1);
  } else {
    data.ptpId = "PTPID-1";
  }
  const publicTransportProvider = await findPublicTransportProvider({
    ptpId: data.ptpId,
  });
  if (publicTransportProvider) return { status: 400, message: "Already added" };
  return await insertPublicTransportProvider({ ...data });
};

export const getPublicTransportProviders = async () => {
  return getAllPublicTransportProviders();
};

export const getPublicTransportProvider = async (id) => {
  const result = await findPublicTransportProvider({ _id: id });
  if (result.length === 0)
    return {
      status: 400,
      message: "This public transport provider doesn't exist ",
    };
  return {
    status: 200,
    data: result,
    message: "Public transport provider retrieved successfully",
  };
};

export const updatePublicTransportProviderById = async (id, data) => {
  let publicTransportProvider = await findPublicTransportProvider({
    _id: id,
  });
  if (!publicTransportProvider)
    return {
      status: 400,
      message: "Public transport provider doesn't exist to update",
    };
  return await findAndUpdatePublicTransportProvider(id, data);
};

export const deletePublicTransportProvider = async (id) => {
  let publicTransportProvider = await findPublicTransportProvider({
    _id: id,
  });
  if (!publicTransportProvider)
    return {
      status: 400,
      message: "Public transport providert doesn't exist to delete",
    };
  return await removePublicTransportProvider(id);
};
