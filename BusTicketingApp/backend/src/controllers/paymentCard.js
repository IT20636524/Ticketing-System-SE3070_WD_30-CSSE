import asyncHandler from '../middleware/async'
import {
    createPaymentCard,
    getPaymentCard,
    updatePaymentCard,
    getPaymentsCard,
    deletePaymentCard,
    getCardByUserId
} from '../services/paymentCard'
import { makeResponse } from '../utils/response'


export const addNewPaymentCard = asyncHandler(async (req, res) => {
    try {

        const result = await createPaymentCard(req.body)
        if (!result) return makeResponse({ res, status: 500, message: 'Failed to add Payment Card' })
        if (result.status) return makeResponse({ res, ...result })
        return makeResponse({ res, message: 'Payment Card added successfully' })
    } catch (error) {
        return makeResponse({ res, status: 500, message: error.message })
    }

})

export const getAllPaymentCard = asyncHandler(async (req, res) => {
    const data = await getPaymentsCard()
    return makeResponse({ res, data, message: 'Payment Card retrieved successfully' })
})

export const getPaymentCardByUserId = asyncHandler(async (req, res) => {
    const data = await getCardByUserId(req.params.id)
    return makeResponse({ res, data, message: 'Payment Card retrieved successfully' })
})

export const getPaymentByIdCard = asyncHandler(async (req, res) => {
    const data = await getPaymentCard(req.params.id)
    return makeResponse({ res, data, message: 'Payment Card retrieved successfully' })
})


// export const updatePaymentByIdCard  = asyncHandler(async (req, res) => {
//     const result = await updatePaymentCard(req.params.id, req.body)
//     if (!result) return makeResponse({ res, status: 500, message: 'Failed to update Payment Card' })
//     if (result.status) return makeResponse({ res, ...result })
//     return makeResponse({ res, data: result, message: 'Payment Card updated successfully' })
// })


export const updatePaymentByIdCard  = asyncHandler(async (req, res) => {
    const result = await updatePaymentCard(req.params.id, req.body)
    if (!result) return makeResponse({ res, status: 500, message: 'Failed to update Payment Card' })
    if (result.status) return makeResponse({ res, ...result })
    return makeResponse({ res, data: result, message: 'Payment Card updated successfully' })
})


export const deletePaymentByIdCard = asyncHandler(async (req, res) => {
    const result = await deletePaymentCard(req.params.id)
    if (!result) return makeResponse({ res, status: 500, message: 'Failed to delete Payment Card' })
    if (result.status) return makeResponse({ res, ...result })
    return makeResponse({ res, message: 'Payment Card deleted successfully' })
})