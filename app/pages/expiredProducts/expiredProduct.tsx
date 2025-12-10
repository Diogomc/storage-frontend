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
    const handleDelete = async (id: number) => {
        await ProductServices.delete(id);
        getExpiredProducts()
    }


    useEffect(() => {
        getExpiredProducts();
    }, [])

    return (
        
            <div className="expired-container">
                <h1 className="expired-title">Produtos vencidos</h1>

                {products?.map(p => (
                    <div key={p.productId} className="expired-list">
                            <div className="expired-product">
                                <p>{p.productName} - {p.expirationDate}</p>
                                <p className="delete-button"><FaTrash size={18} onClick={() => handleDelete(p.productId)} /></p>
                        </div>
                    </div>
                ))}
            </div>
    )
}