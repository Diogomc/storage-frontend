import { Category } from './../types/Category';
import api from '../api/api';
export const CategoryServices = {
    getAll: async() : Promise<Category[]> => {
        const {data} = await api.get<Category[]>("/Category")
    return data;
}
}