import Popup from "reactjs-popup";
import FormCategoria from "../formcategoria/FormCategoria";

function ModalCategoria() {
    return (
        <>
            <Popup
                trigger={
                    <button
                        className='
                            border rounded 
                            border-red-500 
                            font-bold 
                            px-4 py-2 
                            bg-red-700 
                            hover:bg-red-900 
                            text-white   // <-- AQUI
                            w-80 
                            md:text-lg
                        '
                    >
                        Nova Categoria
                    </button>
                }
                modal
                contentStyle={{
                    borderRadius: '1rem',
                    paddingBottom: '2rem'
                }}
            >
                <FormCategoria />
            </Popup>
        </>
    );
}

export default ModalCategoria;