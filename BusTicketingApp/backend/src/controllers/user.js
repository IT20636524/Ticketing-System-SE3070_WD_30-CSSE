// import asyncHandler from "../middleware/async"
//
// export const create = asyncHandler(async (req, res, next) => {})
//
// export const getAll = asyncHandler(async (req, res, next) => {})
//
// export const getById = asyncHandler(async (req, res, next) => {})
//
// export const update = asyncHandler(async (req, res, next) => {})
//
// export const remove = asyncHandler(async (req, res, next) => {})


import asyncHandler from '../middleware/async'
import {makeResponse} from '../utils/response'
import {addNewUser, getUsers, getUserByID, updateUserDetails} from '../services/user'

export const create = asyncHandler(async (req, res) => {
    const result = await addNewUser(req.body)

    if (!result) return makeResponse({res, status: 500, message: 'Failed to add user'})

    if (result.status) return makeResponse({res, ...result})

    return makeResponse({res, status: 200, data: result, message: 'User added successfully'})
})

export const getAll = asyncHandler(async (req, res) => {
    const users = await getUsers(req.query)

    return makeResponse({res, status: 200, data: users, message: 'Users retrieved succesfully'})
})

export const getById = asyncHandler(async (req, res) => {
    const ret = await getUserByID(req.params.id)

    if (ret.status) return makeResponse({res, ...ret})

    return makeResponse({res, status: 200, data: ret, message: 'User retrieved successfully'})
})

export const update = asyncHandler(async (req, res) => {
    const result = await updateUserDetails(req.params.id, req.user, req.body)

    if (!result) return makeResponse({res, status: 500, message: 'Failed to update user'})

    if (result.status) return makeResponse({res, ...result})

    return makeResponse({res, status: 200, data: result, message: 'User updated successfully'})
})

// export const deleteUser = asyncHandler(async (req, res) => {
//     const result = await delete(req.params.user_id, req.user)
//     if (!result) return makeResponse({ res, status: 500, message: 'Failed to delete user' })
//     if (result.status) return makeResponse({ res, ...result })
//     return makeResponse({ res, message: 'User deleted successfully' })
//   })

export const getMyDetails = asyncHandler(async (req, res) => {
    const user = await getUserByID(req.user._id)

    if (user.status) return makeResponse({res, ...user})

    return makeResponse({res, status: 200, data: user, message: 'User retrieved succesfully'})
})