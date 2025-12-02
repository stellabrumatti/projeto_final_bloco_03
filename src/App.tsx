import Footer from "./components/footer/Footer"

import { BrowserRouter, Routes, Route } from "react-router-dom"

import "react-toastify/dist/ReactToastify.css"
import Home from "./pages/home/Home"
import Navbar from "./components/navbar/Navbar"
function App() {
  return (
    <div className="min-h-screen bg-slate-200">
 

      <BrowserRouter>
        <Navbar />
        
        <div className="min-h-[80vh]">
          <Routes>
            <Route path="/" element={<Home />} />
            
          </Routes>
        </div>

        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App