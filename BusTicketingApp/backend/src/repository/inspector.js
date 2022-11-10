import InspectorModel from "../models/inspector.model";
import logger from "../utils/logger";

export const createInspector = async (Inspector) => {
  console.log(Inspector);
  const newInspector = (
    await new InspectorModel(Inspector).save()
  ).toObject();
  return newInspector;
};

export const getAllInspector= async ({
  sort = {},
  filter = {},
  page,
}) => {
  const options = {
    page,
    collation: {
      locale: "en",
    },
  };

  if (Object.keys(sort).length > 0) options.sort = sort;

  const aggregateQuery = () =>
    InspectorModel.aggregate([
      {
        $match: filter,
      },
      { $unset: ["password", "verification_code"] },
    ]);

  return await (page
    ? InspectorModel.aggregatePaginate(aggregateQuery(), options)
    : aggregateQuery()
  ).catch((err) => {
    logger.error(
      `An error occurred when retrieving Inspector - err: ${err.message}`
    );
    throw err;
  });
};

export const getOneInspector = async (filters, returnPassword = false) => {
  const Inspector = await InspectorModel.findOne(filters).lean();
  if (!Inspector) return null;

  if (!returnPassword) delete Inspector.password;
  return Inspector;
};

export const findOneAndUpdateInspector = async (filters, data) => {
  const Inspector = await InspectorModel.findOneAndUpdate(
    filters,
    data,
    { new: true }
  ).lean();
  if (!Inspector) return null;

  delete Inspector.password;
  return Inspector;
};

export const findOneAndRemoveInspector = async (filters) => {
  return await InspectorModel.findOneAndRemove(filters);
};
