import Footer from "../Components/Footer/Footer"
import Header from "../Components/Header/Header"
import ProdutosRel from "../Components/ProdutosRel/ProdutosRel"
import { DetalhesProdutos } from "../Components/DetalhesProdutos/DetalhesProdutos";

import { ProductNavBar } from "../Components/ProductNavBar/ProductNavBar";


function DetalhesProduto() {
    return (
      <>
        <Header/>
        <DetalhesProdutos></DetalhesProdutos>
        <ProdutosRel/>
        <Footer/>
      </>
    )
  }
  
  export default DetalhesProduto