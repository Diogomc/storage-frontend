import { CategoryServices } from "@/app/services/CategoryServices"
import { Category } from "@/app/types/Category"
import { useEffect, useState } from "react"
import { GiSodaCan } from "react-icons/gi";
import { RiBeerFill } from "react-icons/ri";
import { BiBowlRice } from "react-icons/bi";
import { BiSolidCoffeeBean } from "react-icons/bi";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { RiDeleteBin6Fill } from "react-icons/ri";
import "@/app/pages/categoriesList/categoriesList.css"
import { Button } from "@/app/components/btn/button";
import { Modal } from "@/app/components/modal/modal";
export const CategoriesList = () => {
    const [categories, setCategories] = useState<Category[]>([])
    const [modalOpened, setModalOpened] = useState<boolean>(false)

    const handleOpenModal = () => {
        setModalOpened(true)
    }
    const loadCategories = async () => {
        const data = await CategoryServices.getAll();
        setCategories(data);
    }
    const handleDelete = async (id:number) => {
        await CategoryServices.delete(id);
        await loadCategories();
    }

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        loadCategories();
    }, [])
    const setImageId = (category: Category) => {
        switch (category.categoryId) {
            case 1:
                return (
                    <p className="icon-categories bg-green-200"><GiSodaCan size={50} /></p>
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
                        <AiOutlineLoading3Quarters size={50} />
                    </p>
                );
        }
    }
    return (
        <div>
            <Button onClick={() => handleOpenModal()} name="Consultar Categorias" />
            <Modal title={"Categorias"} isOpen={modalOpened} onClose={() => setModalOpened(false)}>
                {categories.map((c) => (
                    <div className="flex text-center items-center justify-between" key={c.categoryId}>
                        {setImageId(c)}
                        <div>
                            <p className="text-lg">{c.categoryName}</p>
                            <p className="font-bold">Id #{c.categoryId}</p>
                        </div>
                        <p><RiDeleteBin6Fill size={30} onClick={() => handleDelete(c.categoryId)}/></p>
                    </div>
                ))}
            </Modal>
        </div>
    )
}
