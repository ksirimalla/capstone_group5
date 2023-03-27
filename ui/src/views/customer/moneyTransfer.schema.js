import * as Yup from "yup";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const MoneyTransferSchema = Yup.object().shape({
    beneficiary: Yup.string().required("Please select Beneficiary"),
    accountId: Yup.string().required("Please select Account"),
    amount: Yup.string().required("Please enter Amount"),
    comments: Yup.string().nullable()
});