import {useField} from "formik";
import React from "react";

export const TextInput = ({label, ...props}: {
    label: string,
    name: string,
    type: string,
    placeholder: string
}) => {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    // which we can spread on <input>. We can use field meta to show an error
    // message if the field is invalid and it has been touched (i.e. visited)
    const [field, meta] = useField(props);
    return (
        <>
            <label htmlFor={props.name}>{label}</label>
            <input className="text-base mx-0 my-2.5 p-[15px] border-0 bg-slate-300" {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="text-sm text-[red] mb-[15px]">{meta.error}</div>
            ) : null}
        </>
    );
};