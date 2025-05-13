import  Input from "../Input/Input"
function FormInfoEntrega(){
    return(
        <>     
            <div className="flex flex-col gap-2 !p-8 w-full bg-white rounded-md">
                <div className="flex flex-col gap-3">
                    <p className="font-bold">Informações de entrega</p>
                    <hr className=" border-black h-0.5 " />
                </div>
                <div className="flex flex-col gap-1">
                    <Input         
                    placeholder="Insira seu endereço"
                    label="Endereço*"
                    type="text"
                    ></Input>
                </div>
                <div className="flex flex-col gap-1">
                    <Input         
                    placeholder="Insira seu bairro"
                    label="Bairro*"
                    type="text"
                    ></Input>
                </div>
                <div className="flex flex-col gap-1">
                    <Input         
                    placeholder="Insira sua cidade"
                    label="Cidade*"
                    type="text"
                    ></Input>
                </div>
                <div className="flex flex-col gap-1">
                    <Input         
                    placeholder="Insira seu CEP"
                    label="CEP*"
                    type="text"
                    ></Input>
                </div>
                <div className="flex flex-col gap-1">
                    <Input         
                    placeholder="Insira complemento"
                    label="Complemento*"
                    type="text"
                    ></Input>
                </div>
            </div>
            
        </>
    )
}

export default FormInfoEntrega