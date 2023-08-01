import axios from "axios";

export const placeHolderApi = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    timeout: 1000,
    headers: {'Content-type': 'application/json; charset=UTF-8'}
})