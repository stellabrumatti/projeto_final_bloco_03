﻿import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { ClipLoader } from "react-spinners"
import type Categoria from "../../../models/Categoria"
import { deletar, listar } from "../../../service/Service"
import { ToastAlerta } from "../../../utils/ToastAlerta"


function DeletarCategoria() {

    const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [categoria, setCategoria] = useState<Categoria>({} as Categoria)

    const { id } = useParams<{ id: string }>();

    async function buscarPorId(id: string) {
        try {
            await listar(`/categorias/${id}`, setCategoria)
        } catch (error: any) {
            ToastAlerta('Categoria não encontrada!', 'erro')
            console.error(error)
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    async function DeletarCategoria() {
        setIsLoading(true)

        try {
            await deletar(`/categorias/${id}`)

            ToastAlerta('Categoria apagada com sucesso', 'sucesso')

        } catch (error) {
            ToastAlerta('Erro ao apagar a categoria', 'erro')
            console.error(error)
        }

        setIsLoading(false)
        retornar()
    }

    function retornar() {
        navigate("/categorias")
    }

    return (
        <div className='container w-full max-w-md px-4 pt-4 mx-auto md:pt-6'>
            <h1 className='text-3xl md:text-4xl text-center py-4 text-fuchsia-700'>Deletar Categoria</h1>
            <p className='text-center font-semibold mb-4 text-base md:text-lg text-fuchsia-700'>
                Você tem certeza de que deseja apagar a categoria a seguir?</p>
            <div className='border flex flex-col rounded-2xl overflow-hidden justify-between bg-indigo-100'>
                <header
                    className='py-2 px-4 md:px-6 bg-indigo-700 text-white font-bold text-lg md:text-2xl'>
                    Categoria
                </header>
                <p className='h-full p-4 text-xl md:p-8 md:text-3xl'>{categoria.nome}</p>
                <p className='h-full p-4 text-xl md:p-8 md:text-3xl'>{categoria.descricao}</p>
                <div className="flex flex-row">
                    <button
                        className='text-slate-100  bg-fuchsia-500 hover:bg-fuchsia-700 w-full py-2 text-base md:text-lg'
                        onClick={retornar}
                    >
                        Não
                    </button>
                    <button
                        className='w-full text-slate-100 bg-indigo-500 hover:bg-indigo-700 flex items-center justify-center text-base md:text-lg'
                        onClick={DeletarCategoria}
                    >
                        {isLoading ?
                            <ClipLoader
                                color="#ffffff"
                                size={24}
                            />
                            :
                            <span>Sim</span>
                        }
                    </button>
                </div>
            </div>
        </div>
    )
}
export default DeletarCategoria;