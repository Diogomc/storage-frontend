"use client"
import { NavUser } from "../components/nav-user/navUser";
import { ExpiredProduct } from "../pages/expiredProducts/expiredProduct";
import { Informations } from "../pages/informations/informations";
import { ProductsList } from "../pages/productsList/productsList"

const Dashboard = () => {
    return(
        <div>
            <NavUser/>
            <Informations/>
            <ExpiredProduct/>
        </div>
    )
}

export default Dashboard;