import { CategoryServices } from "@/app/services/CategoryServices";
import { ProductServices } from "@/app/services/ProductServices";
import { Category } from "@/app/types/Category";
import { Product } from "@/app/types/Product"
import { useEffect, useState } from "react"
import "@/app/pages/informations/informations.css"
import { FaBox } from "react-icons/fa";
import { TbCashRegister } from "react-icons/tb";
import { MdCategory } from "react-icons/md";
import { FaTruck } from "react-icons/fa";
import { GrUserWorker } from "react-icons/gr";
import { RiProductHuntLine } from "react-icons/ri";
import { Chart } from "react-google-charts";

export const Informations = () => {

    const [products, setProducts] = useState<Product[]>([]);
    const [allProducts, setAllProducts] = useState<number>();
    const [totalValue, setTotalValue] = useState<number>();
    const [categories, setCategories] = useState<Category[]>([])
    const [loading, setLoading] = useState(true)

    const loadProducts = async () => {
        try {
            const data = await ProductServices.getAll();
            setProducts(data);
        } catch (error) {
            console.error("Erro ao carregar produtos", error)
        } finally {
            setLoading(false)
        }
    }
    const loadAllProducts = async () => {
        const data = await ProductServices.getAllProducts();
        setAllProducts(data);
    }
    const loadCategories = async () => {
        const data = await CategoryServices.getAll();
        setCategories(data)
    }
    const loadTotalValue = async () => {
        const data = await ProductServices.getTotalValue();
        setTotalValue(data);
    }

    useEffect(() => {
        loadProducts();
        loadCategories();
        loadAllProducts();
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
        legend: { position: "none" },
        backgroundColor: "#fff",
        color: "#fff",
    };
    
    return (
        <div className="information-container">
            <div className="flex justify-center pt-6">
                <div className="card">
                    <div>
                        <p>Variedades de Produtos</p>
                        {loading ? <p>Carregando...</p> : <p className="number-info">{products.length}</p>}
                    </div>
                    <p><FaBox color="#946d46" size={40} className="icon-card" /></p>
                </div>
                <div className="card">
                    <div>
                        <p>Diferentes Categorias</p>
                        <p className="number-info">{categories.length}</p>
                    </div>
                    <p><MdCategory size={40} color="green" className="icon-card" /></p>
                </div>
                <div className="card">
                    <div>
                        <p>Valor em Estoque</p>
                        <p className="number-info">R$ {totalValue}</p>
                    </div>
                    <TbCashRegister size={40} color="blue" className="icon-card" />

                </div>
                <div className="card">
                    <div>
                        <p>Produtos em Estoque</p>
                        <p className="number-info">{allProducts}</p>
                    </div>
                    <RiProductHuntLine size={40} color="red" className="icon-card" />

                </div>

            </div>
            <div className="charts">
                <div className="column-chart">
                    <Chart
                        chartType="BarChart"
                        width="1330px"
                        height="400px"
                        data={chartData}
                        options={chartOptions}
                    />
                </div>
                <div className="pie-chart">
                    <Chart
                        chartType="PieChart"
                        width="400px"
                        height="400px"
                        data={chartData}
                        options={chartOptions}

                    />
                </div>
            </div>
        </div>
    )
}
