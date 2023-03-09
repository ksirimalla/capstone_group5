import * as Yup from "yup";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const CreateAccountTypeSchema = Yup.object().shape({
    name: Yup.string().required("Please enter Account Name"),
    description: Yup.string().required("Please enter Description"),
    rateOfInterest: Yup.number().test(
        'roi',
        'Please enter valid Rate of Interest',
        value => /^\d*[\.{1}\d*]\d*$/.test(value)
    ).test(
        'roi',
        'Please enter Rate of Interest between 0 to 20%',
        value => !Number.isNaN(value) && value < 20
    ),
    minimumBalance: Yup.number().test(
        'is-decimal',
        'Please enter valid balance',
        value => /^\d*[\.{1}\d*]\d*$/.test(value)
    )
});