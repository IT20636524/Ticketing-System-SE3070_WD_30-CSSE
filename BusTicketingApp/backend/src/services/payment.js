// import { logger } from 'handlebars'
import {
    insertpayment,
    payments,
    findPayment, findAndUpdatePayment, removePayment
} from '../repository/payment'

export const createPayment = async (data) => {
    console.log(data);
    return await insertpayment({...data})
}

export const getPayments = async () => {
    return await payments()
}

export const getPayment = async (id) => {
    return await findPayment({_id: id})
}

export const updatePayment = async (payment_id, data) => {
    let payment = await findAndUpdatePayment({_id: payment_id})

    if (!payment) return {status: 400, message: "Payment doesn't exist to update"}

    return await findAndUpdatePayment(payment_id, data)
}

export const deletePayment = async (payment_id) => {
    let payment = await removePayment({_id: payment_id})

    if (!payment) return {status: 400, message: "Payment doesn't exist to delete"}

    return await removePayment(payment_id)
}