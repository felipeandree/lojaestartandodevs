import { productApi } from "./productApi";

export const getProducts = () => {
    return productApi.get('');
}

export const getProduct = (id) => {
    return productApi.get(`/${id}`);
}