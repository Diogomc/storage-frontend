import { ProductServices } from "@/app/services/ProductServices";
import { Product } from "@/app/types/Product";
import { useEffect, useState } from "react"
import "@/app/pages/productsList/productsList.css"
import { Category } from "@/app/types/Category";
export const ProductsList = () => {

    const [products, setProducts] = useState<Product[]>()

    const expiration = (dateStr:string) => {
        const date = new Date(dateStr);
        const today = new Date()

        if(date < today){
            return <span className="text-red-600">Produto vencido</span>
        }
    }

    useEffect(() => {
        const loadProducts = async () => {
            const data = await ProductServices.getAll()
            setProducts(data)
        }
        
        loadProducts()
    }, [])

    return (
        <div>
            <ul className="flex justify-center m-20 text-white">
                {products?.map(p => (
                    <li className="list p-5 rounded-md m-2" key={p.productId}>
                        <p>Nome: {p.productName} </p>
                        <p>Lote: {p.batch}</p>
                        <p>Marca: {p.productBrand}</p>
                        <p>Nome do Fornecedor: {p.supplierName}</p>
                        <p>{expiration(p.expirationDate)}</p>
                    </li>
                ))}              
            </ul>
        </div>
    )
}