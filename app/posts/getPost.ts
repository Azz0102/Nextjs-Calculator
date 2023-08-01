import axios from "axios";
import {cache} from 'react'
import {placeHolderApi} from "@/app/helper/axiosInstance";

export const getPost = async () => {

    return await placeHolderApi.get('posts')
}
