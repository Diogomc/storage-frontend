import { CategoryServices } from "@/app/services/CategoryServices";
import { ProductServices } from "@/app/services/ProductServices";
import { Category } from "@/app/types/Category";
import { Product } from "@/app/types/Product"
import { useEffect, useState } from "react"
import { FaBox } from "react-icons/fa";
import { TbCashRegister } from "react-icons/tb";
import { MdCategory } from "react-icons/md";
import { RiProductHuntLine } from "react-icons/ri";
import { Chart } from "react-google-charts";
import { ProductForm } from "../productForm/productForm";
import { CategoryForm } from "../categoryForm/categoryForm";
import { CategoriesList } from "../categoriesList/categoriesList";

export const Informations = () => {

    const [products, setProducts] = useState<Product[]>([]);
    const [allProducts, setAllProducts] = useState<number>();
    const [totalValue, setTotalValue] = useState<number>();
    const [categories, setCategories] = useState<Category[]>([])
    const [gross, setGross] = useState<number>();
    const [profitMargin, setProfitMargin] = useState<number>();


    const loadAllProducts = async () => {
        const data = await ProductServices.getTotalQuantity();
        setAllProducts(data);
    }
    const loadProducts = async () => {
        const data = await ProductServices.getAll()
        setProducts(data);

    }
    const loadCategories = async () => {
        const data = await CategoryServices.getAll();
        setCategories(data)
    }
    const loadTotalValue = async () => {
        const data = await ProductServices.getTotalValue();
        setTotalValue(data);
    }
    const loadGrossValue = async () => {
        const data = await ProductServices.getTotalGrossValue();
        setGross(data);
    }
    const loadProfitMargin = async () => {
        const data = await ProductServices.getProfitMargin();
        setProfitMargin(data);
    }

    const brlFormat = (valor?: number) => {
        if (valor === undefined) return "R$0,00"
        return new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(valor);
    }


    useEffect(() => {
        loadCategories();
        loadGrossValue();
        loadProducts();
        loadAllProducts();
        loadProfitMargin();
        loadTotalValue();
    }, [])

    const chartData = [
        ["Categoria", "Quantidade de Produtos"],
        ...categories.map((c) => [
            c.categoryName,
            products.filter((p) => p.categoryId === c.categoryId).length
        ]),
    ]
    const chartOptions = {
        title: "Quantidade de Produtos",
        titleTextStyle: {
            color: '#000',
            fontSize: 18,
            bold: true,
        },
        hAxis: {
            textStyle: {
                color: "#000",
                bold: true
            }
        },
        vAxis: {
            textStyle: {
                color: "#000",
                bold: true
            }
        },
        legend: { textStyle: { color: "#000" } },
        backgroundColor: "#fff",
        borderRadius: "20px",
        Title: { color: "#fff" }
    };

    return (
        <div>
            <div className="flex justify-between items-center mt-8 m-20 mb-0 p-10 max-md:flex-col max-md:m-0">
                <div className="max-md:p-8 max-md:text-center ">
                    <h1 className="text-4xl font-bold">Dashboard</h1>
                    <h2>Gerencie seu estoque</h2>
                </div>
                <div className="flex">
                    <ProductForm />
                    <CategoryForm />
                    <CategoriesList />
                </div>
            </div>


            <div className="flex justify-center mt-0 m-20 max-sm:flex-col max-md:m-0 max-md:p-2  gap-2">
                <div className="shadow-lg/20 w-120 flex justify-around items-center h-40 rounded-md max-md:w-full max-md:m-0 ">
                    <div>
                        <p className="text-lg text-gray-400">Valor Bruto</p>
                        <p className="font-bold text-xl">{brlFormat(gross)}</p>
                    </div>
                    <p><FaBox color="#946d46" size={40} className="icon-card" /></p>
                </div>
                <div className="shadow-lg/20 w-120 flex justify-around items-center h-40 rounded-md
                 max-md:w-full max-md:m-0">
                    <div>
                        <p className="text-lg text-gray-400">Valor Total Para venda</p>
                        <p className="font-bold text-xl">{brlFormat(totalValue)}</p>
                    </div>
                    <p><MdCategory size={40} color="green" className="icon-card" /></p>
                </div>
                <div className="shadow-lg/20 w-120 flex justify-around items-center h-40 rounded-md max-md:w-full max-md:m-0 ">
                    <div>
                        <p className="text-lg text-gray-400">Margem de lucro</p>
                        <p className="font-bold text-xl">{brlFormat(profitMargin)}</p>
                    </div>
                    <TbCashRegister size={40} color="blue" className="icon-card" />

                </div>
                <div className="shadow-lg/20 w-120 flex justify-around items-center h-40 rounded-md max-md:w-full max-md:m-0 ">
                    <div>
                        <p className="text-lg text-gray-400">Produtos em Estoque</p>
                        <p className="font-bold text-xl">{allProducts}</p>
                    </div>
                    <RiProductHuntLine size={40} color="red" className="icon-card" />

                </div>

            </div>
            <div className="flex m-20 max-md:flex-col max-md:w-full max-md:m-0 max-md:p-2">
                <div className="shadow-xl/20 m-2 rounded-md w-full max-md:m-0">
                    <Chart
                        chartType="ColumnChart"
                        data={chartData}
                        height={350}
                        options={chartOptions}
                    />
                </div>
                <div className="shadow-xl/20 m-2 rounded-md w-full max-md:m-0 max-md:mt-1">
                    <Chart
                        chartType="PieChart"
                        data={chartData}
                        height={350}
                        options={chartOptions}

                    />
                </div>
            </div>
        </div>
    )
}
