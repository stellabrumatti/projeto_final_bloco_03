import Footer from "./components/footer/Footer"

import { BrowserRouter, Routes, Route } from "react-router-dom"


import Home from "./pages/home/Home"
import Navbar from "./components/navbar/Navbar"
import ListarCategorias from "./components/categorias/listacategoria/ListaCategoria"
import FormCategoria from "./components/categorias/formcategoria/FormCategoria"
import DeletarCategoria from "./components/categorias/deletecategoria/DeletarCategoria"
import { ToastContainer } from "react-toastify"
import ListarProdutos from "./components/produto/listaprodutos/ListaProduto"
import FormProduto from "./components/produto/formproduto/FormProduto"
import DeletarProduto from "./components/produto/deletarprodutos/DeletaProduto"
function App() {
  return (
    <div className="min-h-screen bg-slate-200">
         <ToastContainer />

      <BrowserRouter>
        <Navbar />
        
        <div className="min-h-[80vh]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categorias" element={<ListarCategorias />} />
            <Route path="/cadastrarcategorias" element={<FormCategoria />} />
            <Route path="/editarcategoria/:id" element={<FormCategoria />} />
            <Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />
            <Route path="/produtos" element={<ListarProdutos />} />
            <Route path="/cadproduto" element={<FormProduto />} />
            <Route path="/editarproduto/:id" element={<FormProduto />} />
            <Route path="/deletarproduto/:id" element={<DeletarProduto />} />
         
          </Routes>
        </div>

        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App