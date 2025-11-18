import { Product } from './../types/Product';
import api from "../api/api";

export const ProductServices = {
    getAll: async (): Promise<Product[]> => {
        const {data} = await api.get<Product[]>("/Product")
        return data;
},
getById: async(id:number): Promise<Product> => {
    const {data} = await api.get<Product>(`/Product/${id}`)
    return data;
},
create: async(product:Product): Promise<Product> => {
    const {data} = await api.post<Product>("/Product", product)
    return data;
},
}