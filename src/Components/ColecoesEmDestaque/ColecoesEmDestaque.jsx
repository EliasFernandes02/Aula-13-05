import CamisaStar from "../../assets/CamisaStarWar.png"
import Tenis from "../../assets/Teniscolecoes.png"
import HeaderPhone from "../../assets/HeaderPhone.png"
import GroupItens from "../../assets/GroupItens.png"
import "./ColecoesEmDestaque.css"
function ColecoesEmDestaque() {

    return (
      <>
        <h1 id= "colecoes-em-destaque-title">Coleções Em Destaque</h1>
      <section id="colecoes-em-destaque">
        <div className= "divs">
        <p>30% OFF</p>
        <h1>Novo drop Supreme</h1>
        <button>Comprar</button>
        <img  src={CamisaStar} alt="" />
      </div>

      <div className= "divs">
      <p>30% OFF</p>
        <h1>Coleção Adidas</h1>
        <button>Comprar</button>
        <img src={Tenis} alt="" />
      </div>

       <div className="divs">
        <p>30% OFF</p>
        <h1>Novo Beats Bass</h1>
        <button>Comprar</button>
        <img src={HeaderPhone} alt="" /> 
       </div>
      </section>
      

        <div id= "colecoesGroup">
          <h3>Coleções em destaque</h3>
        </div>
        <div id= "LastImg">
          <img src={GroupItens} alt="" />
        </div>
      </>

  
    )
  }
  
  export default ColecoesEmDestaque
  