import styles from '../styles/App.module.css'

export default function ProductList(){
    return(
        <ul className={styles.list}>
            <li>
                <strong>Produto X </strong>: R$ 20.00
                <button>Editar</button> 
                <button>Excluir</button> 
            </li>
        </ul>
    )
}