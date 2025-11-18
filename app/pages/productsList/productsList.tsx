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
            <ul>
                {products?.map(p => (
                    <li className="p-3 flex" key={p.productId}>
                        <p>{p.productName} </p>
                        <p>{p.batch}</p>
                        <p>{p.productBrand}</p>
                        <p>{p.supplierName}</p>
                        <p>{expiration(p.expirationDate)}</p>
                    </li>
                ))}              
            </ul>
        </div>
    )
}