import { useState, useEffect } from 'react';
import styles from '../styles/App.module.css';

export default function ProductForm({ onSave, selectedProduct }) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  useEffect(() => {
    if (selectedProduct) {
      setName(selectedProduct.name);
      setPrice(selectedProduct.price);
    } else {
      setName('');
      setPrice('');
    }
  }, [selectedProduct]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({
      id: selectedProduct?.id,
      name,
      price: parseFloat(price),
    });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        placeholder="Nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Preço"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />
      <button type="submit">{selectedProduct ? 'Atualizar' : 'Adicionar'}</button>
    </form>
  );
}