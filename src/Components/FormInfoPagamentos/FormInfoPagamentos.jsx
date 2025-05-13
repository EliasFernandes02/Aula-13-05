import  Input from "../Input/Input"
function FormInfoPag(){
    return(
        <>     
            <div className="flex flex-col gap-2 !p-8 w-full bg-white rounded-md">
                <div className="flex flex-col gap-3">
                    <p className="font-bold">Informações de pagamento</p>
                    <hr className=" border-black h-0.5 " />
                </div>
                <div className="flex flex-col gap-1">
                    <Input         
                    placeholder="Insira o nome do cartão"
                    label="Nome do cartão*"
                    type="text"
                    ></Input> 
                </div>
                <div className="flex flex-col gap-4 md:flex-row">
                    <div className="flex flex-col gap-1 w-full">
                        <Input         
                        placeholder="Insira o Numero do cartão"
                        label="Numero do cartão*"
                        type="text"
                        ></Input>                      
                    </div>
                    <div className="flex flex-col gap-1 w-full">
                        <Input         
                        placeholder="Insira a data de validade"
                        label="Data de validade*"
                        type="text"
                        ></Input> 
                    </div>
                </div>
                <div className="flex flex-col gap-1">
                    <Input         
                    placeholder="CVV*"
                    label="CVV*"
                    type="text"
                    ></Input> 
                    
                </div>
                
                
            </div>
            
        </>
    )
}

export default FormInfoPag