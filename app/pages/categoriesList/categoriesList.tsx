import { CategoryServices } from "@/app/services/CategoryServices"
import { Category } from "@/app/types/Category"
import { useEffect, useState } from "react"
import { FaTrash } from "react-icons/fa";
import { FaPen } from "react-icons/fa6";

export const CategoriesList = () => {
    const [categories, setCategories] = useState<Category[]>([])

    const loadCategories = async () => {
        const data = await CategoryServices.getAll();
        setCategories(data);
    }

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        loadCategories();
    }, [])
    return (
        <div>
            <p className="text-4xl text-center m-10">Categorias</p>
            <ul>
                {categories.map((c) => (
                    <li key={c.categoryId}>
                        <div className="flex items-center justify-center p-3">
                            <p className="text-2xl">{c.categoryName} </p>
                            <p className="cursor-pointer"><FaTrash/></p>
                            <p><FaPen/></p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}