


function Home() {
    return (
        <>
            <div className="bg-flex justify-center bg-yellow-500 pb-8 pt-4 mb-12 shadow-md">

                <div
                    className="bg-yellow-500 rounded-b-3xl shadow-lg 
                    flex flex-col md:flex-row items-center justify-center 
                    px-10 gap-10"
                >

                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className="text-5xl font-extrabold text-blue-800">
                            Medicamentos
                        </h2>
                        <p className="text-blue-800 leading-relaxed text-lg font-bold">
                            Sua Saúde em primeiro lugar!
                        </p>
                        <p className="text-blue-800 leading-relaxed text-lg font-bold">
                            Compromisso com a saúde e bem estar dos brasileiros
                        </p>

                        <div className="text-blue-800 leading-relaxed text-lg font-semibold flex justify-around gap-4">
                        
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 flex justify-center items-center bg-yellow-500 pb-4">
                        <img
                            src="https://ik.imagekit.io/gocq6aosm/Captura%20de%20tela%202025-12-02%20102237.png"
                            alt="identidade visual famacia popular"
                            className="w-2/3"
                        />
                    </div>
                </div>
            </div>

            {/* TEXTO Sobre farmacia popular) */}
           <section className="max-w-6xl mx-auto bg-white p-8 mt-12 mb-12 rounded-2xl shadow-lg border border-slate-200">

  {/* HEADER */}
  <div className="flex flex-col items-center mb-6">
    <span className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-bold mb-3">
      Programa de Saúde Pública
    </span>

    <h3 className="text-3xl font-bold text-center text-blue-800 mb-2">
      Sobre a Farmácia Popular do Brasil
    </h3>

    <div className="w-24 h-1 bg-blue-600 rounded-full"></div>
  </div>

  {/* TEXTO */}
  <p className="text-slate-700 leading-loose text-lg text-justify">
    O Programa Farmácia Popular do Brasil - PFPB é um programa do Governo Federal 
    que visa complementar a disponibilização de medicamentos utilizados na Atenção Primária
    à Saúde, por meio de parceria com farmácias da rede privada. Dessa forma, além das Unidades
    Básicas de Saúde e farmácias municipais, o cidadão pode retirar medicamentos nas farmácias 
    credenciadas ao Farmácia Popular.

    <br /><br />

    A partir de 14 de fevereiro de 2025, o Programa Farmácia Popular passou a disponibilizar gratuitamente
    100% dos medicamentos e insumos de seu elenco à população brasileira. O programa atende 12 indicações,
    contemplando medicamentos para hipertensão, diabetes, asma, osteoporose, dislipidemia (colesterol alto),
    rinite, doença de Parkinson, glaucoma, diabetes mellitus associada a doenças cardiovasculares e
    anticoncepção. Além disso, oferece fraldas geriátricas para pessoas com incontinência e absorventes
    higiênicos para beneficiárias do Programa Dignidade Menstrual.
  </p>

  {/* IMAGEM + DESTAQUE */}
  <div className="mt-10 flex flex-col items-center gap-6">
    <img
      src="https://ik.imagekit.io/gocq6aosm/programa-farmacia-popular-oferece-medicamentos-gratuitos-para-a-populacao-de-sao-cristovao-2024-01-24-65b0fc618d19c.jpeg"
      alt="Ilustração Farmácia Popular"
      className="w-full max-w-3xl rounded-xl shadow-md"
    />

    {/* CHAMADA */}
    <div className="bg-green-100 text-green-800 px-6 py-4 rounded-xl text-center font-semibold max-w-2xl">
      💊 Medicamentos, fraldas geriátricas e absorventes podem ser retirados gratuitamente 
      em farmácias credenciadas pelo programa.
    </div>
  </div>

</section>

            

            {/* LISTA DE categorias */}
          {/*  <ListaCategoria> */}

         

        </>
    )
}

export default Home