"use client"
import { NavUser } from "../components/nav-user/navUser";
import { Footer } from "../components/footer";
import Link from "next/link";
import { ProductsSearch } from "../components/productsSearch/productsSearch";
import { ProductsDashboard } from "./productsComponents/productsDashboard";

const Products = () => {

    return (
        <div>
            <NavUser />
            <div className="mx-25 my-10">
                <h2 className="text-3xl text-main-color font-bold">Produtos</h2>
                <ul className="flex p-px">
                    <li><Link href={"/"}>Home/</Link></li>
                    <li className="text-main-color"><Link href={"/dashboard"}> Dashboard/ </Link></li>
                    <li className="text-main-color"><Link href={"/Products"}>Produtos</Link></li>
                </ul>
            </div>
            <ProductsDashboard />
            <ProductsSearch/>
            <Footer />

        </div>
    )
}


export default Products;