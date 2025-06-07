import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>BrilhoFácil</div>
      <nav>
        <ul className={styles.menu}>
          <li>Início</li>
          <li>Produtos</li>
          <li>Carrinho (0)</li>
        </ul>
      </nav>
    </header>
  );
}
