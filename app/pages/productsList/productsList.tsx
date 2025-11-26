import { ProductServices } from "@/app/services/ProductServices";
import { Product } from "@/app/types/Product"
import { useEffect, useState } from "react"
import "@/app/pages/productsList/productsList.css"
export const ProductsList = () => {

    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const loadProducts = async () => {
            const data = await ProductServices.getAll()
            setProducts(data);
        }
        loadProducts();
    }, [])

    return (
        <div className="p-5">
            <p className="text-4xl text-center mt-20">Todos os produtos cadastrados</p>
                <table className="mt-10">
                    <tr className="titles">
                        <th>Nome do produto:</th>
                        <th>Lote</th>
                        <th>Validade</th>
                        <th>Fornecedor</th>
                        <th>Marca</th>
                    </tr>
                    {products.map((p) => (

                        <tr className="products-table" key={p.productId}>
                            <th>{p.productName}</th>
                            <th>{p.batch}</th>
                            <th>{p.expirationDate}</th>
                            <th>{p.supplierName}</th>
                            <th>{p.productBrand}</th>
                        </tr>
                    
                     ))}
                </table>
        </div>
    
)}