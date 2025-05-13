import Icons from "../../assets/Icons.png"
import Input from "../Input/Input"
import "./LoginBody.css"


function LoginBody() {
    return (
      <>
        <section id="login-body">
            <div id="form-whites">
                <div id="divisor-titles">
                    <h1 id="login-title">Acesse sua conta</h1>
                    <p>Novo cliente? 🔥 Então registre-se <a href="">aqui</a></p>
                </div>
                <div id="form-inputs">
                    <Input
                    placeholder="Digite seu login ou email"
                    type="text"
                    label="Login *"
                    />

                    <Input
                    placeholder="Digite sua senha"
                    type="password"
                    label="Senha *"
                    />

                    <a href="">Esqueci minha senha</a>
                    <button id="acessar">Acessar minha conta</button>
                </div>
                <div id="divisor-links">
                    <p>Ou faça login com </p>
                    <img src={Icons} alt="" />
                </div>
            </div>
            <div>
                <img id="s3-img" src="https://s3-alpha-sig.figma.com/img/95ea/b6de/38b674033b641e23cb9d658703e259af?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=RIIAIQw3O3rs92ws3rgLiWyj4QJFlDsbfq24u0ETuKSgDxpZLODuwKocghKE2sUz-zw3olyMNhlmFRDAHPNw9Z8q0pTQ8Y2jdooEHeSCDDvB70T409EEOOpPRDnyKYP2gK5B7Lwd9BydPF2l2Qg0DYIVXQGjX5jyuMQovS9poI7KgYLj5dPeiXLE5ed6OBTbqKz6GSJlZwxflg-dD3HvFlXYYC2kwsf8Sfb9UIeuAbvv6lhkZR1YHfjPTWefxcEZ5XyZt6Kfx26B4Ks~la5lCAs3pHL2I9zdwhKcPQ0Q0IQ6kMewXXtHPEwGWuNjsf06VR61zOjekBM4z44BZ7ukmg__" alt="" />
            </div>
        </section>
      </>
    )
  }
  
  export default LoginBody