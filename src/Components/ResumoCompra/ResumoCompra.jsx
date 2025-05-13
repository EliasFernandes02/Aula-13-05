import tenis from "../../assets/TenisExemplo.png"

function ResumoCompra(){
    return(
        <>
            <div className="flex flex-col bg-white w-full  mt-8 md:mt-0 !p-4 gap-2 rounded-md  ">
                <h1 className="font-bold text-2xl text-[#474747]">RESUMO</h1>
                <div className="flex flex-col gap-2 ">
                    <hr className="text-[#CCCCCC]"/>
                    <div className="flex gap-4">
                        <img className="h-14 rounded-md" src={tenis} alt="" />
                        <p>Tênis Nike Revolution 6 Next Nature Masculino</p>
                    </div>                   
                    <hr  className="text-[#CCCCCC]"/>
                </div>
                <div className="flex flex-col !gap-2">
                    <div className="flex justify-between ">
                        <p className="text-[#8f8f8f]">Subtotal:</p>
                        <p>R$ 219,00</p>
                    </div>
                    <div className="flex justify-between ">
                        <p className="text-[#8f8f8f]">Frete:</p>
                        <p>R$ 0,00</p>
                    </div>
                    <div className="flex justify-between ">
                        <p className="text-[#8f8f8f]">Desconto:</p>
                        <p>R$ 30,00</p>
                    </div>
                </div>
                <div className="flex flex-col bg-[rgba(246,170,28,0.14)] !px-6 !py-2 rounded-md">
                    <div className="flex justify-between">
                         <h1 className="text-2xl font-bold">Total</h1>
                        <h1 className="text-2xl font-bold">R$ 219,00</h1>
                    </div>
                   <div className=" flex justify-end">
                        <p className="text-[#8f8f8f] ">ou 10x de R$ 21,00 sem juros</p>
                    </div>
                </div> 
                <button className="bg-[#f6aa1c] w-full cursor-pointer rounded-md h-13 text-white hover:bg-[#c92071] transition-colors delay-0 duration-500">Realizar Pagamento</button>               
            </div>
        </>
    )
}

export default ResumoCompra