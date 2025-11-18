import { Button } from "@/app/components/btn/button";
import { CategoryServices } from "@/app/services/CategoryServices";
import { ProductServices } from "@/app/services/ProductServices";
import { Category } from "@/app/types/Category";
import { useEffect, useState } from "react"

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
        <form onSubmit={handleSubmit}>
            <div>
                <input
                    type="text"
                    placeholder="Nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input type="text"
                    placeholder="Fornecedor"
                    value={supplier}
                    onChange={(e) => setSupplier(e.target.value)}
                />
            </div>
            <div>
                <input type="text"
                    placeholder="Lote"
                    value={batch}
                    onChange={(e) => setBatch(e.target.value)}
                />
                <input type="text"
                    placeholder="Marca"
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                />
                <select value={categoryId} onChange={(e) => setCategoryId(e.target.value)}>
                    <option value="">Selecione uma Categoria:</option>
                    {categories.map(c => (
                        <option value={c.categoryId} key={c.categoryId}>
                            {c.categoryName}
                        </option>
                    ))}
                </select>
            </div>
            <div className="flex">
                <p>Data de Validade: </p>
                <input type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
            </div>
            <button type="submit">Adicionar Produto</button>
        </form>
    )
}