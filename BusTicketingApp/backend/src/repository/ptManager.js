import PTManagerModel from "../models/ptManager.model";
import logger from "../utils/logger";

export const createPTManager = async (PTManager) => {
  console.log(PTManager);
  const newPTManager = (await new PTManagerModel(PTManager).save()).toObject();
  return newPTManager;
};

export const getAllPTManager = async ({ sort = {}, filter = {}, page }) => {
  const options = {
    page,
    collation: {
      locale: "en",
    },
  };

  if (Object.keys(sort).length > 0) options.sort = sort;

  const aggregateQuery = () =>
    PTManagerModel.aggregate([
      {
        $match: filter,
      },
      { $unset: ["password", "verification_code"] },
    ]);

  return await (page
    ? PTManagerModel.aggregatePaginate(aggregateQuery(), options)
    : aggregateQuery()
  ).catch((err) => {
    logger.error(
      `An error occurred when retrieving PTManager - err: ${err.message}`
    );
    throw err;
  });
};

export const getOnePTManager = async (filters, returnPassword = false) => {
  const PTManager = await PTManagerModel.findOne(filters).lean();
  if (!PTManager) return null;

  if (!returnPassword) delete PTManager.password;
  return PTManager;
};

export const findOneAndUpdatePTManager = async (filters, data) => {
  const PTManager = await PTManagerModel.findOneAndUpdate(filters, data, {
    new: true,
  }).lean();
  if (!PTManager) return null;

  delete PTManager.password;
  return PTManager;
};

export const findOneAndRemovePTManager = async (filters) => {
  return await PTManagerModel.findOneAndRemove(filters);
};
