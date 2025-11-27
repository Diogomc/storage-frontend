import { CategoryServices } from "@/app/services/CategoryServices"
import { Category } from "@/app/types/Category"
import { useEffect, useState } from "react"
import "@/app/pages/categoryForm/categoryForm.css"
import { IoClose } from "react-icons/io5"
import { IoAdd } from "react-icons/io5";

interface Props {
    onSave?: () => void
}

export const CategoryForm = ({ onSave }: Props) => {
    const [name, setName] = useState("")
    const [categories, setCategories] = useState<Category[]>([])
    const [modalOpened, setModalOpened] = useState(false);
    const loadCategories = async () => {
        const data = await CategoryServices.getAll()
        setCategories(data)
    }

    const modal = () => {
        setModalOpened(true)
    }
    const handleCloseModal = () => {
        setModalOpened(false)
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        await CategoryServices.create({
            categoryId: 0,
            categoryName: name
        })
        setName("")
    }

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        loadCategories()
    })

    return (
        <div className="flex justify-center">
            <button className="btn-new-cat flex items-center" onClick={modal}>Adicionar nova Categoria</button>
            <div className={`${modalOpened ? 'modal-cat-opened' : 'modal-closed'}`}>
                <div className="flex justify-between mb-8">
                    <h1 className="text-2xl">Adicionar Categoria</h1>
                    <button className="btn-close-modal" onClick={handleCloseModal}><IoClose size={30} /></button>

                </div>

                <form onSubmit={handleSubmit}>
                    <input
                        className="input-form"
                        type="text"
                        placeholder="Nome"
                        onChange={(e) => setName(e.target.value)}
                    />
                    <button className="btn-submit" type="submit">Adicionar Categoria</button>
                </form>

            </div>
        </div>
    )
}