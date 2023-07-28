'use client'


import React from 'react';
import {Formik, Form, useField} from 'formik';
import * as Yup from 'yup';
import {TextInput} from "@/app/components/TextInput/TextInput";
import { useRouter } from 'next/navigation'
import {useDispatch, counterSlice} from "@/lib/redux";

const getCharacterValidationError = (str: string) => {
    return `Your password must have at least 1 ${str} character`;
};
// And now we can use these
export default function IndexPage() {
    const router = useRouter()
    const dispatch = useDispatch()
    return (
        <div
            className='w-[360px] bg-indigo-400 shadow-[0_0_20px_0_rgba(0,0,0,0.2),0_5px_5px_0_rgba(0,0,0,0.24)] p-2.5'>
            <h1 className='text-center p-3.5 text-4xl text-amber-600'>Sign In</h1>
            <Formik
                initialValues={{
                    userName: '',
                    password: '',
                }}
                validationSchema={Yup.object({
                    userName: Yup.string()
                        .min(8, 'Must be 8 characters or more')
                        .required('Required'),
                    password: Yup.string()
                        .required("Please enter a password")
                        // check minimum characters
                        .min(8, "Password must have at least 8 characters")
                        // different error messages for different requirements
                        .matches(/[0-9]/, getCharacterValidationError("digit"))
                        .matches(/[a-z]/, getCharacterValidationError("lowercase"))
                        .matches(/[A-Z]/, getCharacterValidationError("uppercase"))
                })}
                onSubmit={(values, {setSubmitting}) => {
                    dispatch(counterSlice.actions.userNameInput(values.userName))
                    dispatch(counterSlice.actions.passWordInput(values.password))
                    setTimeout(() => {
                        router.push('/')
                        setSubmitting(false);
                    }, 1000);
                }}
            >
                <Form className='flex flex-col justify-evenly p-2.5'>
                    <TextInput
                        label="User Name"
                        name="userName"
                        type="text"
                        placeholder="UserName"
                    />

                    <TextInput
                        label="Password"
                        name="password"
                        type="text"
                        placeholder="Password"
                    />
                    <button className='text-base mx-0 my-2.5 p-[15px] border-0 text-[white] cursor-pointer bg-green-600'
                            type="submit">SignIn
                    </button>
                </Form>
            </Formik>
        </div>
    );
};