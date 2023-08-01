'use client'

import React, {useState} from "react";

export const Post = ({value, id, children}: { value: any, id: any,children: React.ReactNode }) => {
    const [isShowCmt, setIsShowCmt] = useState(false);

    const showCmtHandler = () => {
        setIsShowCmt(!isShowCmt);
    }

    return (<li className='mb-2 bg-amber-200 flex flex-col rounded-lg' key={id}>
        <a className='text-rose-500 text-3xl m-1'>{value.title}</a>
        <a className='whitespace-pre-wrap m-1'>{value.body}</a>
        <div className='flex flex-col'>
            <button className='w-full max-w-xs rounded-lg bg-indigo-500'
                    onClick={showCmtHandler}>{isShowCmt ? 'Hide comments ↑' : 'Show comments ↓'}</button>
            {isShowCmt && children}
        </div>
    </li>)
}
