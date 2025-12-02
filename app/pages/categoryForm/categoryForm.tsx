import { CategoryServices } from "@/app/services/CategoryServices"
import { Category } from "@/app/types/Category"
import { useEffect, useState } from "react"
import "@/app/pages/categoryForm/categoryForm.css"
import { IoAdd } from "react-icons/io5";
import { Modal } from "@/app/components/modal/modal";
import { Button } from "@/app/components/btn/button";

interface Props {
    onSave?: () => void
}

export const CategoryForm = ({ onSave }: Props) => {
    const [name, setName] = useState("")
    const [categories, setCategories] = useState<Category[]>([])
    const [modalOpened, setModalOpened] = useState<boolean>(false);
    const loadCategories = async () => {
        const data = await CategoryServices.getAll()
        setCategories(data)
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
            <Button name="Adicionar Categoria" onClick={() => setModalOpened(true)}/>
            <Modal title="Categoria" isOpen={modalOpened} onClose={() => setModalOpened(false)} >
                <div>
                    <form onSubmit={handleSubmit}>
                        <div className="form-cat">
                            <input
                                className="input-cat"
                                type="text"
                                placeholder="Nome"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <Button  type="submit" name="Adicionar"/>
                        </div>
                    </form>
                </div>
            </Modal>
        </div>
    )
}