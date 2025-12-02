import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import type Categoria from "../../../models/Categoria";

function FormProduto() {

    const [categoria, setCategoria] = useState<Categoria>({
        id: 0,
        nome: '',
        descricao: ''
    });

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setCategoria({
            ...categoria,
            [e.target.name]: e.target.value
        });
    }

    function enviarFormulario(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log(categoria);
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <form 
                onSubmit={enviarFormulario}
                className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md flex flex-col gap-4"
            >
                <h2 className="text-2xl font-bold text-center text-red-700">
                    Nova Categoria
                </h2>

                <div className="flex flex-col gap-1">
                    <label className="font-semibold text-gray-700">Nome</label>
                    <input
                        type="text"
                        name="nome"
                        value={categoria.nome}
                        onChange={atualizarEstado}
                        className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                        placeholder="Digite o nome da categoria"
                        required
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <label className="font-semibold text-gray-700">Descrição</label>
                    <input
                        type="text"
                        name="descricao"
                        value={categoria.descricao}
                        onChange={atualizarEstado}
                        className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                        placeholder="Digite a descrição"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="bg-red-700 hover:bg-red-900 text-white rounded-lg p-2 font-semibold mt-4 transition"
                >
                    Cadastrar Categoria
                </button>
            </form>
        </div>
    );
}

export default FormProduto;


