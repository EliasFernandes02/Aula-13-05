
import Logo from "../../assets/Logo.png"
import SocialNetwork from "../../assets/SocialNetwork.png"
import Rectangle from "../../assets/Rectangle.png"
import Secure from "../../assets/Secure.png"

import "./Footer.css"

function Footer() {

  return (
    <>
      <section>
        <div id="container-footer">
          <div id="primary-section">
            <div id="logo">
              <img src={Logo} alt="Logo da digital college" />
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
            <div id="social-network">
              <img src={SocialNetwork} alt="Três icones um ao lado do outro facebook, instagram e twitter" />
            </div>
          </div>
          <div>
            <div id="sections">
              <h6>Informação</h6>
              <li>
                <ul>Sobre Drip Store</ul>
                <ul>Segurança</ul>
                <ul>Whishlist</ul>
                <ul>Blog</ul>
                <ul>Trabalhe conosco</ul>
                <ul>Meus Pedidos</ul>
              </li>
            </div>
          </div>
          <div id="sections">
            <h6>Categorias</h6>
            <li>
              <ul>Camisetas</ul>
              <ul>Caças</ul>
              <ul>Bonés</ul>
              <ul>Headphones</ul>
              <ul>Tênis</ul>
            </li>
          </div>
          <div id="sections">
            <h6>Contato</h6>
            <div id="adress">
              <li>
                <ul>Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161</ul>
                <ul>(85) 3051-3411</ul>
              </li>
            </div>
          </div>
          <div id="secure">
            <img src={Rectangle} alt="Imagem de uma linha de separação" />
            <img src={Secure} alt="Icone de direitos autorais digital college" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Footer
