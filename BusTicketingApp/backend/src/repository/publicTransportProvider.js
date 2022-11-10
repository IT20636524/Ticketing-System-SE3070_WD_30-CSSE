import PublicTransportProvider from "../models/publicTransportProvider.model";

export const insertPublicTransportProvider = async (data) => {
  return await new PublicTransportProvider(data).save();
};

export const lastPublicTransportProvider = async () => {
  //limit(1) means getting one record
  return await PublicTransportProvider.findOne().sort({ _id: -1 }).limit(1);
};

export const PublicTransportProviders = async (filters) => {
  return await PublicTransportProvider.find(filters)
    .populate("inspector driver  transportRoute")
    .exec();
};

export const findPublicTransportProvider = async (filters) => {
  return await PublicTransportProvider.findOne(filters)
    .populate("inspector driver  transportRoute")
    .exec();
};

export const findAndUpdatePublicTransportProvider = async (
  id,
  updatedPublicTransportProvider
) => {
  return await PublicTransportProvider.findByIdAndUpdate(
    id,
    updatedPublicTransportProvider,
    {
      new: true,
    }
  );
};

export const removePublicTransportProvider = async (id) => {
  return await await PublicTransportProvider.findByIdAndRemove(id);
};
