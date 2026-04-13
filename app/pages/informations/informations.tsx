import { useEffect, useState } from "react"
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { CategoryServices } from "@/app/services/CategoryServices";
import { ProductServices } from "@/app/services/ProductServices";
import { Category } from "@/app/types/Category";
import { Product } from "@/app/types/Product";
import { LiaIndustrySolid } from "react-icons/lia";

export const Informations = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [allProducts, setAllProducts] = useState<number>();
    const [totalValue, setTotalValue] = useState<number>();
    const [categories, setCategories] = useState<Category[]>([]);
    const [gross, setGross] = useState<number>();
    const [profitMargin, setProfitMargin] = useState<number>();
    const [chartData, setChartData] = useState<{ name: string; quantity: number }[]>([]);

    const today = () => {
        const date = new Date();

        return date.toLocaleDateString('pt-BR', { year: "numeric", month: "short", day: "numeric" })
    }

    const loadAllProducts = async () => {
        const data = await ProductServices.getTotalQuantity();
        setAllProducts(data);
    };

    const loadProducts = async () => {
        const data = await ProductServices.getAll();
        setProducts(data);
    };

    const loadCategories = async () => {
        const data = await CategoryServices.getAll();
        setCategories(data);
    };

    const loadTotalValue = async () => {
        const data = await ProductServices.getTotalValue();
        setTotalValue(data);
    };

    const loadGrossValue = async () => {
        const data = await ProductServices.getTotalGrossValue();
        setGross(data);
    };

    const loadProfitMargin = async () => {
        const data = await ProductServices.getProfitMargin();
        setProfitMargin(data);
    };

    const brlFormat = (valor?: number) => {
        if (valor === undefined) return "R$0,00";
        return new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(valor);
    };

    useEffect(() => {
        const loadData = async () => {
            const productsData = await ProductServices.getAll();
            const categoriesData = await CategoryServices.getAll();

            setProducts(productsData);
            setCategories(categoriesData);

            const formatted = categoriesData.map((cat) => {
                const productsInCategory = productsData.filter((p) => p.categoryId === cat.categoryId);
                const calc = productsInCategory.reduce((acc, p) => acc + (p.availableQuantity ?? 0), 0)
                return {
                    name: cat.categoryName,
                    quantity: calc,
                };
            });

            setChartData(formatted);
        };

        loadCategories();
        loadGrossValue();
        loadProducts();
        loadAllProducts();
        loadProfitMargin();
        loadTotalValue();
        loadData();
    }, []);

    return (
        <div>
            <div className="m-8 ml-40
             max-md:text-center max-md:m-0 max-md:ml-0 max-md:p-9">
                <h1 className="text-(--main-color) text-4xl font-bold
                ">Dashboard</h1>
            </div>


            <div className="bg-white flex justify-around h-44 mx-20 my-10 border border-gray-100 rounded-md
            max-md:m-0 max-md:p-2 max-md:h-full text-center max-md:bg-background max-md:border-none gap-2">


                <div className="w-full flex justify-center items-center border-r border-gray-300 my-2 border-dashed 
                max-md:w-full max-md:m-0 max-md:border-gray-200 max-md:border max-md:border-double max-md:rounded-md">
                    <div>
                        <p className="max-md:text-sm">Valor Investido</p>
                        <p className="font-bold text-3xl text-(--main-color) max-md:text-lg">{brlFormat(gross)}</p>
                        <p className="text-gray-500 text-sm max-md:text-xs">{today()}</p>
                    </div>
                </div>
                <div className="w-full flex justify-center items-center border-r border-gray-300 my-2 border-dashed max-md:w-full 
                max-md:m-0 max-md:border-gray-200 max-md:border max-md:border-double max-md:rounded-md">
                    <div>
                        <p className="max-md:text-sm">Valor Total Para Venda</p>
                        <p className="font-bold text-3xl text-(--main-color) max-md:text-lg">{brlFormat(totalValue)}</p>
                        <p className="text-gray-500 text-sm max-md:text-xs">Margem de lucro de {brlFormat(profitMargin)}</p>
                    </div>
                </div>
                <div className="w-full flex justify-center items-center my-2 max-md:w-full 
                max-md:m-0 max-md:border-gray-200 max-md:border max-md:border-double max-md:rounded-md" >
                    <div>
                        <p className="max-md:text-sm">Produtos em Estoque</p>
                        <p className="font-bold text-3xl text-(--main-color) max-md:text-lg">{allProducts}</p>
                        <p className="text-gray-500 text-sm max-md:text-xs">{products.map((p) => p.supplierName).length} Fornecedores</p>
                    </div>
                </div>
            </div>


            <div className="flex justify-center h-[400px] gap-8 max-md:flex-col
            max-md:h-full">

                <div className="bg-white border border-gray-100 flex flex-col justify-center rounded-md p-10 w-[1330px]
                max-md:w-full h-[400px]">
                    <p className="text-left pb-8 text-(--main-color)">Quantidade de produtos por categoria</p>

                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={chartData}>
                            <CartesianGrid stroke="#f5f5f5" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />

                            <Line type="monotoneY" dataKey="quantity" stroke="#7132CA" />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
                <div className="bg-white border border-gray-100 flex flex-col rounded-md w-96
                max-md:w-full">
                    <p className="text-(--main-color) text-left text-xl m-8">Principais fornecedores</p>
                    <div>
                        {products.map((p) => (
                            <ul className="flex items-center border-b border-gray-100 justify-between text-left p-4" key={p.productId}>
                                <li className="bg-(--main-color) rounded-md"><LiaIndustrySolid size={30} color="white"/></li>
                                <li className="mx-3 text-lg  p-2">{p.supplierName}</li>
                                <li>{p.availableQuantity} Produtos</li>
                            </ul>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
