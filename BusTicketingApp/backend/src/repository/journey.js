import Journey from "../models/journey.model";

export const insertJourney = async (data) => {
  //cannot just insert need to use push
  return await new Journey(data).save();
};

export const lastJourney = async () => {
  //limit(1) means getting one record
  return await Journey.findOne().sort({ _id: -1 }).limit(1);
};

export const getAllJourneys = async (filters) => {
  return await Journey.find(filters);

};

export const findJourney = async (filters) => {
  return await Journey.findOne(filters);

};

export const findAndUpdateJourney = async (id, updatedJourney) => {
  //updating has to be changed
  return await Journey.findByIdAndUpdate(id, updatedJourney, {
    new: true,
  });
};

export const removeJourney = async (id) => {
  return await await Journey.findByIdAndRemove(id);
};
