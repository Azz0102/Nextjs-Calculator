'use client'

import {Form, Formik} from "formik";
import {TextInput} from "@/app/components/TextInput/TextInput";
import {validationPostSchema} from "@/app/posts/validationPostSchema";
import {submitPostHandler} from "@/app/helper/submitPostHandler";
import {TextArea} from "@/app/components/TextArea/TextArea";

export const PostForm = () => {
    return (<div className='w-full'>
        <Formik
            initialValues={{
                title: '',
                body: '',
            }}
            validationSchema={validationPostSchema}
            onSubmit={async (values: any, {setSubmitting, setFieldValue}: any) => {
                const data = await submitPostHandler(values)
                console.log(data)
                setFieldValue('title', '')
                setFieldValue('body', '')
                setSubmitting(false);
            }}
        >
            {({isSubmitting}) => (<Form className='flex flex-col p-2.5 mt-20'>
                <TextInput
                    label="Title"
                    name="title"
                    type="text"
                    placeholder="Title"
                />

                <TextArea/>
                <button
                    className='text-base mx-0 my-2.5 p-4 border-0 text-[white] cursor-pointer bg-green-600 hover:bg-green-500 w-1/6 rounded-lg self-center'
                    type="submit" disabled={isSubmitting}>Send
                </button>
            </Form>)}
        </Formik>
    </div>)
}