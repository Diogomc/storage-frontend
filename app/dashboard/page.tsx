"use client"
import { useEffect, useState } from "react";
import { ProductServices } from "../services/ProductServices";
import { Product } from "../types/Product";
import { NavUser } from "../components/nav-user/navUser";
import { Informations } from "./dashboardComponents/informations";



const Dashboard = () => {

    const [products, setProducts] = useState<Product[]>([])

    const loadProducts  = async () =>{
        const data = await ProductServices.getAll();
        setProducts(data);
    }
    useEffect(() => {
        loadProducts()
    }, [])
    return(
        <div>
            <NavUser/>
            <Informations/>
        </div>
    )
}

export default Dashboard;