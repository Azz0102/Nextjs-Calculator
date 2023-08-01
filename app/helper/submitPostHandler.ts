'use server'

import {placeHolderApi} from "@/app/helper/axiosInstance";

export async function submitPostHandler(value: any) {
    return await placeHolderApi.post('posts', {
        userId: 1,
        title: value.title,
        body: value.body
    },{
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
}