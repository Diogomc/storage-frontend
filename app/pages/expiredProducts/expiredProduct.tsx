import { ProductServices } from "@/app/services/ProductServices";
import { Product } from "@/app/types/Product";
import { useEffect, useState } from "react"
import { RiDeleteBin6Fill } from "react-icons/ri";
import { FaPen } from "react-icons/fa";
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

        <div>
            <div>
                <div className="flex flex-col items-center">
                    <p className="text-2xl font-bold text-center p-20">Produtos Vencidos</p>
                    {expiredProducts?.map((p) => (

                        <ul key={p.productId} className="flex border border-gray-300 items-center text-center p-2 m-2 rounded-md w-2/3 max-md:w-full">

                            <li className="w-1/2">
                                <p className="font-bold">{p.productName}</p>
                                {p.isPerishable &&
                                    <p className="text-red-500">- Perecível -</p>
                                }
                            </li>
                            <li className="w-1/2">
                                <p className="text-gray-400">Validade:</p>
                                <p>{p.expirationDate}</p>
                            </li>
                            <li className="w-1/2">
                                <p className="text-gray-400">Lote Vencido:</p>
                                <p>{p.batch}</p>
                            </li>
                            <li className="w-1/3 flex">
                                <button className="p-2 cursor-pointer"
                                    onClick={() => handleDelete(p.productId)}
                                >
                                    <RiDeleteBin6Fill size={25} />
                                </button>
                                <button
                                    className="p-2 cursor-pointer"
                                >
                                    <FaPen size={20} />
                                </button>

                            </li>
                        </ul>
                    ))}
                </div>
             
            </div>
            


                <div className="flex flex-col items-center">
                    <p className="text-2xl font-bold text-center p-20">Produtos Próximos ao Vencimento</p>
                    {closeToExpiration?.map((p) => (

                        <ul key={p.productId} className="flex border border-gray-300 items-center text-center p-2 m-2 rounded-md w-2/3 max-md:w-full">

                            <li className="w-1/2">
                                <p className="font-bold">{p.productName}</p>
                                {p.isPerishable &&
                                    <p className="text-red-500">- Perecível -</p>
                                }
                            </li>
                            <li className="w-1/2">
                                <p className="text-gray-400">Validade:</p>
                                <p>{p.expirationDate}</p>
                            </li>
                            <li className="w-1/2">
                                <p className="text-gray-400">Lote:</p>
                                <p>{p.batch}</p>
                            </li>
                            <li className="w-1/3 flex">
                                <button className="p-2 cursor-pointer"
                                    onClick={() => handleDelete(p.productId)}
                                >
                                    <RiDeleteBin6Fill size={25} />
                                </button>
                                <button
                                    className="p-2 cursor-pointer"
                                >
                                    <FaPen size={20} />
                                </button>

                            </li>
                        </ul>
                    ))}
                </div>

        </div>
    )
}