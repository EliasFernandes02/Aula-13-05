import Sneaker from "../../assets/Sneaker.png"
import "./OfertaEspecial.css"

function OfertaEspecial() {
    return (
      <>
      <section id="OfertaEspecial">
      <div id="Imagem">
         <img src={Sneaker} alt="" />
      </div>
      
      <div id="TextOferta">
        <div id="titulo">
          Oferta Especial
         </div>
         <div id= "destaque">
         <h1>Air Jordan edição de colecionador</h1>
         </div>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Consectetur atque voluptas, amet nulla ut necessitatibus nam provident qui enim mollitia corrupti! 
          Sint tempore expedita quas doloribus ab. Similique, provident debitis!</p>
         <button>Ver Oferta</button>
      </div>
      </section>

      </>
    )
  }
  
  export default OfertaEspecial
  