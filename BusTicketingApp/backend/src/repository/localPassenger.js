import LocalPassengerModel from '../models/localPasseger.model'
import logger from '../utils/logger'

export const createLocalPassenger = async (LocalPassenger) => {
    console.log(LocalPassenger)
    const LocalPassengerMade = (await new LocalPassengerModel(LocalPassenger).save()).toObject()
    return LocalPassengerMade
}

export const getAllLocalPassenger = async ({ sort = {}, filter = {}, page}) => {
    const options = {
        page,
        collation: {
            locale: 'en'
        }
    }

    if (Object.keys(sort).length > 0) options.sort = sort


    const aggregateQuery = () =>
        LocalPassengerModel.aggregate([
            {
                $match: filter
            },
            { $unset: ['password', 'verification_code'] }
        ])

    return await (page ? LocalPassengerModel.aggregatePaginate(aggregateQuery(), options) : aggregateQuery()).catch((err) => {
        logger.error(`An error occurred when retrieving LocalPassenger - err: ${err.message}`)
        throw err
    })
}

export const getOneLocalPassenger = async (filters, returnPassword = false) => {
    const LocalPassenger = await LocalPassengerModel.findOne(filters).lean()
    if (!LocalPassenger) return null

    if (!returnPassword) delete LocalPassenger.password
    return LocalPassenger
}

export const findOneAndUpdateLocalPassenger = async (filters, data) => {
    const LocalPassenger = await LocalPassengerModel.findOneAndUpdate(filters, data, { new: true }).lean()
    if (!LocalPassenger) return null

    delete LocalPassenger.password
    return LocalPassenger
}

export const findOneAndRemoveLocalPassenger = async (filters) => {
    return await LocalPassengerModel.findOneAndRemove(filters)
}