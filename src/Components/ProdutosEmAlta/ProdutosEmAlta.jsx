// src/components/ProdutosEmAlta.jsx
import { useState, useEffect } from "react";
import ProdutoCard from "./ProdutoCard";
import "./ProdutosEmAlta.css";

function ProdutosEmAlta() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/men's shoes")
      .then(res => res.json())
      .then(data => {
        const produtosMapeados = data.map(produto => ({
          id: produto.id,
          imagem: produto.image,
          categoria: "Tênis",
          descricao: produto.title,
          precoOriginal: (produto.price * 2).toFixed(2),
          precoAtual: produto.price.toFixed(2)
        }));
        setProdutos(produtosMapeados);
      })
      .catch(err => {
        console.error("Erro ao carregar produtos:", err);
      });
  }, []);

  return (
    <section id="ProdutosEmAlta">
      <div id="ProdutosEmAltaTop">
        <div id="ProdutosEmAltaTopo">Produtos em alta</div>
        <div id="VerTodos"><a href="#">Ver todos &rarr;</a></div>
      </div>

      <div id="ProdutosEmAltaLista">
        {produtos.map(produto => (
          <ProdutoCard
            key={produto.id}
            imagem={produto.imagem}
            categoria={produto.categoria}
            descricao={produto.descricao}
            precoOriginal={produto.precoOriginal}
            precoAtual={produto.precoAtual}
          />
        ))}
      </div>
    </section>
  );
}

export default ProdutosEmAlta;
