import {
  getAllTransportRoutes,
  findTransportRoute,
  lastTransportRoute,
  insertTransportRoute,
  findAndUpdateTransportRoute,
  removeTransportRoute,
} from "../repository/TransportRoute";

export const createTransportRoute = async (data) => {

  const transportRoute = await findTransportRoute({
    routeId: data.routeId,
  });
  if (transportRoute) return { status: 400, message: "Already added" };
  return await insertTransportRoute({ ...data });
};

export const getTransportRoutes = async () => {
  return getAllTransportRoutes();
};

export const getTransportRoute = async (id) => {
  const result = await findTransportRoute({ _id: id });
  if (result.length === 0)
    return {
      status: 400,
      message: "This tranport route doesn't exist ",
    };
  return {
    status: 200,
    data: result,
    message: "Tranport route retrieved successfully",
  };
};

export const updateTransportRouteById = async (id, data) => {
  let transportRoute = await findTransportRoute({
    _id: id,
  });
  if (!transportRoute)
    return {
      status: 400,
      message: "Tranport route doesn't exist to update",
    };
  return await findAndUpdateTransportRoute(id, data);
};

export const deleteTransportRoute = async (id) => {
  let transportRoute = await findTransportRoute({
    _id: id,
  });
  if (!transportRoute)
    return {
      status: 400,
      message: "Tranport route doesn't exist to delete",
    };
  return await removeTransportRoute(id);
};
