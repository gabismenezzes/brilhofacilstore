import styles from "../styles/CarrinhodeCompras.module.css";

type Produto = {
    id: number;
    nome: string;
    preco: number;
    imagemUrl: string;
}

export default function CarrinhodeCompras ({produto}: {produto: Produto}) {
    return (
        <div className={styles.card}>
        <img src={produto.imagemUrl} alt={produto.nome} className={styles.image} />
        <h2>{produto.nome}</h2>
        <p>R$ {produto.preco.toFixed(2)}</p>
        <button className={styles.button}>Adicionar ao carrinho</button>
    </div>
    )
}