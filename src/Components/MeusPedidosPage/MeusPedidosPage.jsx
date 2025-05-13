import "./MeusPedidosPage.css"
import Pedidos from "../Pedidos/Pedidos"
import MeusPedidosImagem from "../../assets/MeusPedidosImagem.png"


function MeusPedidosPage() {

  return (
    <>
           <section id="section-meus-pedidos">
            <div id="meus-pedidos">
            <div id="meus-pedidos-titulo">
                <p class = "MeusPedidosTittle">Meus Pedidos <span class = "MeuStatus">STATUS</span></p> 
            </div>
            <hr class = "linhaMeusPedidos"></hr>           
            <Pedidos 
              numeroPedidos="27021985"
              nomeItem="Tênis"
              status="Produto em Trânsito"
              styleStatus="StatusEmTransito"
            />
            <hr class = "linhaMeusPedidos"></hr>
            <Pedidos 
              numeroPedidos="2702101041993985"
              nomeItem="Tênis Adidas Preto"
              status="Finalizado"
              styleStatus="StatusFinalizado"
            />
            <hr class = "linhaMeusPedidos"></hr>
            <Pedidos 
              numeroPedidos="22091988"
              nomeItem="Tênis Adidas Branco"
              status="Cancelado"
              styleStatus="StatusCancelado"
            />
            <hr class = "linhaMeusPedidos"></hr>
            <Pedidos 
              numeroPedidos="8764827482742"
              nomeItem="Tênis Adidas Verde"
              status="Finalizado"
              styleStatus="StatusFinalizado"
            />
            <hr class = "linhaMeusPedidos"></hr>
            <Pedidos 
              numeroPedidos="87482748724"
              nomeItem="Tênis Adidas Rosa"
              status="Finalizado"
              styleStatus="StatusFinalizado"
            />
          </div>
         </section>

    </>
  )
}

export default MeusPedidosPage