function FinalizarCompra(){
    return(
        <>
            <div className="flex flex-col gap-5 !p-8 w-full  bg-white rounded-md">
                <div className="flex flex-col gap-3">
                    <p className="font-bold">Finalizar Compra</p>
                    <hr className=" border-black h-0.5 " />
                </div> 
                <div className="flex flex-col bg-[rgba(246,170,28,0.14)] !p-6 rounded-md">
                    <div className="flex justify-between">
                         <h1 className="text-2xl font-bold ">Total</h1>
                        <h1 className="text-2xl font-bold text-red-500">R$ 219,00</h1>
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

export default FinalizarCompra