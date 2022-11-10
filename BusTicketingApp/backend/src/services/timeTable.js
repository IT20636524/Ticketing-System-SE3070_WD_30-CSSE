import {
  getAllTimeTables,
  findTimeTable,
  lastTimeTable,
  insertTimeTable,
  findAndUpdateTimeTable,
  removeTimeTable,
} from "../repository/timeTable";

export const createTimeTable = async (data) => {
  const result = await lastTimeTable();
  if (result) {
    data.timeTableId =
      "TTID-" + (parseInt(result.timeTableId.split("-")[1]) + 1);
  } else {
    data.timeTableId = "TTID-1";
  }
  const timeTable = await findTimeTable({
    timeTableId: data.timeTableId,
  });
  if (timeTable) return { status: 400, message: "Already added" };
  return await insertTimeTable({ ...data });
};

export const getTimeTables = async () => {
  console.log(getAllTimeTables())
  return getAllTimeTables();
};

export const getTimeTable = async (id) => {
  const result = await findTimeTable({ _id: id });
  console.log(result)
  if (result.length === 0)
    return {
      status: 400,
      message: "Time Table doesn't exist ",
    };
  return {
    status: 200,
    data: result,
    message: "Time Table retrieved successfully",
  };
};

export const updateTimeTableById = async (id, data) => {
  let timeTable = await findTimeTable({
    _id: id,
  });
  if (!timeTable)
    return {
      status: 400,
      message: "Time Table doesn't exist to update",
    };
  return await findAndUpdateTimeTable(id, data);
};

export const deleteTimeTable = async (id) => {
  let timeTable = await findTimeTable({
    _id: id,
  });
  if (!timeTable)
    return {
      status: 400,
      message: "Time Table doesn't exist to delete",
    };
  return await removeTimeTable(id);
};
