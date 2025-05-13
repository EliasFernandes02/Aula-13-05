import "./ProdutosRel.css";
import ShoesBoxRel from "./ShoesBoxRel";
function ProdutosRel() {
  return (
    <>
      <div div id="ProdutosRel">
        <div id="ProdutosRelTitleLine">
          <h2 id="ProdutosRelTitle">Produtos Relacionados</h2>
          <div id="VerTodosLink">
            <a href="#">
              Ver todos
              <svg
                className="seta-icon"
                viewBox="0 0 24 24"
                id="SetaProdutosRel"
              >
                <path
                  d="m18.707 12.707-3 3a1 1 0 0 1-1.414-1.414L15.586 13H6a1 1 0 0 1 0-2h9.586l-1.293-1.293a1 1 0 0 1 1.414-1.414l3 3a1 1 0 0 1 0 1.414z"
                  fill="#c92071"
                />
              </svg>
            </a>
          </div>
        </div>
        <ShoesBoxRel />
      </div>
    </>
  );
}

export default ProdutosRel;
