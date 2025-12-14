import { ProductServices } from "@/app/services/ProductServices";
import { Product } from "@/app/types/Product";
import { useEffect, useState } from "react"
import { Fa1 } from "react-icons/fa6";
import { RiDeleteBin6Fill } from "react-icons/ri";
export const ExpiredProduct = () => {

    const [expiredProducts, setExpiredProducts] = useState<Product[]>()
    const [closeToExpiration, setCloseToExpiration] = useState<Product[]>([])
    const [closeToExpirationPerishable, setCloseToExpirationPerishable] = useState<Product[]>([])
    const getExpiredProducts = async () => {
        const data = await ProductServices.expired()
        setExpiredProducts(data)
    }
    const getCloseExpirePerishable = async () => {
        const data = await ProductServices.getCloseExpirationPerishables()
        setCloseToExpirationPerishable(data)
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
        getCloseExpirePerishable();
        getExpiredProducts();
        getCloseToExpiration();
    }, [])

    return (

        <div className="m-20 max-md:m-2">
            <p className="text-center text-3xl m-20">Atenção</p>
            <div className="flex justify-center gap-3 w-full max-md:flex-col">
                <div className="bg-second rounded-md w-full flex flex-col justify-around items-center p-2">
                    <p className="text-2xl p-8">Produtos vencidos </p>
                    {expiredProducts?.map((p) => (
                        <div key={p.productId} className="flex justify-between text-center items-center w-full p-5">
                            <p className="text-lg">{p.productName}</p>
                            <p className="text-lg font-bold">{p.expirationDate}</p>
                            <p className="hover:text-red-400 cursor-pointer transition duration-400"><RiDeleteBin6Fill size={20} /></p>
                        </div>
                    ))}

                </div>
                <div className="bg-second rounded-md w-full flex flex-col justify-around items-center p-2">
                    <p className="text-2xl p-8">Produtos Próximos ao vencimento</p>
                    {closeToExpiration.map((p) => (
                        <div key={p.productId} className="flex justify-between text-center items-center w-full p-5">
                            <p className="text-lg">{p.productName}</p>
                            <p className="text-lg font-bold">{p.expirationDate}</p>
                            <p className="hover:text-red-400 cursor-pointer transition duration-400"><RiDeleteBin6Fill size={20} /></p>
                        </div>
                    ))}
                </div>
                <div className="bg-second rounded-md w-full flex flex-col justify-around items-center p-2">
                    <p className="text-2xl p-8">Perecíveis próximos ao vencimento</p>
                    {closeToExpirationPerishable.map((p) => (
                        <div key={p.productId} className="flex justify-between text-center items-center w-full p-5">
                            <p className="text-lg">{p.productName}</p>
                            <p className="text-lg font-bold">{p.expirationDate}</p>
                            <p className="hover:text-red-400 cursor-pointer transition duration-400"><RiDeleteBin6Fill size={20} /></p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}