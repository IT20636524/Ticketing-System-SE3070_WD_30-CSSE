import asyncHandler from '../middleware/async'
import {
    createPaymentAccount,
    getPaymentsAccounts,
    updatePaymentAccount,
    getPaymentAccount,
    deletePaymentAccount, updateAccountBalance,getAccountByUserId

} from '../services/paymentAccount'
import { makeResponse } from '../utils/response'


export const addNewPaymentAccount = asyncHandler(async (req, res) => {
    try {

        const result = await createPaymentAccount(req.body)
        if (!result) return makeResponse({ res, status: 500, message: 'Failed to add Bin' })
        if (result.status) return makeResponse({ res, ...result })
        return makeResponse({ res, message: 'Payment Account added successfully' })
    } catch (error) {
        return makeResponse({ res, status: 500, message: error.message })
    }

})

export const getAllPaymentAccount  = asyncHandler(async (req, res) => {
    const data = await getPaymentsAccounts()
    return makeResponse({ res, data, message: 'Payment Account retrieved successfully' })
})

export const getPaymentByUserId  = asyncHandler(async (req, res) => {
    const data = await getAccountByUserId(req.params.id)
    return makeResponse({ res, data, message: 'Payment Account retrieved successfully' })
})

export const getPaymentByIdAccount  = asyncHandler(async (req, res) => {
    const data = await getPaymentAccount(req.params.id)
    return makeResponse({ res, data, message: 'Payment Account retrieved successfully' })
})



export const updatePaymentByIdAccount  = asyncHandler(async (req, res) => {
    const result = await updatePaymentAccount(req.params.id, req.body)
    if (!result) return makeResponse({ res, status: 500, message: 'Failed to update Payment Account' })
    if (result.status) return makeResponse({ res, ...result })
    return makeResponse({ res, data: result, message: 'Payment Account updated successfully' })
})

export const updateAccountBalanceByUserId  = asyncHandler(async (req, res) => {
    const result = await updateAccountBalance(req.body.userId, req.body.amount)
    if (!result) return makeResponse({ res, status: 500, message: 'Failed to update Account Balance' })
    if (result.status) return makeResponse({ res, ...result })
    return makeResponse({ res, data: result, message: 'Payment Account Balance updated successfully' })
})

export const deletePaymentByIdAccount  = asyncHandler(async (req, res) => {
    const result = await deletePaymentAccount(req.params.id)
    if (!result) return makeResponse({ res, status: 500, message: 'Failed to delete Payment Account' })
    if (result.status) return makeResponse({ res, ...result })
    return makeResponse({ res, message: 'Payment Account deleted successfully' })
})