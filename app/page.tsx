'use client'
import { Nav } from "./components/nav/nav";
import { Hero } from "./pages/hero/hero";
import { ProductForm } from "./pages/productForm/productForm";
import { ExpiredProduct} from "./pages/expiredProducts/expiredProduct";

export default function Home() {
  return (
    <div>
      <Nav/>
      <Hero/>
      <ExpiredProduct/>
      <ProductForm/>
    </div>
  );
}
