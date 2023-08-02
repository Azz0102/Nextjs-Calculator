'use client'

import {Formik, Form} from 'formik';
import {TextInput} from "@/app/components/TextInput/TextInput";
import {validationSchema} from "@/app/signin/validationSchema";
import {useRouter} from "next/navigation";
import {counterSlice, selectPassword, selectUserName, useDispatch, useSelector} from "@/lib/redux";

// And now we can use these
export default function IndexPage() {
    const router = useRouter()
    const dispatch = useDispatch()

    return (
        <div
            className='w-80 bg-indigo-400 shadow-[0_0_20px_0_shadow1,0_5px_5px_0_shadow2] p-2.5 mt-60'>
            <h1 className='text-center p-3.5 text-4xl text-amber-600'>Sign In</h1>
            <Formik
                initialValues={{
                    userName: '',
                    passWord: '',
                }}
                validationSchema={validationSchema}
                onSubmit={(values: any, {setSubmitting}: any) => {
                    dispatch(counterSlice.actions.userNameInput(values.userName))
                    dispatch(counterSlice.actions.passWordInput(values.passWord))
                    router.push('/')
                    setSubmitting(false);
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
                        name="passWord"
                        type="text"
                        placeholder="Password"
                    />
                    <button className='text-base mx-0 my-2.5 p-4 border-0 text-[white] cursor-pointer bg-green-600'
                            type="submit">SignIn
                    </button>
                </Form>
            </Formik>
        </div>
    );
};