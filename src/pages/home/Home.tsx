


function Home() {
    return (
        <>
            <div className="bg-flex justify-center">

                <div
                    className="bg-linear-to-bl from-slate-50 via-fuchsia-50 to-gray-100 
                    flex flex-col md:flex-row items-center justify-center 
                    px-10 gap-10"
                >

                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className="text-5xl font-extrabold text-blue-600">
                            Medicamentos
                        </h2>
                        <p className="text-blue-800 leading-relaxed text-lg font-semibold">
                            Sua Saúde em primeiro lugar!
                        </p>
                        <p className="text-blue-800 leading-relaxed text-lg font-semibold">
                            Compromisso com a saúde e bem estar dos brasileiros
                        </p>

                        <div className="text-blue-800 leading-relaxed text-lg font-semibold flex justify-around gap-4">
                        
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 flex justify-center items-center">
                        <img
                            src="https://https://ik.imagekit.io/gocq6aosm/Captura%20de%20tela%202025-12-02%20102237.png.png"
                            alt="Logo Inova RH"
                            className="w-2/3"
                        />
                    </div>
                </div>
            </div>

            {/* TEXTO SOBRE O INOVA RH (antes dos colaboradores) */}
            <section className="max-w-5xl mx-auto bg-slate-50 p-6 mt-10 mb-8 rounded-xl shadow-md">
                <h3 className="text-2xl font-bold text-fuchsia-600 mb-4">
                    Sobre a Farmácia Popular do Brasil
                </h3>
                <p className="text-slate-800 leading-relaxed text-lg font-semibold">
                    O Programa Farmácia Popular do Brasil - PFPB é um programa do Governo Federal 
                    que visa complementar a disponibilização de medicamentos utilizados na Atenção Primária
                     à Saúde, por meio de parceria com farmácias da rede privada. Dessa forma, além das Unidades
                      Básicas de Saúde e farmácias municipais, o cidadão pode retirar medicamentos nas farmácias 
                      credenciadas ao Farmácia Popular.

                    A partir de 14 de fevereiro de 2025, o Programa Farmácia Popular passou a disponibilizar gratuitamente 100% dos medicamentos e insumos de seu elenco à população brasileira. O programa atende 12 indicações, contemplando medicamentos para hipertensão, diabetes, asma, osteoporose, dislipidemia (colesterol alto), rinite, doença de Parkinson, glaucoma, diabetes mellitus associada a doenças cardiovasculares e anticoncepção. Além disso, oferece fraldas geriátricas para pessoas com incontinência e absorventes higiênicos para beneficiárias do Programa Dignidade Menstrual..
                </p>
                 {/* IMAGEM ABAIXO DO TEXTO */}
                <div className="mt-6 flex justify-center bg-slate-50 text-lg font-bold">
                  <img
                    src="https://ik.imagekit.io/gocq6aosm/programa-farmacia-popular-oferece-medicamentos-gratuitos-para-a-populacao-de-sao-cristovao-2024-01-24-65b0fc618d19c.jpeg"
                    alt="Ilustração farmacia popular"
                    className="w-full max-w-md rounded-lg shadow-lg"
                  />
                </div>
            </section>
            

            {/* LISTA DE categorias */}
          {/*  <ListaCategoria> */}

         

        </>
    )
}

export default Home