import { useState, useEffect } from 'react';
import './styles/App.module.css';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';
import {
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct,
} from './services/api';

export default function App() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const loadProducts = async () => {
    const data = await getProducts();
    setProducts(data);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const handleSave = async (product) => {
    if (product.id) {
      await updateProduct(product);
    } else {
      await addProduct(product);
    }
    setSelectedProduct(null);
    loadProducts();
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Tem certeza que deseja deletar este produto?");
    if (!confirmDelete) return;
    await deleteProduct(id);
    loadProducts();
  };

  return (
    <div className="App">
      <h1>Gerenciador de Produtos</h1>
      <ProductForm onSave={handleSave} selectedProduct={selectedProduct} />
      <ProductList products={products} onDelete={handleDelete} onEdit={setSelectedProduct} />
    </div>
  );
}
