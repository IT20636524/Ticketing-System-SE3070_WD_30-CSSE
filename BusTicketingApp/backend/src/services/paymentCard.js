// import { logger } from 'handlebars'
import {
    insertPaymentCard,
    paymentsAllCard,
    findPaymentCard,
    findAndUpdatePaymentCard,
    removePaymentCard, findCardByUserId
} from '../repository/paymentCard'
import {findPayment} from "../repository/payment";


export const createPaymentCard = async (data) => {
    console.log(data);
    return await insertPaymentCard({...data})
}

export const getPaymentsCard = async () => {
    return await paymentsAllCard()
}

export const getCardByUserId = async (id) => {

    return await findCardByUserId({userId: id})
}

export const getPaymentCard = async (id) => {

    return await findPaymentCard({_Id: id})
}

export const updatePaymentCard = async (payment_id, data) => {
    let payment = await findAndUpdatePaymentCard({ userId: payment_id})
    if (!payment) return {status: 400, message: "Payment Card doesn't exist to update"}
    return await findAndUpdatePaymentCard(payment_id, data)
}

export const deletePaymentCard = async (payment_id) => {
    let payment = await removePaymentCard({_id: payment_id})
    if (!payment) return {status: 400, message: "Payment Card doesn't exist to delete"}
    return await removePaymentCard(payment_id)
}