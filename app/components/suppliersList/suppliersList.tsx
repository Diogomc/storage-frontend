import { Product } from "@/app/types/Product"
import { LiaIndustrySolid } from "react-icons/lia"

export const SuppliersList = ({ products } : { products: Product[]}) => {
    return (
        <div>
            <div className="bg-white border border-gray-100 flex flex-col rounded-md w-96 h-full
                max-md:w-full max-md:mb-30">
                <p className="text-main-color text-left text-xl m-8">Principais fornecedores</p>
                <div>
                    {products.map((p) => (
                        <ul className="flex items-center border-b border-gray-100 justify-between text-left p-4" key={p.productId}>
                            <li className="bg-main rounded-md"><LiaIndustrySolid size={30} color="white" /></li>
                            <li className="mx-3 text-lg  p-2">{p.supplierName}</li>
                            <li>{p.availableQuantity} Produtos</li>
                        </ul>
                    ))}
                </div>
            </div>
        </div>
    )
}