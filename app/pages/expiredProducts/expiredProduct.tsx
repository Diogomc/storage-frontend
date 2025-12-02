import { ProductServices } from "@/app/services/ProductServices";
import { Product } from "@/app/types/Product";
import { useEffect, useState } from "react"
import "@/app/pages/expiredProducts/expiredProduct.css"
import { FaTrash } from "react-icons/fa";
import { FaPen } from "react-icons/fa6";
export const ExpiredProduct = () => {

    const [products, setProducts] = useState<Product[]>()
    const [reaload, setReload] = useState(0);
   
    const getExpiredProducts = async () => {
        const data = await ProductServices.expired()
        setProducts(data)
    }
    const handleDelete = async (id:number) => {
        await ProductServices.delete(id);
        getExpiredProducts()
    }


    useEffect(() => {    
        getExpiredProducts();
    }, [])

    return (
        <div>
            <h1 className="text-4xl text-center p-18">Produtos vencidos</h1>
            <ul className={`flex justify-center text-white mb-20`}>
                {products?.map(p => (
                    <li className="list p-5 rounded-md m-2 flex flex-col justify-around" key={p.productId}>
                        <p>Nome: {p.productName}</p>
                        <p>Lote: {p.batch}</p>
                        <p>Marca: {p.productBrand}</p>
                        <p>Nome do Fornecedor: {p.supplierName}</p>
                        <p className="text-red-500">Atenção, producto vencido!!</p>
                        <div className="config-buttons">
                            <button className="delete-button"><FaTrash onClick={() => handleDelete(p.productId)}/></button>
                            <button><FaPen/></button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}