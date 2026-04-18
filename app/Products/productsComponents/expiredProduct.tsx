import { ProductServices } from "@/app/services/ProductServices";
import { Product } from "@/app/types/Product";
import { useEffect, useState } from "react"
import { RiDeleteBin6Fill } from "react-icons/ri";
import { FaPen } from "react-icons/fa";
import { BiTrash } from "react-icons/bi";
export const ExpiredProduct = () => {

    const [expiredProducts, setExpiredProducts] = useState<Product[]>()
    const [closeToExpiration, setCloseToExpiration] = useState<Product[]>([])
    const getExpiredProducts = async () => {
        const data = await ProductServices.getExpiredProducts()
        setExpiredProducts(data)
    }

    const getCloseToExpiration = async () => {
        const data = await ProductServices.getCloseToExpiration()
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

        <div className="flex mx-20 my-10 gap-6
        max-md:flex-col max-md:mx-0">
            <div className="bg-white w-full rounded-md">
                <p className="text-main-color text-2xl p-5 mx-6">Vencidos</p>
                {expiredProducts?.map((p) => (
                    <ul key={p.productId} className="my-2">
                        <li className="p-2 mx-6 flex items-center justify-between border-b border-b-gray-200">
                            <div>
                                <p>{p.productName}</p>
                                <p className="text-gray-500">{new Date(p.expirationDate).toLocaleDateString("pt-BR")}</p>
                            </div>
                            <button className="cursor-pointer text-main-color hover:text-purple-200 hover:rounded-md hover:bg-main-color"><BiTrash size={25}/></button>
                        </li>
                    </ul>
                ))}
            </div>
            <div className="bg-white w-full rounded-md">
                <p className="text-main-color text-2xl p-5 mx-6">Próximos ao Vencimento</p>
                {closeToExpiration.map((p) => (
                    <ul key={p.productId} className="my-2">
                        <li className="flex p-2 mx-6 items-center justify-between border-b border-b-gray-200">
                            <div>
                                <p>{p.productName}</p>
                                <p className="text-gray-500">{new Date(p.expirationDate).toLocaleDateString("pt-BR")}</p>
                                <p>{p.isPerishable ?? "Não Perecível"}</p>
                            </div>
                            <button className="cursor-pointer text-main-color hover:text-purple-200 hover:rounded-md hover:bg-main-color"><BiTrash size={25}/></button>
                        </li>
                    </ul>
                ))}
            </div>
        </div>
    )
}