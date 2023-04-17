import * as Yup from "yup";

export const LoginSchema = Yup.object().shape({
    userName: Yup.string().required("Please enter User Name"),
    password: Yup.string()
        .required("Please enter Password")
        .min(8, "Password is too short - should be 8 chars minimum")
});