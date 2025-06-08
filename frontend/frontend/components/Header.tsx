"use client";

import Link from "next/link";
import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        BrilhoFácil
      </Link>
      <nav>
        <ul className={styles.menu}>
          <li>
            <Link href="/inicio">Início</Link>
          </li>
          <li>
            <Link href="/produtos">Produtos</Link>
          </li>
          <li>
            <Link href="/carrinho">Carrinho (0)</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
