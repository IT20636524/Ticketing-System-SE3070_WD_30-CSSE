import Payment from '../models/payment.model'

export const insertpayment = async (data) => {
    return await new Payment(data).save()
}

export const payments = async () => {
    return await Payment.find()
}

export const findPayment = async (filters) => {
    return await Payment.findOne(filters)
}

export const findAndUpdatePayment= async (id, data) => {
    return await Payment.findByIdAndUpdate(id, data, { new: true });
}

export const removePayment = async (id) => {
    return await Payment.findByIdAndRemove(id);
}