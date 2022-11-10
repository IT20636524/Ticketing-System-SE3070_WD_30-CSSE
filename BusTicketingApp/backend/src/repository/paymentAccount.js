import Account from '../models/account.model'

export const insertPaymentAccount = async (data) => {
    return await new Account(data).save()
}

export const paymentsAllAccount = async () => {
    return await Account.find()
}

export const findPaymentAccount = async (filters) => {
    return await Account.findOne(filters)
}

export const findAccountByUserId = async (filters) => {
    return await Account.find(filters)
}


export const findAndUpdatePaymentAccount = async (id, data) => {
    return await Account.findByIdAndUpdate(id, data, {new: true});
}

export const removePaymentAccount = async (id) => {
    return await Account.findByIdAndRemove(id);
}

export const updateAccountBalanceByUserId = async (id, value) => {
    const filter = {userId: id};
    const update = {totalBalance: value};
    return await Account.findOneAndUpdate(filter, update, {new: true});
}