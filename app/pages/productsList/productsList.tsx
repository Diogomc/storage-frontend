import { ProductServices } from "@/app/services/ProductServices";
import { Product } from "@/app/types/Product"
import { useEffect, useState } from "react"
import "@/app/pages/productsList/productsList.css"
import { ProductForm } from "../productForm/productForm";
export const ProductsList = () => {

    const [products, setProducts] = useState<Product[]>([]);

    const loadProducts = async () => {
        const data = await ProductServices.getAll();
        setProducts(data);
    };

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        loadProducts()
    }, [])

    return (
        <div className="p-5">
            <ProductForm onSave={loadProducts}/>
            <p className="text-4xl text-center mt-20">Todos os produtos cadastrados</p>
            <table className="mt-10">
                <thead>
                    <tr className="titles">
                        <th>Nome do produto:</th>
                        <th>Lote</th>
                        <th>Validade</th>
                        <th>Fornecedor</th>
                        <th>Marca</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((p) => (

                        <tr className="products-table" key={p.productId}>
                            <th>{p.productName}</th>
                            <th>{p.batch}</th>
                            <th>{p.expirationDate}</th>
                            <th>{p.supplierName}</th>
                            <th>{p.productBrand}</th>
                        </tr>

                    ))}
                </tbody>
            </table>
        </div>

    )
}