import Carousel from "../Components/Carousel/Carousel"
import ColecoesEmDestaque from "../Components/ColecoesEmDestaque/ColecoesEmDestaque"
import Footer from "../Components/Footer/Footer"
import Header from "../Components/Header/Header"
import OfertaEspecial from "../Components/OfertaEspecial/OfertaEspecial"
import ProdutosEmAlta from "../Components/ProdutosEmAlta/ProdutosEmAlta"
import 'bootstrap/dist/css/bootstrap.min.css';


function HomePage() {
    return (
      <>
        <Header/>
        <Carousel/>
        <ColecoesEmDestaque/>
        <ProdutosEmAlta/>
        <OfertaEspecial/>
        <Footer/>
      </>
    )
  }
  
  export default HomePage