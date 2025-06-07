"use client";
import { useEffect, useState } from "react";
import ProductCard from "../components/CarrinhodeCompras";

type Produto = {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  imagemUrl: string;
};

export default function Home() {
  const [produtos, setProdutos] = useState<Produto[]>([]);

  useEffect(() => {
  fetch("http://localhost:5279/api/produtos")
    .then(res => res.json())
    .then(data => {
      const produtosComImagemUrl = data.map((produto: any) => ({
        ...produto,
        imagemUrl: produto.imagem // renomeando campo
      }));
      setProdutos(produtosComImagemUrl);
    });
}, []);

  return (
    <section>
      <h2 style={{ textAlign: "center" }}>Semijoias em Destaque</h2>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
        gap: "1rem",
        marginTop: "2rem"
      }}>
        {produtos.map((produto) => (
          <ProductCard key={produto.id} produto={produto} />
        ))}
      </div>
    </section>
  )
}
