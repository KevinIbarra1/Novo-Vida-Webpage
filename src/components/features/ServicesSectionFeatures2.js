import React from "react";

export default function ServicesSectionFeatures2() {
  return (
    <React.Fragment>
      <>
        <section className="pt-28 bg-white overflow-hidden">
          <div className="container px-4 mx-auto">
            <div className="mb-20 flex flex-wrap -m-8 items-center">
              <div className="w-full md:w-1/2 p-8">
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading tracking-px-n leading-tight">
                  NOVO <span className="text-blue-500">VIDA</span> GYM CLUB
                </h2>
                <p className="text-lg text-gray-900 font-medium leading-relaxed mt-4">
                  NovoVida es un gimnasio innovador enfocado en transformar
                  vidas a través del fitness y la salud, especialmente para
                  aquellos con poco conocimiento en el gimnasio. En un ambiente
                  acogedor y motivador, proporcionamos clases grupales,
                  entrenamientos individuales y asesoría nutricional para
                  ayudarte a alcanzar tus metas de bienestar.
                </p>
              </div>
              <div className="w-full md:w-1/2 p-8">
                <img
                  className="bg-black bg-opacity-60 rounded-3xl w-full object-cover"
                  src="/image00021.webp"
                  alt="People exercising"
                />
              </div>
            </div>
          </div>
        </section>

        <section
          className="relative bg-no-repeat bg-center bg-cover overflow-hidden"
          style={{ backgroundImage: 'url("labarra.jpg")', height: "35vh" }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm"></div>
          <div className="relative py-20 container px-4 mx-auto text-center text-white flex items-center justify-center h-full">
            <div className="max-w-3xl mx-auto">
              <h2 className="mb-4 text-xl md:text-2xl lg:text-4xl font-bold">
                Tu cuerpo puede<span className="text-blue-500"> hacerlo</span>
              </h2>
              <h2 className="text-xl md:text-2xl lg:text-4xl font-bold">
                Es tiempo de
                <span className="text-pink-NV"> convencer </span>a tu mente
              </h2>
            </div>
          </div>
        </section>

        <section className="pt-28 pb-36 bg-white overflow-hidden">
          <div className="container px-4 mx-auto">
            <div className="flex flex-wrap -m-3">
              <div className="w-full md:w-1/3 p-3">
                <div className="flex justify-center md:block h-full">
                  <div className="relative h-full rounded-3xl overflow-hidden">
                    <img
                      className="w-full h-full object-cover transform hover:scale-105 transition ease-in-out duration-1000"
                      src="https://static.shuffle.dev/uploads/files/6e/6e0f5129d29c66a42389554d32247ff33a40eeff/pexels-victorfreitas-791763.jpg"
                      alt="Independent Training"
                    />
                    <div className="absolute bottom-0 left-0 w-full px-11 pb-10">
                      <div
                        className="px-8 py-4 bg-white bg-opacity-10 rounded-xl shadow-5xl"
                        style={{
                          WebkitBackdropFilter: "blur(5px)",
                          backdropFilter: "blur(5px)",
                        }}
                      >
                        <h3 className="text-base md:text-lg lg:text-xl text-white text-center font-semibold">
                          ENTRENAMIENTO INDEPENDIENTE
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/3 p-3">
                <div className="flex justify-center md:block h-full">
                  <div className="relative h-full rounded-3xl overflow-hidden">
                    <img
                      className="w-full h-full object-cover transform hover:scale-105 transition ease-in-out duration-1000"
                      src="https://static.shuffle.dev/uploads/files/6e/6e0f5129d29c66a42389554d32247ff33a40eeff/pexels-andres-ayrton-6551436-jpg-1718150918975.webp"
                      alt="Weight loss Program"
                    />
                    <div className="absolute bottom-0 left-0 w-full px-11 pb-10">
                      <div
                        className="px-8 py-4 bg-white bg-opacity-10 rounded-xl shadow-5xl"
                        style={{
                          WebkitBackdropFilter: "blur(5px)",
                          backdropFilter: "blur(5px)",
                        }}
                      >
                        <h3 className="text-base md:text-lg lg:text-xl text-white text-center font-semibold">
                          PROGRAMA DE PERDIDA DE PESO
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/3 p-3">
                <div className="flex justify-center md:block h-full">
                  <div className="relative h-full rounded-3xl overflow-hidden">
                    <img
                      className="w-full h-full object-cover transform hover:scale-105 transition ease-in-out duration-1000"
                      src="https://static.shuffle.dev/uploads/files/6e/6e0f5129d29c66a42389554d32247ff33a40eeff/pexels-victorfreitas-703016.jpg"
                      alt="Personal Training"
                    />
                    <div className="absolute bottom-0 left-0 w-full px-11 pb-10">
                      <div
                        className="px-8 py-4 bg-white bg-opacity-10 rounded-xl shadow-5xl"
                        style={{
                          WebkitBackdropFilter: "blur(5px)",
                          backdropFilter: "blur(5px)",
                        }}
                      >
                        <h3 className="text-base md:text-lg lg:text-xl text-white text-center font-semibold">
                          ENTRENAMIENTO PERSONAL
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </React.Fragment>
  );
}
