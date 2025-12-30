"use client"
import { useState } from "react";
import { Product } from "../types/Product";
import { ProductServices } from "../services/ProductServices";
import { NavUser } from "../components/nav-user/navUser";
import { Button } from "../components/btn/button";
import { ProductsList } from "../pages/productsList/productsList";
import { Footer } from "../components/footer";

const Products = () => {
    const [searchName, setSearchName] = useState("")
    const [searchedProduct, setSearchedProduct] = useState<Product | null>(null)


    const handleSearch = async () => {
        const product = await ProductServices.getByName(searchName);
        setSearchedProduct(product);
    }
    const handleClean = async () => {
        setSearchName("")
        setSearchedProduct(null)
    }

    return (
        <div>
            <NavUser />
            <div className="flex justify-center items-center flex-col w-full mt-24 max-md:mt-10">
                <p className="p-8 text-4xl max-md:text-2xl ">Consultar Produtos</p>
                <div>
                    <p className="text-left pb-3 max-md:text-center">Digite o nome do produto: </p>
                    <input
                        className="border border-gray-300 outline-0 rounded-md w-lg p-2 text-lg max-md:w-full"
                        type="text"
                        value={searchName}
                        onChange={(e) => setSearchName(e.target.value)}
                    />
                </div>
                <div className="mt-4">
                    <Button name="Buscar" onClick={handleSearch} />
                    <Button name="Limpar" onClick={handleClean} />
                </div>
                <div>
                    {searchedProduct && 
                    <ul className="flex justify-around items-center border border-gray-300 rounded-md p-5 w-2xl mt-10">
                        <li className="p-2 text-center">
                            <p className="text-gray-400">Nome: </p>
                            <p className="font-bold">{searchedProduct?.productName}</p>
                        </li>
                        <li className="p-2 text-center">
                            <p className="text-gray-400 ">Data de Validade: </p>
                            <p className="font-bold">{searchedProduct?.expirationDate}</p>
                        </li>
                        <li className="p-2 text-center">
                            <p className="text-gray-400">Quantidade Disponível: </p>
                            <p className="font-bold">{searchedProduct?.availableQuantity}</p>
                        </li>
                        <li className="p-2 text-center">
                            <p className="text-gray-400">Preço: </p>
                            <p className="font-bold">R$: {searchedProduct?.salePrice}</p>
                        </li>
                        
                    </ul>
                    }
                </div>
            </div>
            <ProductsList />
            <Footer />

        </div>
    )
}


export default Products;