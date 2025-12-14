'use client'
import { Nav } from "./components/nav/nav";
import { ExpiredProduct } from "./pages/expiredProducts/expiredProduct";
import { ProductsList } from "./pages/productsList/productsList";
import { Informations } from "./pages/informations/informations";

export default function Home() {
  return (
    <div>
      <Nav />
      <Informations/>
      <ExpiredProduct/>
      <ProductsList/>
    </div>
  );
}
