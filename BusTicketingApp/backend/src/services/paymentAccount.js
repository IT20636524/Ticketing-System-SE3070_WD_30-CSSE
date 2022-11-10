// import { logger } from 'handlebars'
import {
    insertPaymentAccount,
    paymentsAllAccount,
    findPaymentAccount,
    findAndUpdatePaymentAccount,
    removePaymentAccount, updateAccountBalanceByUserId,findAccountByUserId
} from '../repository/paymentAccount'
import {re} from "@babel/core/lib/vendor/import-meta-resolve";

export const createPaymentAccount = async (data) => {
    console.log(data);
    return await insertPaymentAccount({...data})
}

export const getPaymentsAccounts = async () => {
    return await paymentsAllAccount()
}

export const getPaymentAccount = async (id) => {

    return await findPaymentAccount({_Id: id})
}
export const getAccountByUserId = async (id) => {

    return await findAccountByUserId({userId: id})
}

export const updatePaymentAccount = async (payment_id, data) => {
    let payment = await findAndUpdatePaymentAccount({_id: payment_id})
    if (!payment) return {status: 400, message: "Payment Account doesn't exist to update"}
    return await findAndUpdatePaymentAccount(payment_id, data)
}

export const deletePaymentAccount = async (payment_id) => {
    let payment = await removePayment({_id: payment_id})
    if (!payment) return {status: 400, message: "Payment Account doesn't exist to delete"}
    return await removePaymentAccount(payment_id)
}

export const updateAccountBalance = async (user_id, value) => {
    let res = await findPaymentAccount({userId: user_id})

    if (!res) return {status: 400, message: "Account doesn't exist to update"}

    let updated_balance = value + parseInt(res.totalBalance);

    if (updated_balance < 0) {
        return {status: 400, message: "Account Balance low"}
    } else if (res.totalBalance < 0) {
        return {status: 400, message: "Account Balance low"}
    }

    return await updateAccountBalanceByUserId(user_id, updated_balance)
}