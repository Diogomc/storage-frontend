'use client'
import { Nav } from "./components/nav/nav";
import { Hero } from "./pages/hero/hero";
import { ProductForm } from "./pages/productForm/productForm";
import { ProductsList } from "./pages/productsList/productsList";

export default function Home() {
  return (
    <div>
      <Nav/>
      <Hero/>
      <ProductsList/>
      <ProductForm/>
    </div>
  );
}
