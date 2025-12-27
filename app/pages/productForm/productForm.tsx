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
  const [date, setDate] = useState("");
  const [brand, setBrand] = useState("");
  const [supplier, setSupplier] = useState("");
  const [purchasePrice, setPurchasePrice] = useState(0); // corrigido
  const [salePrice, setSalePrice] = useState(0); // adicionado
  const [quantity, setQuantitity] = useState(0);
  const [isPerishable, setIsPerishable] = useState<boolean>(false);
  const [categoryId, setCategoryId] = useState("");
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
      expirationDate: date,
      productBrand: brand,
      supplierName: supplier,
      categoryId: Number(categoryId),
      availableQuantity: quantity,
      purchasePrice, 
      salePrice,     
      isPerishable,
    });

    setName("");
    setSupplier("");
    setBatch("");
    setBrand("");
    setDate("");
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
          <form className="form-product text-left" onSubmit={handleSubmit}>
            <div>
              <p>Nome:</p>
              <input
                className="input-form"
                type="text"
                placeholder="Nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <p>Fornecedor:</p>
              <input
                type="text"
                className="input-form"
                placeholder="Fornecedor"
                value={supplier}
                onChange={(e) => setSupplier(e.target.value)}
              />
            </div>
            <div>
              <p>Lote:</p>
              <input
                type="text"
                className="input-form"
                placeholder="Lote"
                value={batch}
                onChange={(e) => setBatch(e.target.value)}
              />
              <p>Marca: </p>
              <input
                type="text"
                className="input-form"
                placeholder="Marca"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
              />
            </div>
            <div>
              <p>Quantidade</p>
              <input
                type="number"
                className="input-form"
                placeholder="Quantidade"
                value={quantity}
                onChange={(e) => setQuantitity(e.target.valueAsNumber)}
              />
              <p>Preço de Compra</p>
              <input
                type="number"
                className="input-form"
                placeholder="Preço de Compra"
                inputMode="decimal"
                value={purchasePrice}
                step="any"
                onChange={(e) => setPurchasePrice(e.target.valueAsNumber)}
              />
              <p>Preço de Venda</p>
              <input
                type="number"
                className="input-form"
                placeholder="Preço de Venda"
                inputMode="decimal"
                value={salePrice}
                step="any"
                onChange={(e) => setSalePrice(e.target.valueAsNumber)}
              />
            </div>
            <div className="flex items-center text-center flex-col">
              <p className="expiration-title">Data de Validade: </p>
              <input
                className="input-date"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div>
              <div className="flex items-center text-center flex-col">
                <p className="expiration-title">Perecível? </p>
                <input
                  className="input-date"
                  type="checkbox"
                  checked={isPerishable}
                  onChange={(e) => setIsPerishable(e.target.checked)}
                />
              </div>
            </div>
            <div className="flex items-center">
              <select
                className="category-select"
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
            <Button name="Adicionar" type="submit" />
          </form>
        </div>
      </Modal>
    </div>
  );
};
