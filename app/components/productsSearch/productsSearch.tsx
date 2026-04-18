import { useState } from "react"
import { Button } from "../btn/button"
import { Product } from "@/app/types/Product"
import { ProductServices } from "@/app/services/ProductServices"

export const ProductsSearch = () => {
    const [searchName, setSearchName] = useState("")
    const [searchedProduct, setSearchedProduct] = useState<Product | null>(null)


    const handleSearchProduct = async () => {
        const product = await ProductServices.getByName(searchName)
        setSearchedProduct(product)
    }

    const handleClean = () => {
        setSearchName("");
        setSearchedProduct(null);
    }
    return (
        <div className="mx-20 my-10 p-6 flex flex-col items-center bg-white rounded-md 
            max-md:w-full max-md:mx-0">
                <p className="p-8 text-4xl max-md:text-2xl ">Consultar Produtos</p>
                <div>
                    <input
                        className="border border-gray-300 outline-0 rounded-md w-lg p-2 text-lg max-md:w-full"
                        type="text"
                        value={searchName}
                        placeholder="Digite o nome do produto: "
                        onChange={(e) => setSearchName(e.target.value)}
                    />
                </div>
                <div className="mt-4">
                    <Button name="Buscar" onClick={handleSearchProduct} />
                    <Button name="Limpar" onClick={handleClean} />
                </div>
                
                <div className="max-md:w-full">
                    {searchedProduct &&
                        <ul className="flex justify-around items-center border border-gray-300 rounded-md p-5 w-2xl mt-10
                        max-md:flex-col max-md:w-full">
                            <li className="p-2 text-center">
                                <p className="text-gray-400">Nome: </p>
                                <p className="font-bold">{searchedProduct?.productName}</p>
                            </li>
                            <li className="p-2 text-center">
                                <p className="text-gray-400 ">Data de Validade: </p>
                                <p className="font-bold">{new Date(searchedProduct?.expirationDate).toLocaleDateString("pt-BR")}</p>
                            </li>
                            <li className="p-2 text-center">
                                <p className="text-gray-400">Quantidade Disponível: </p>
                                <p className="font-bold">{searchedProduct?.availableQuantity}</p>
                            </li>
                            <li className="p-2 text-center">
                                <p className="text-gray-400">Preço: </p>
                                <p className="font-bold">R$: {searchedProduct?.salePrice}</p>
                            </li>
                            <li className="p-2 text-center">
                                <p className="text-gray-400">Perecível?: </p>
                                <p className="font-bold">{searchedProduct?.isPerishable ?? "Não"}</p>
                            </li>

                        </ul>
                    }
                </div>
            </div>
    )
}