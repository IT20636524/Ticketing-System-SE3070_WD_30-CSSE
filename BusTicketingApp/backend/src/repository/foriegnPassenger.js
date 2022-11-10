import ForeignPassengerModel from '../models/foriegnPasseger.model'
import logger from '../utils/logger'

export const createForeignPassenger = async (foreign) => {
    const foreignPassengerMade = (await new ForeignPassengerModel(foreign).save()).toObject()
    return foreignPassengerMade
}

export const getAllForeignPassenger = async ({ sort = {}, filter = {}, page}) => {
    const options = {
        page,
        collation: {
            locale: 'en'
        }
    }

    if (Object.keys(sort).length > 0) options.sort = sort


    const aggregateQuery = () =>
        ForeignPassengerModel.aggregate([
            {
                $match: filter
            },
            { $unset: ['password', 'verification_code'] }
        ])

    return await (page ? ForeignPassengerModel.aggregatePaginate(aggregateQuery(), options) : aggregateQuery()).catch((err) => {
        logger.error(`An error occurred when retrieving ForeignPassenger - err: ${err.message}`)
        throw err
    })
}
export const getOneForeignPassenger = async (filters, returnPassword = false) => {
    const foreignPassenger = await ForeignPassengerModel.findOne(filters).lean()
    if (!foreignPassenger) return null

    if (!returnPassword) delete foreignPassenger.password
    return foreignPassenger
}

export const findOneAndUpdateForeignPassenger = async (filters, data) => {
    const foreignPassenger = await ForeignPassengerModel.findOneAndUpdate(filters, data, { new: true }).lean()
    if (!foreignPassenger) return null

    delete foreignPassenger.password
    return foreignPassenger
}

export const findOneAndRemoveForeignPassenger = async (filters) => {
    return await ForeignPassengerModel.findOneAndRemove(filters)
}