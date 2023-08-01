import {cache} from 'react'
import {placeHolderApi} from "@/app/helper/axiosInstance";

export const getCmt = cache(async (id: any) => {

    return await placeHolderApi.get(`posts/${id}/comments`, {timeout: 2000});
})
// axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)