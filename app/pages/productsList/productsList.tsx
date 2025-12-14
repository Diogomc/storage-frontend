import { ProductServices } from "@/app/services/ProductServices";
import { Product } from "@/app/types/Product";
import { useEffect, useState } from "react";
import { ProductForm } from "../productForm/productForm";
import { GiSodaCan } from "react-icons/gi";
import { RiBeerFill } from "react-icons/ri";
import { BiBowlRice } from "react-icons/bi";
import { BiSolidCoffeeBean } from "react-icons/bi";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { Button } from "@/app/components/btn/button";
import { Modal } from "@/app/components/modal/modal";
import { FaEye } from "react-icons/fa";

export const ProductsList = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [modalOpened, setModalOpened] = useState<boolean>(false);
    const [selectedProduct, setSelectedProduct] = useState<Product>();

    const loadProducts = async () => {
        const data = await ProductServices.getAll();
        setProducts(data);
    };

    useEffect(() => {
        loadProducts();
    }, []);

    const setImageId = (product: Product) => {
        switch (product.categoryId) {
            case 1:
                return (
                    <p className="icon-categories bg-green-200">
                        <GiSodaCan size={40} color="black"/>
                    </p>
                );
            case 2:
                return (
                    <p className="icon-categories bg-amber-200">
                        <RiBeerFill size={40} color="black"/>
                    </p>
                );
            case 3:
                return (
                    <p className="icon-categories bg-amber-50">
                        <BiBowlRice size={40} color="black"/>
                    </p>
                );
            case 4:
                return (
                    <p className="icon-categories bg-orange-800">
                        <BiSolidCoffeeBean size={40}/>
                    </p>
                );
            default:
                return (
                    <p className="icon-categories">
                        <AiOutlineLoading3Quarters size={40}/>
                    </p>
                );
        }
    };

    const openModal = (product: Product) => {
        setSelectedProduct(product)
        setModalOpened(true)
    }


    return (
        <div className="m-20 max-md:m-0">
            <p className="text-4xl text-center p-10 m-10">Produtos em Estoque</p>
                <div className="">
                    <table className="table-auto w-full bg-second text-center rounded-md ">
                        <thead>
                            <tr>
                                <th>Produto</th>
                                <th>Validade</th>
                                <th className="max-md:hidden">Preço</th>
                                <th className="max-md:hidden">Quantidade</th>
                                <th className="max-md:hidden ">
                                    <ProductForm onSave={loadProducts} />
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((p) => (
                                <tr key={p.productId} >
                                    <td className="flex items-center gap-3 text-left px-8">
                                        <div>{setImageId(p)}</div>
                                        <div >
                                            <p className="text-lg">{p.productName}</p>
                                            <p className="font-bold">#{p.productId}</p>
                                        </div>
                                    </td>
                                    <td className="px-10 py-4">{p.expirationDate}</td>
                                    <td className="px-10 max-md:hidden">R${p.price}</td>
                                    <td className="px-10 max-md:hidden">{p.availableQuantity}</td>
                                    <td className="px-10">
                                        <FaEye size={25} onClick={() => openModal(p)} className="cursor-pointer hover:text-blue-200 hover:transisiton duration-300"/>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
            </div>

            <Modal title={selectedProduct?.productName} isOpen={modalOpened} onClose={() => setModalOpened(false)}>
                <div className="modal-info-container">
                    <p className="modal-product-infos">Quantidade disponível: {selectedProduct?.availableQuantity}</p>
                    <p className="modal-product-infos">Data de Validade: {selectedProduct?.expirationDate}</p>
                    <p className="modal-product-infos">Preço da unidade: {selectedProduct?.price}</p>
                    <p className="modal-product-infos">Lote: {selectedProduct?.batch}</p>
                    <p className="modal-product-infos">Marca: {selectedProduct?.productBrand}</p>
                    <p className="modal-product-infos">Fornecedor: {selectedProduct?.supplierName}</p>
                    <p className="modal-product-infos">Perecível?: {selectedProduct?.isPerishable}</p>
                    
                </div>
            </Modal>
        </div>
    );
};
