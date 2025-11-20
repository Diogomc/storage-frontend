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
delete: async(id:number): Promise<void> => {
    await api.delete<Product>(`/Product/${id}`)
},
update: async(id:number, product:Product) => {
    const {data} = await api.put(`/Product/${id}`, product)
    return data;
}
}