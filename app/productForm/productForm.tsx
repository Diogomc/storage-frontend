import { Button } from "@/app/components/btn/button";
import { CategoryServices } from "@/app/services/CategoryServices";
import { ProductServices } from "@/app/services/ProductServices";
import { Category } from "@/app/types/Category";
import { useEffect, useState } from "react";
import "@/app/pages/productForm/productForm.css";
import { IoMdAdd } from "react-icons/io";
import { Modal } from "@/app/components/modal/modal";

interface Props {
  onSave?: () => void;
}

export const ProductForm = ({ onSave }: Props) => {
  const [name, setName] = useState("");
  const [batch, setBatch] = useState("");
  const [dateExpire, setExpireDate] = useState("");
  const [brand, setBrand] = useState("");
  const [supplier, setSupplier] = useState("");
  const [purchasePrice, setPurchasePrice] = useState(0);
  const [salePrice, setSalePrice] = useState(0);
  const [quantity, setQuantitity] = useState(0);
  const [isPerishable, setIsPerishable] = useState<boolean>(false);
  const [categoryId, setCategoryId] = useState("");
  const [entryDate, setEntryDate] = useState("")
  const [categories, setCategories] = useState<Category[]>([]);

  const [modalOpened, setModalOpened] = useState<boolean>(false);

  useEffect(() => {
    const loadCategories = async () => {
      const data = await CategoryServices.getAll();
      setCategories(data);
    };
    loadCategories();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await ProductServices.create({
      productId: 0,
      productName: name,
      batch,
      expirationDate: dateExpire,
      productBrand: brand,
      supplierName: supplier,
      categoryId: Number(categoryId),
      availableQuantity: quantity,
      purchasePrice,
      salePrice,
      isPerishable,
      entryDate: entryDate
    });

    setName("");
    setSupplier("");
    setBatch("");
    setBrand("");
    setExpireDate("");
    setCategoryId("");
    setQuantitity(0);
    setPurchasePrice(0);
    setSalePrice(0);
    onSave?.();
  };

  return (
    <div className="main">
      <Button
        icon={IoMdAdd}
        onClick={() => setModalOpened(true)}
        name="Adicionar Produto"
      />
      <Modal
        title="Adicionar Produto"
        isOpen={modalOpened}
        onClose={() => setModalOpened(false)}
      >
        <div>
          <form className="flex flex-col items-center justify-center text-left" onSubmit={handleSubmit}>

            <div className="flex items-center">
              <div className="flex flex-col m-2 max-md:w-48">
                <label className="py-2">Nome</label>
                <input
                  type="text"
                  className="border border-gray-300 rounded-md text-lg outline-0 p-1"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="flex flex-col max-md:w-48">
                <label className="py-2">Marca</label>
                <input type="text"
                  className="border border-gray-300 rounded-md text-lg outline-0 p-1"
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                />
              </div>
            </div>

            <div className="flex items-center">
              <div className="flex flex-col m-2 max-md:w-48">
                <label className="py-2">Fornecedor</label>
                <input
                  type="text"
                  className="border border-gray-300 rounded-md text-lg outline-0 p-1"
                  value={supplier}
                  onChange={(e) => setSupplier(e.target.value)}
                />
              </div>
              <div className="flex flex-col max-md:w-48">
                <label className="py-2">Lote</label>
                <input type="text"
                  className="border border-gray-300 rounded-md text-lg outline-0 p-1"
                  value={batch}
                  onChange={(e) => setBatch(e.target.value)}
                />
              </div>
            </div>

            <div className="flex items-center">
              <div className="flex flex-col m-2 w-56 max-md:w-48">
                <label className="py-2">Data de validade</label>
                <input
                  type="date"
                  className="border border-gray-300 rounded-md text-lg p-1  "
                  value={dateExpire}
                  onChange={(e) => setExpireDate(e.target.value)}
                />
              </div>
              <div className="flex flex-col w-56 max-md:w-48">
                <label className="py-2">Data de Entrada</label>
                <input
                  type="date"
                  className="border border-gray-300 rounded-md text-lg p-1"
                  value={entryDate}
                  onChange={(e) => setEntryDate(e.target.value)}
                />
              </div>
            </div>



            <div className="flex items-center">
              <div className="flex flex-col m-2 max-md:w-48">
                <label className="py-2">Quantidade de entrada</label>
                <input
                  type="number"
                  className="border border-gray-300 rounded-md text-lg p-1"
                  value={quantity}
                  onChange={(e) => setQuantitity(e.target.valueAsNumber)}
                />
              </div>
              <div className="flex items-center mt-10 max-md:w-48">
                <select
                  className="border border-gray-300 rounded-md  p-2 outline-0 "
                  value={categoryId}
                  onChange={(e) => setCategoryId(e.target.value)}
                >
                  <option value="">Selecione uma Categoria:</option>
                  {categories.map((c) => (
                    <option value={c.categoryId} key={c.categoryId}>
                      {c.categoryName}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex flex-col m-2 max-md:w-48">
                <label className="py-2">Preço de Venda</label>
                <input
                  inputMode="decimal"
                  step="any"
                  type="number"
                  className="border border-gray-300 rounded-md text-lg p-1"
                />
              </div>
              <div className="flex flex-col max-md:w-48">
                <label className="py-2">Preço de Compra</label>
                <input type="number"
                  inputMode="decimal"
                  step="any"
                  className="border border-gray-300 rounded-md text-lg p-1"
                />
              </div>
            </div>
            <div className="p-4">
              <label className="px-5">Perecível?</label>
              <input type="checkbox"
                checked={isPerishable}
                onChange={(e) => setIsPerishable(e.target.checked)}
                className="border border-gray-300 rounded-md text-lg p-1 cursor-pointer"
              />
            </div>



            <Button name="Adicionar" type="submit" />
          </form>

        </div>
      </Modal>
    </div>
  );
};
