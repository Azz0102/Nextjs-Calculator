import * as Yup from 'yup';

export const validationPostSchema = Yup.object({
    title: Yup.string()
        .min(3, 'Must be 3 characters or more')
        .required('Required'),
    body: Yup.string()
        .required('Required')
        .min(1, "Must be 1 characters or more")
})