import { Product } from './../types/Product';
import api from "../api/api";

export const ProductServices = {
    getAll: async (): Promise<Product[]> => {
        const { data } = await api.get<Product[]>("/Product")
        return data;
    },
    getById: async (id: number): Promise<Product> => {
        const { data } = await api.get<Product>(`/Product/${id}`)
        return data;
    },
    getByName: async (name:string): Promise<Product> => {
        const {data} = await api.get<Product>(`/Product/${name}`)
        return data;
    },
    getTotalQuantity: async (): Promise<number> => {
        const { data } = await api.get<number>("Product/TotalQuantity")
        return data;
    },
    getTotalValue: async (): Promise<number> => {
        const { data } = await api.get<number>("Product/TotalValue")
        return data;
    },
    getTotalGrossValue: async (): Promise<number> => {
        const { data } = await api.get<number>("Product/GrossValue")
        return data;
    },
    getProfitMargin: async (): Promise<number> => {
        const { data } = await api.get<number>("Product/ProfitMargin")
        return data;
    },
    getCloseExpirationPerishables: async (): Promise<Product[]> => {
        const { data } = await api.get<Product[]>("Product/CloseExpirationPerishables")
        return data;
    },
    getCloseToExpiration: async (): Promise<Product[]> => {
        const { data } = await api.get<Product[]>("Product/CloseExpiration")
        return data;
    },
    getExpiredProducts: async (): Promise<Product[]> => {
        const { data } = await api.get<Product[]>("/Product/Expireds")
        return data;
    },
    create: async (product: Product): Promise<Product> => {
        const { data } = await api.post<Product>("/Product", product)
        return data;
    },
    delete: async (id: number): Promise<void> => {
        await api.delete<Product>(`/Product/${id}`)
    },
    update: async (id: number, product: Product) => {
        const { data } = await api.put(`/Product/${id}`, product)
        return data;
    }
}