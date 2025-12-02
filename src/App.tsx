import Footer from "./components/footer/Footer"

import { BrowserRouter, Routes, Route } from "react-router-dom"


import Home from "./pages/home/Home"
import Navbar from "./components/navbar/Navbar"
import ListarCategorias from "./components/categorias/listacategoria/ListaCategoria"
import FormCategoria from "./components/categorias/formcategoria/FormCategoria"
import DeletarCategoria from "./components/categorias/deletecategoria/DeletarCategoria"
function App() {
  return (
    <div className="min-h-screen bg-slate-200">
 

      <BrowserRouter>
        <Navbar />
        
        <div className="min-h-[80vh]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categorias" element={<ListarCategorias />} />
            <Route path="/cadastrarcategorias" element={<FormCategoria />} />
            <Route path="/editarcategoria/:id" element={<FormCategoria />} />
            <Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />
         
          </Routes>
        </div>

        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App