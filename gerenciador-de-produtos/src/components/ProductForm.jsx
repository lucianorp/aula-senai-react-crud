import { useState } from "react"


export default function ProductForm({selectedProduct}){
    
    const [name,setName] = useState('')

    const [price,setPrice] = useState('')

    const handleSubmit = (e)=>{
        e.preventDefault()
    }

    return(
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            placeholder="Nome do Produto"
            value={name}
            onChange={(e)=> setName(e.target.value)}
            required
            />
            <input
            type="number"
            placeholder="Preço"
            value={price}
            onChange={(e)=> setPrice(e.target.value)}
            required
            />
            <button type="submit">
                {selectedProduct ? 'Atualizar' : 'Adicionar'}
            </button>
        </form>
    )
}