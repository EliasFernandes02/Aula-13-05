import FinalizarCompra from "../Components/FinalizarCompra/FinalizarCompra"
import Footer from "../Components/Footer/Footer"
import FormInfoEntrega from "../Components/FormInfoEntrega/FormInfoEntrega"
import FormInfoPag from "../Components/FormInfoPagamentos/FormInfoPagamentos"
import FormInfoPessoal from "../Components/FormInfoPessoal/FormInfoPessoal"
import Header from "../Components/Header/Header"
import ResumoCompra from "../Components/ResumoCompra/ResumoCompra"

function ConfirmaçãoDeCompra() {
    return (
      <>
         <Header />
        <div className="bg-gray-100 min-h-screen !pb-20">
          <div className=" mx-auto !px-4 md:!px-20 !py-8">
            <h1 className="text-2xl md:text-4xl font-bold !mb-6 md:mb-8">Finalizar compra</h1>           
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="w-full lg:w-2/3 flex flex-col gap-4">
                <FormInfoPessoal />
                <FormInfoEntrega></FormInfoEntrega>
                <FormInfoPag></FormInfoPag>
                <FinalizarCompra />
              </div>              
              <div className="w-full lg:w-1/3">
                <ResumoCompra />
              </div>
            </div>
          </div>
        </div> 
        <Footer></Footer>
      </>
    )
  }

export default ConfirmaçãoDeCompra