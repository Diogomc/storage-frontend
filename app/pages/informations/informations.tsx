import { useEffect, useState } from "react"
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { CategoryServices } from "@/app/services/CategoryServices";
import { ProductServices } from "@/app/services/ProductServices";
import { Category } from "@/app/types/Category";
import { Product } from "@/app/types/Product";

export const Informations = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [allProducts, setAllProducts] = useState<number>();
    const [totalValue, setTotalValue] = useState<number>();
    const [categories, setCategories] = useState<Category[]>([]);
    const [gross, setGross] = useState<number>();
    const [profitMargin, setProfitMargin] = useState<number>();
    const [chartData, setChartData] = useState<{ name: string; quantity: number }[]>([]);

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
            <div className="flex justify-between items-center mt-8 m-20 mb-0 p-10 max-md:flex-col max-md:m-0">
                <div className="max-md:p-8 max-md:text-center ">
                    <h1 className="text-4xl font-bold text-(--main-color)">Dashboard</h1>
                    <h2>Gerencie seu estoque</h2>
                </div>
            </div>

            <div className="bg-white flex justify-around h-44 mt-0 m-20 max-sm:flex-col border border-gray-100 rounded-md shadow-lg/20
            max-md:m-0 max-md:p-2 max-md:h-full text-center">
                <div className="w-full flex justify-center items-center border-r border-gray-300 my-2 border-dashed max-md:w-full max-md:m-0">
                    <div>
                        <p className="text-lg">Valor Bruto em Depósito</p>
                        <p className="font-bold text-3xl text-(--main-color)">{brlFormat(gross)}</p>
                    </div>
                </div>
                <div className="w-full flex justify-center items-center border-r border-gray-300 my-2 border-dashed max-md:w-full max-md:m-0">
                    <div>
                        <p className="text-lg">Valor Total Para Venda</p>
                        <p className="font-bold text-3xl text-(--main-color)">{brlFormat(totalValue)}</p>
                    </div>
                </div>
                <div className="w-full flex justify-center items-center border-r border-gray-300 my-2 border-dashed max-md:w-full max-md:m-0">
                    <div>
                        <p className="text-lg">Margem de lucro</p>
                        <p className="font-bold text-3xl text-(--main-color)">{brlFormat(profitMargin)}</p>
                    </div>
                </div>
                <div className="w-full flex justify-center items-center my-2 max-md:w-full max-md:m-0">
                    <div>
                        <p className="text-lg">Produtos em Estoque</p>
                        <p className="font-bold text-3xl text-(--main-color)">{allProducts}</p>
                    </div>
                </div>
            </div>


            <div className="flex justify-center h-[400px] gap-8 max-md:flex-col
            max-md:h-full">

                <div className="bg-white border-gray-100 shadow-lg/20 flex flex-col justify-center rounded-md p-10 w-[1330px]
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
                <div className="bg-white border border-gray-100 shadow-lg/20 flex flex-col rounded-md w-96
                max-md:w-full">
                    <p className="text-(--main-color) text-left text-xl m-8">Principais fornecedores</p>
                    <div>
                        {products.map((p) => (
                            <ul className="flex items-center border-b border-gray-200 justify-around text-left" key={p.productId}>
                                <li className="mx-3 text-lg  p-2">{p.supplierName}</li>
                                <li>Produtos: {p.availableQuantity}</li>
                            </ul>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
