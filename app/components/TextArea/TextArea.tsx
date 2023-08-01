import {Field} from "formik";

export const TextArea = ()=>{
    return <Field as='textarea' name='body' placeholder="Type your content here" rows='10' className='w-full bg-blue-100' />
}