import Card from '../models/card.model'

export const insertPaymentCard = async (data) => {
    return await new Card(data).save()
}

export const paymentsAllCard = async () => {
    return await Card.find()
}

export const findCardByUserId = async (filters) => {
    return await Card.find(filters)
}

export const findPaymentCard = async (filters) => {
    return await Card.findOne(filters)
}

export const findAndUpdatePaymentCard = async (id, data) => {
    return await Card.findByIdAndUpdate(id, data, {new: true});
}

export const removePaymentCard = async (id) => {
    return await Card.findByIdAndRemove(id);
}