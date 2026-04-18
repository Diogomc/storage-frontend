import { ProductServices } from "@/app/services/ProductServices";
import { Product } from "@/app/types/Product";
import { useEffect, useState } from "react";
import { LittleCard } from "@/app/components/cards/littleCard";
import { Button } from "@/app/components/btn/button";
import { TbTrash } from "react-icons/tb";
import { ExpiredProduct } from "./expiredProduct";

export const ProductsDashboard = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [modalOpened, setModalOpened] = useState<boolean>(false);

    const [productsNearToExpire, setProductsNearToExpire] = useState<Product[]>([]);
    const [totalQuantity, setTotalQuantity] = useState<number>(0)
    const [expiredProduct, setExpiredProduct] = useState<Product[]>([])
    const loadProducts = async () => {
        const data = await ProductServices.getAll();
        setProducts(data);
    };
    const expiredProducts = async () => {
        const data = await ProductServices.getExpiredProducts();
        setExpiredProduct(data);
    }
    const nearToExpire = async () => {
        const data = await ProductServices.getCloseToExpiration();
        setProductsNearToExpire(data);
    }
    const getTotalQuantity = async () => {
        const data = await ProductServices.getTotalQuantity();
        setTotalQuantity(data);
    }

    useEffect(() => {
        loadProducts();
        nearToExpire();
        expiredProducts();
        getTotalQuantity();
    }, []);



    return (
        <div>
            <div className="bg-white p-6 items-center flex justify-around mx-20 mb-10 border border-gray-100 rounded-md
            max-md:p-2 max-md:h-full text-center max-md:bg-background max-md:border-none gap-10 max-md:flex-col max-md:gap-2 max-md:m-2 ">
                <LittleCard title="Produtos em Estoque" value={totalQuantity}>{products.filter(p => p.supplierName).length} Fornecedores</LittleCard>
                <LittleCard title="Produtos Próximos ao Vencimento" value={productsNearToExpire.length} />
                <LittleCard title="Produtos Vencidos" value={expiredProduct.length} />
            </div>
            <ExpiredProduct />

            <div className="flex gap-3
            max-md:flex-col">
                <div className="mx-20 p-6 bg-white border border-gray-100 rounded-md w-full
                max-md:ml-0">
                    <div className="flex items-center justify-between py-2">
                        <h2 className="text-2xl">Produtos</h2>
                        <Button name="Adicionar Produto" onClick={() => setModalOpened(true)} />
                    </div>


                    {products.map((p) => (
                        <ul key={p.productId} className="flex border-b border-gray-200 justify-between p-2 items-center">
                            <li>
                                <p>{p.productName}</p>
                                <p className="text-gray-500">#{p.productId}</p>
                            </li>
                            <li>{p.availableQuantity}</li>
                        </ul>
                    ))}
                </div>
            </div>
        </div>
    );
};
