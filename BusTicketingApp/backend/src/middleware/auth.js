import { getOneUser } from '../repository/user'
import { decodeJwtToken } from '../utils/jwt'
import { makeResponse } from '../utils/response'
import asyncHandler from './async'

export const protect = asyncHandler(async (req, res, next) => {
  const token = req.headers.authorization ? (req.headers.authorization.startsWith('Bearer') ? req.headers.authorization.split(' ')[1] : null) : null
  if (!token) return makeResponse({ res, status: 403, message: 'Unauthorized' })
  const decodedUser = decodeJwtToken(token).data
  const user = decodedUser ? await getOneUser({ _id: decodedUser._id }, false) : null
  if (!user) return makeResponse({ res, status: 403, message: 'Unauthorized' })
  req.user = user
  next()
})

export const localPassengerProtect = asyncHandler(async (req, res, next) => {
  if (req.user.role !== 'LOCALPASSENGER') return makeResponse({ res, status: 403, message: 'Unauthorized' })
  next()
})

export const foriegnPassengerProtect = asyncHandler(async (req, res, next) => {
  if (req.user.role !== 'FORIEGNPASSENGER') return makeResponse({ res, status: 403, message: 'Unauthorized' })
  next()
})

export const InspectorProtect = asyncHandler(async (req, res, next) => {
  if (req.user.role !== 'INSPECTOR') return makeResponse({ res, status: 403, message: 'Unauthorized' })
  next()
})

export const PTMangerProtect = asyncHandler(async (req, res, next) => {
  if (req.user.role !== "PTMANAGER")
    return makeResponse({ res, status: 403, message: "Unauthorized" });
  next();
});
