import { ProductServices } from "@/app/services/ProductServices";
import { Product } from "@/app/types/Product";
import { useEffect, useState } from "react";
import "@/app/pages/productsList/productsList.css";
import { ProductForm } from "../productForm/productForm";
import { GiSodaCan } from "react-icons/gi";
import { RiBeerFill } from "react-icons/ri";
import { BiBowlRice } from "react-icons/bi";
import { BiSolidCoffeeBean } from "react-icons/bi";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { Button } from "@/app/components/btn/button";
import { ExpiredProduct } from "../expiredProducts/expiredProduct";
import { Modal } from "@/app/components/modal/modal";

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
                        <GiSodaCan size={40} />
                    </p>
                );
            case 2:
                return (
                    <p className="icon-categories bg-amber-200">
                        <RiBeerFill size={40} />
                    </p>
                );
            case 3:
                return (
                    <p className="icon-categories bg-amber-50">
                        <BiBowlRice size={40} />
                    </p>
                );
            case 4:
                return (
                    <p className="icon-categories bg-orange-800">
                        <BiSolidCoffeeBean size={40} />
                    </p>
                );
            default:
                return (
                    <p className="icon-categories">
                        <AiOutlineLoading3Quarters />
                    </p>
                );
        }
    };

    const openModal = (product: Product) => {
        setSelectedProduct(product)
        setModalOpened(true)
        console.log(product)
    }


    return (
        <div>
            <p className="text-4xl text-black text-center p-12">Estoque</p>
            <div className="main-productsList">
                

                <div className="products-list-container">
                    <table className="table-products-list">
                        <thead>
                            <tr className="titles-product">
                                <th className="products-th">Produto</th>
                                <th className="products-th">Validade</th>
                                <th className="products-th">Preço</th>
                                <th className="products-th">Quantidade</th>
                                <th className="products-th">
                                    <ProductForm onSave={loadProducts} />
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((p) => (
                                <tr className="tr-products" key={p.productId}>
                                    <th className="products-name">
                                        <div>{setImageId(p)}</div>
                                        <div>
                                            <p>{p.productName}</p>
                                            <p className="product-id">#{p.productId}</p>
                                        </div>
                                    </th>
                                    <th className="products-th">{p.expirationDate}</th>
                                    <th className="products-th">{p.price}</th>
                                    <th className="products-th">{p.availableQuantity}</th>
                                    <th className="products-th">
                                        <Button name="Ver mais" onClick={() => openModal(p)} />
                                    </th>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <Modal title={selectedProduct?.productName} isOpen={modalOpened} onClose={() => setModalOpened(false)}>
                <div className="modal-info-container">
                    <p className="modal-product-infos">Quantidade disponível: {selectedProduct?.availableQuantity}</p>
                    <p className="modal-product-infos">Data de Validade: {selectedProduct?.expirationDate}</p>
                    <p className="modal-product-infos">Preço da unidade: {selectedProduct?.price}</p>
                    <p className="modal-product-infos">Lote: {selectedProduct?.batch}</p>
                    <p className="modal-product-infos">Marca: {selectedProduct?.productBrand}</p>
                    <p className="modal-product-infos">Fornecedor: {selectedProduct?.supplierName}</p>
                </div>
            </Modal>
        </div>
    );
};
