import { Category } from './../types/Category';
import api from '../api/api';
export const CategoryServices = {
    getAll: async (): Promise<Category[]> => {
        const { data } = await api.get<Category[]>("/Category")
        return data;
    },
    create: async (category:Category): Promise<Category> => {
        const { data } = await api.post<Category>("/Category", category)
        return data;
    }
}