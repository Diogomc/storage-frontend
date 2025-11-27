'use client'
import { Nav } from "./components/nav/nav";
import { Hero } from "./pages/hero/hero";
import { ExpiredProduct } from "./pages/expiredProducts/expiredProduct";
import { ProductsList } from "./pages/productsList/productsList";
import { CategoryForm } from "./pages/categoryForm/categoryForm";

export default function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      <ExpiredProduct />
      <ProductsList />
      <CategoryForm />

    </div>
  );
}
