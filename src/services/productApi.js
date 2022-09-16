import axios from "axios";

export const productApi = axios.create({
    baseURL: '/products',
})