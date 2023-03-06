import * as Yup from "yup";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const SignUpSchema = Yup.object().shape({
    firstName: Yup.string().required("Please enter First Name"),
    lastName: Yup.string().required("Please enter Last Name"),
    dateOfBirth: Yup.date().required("Please enter Date of Birth"),
    phoneNumber: Yup.string().matches(phoneRegExp, 'Please enter valid Phone Number'),
    email: Yup.string().email().required("Please enter Email"),
    userName: Yup.string().required("Please enter User Name"),
    password: Yup.string()
        .required("Please enter Password")
        .min(8, "Password is too short - should be 8 chars minimum"),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match'),

    addressLine1: Yup.string().required("Please enter Address Line"),
    addressLine2: Yup.string().nullable(),
    city: Yup.string().required("Please enter City"),
    state: Yup.string().required("Please enter State"),
    country: Yup.string().required("Please enter Country"),
    postalCode: Yup.string().required("Please enter Postal Code").length(6, "Postal Code should be 6 digits"),
    userImage: Yup.string().nullable(),
    idProof: Yup.string().required("Please enter Id Proof"),
    idProofValue: Yup.string().required("Please enter Id Proof Value"),
    accountId: Yup.number().required("Please select Account Number"),
});