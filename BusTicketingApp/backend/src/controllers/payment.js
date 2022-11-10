import asyncHandler from '../middleware/async'
import {createPayment, getPayments, updatePayment, getPayment, deletePayment} from '../services/payment'
import {makeResponse} from '../utils/response'
import {updateAccountBalance} from "../services/paymentAccount";


export const addNewPayment = asyncHandler(async (req, res) => {
    try {
        const result = await createPayment(req.body)

        if (!result) return makeResponse({res, status: 500, message: 'Failed to add Payment'})

        const result_update_balance = await updateAccountBalance(result.userId, parseInt(result.amount))

        if (!result_update_balance) return makeResponse({res, status: 500, message: 'Failed to Update Account Balance'})

        if (result.status) return makeResponse({res, ...result})

        return makeResponse({res, message: 'Payment added successfully'})
    } catch (error) {
        return makeResponse({res, status: 500, message: error.message})
    }
})

export const getAllPayment = asyncHandler(async (req, res) => {
    const data = await getPayments()

    return makeResponse({res, data, message: 'Payment retrieved successfully'})
})

export const getPaymentById = asyncHandler(async (req, res) => {
    const data = await getPayment(req.params.id)

    return makeResponse({res, data, message: 'Payment retrieved successfully'})
})

export const updatePaymentById = asyncHandler(async (req, res) => {
    const result = await updatePayment(req.params.id, req.body)

    if (!result) return makeResponse({res, status: 500, message: 'Failed to update Payment'})

    if (result.status) return makeResponse({res, ...result})

    return makeResponse({res, data: result, message: 'Payment updated successfully'})
})

export const deletePaymentById = asyncHandler(async (req, res) => {
    const result = await deletePayment(req.params.id)

    if (!result) return makeResponse({res, status: 500, message: 'Failed to delete Payment'})

    if (result.status) return makeResponse({res, ...result})

    return makeResponse({res, message: 'Payment deleted successfully'})
})