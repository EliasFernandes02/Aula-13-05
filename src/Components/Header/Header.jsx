import DigitalStoreLogo from "../../assets/DigitalStoreLogo.png"
import ShoppingCart from "../../assets/ShoppingCart.png"
import "./Header.css"

function Header() {
    return (
      <> 
        
        <section id="header">
          <div id="header-img">
            <img src={DigitalStoreLogo} alt="" />
          </div>
          <div id="header-input">
            <input type="text" name="" id="" placeholder="Pesquisar produto..."/>
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
          <div id="header-redirect">
            <div id="header-buttons">
                <a href="">Cadastre-se</a>
                <button>Entrar</button>
            </div>
            <div id="header-shopping-cart">
              <img src={ShoppingCart} alt="" />
            </div>
          </div>
        </section>
        <section id="header-menu">
          <a href="">Home</a>
          <a href="">Produtos</a>
          <a href="">Categorias</a>
          <a href="">Meus Pedidos</a>
  </section>

      </>
    )
  }
  
  export default Header
  