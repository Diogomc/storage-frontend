import { ProductServices } from "@/app/services/ProductServices";
import { Product } from "@/app/types/Product";
import { useEffect, useState } from "react"
import { RiDeleteBin6Fill } from "react-icons/ri";
import "@/app/pages/expiredProducts/expiredProduct.css"
export const ExpiredProduct = () => {

    const [products, setProducts] = useState<Product[]>()
    const [closeToExpiration, setCloseToExpiration] = useState<Product[]>([])
    const getExpiredProducts = async () => {
        const data = await ProductServices.expired()
        setProducts(data)
    }

    const getCloseToExpiration = async () => {
        const data = await ProductServices.closeToExpiration()
        setCloseToExpiration(data);
    }
    const handleDelete = async (id: number) => {
        await ProductServices.delete(id);
        getExpiredProducts()
    }
    useEffect(() => {
        getExpiredProducts();
        getCloseToExpiration();
    }, [])

    return (

        <div className="expiring-container">

            <div className="expired-container">
                <h2 className="title-expire">Produtos Vencidos</h2>
                <div className="expireds">
                    {products?.map((p) => (
                        <div className="expired-products" key={p.productId}>
                            <div>
                                <p>{p.productName}</p>
                                <p className="font-bold">{p.expirationDate}</p>
                            </div>

                            <p className="btn-delete-expire"><RiDeleteBin6Fill size={30} onClick={() => handleDelete(p.productId)}/></p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="close-expiration-container">
                <h2 className="title-expire">Produtos Próximos ao Vencimento</h2>
                <div className="close-expire">
                    {closeToExpiration.map((p) => (
                        <div className="close-expiration" key={p.categoryId}>
                            <div>
                                <p>{p.productName}</p>
                                <p>{p.expirationDate}</p>
                            </div>
                            <p className="btn-delete-expire"><RiDeleteBin6Fill size={30} onClick={() => handleDelete(p.productId)}/></p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}