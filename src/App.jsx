import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import DetalhesProduto from "./Pages/DetalhesProduto";
import CrieSuaConta from "./Components/CrieSuaConta/CrieSuaConta";
import MeusPedidos from "./Pages/MeusPedidos";
import ConfirmaçãoDeCompra from "./Pages/ConfirmaçãoDeCompra"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/detalhesProduto" element={<DetalhesProduto />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/CrieSuaConta" element={<CrieSuaConta />} />
          <Route path="/meusPedidos" element={<MeusPedidos />} />
          <Route path="/confirmacaoDeCompra" element={<ConfirmaçãoDeCompra/>} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
