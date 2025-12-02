import { Link } from "react-router-dom"

function Navbar() {
	return (
		<div className="w-full bg-red-700 text-slate-50 shadow-sm sticky top-0 z-50">
			<div className="container mx-auto flex flex-wrap items-center justify-between py-8 px-8 gap-4">
				
				<Link to="/" className="hover:text-blue-600 cursor-pointer transition">
					<img
						src="https://ik.imagekit.io/gocq6aosm/icone%20farmacia%20popular-Photoroom%20sem%20fundo.png"
						alt="Farmacia Popular"
						className="w-20 hover:opacity-80 transition"
					/>
				</Link>

				
					
						

				<div className="flex items-center gap-3 text-sm sm:text-base font-semibold">

    <Link
        to="/produtos"
        className="px-4 py-2 rounded-xl bg-white/10 hover:bg-blue-600 hover:text-white transition-all duration-300"
    >
        Produtos
    </Link>

    <Link
        to="/categorias"
        className="px-4 py-2 rounded-xl bg-white/10 hover:bg-blue-600 hover:text-white transition-all duration-300"
    >
        Categorias
    </Link>

    

</div>


                    
						
					
				</div>
			</div>
		
	)
}

export default Navbar