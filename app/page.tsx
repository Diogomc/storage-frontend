'use client'
import { Nav } from "./components/nav/nav";
import { ExpiredProduct } from "./pages/expiredProducts/expiredProduct";
import { ProductsList } from "./pages/productsList/productsList";
import { CategoryForm } from "./pages/categoryForm/categoryForm";
import { CategoriesList } from "./pages/categoriesList/categoriesList";
import { Informations } from "./pages/informations/informations";

export default function Home() {
  return (
    <div>
      <Nav />
      <Informations />
      <ExpiredProduct/>
      <ProductsList />
      <CategoriesList />
      <CategoryForm />

    </div>
  );
}
