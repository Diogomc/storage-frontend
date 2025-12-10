import { CategoryServices } from "@/app/services/CategoryServices"
import { Category } from "@/app/types/Category"
import { useEffect, useState } from "react"
import { GiSodaCan } from "react-icons/gi";
import { RiBeerFill } from "react-icons/ri";
import { BiBowlRice } from "react-icons/bi";
import { BiSolidCoffeeBean } from "react-icons/bi";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { MdModeEditOutline } from "react-icons/md";
import "@/app/pages/categoriesList/categoriesList.css"
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
    const setImageId = (category: Category) => {
        switch (category.categoryId) {
            case 1:
                return (
                    <p className="icon-categories bg-green-200">
                        <GiSodaCan size={50} />
                    </p>
                );
            case 2:
                return (
                    <p className="icon-categories bg-amber-200">
                        <RiBeerFill size={50} />
                    </p>
                );
            case 3:
                return (
                    <p className="icon-categories bg-amber-50">
                        <BiBowlRice size={50} />
                    </p>
                );
            case 4:
                return (
                    <p className="icon-categories bg-orange-800">
                        <BiSolidCoffeeBean size={50} />
                    </p>
                );
            default:
                return (
                    <p className="icon-categories">
                        <AiOutlineLoading3Quarters />
                    </p>
                );
        }
    }
    return (
        <div>
            <p className="text-4xl text-center m-10">Categorias</p>
            <table className="table-cat">
                <thead>
                    <tr>
                        <th className="title-cat">Categoria</th>
                    </tr>
                </thead>
                <tbody className="category-list">
                    {categories.map((c) => (

                        <tr className="tr-cat-list" key={c.categoryId}>
                            <th className="categories-name">
                                <div>{setImageId(c)}</div>
                                <div>
                                    <p>{c.categoryName}</p>
                                    <p className="category-id">#{c.categoryId}</p>
                                </div>
                            </th>
                            <th><RiDeleteBin6Fill size={30} className="btn-cat"/></th>
                            <th><MdModeEditOutline size={30} className="btn-cat"/></th>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    )
}
