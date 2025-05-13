import MeusPedidosImagem from "../../assets/MeusPedidosImagem.png"

function Pedidos(props) {
    return(
        <div id="meus-pedidos-itens">
                      <div id="imagem-meus-pedidos">
                        <img src={MeusPedidosImagem} alt="Imagem de um tênis" />
                      </div>
                      <div id="itemNumberEmTransito">
                        <p class = "NumeroPedido">{props.numeroPedidos}</p>
                        <p class = "NomeItem">{props.nomeItem}</p>
                      </div>
                      <div id="itemStatus">
                        <p class={props.styleStatus}>{props.status}</p>
                      </div>
                    </div>
    )
}

export default Pedidos