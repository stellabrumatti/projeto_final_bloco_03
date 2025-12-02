import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import type Categoria from "../../../models/Categoria";
import { atualizar, cadastrar, listar } from "../../../service/Service";
import { ToastAlerta } from "../../../utils/ToastAlerta";

function FormCategoria() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);

  const { id } = useParams<{ id: string }>();

  async function buscarPorId(id: string) {
    try {
      await listar(`/categorias/${id}`, setCategoria);
    } catch (error: any) {
      ToastAlerta("Categoria não encontrada!", "erro");
      console.error(error);
      retornar();
    }
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value,
    });
  }

  async function gerarNovoCategoria(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    if (id !== undefined) {
      try {
        await atualizar(`/categoria`, categoria, setCategoria);
        ToastAlerta("Categoria atualizada com sucesso!", "sucesso");
      } catch (error: any) {
        ToastAlerta("Erro ao atualizar a categoria", "erro");
        console.error(error);
      }
    } else {
      try {
        await cadastrar(`/categorias`, categoria, setCategoria);
        ToastAlerta("Categoria cadastrada com sucesso!", "sucesso");
      } catch (error: any) {
        ToastAlerta("Erro ao cadastrar a categoria", "erro");
        console.error(error);
      }
    }

    setIsLoading(false);
    retornar();
  }

  function retornar() {
    navigate("/categorias");
  }

  return (
    <div className="min-h-screen  flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-xl rounded-2xl shadow-lg p-8">

        <h1 className="text-3xl md:text-4xl text-center mb-8 text-indigo-700 font-bold">
          {id === undefined ? "Cadastrar Categoria" : "Editar Categoria"}
        </h1>

        <form
          className="w-full flex flex-col gap-6 text-indigo-700"
          onSubmit={gerarNovoCategoria}
        >
          {/* NOME */}
          <div className="flex flex-col gap-2">
            <label htmlFor="nome" className="font-semibold">
              Nome da Categoria
            </label>
            <input
              type="text"
              placeholder="Digite o nome"
              id="nome"
              name="nome"
              className="border-2 border-indigo-300 rounded-lg p-3 bg-indigo-50 focus:outline-none focus:border-indigo-600 transition"
              required
              value={categoria.nome || ""}
              onChange={atualizarEstado}
            />
          </div>

          {/* DESCRIÇÃO */}
          <div className="flex flex-col gap-2">
            <label htmlFor="descricao" className="font-semibold">
              Descrição
            </label>
            <input
              type="text"
              placeholder="Digite a descrição"
              id="descricao"
              name="descricao"
              className="border-2 border-indigo-300 rounded-lg p-3 bg-indigo-50 focus:outline-none focus:border-indigo-600 transition"
              required
              value={categoria.descricao || ""}
              onChange={atualizarEstado}
            />
          </div>

          {/* BOTÃO */}
          <button
            className="rounded-lg text-white bg-indigo-600 hover:bg-indigo-800 w-full py-3 mt-2 flex justify-center items-center text-lg font-semibold transition-all"
            type="submit"
          >
            {isLoading ? (
              <ClipLoader color="#ffffff" size={26} />
            ) : (
              <span>
                {id === undefined ? "Cadastrar" : "Atualizar"}
              </span>
            )}
          </button>

          {/* BOTÃO VOLTAR */}
          <button
            type="button"
            onClick={retornar}
            className="text-indigo-600 hover:underline text-center mt-2"
          >
            Voltar para Categorias
          </button>

        </form>
      </div>
    </div>
  );
}

export default FormCategoria;
