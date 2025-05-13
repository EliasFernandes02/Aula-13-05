// src/components/ProdutoCard.jsx
import "./ProdutoCard.css";

function ProdutoCard({ props }) {
  return (
    <div className="ProdutoCard">
      <img className="ProdutoImagem" src={props.imagem} alt={props.descricao} />
      <p className="ProdutoCategoria">{props.categoria}</p>
      <p className="ProdutoDescricao">{props.descricao}</p>
      <p className="ProdutoPreco">
        <s>R${props.precoOriginal}</s> <span>R${props.precoAtual}</span>
      </p>
    </div>
  );
}

export default ProdutoCard;
