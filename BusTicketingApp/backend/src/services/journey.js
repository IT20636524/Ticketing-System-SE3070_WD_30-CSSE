import {
  getAllJourneys,
  findJourney,
  lastJourney,
  insertJourney,
  findAndUpdateJourney,
  removeJourney,
} from "../repository/journey";

export const createJourney = async (data) => {
  const result = await lastJourney();
  if (result) {
    data.journeyId = "JID-" + (parseInt(result.journeyId.split("-")[1]) + 1);
  } else {
    data.journeyId = "JID-1";
  }
  const journey = await findJourney({
    journeyId: data.journeyId,
  });
  if (journey) return { status: 400, message: "Already added" };
  return await insertJourney({ ...data });
};

export const getJourneys = async () => {
  return getAllJourneys();
};

export const getJourney = async (id) => {
  const result = await findJourney({ _id: id });
  if (result.length === 0)
    return {
      status: 400,
      message: "Journey doesn't exist ",
    };
  return {
    status: 200,
    data: result,
    message: "Journey retrieved successfully",
  };
};

export const updateJourneyById = async (id, data) => {
  let journey = await findJourney({
    _id: id,
  });
  if (!journey)
    return {
      status: 400,
      message: "Journey doesn't exist to update",
    };
  return await findAndUpdateJourney(id, data);
};

export const deleteJourney = async (id) => {
  let journey = await findJourney({
    _id: id,
  });
  if (!journey)
    return {
      status: 400,
      message: "Journey doesn't exist to delete",
    };
  return await removeJourney(id);
};
