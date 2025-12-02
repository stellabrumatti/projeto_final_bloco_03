import { PencilIcon, TrashIcon } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import type Produto from '../../../models/Produto'

interface CardProdutoProps {
  produto: Produto
}

function CardProdutos({ produto }: Readonly<CardProdutoProps>) {
  return (
    <div className="flex flex-col justify-between overflow-hidden bg-white rounded-lg shadow-md hover:shadow-xl transition">
      
      {/* ÍCONES */}
      <div className="flex items-end justify-end pt-2 pr-2 gap-2">
        <Link to={`/editarproduto/${produto.id}`}>
          <PencilIcon
            size={24}
            className="hover:text-teal-700"
          />
        </Link>

        <Link to={`/deletarproduto/${produto.id}`}>
          <TrashIcon
            size={24}
            className="hover:text-red-700"
          />
        </Link>
      </div>

      {/* IMAGEM */}
      <div className="py-4 flex justify-center">
        <img
          src={produto.foto || "https://via.placeholder.com/300"}
          className="h-44 object-contain"
          alt={produto.nome}
        />
      </div>

      {/* INFO */}
      <div className="p-4 space-y-2">
        <p className="text-sm text-center uppercase font-semibold">
          {produto.nome}
        </p>

        <h3 className="text-xl font-bold text-center">
          {Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(produto.preco)}
        </h3>

        <p className="text-sm italic text-center text-gray-600">
          Categoria: {produto.categoria?.nome || 'Sem Categoria'}
        </p>
      </div>

      {/* BOTÃO */}
      <button
        className="w-full py-2 text-white bg-teal-600 hover:bg-teal-800 transition"
        onClick={() => alert('Função em Desenvolvimento!')}
      >
        Comprar
      </button>
    </div>
  )
}

export default CardProdutos

