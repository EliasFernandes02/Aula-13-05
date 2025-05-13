import  Input from "../Input/Input"
function FormInfoPessoal() {
  return (
    <div className="flex flex-col gap-2 !p-4 md:!p-8 w-full bg-white rounded-md">
      <div className="flex flex-col gap-3">
        <p className="font-bold text-lg md:text-base">Informações pessoais</p>
        <hr className="border-black h-0.5" />
      </div>
      <div className="flex flex-col gap-1">      
        <Input         
          placeholder="Insira seu nome"
          label="Nome Completo*"
          type="text"
        ></Input>       
      </div>
      <div className="flex flex-col gap-1">
        <Input         
          placeholder="Insira seu cpf"
          label="CPF*"
          type="text"
        ></Input> 
      </div>
      <div className="flex flex-col gap-1">
        <Input         
          placeholder="Insira seu email"
          label="E-mail*"
          type="email"
        ></Input>
      </div>
      <div className="flex flex-col gap-1">
        <Input         
          placeholder="Insira seu celular"
          label="Celular*"
          type="email"
        ></Input>
      </div>
    </div>
  )
}
  

export default FormInfoPessoal