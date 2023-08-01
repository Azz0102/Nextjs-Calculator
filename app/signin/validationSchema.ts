import * as Yup from 'yup';
import {getCharacterValidationError} from "@/app/helper/getCharacterValidationError";

export const validationSchema = Yup.object({
    userName: Yup.string()
        .min(8, 'Must be 8 characters or more')
        .required('Required'),
    passWord: Yup.string()
        .required("Please enter a password")
        // check minimum characters
        .min(8, "Password must have at least 8 characters")
        // different error messages for different requirements
        .matches(/[0-9]/, getCharacterValidationError("digit"))
        .matches(/[a-z]/, getCharacterValidationError("lowercase"))
        .matches(/[A-Z]/, getCharacterValidationError("uppercase"))
})