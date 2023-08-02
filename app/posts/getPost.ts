import {placeHolderApi} from "@/app/helper/axiosInstance";

export const getPost = async () => {

    return await placeHolderApi.get('posts')
}
