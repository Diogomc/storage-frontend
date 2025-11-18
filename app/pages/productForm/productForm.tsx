import { Button } from "@/app/components/btn/button";
import { CategoryServices } from "@/app/services/CategoryServices";
import { ProductServices } from "@/app/services/ProductServices";
import { Category } from "@/app/types/Category";
import { useEffect, useState } from "react"
import "@/app/pages/productForm/productForm.css"

interface Props {
    onSave?: () => void
}
export const ProductForm = ({ onSave }: Props) => {
    const [name, setName] = useState("");
    const [batch, setBatch] = useState("");
    const [date, setDate] = useState("");
    const [brand, setBrand] = useState("");
    const [supplier, setSupplier] = useState("");
    const [categoryId, setCategoryId] = useState("");
    const [categories, setCategories] = useState<Category[]>([]);

    useEffect(() => {
        const loadCategories = async () => {
            const data = await CategoryServices.getAll();
            setCategories(data);
        }
        loadCategories();
    }, [])


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        await ProductServices.create({
            productId: 0,
            productName: name,
            batch: batch,
            expirationDate: date,
            productBrand: brand,
            supplierName: supplier,
            categoryId: Number(categoryId),
        });

        setName("")
        setSupplier("")
        setBatch("")
        setBrand("")
        setDate("")
        setCategoryId("")
        onSave?.();
    }
    return (
        <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center form-container">
            <div>
                <input
                    className="input-form"
                    type="text"
                    placeholder="Nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input type="text"
                    className="input-form"
                    placeholder="Fornecedor"
                    value={supplier}
                    onChange={(e) => setSupplier(e.target.value)}
                />
            </div>
            <div>
                <input type="text"
                    className="input-form"
                    placeholder="Lote"
                    value={batch}
                    onChange={(e) => setBatch(e.target.value)}
                />
                <input type="text"
                    className="input-form"
                    placeholder="Marca"
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                />
            </div>
                <div className="flex items-center text-center flex-col">
                    <p className="expiration-title">Data de Validade: </p>
                    <input className="input-date"
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                </div>
            <div className="flex items-center">

                <select className="category-select" value={categoryId} onChange={(e) => setCategoryId(e.target.value)}>
                    <option value="">Selecione uma Categoria:</option>
                    {categories.map(c => (
                        <option value={c.categoryId} key={c.categoryId}>
                            {c.categoryName}
                        </option>
                    ))}
                </select>
            </div>
            <button className="btn-submit" type="submit">Adicionar Produto</button>
        </form>
    )
}