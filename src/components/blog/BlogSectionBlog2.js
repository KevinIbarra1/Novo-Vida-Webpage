import React from "react";

export default function BlogSectionBlog2() {
  return (
    <React.Fragment>
      <section className="pt-24 pb-36 bg-white overflow-hidden">
        <div className="container px-4 mx-auto">
          <h2 className="mb-4 text-6xl md:text-7xl text-center font-bold font-heading tracking-px-n leading-tight">
            Lo más nuevo del Blog
          </h2>
          <p className="mb-24 font-medium text-gray-600 text-center leading-relaxed md:max-w-lg mx-auto">
            Aquí podrás ver artículos informativos que te van a ayudar en tu
            aventura de fitness y salud.
          </p>
          <div className="flex flex-wrap -m-8">
            <div className="w-full md:w-1/2 p-8">
              <div className="flex flex-wrap lg:items-center -m-4">
                <div className="w-auto p-4">
                  <div className="overflow-hidden rounded-xl">
                    <img
                      className="transform hover:scale-105 transition ease-in-out duration-1000"
                      src="pexels-ivan-samkov-4164844.jpg"
                      alt="Blog 1"
                      style={{ width: "162px", height: "162px" }}
                    />
                  </div>
                </div>
                <div className="flex-1 p-4">
                  <div className="md:max-w-xs">
                    <div className="flex flex-col justify-between h-full">
                      <div className="mb-6">
                        <p className="mb-1.5 text-sm text-gray-500 font-medium uppercase tracking-px">
                          Bienestar
                        </p>
                        <a
                          className="inline-block hover:text-gray-800 hover:underline"
                          href="/bajarDePeso"
                        >
                          <h3 className="text-xl font-semibold leading-normal">
                            Los Beneficios de la Actividad Física Regular
                          </h3>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 p-8">
              <div className="flex flex-wrap lg:items-center -m-4">
                <div className="w-auto p-4">
                  <div className="overflow-hidden rounded-xl">
                    <img
                      className="transform hover:scale-105 transition ease-in-out duration-1000"
                      src="pexels-cottonbro-4753891.jpg"
                      alt="Blog 2"
                      style={{ width: "162px", height: "162px" }}
                    />
                  </div>
                </div>
                <div className="flex-1 p-4">
                  <div className="md:max-w-xs">
                    <div className="flex flex-col justify-between h-full">
                      <div className="mb-6">
                        <p className="mb-1.5 text-sm text-gray-500 font-medium uppercase tracking-px">
                          Bienestar
                        </p>
                        <a
                          className="inline-block hover:text-gray-800 hover:underline"
                          href="/RutinaEjercicio"
                        >
                          <h3 className="text-xl font-semibold leading-normal">
                            Cómo Crear una Rutina de Ejercicios Eficaz
                          </h3>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 p-8">
              <div className="flex flex-wrap lg:items-center -m-4">
                <div className="w-auto p-4">
                  <div className="overflow-hidden rounded-xl">
                    <img
                      className="transform hover:scale-105 transition ease-in-out duration-1000"
                      src="healthyMeal.webp"
                      alt="Blog 3"
                      style={{ width: "162px", height: "162px" }}
                    />
                  </div>
                </div>
                <div className="flex-1 p-4">
                  <div className="md:max-w-xs">
                    <div className="flex flex-col justify-between h-full">
                      <div className="mb-6">
                        <p className="mb-1.5 text-sm text-gray-500 font-medium uppercase tracking-px">
                          Bienestar
                        </p>
                        <a
                          className="inline-block hover:text-gray-800 hover:underline"
                          href="/nutricion"
                        >
                          <h3 className="text-xl font-semibold leading-normal">
                            La Importancia de la Nutrición en el Fitness
                          </h3>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 p-8">
              <div className="flex flex-wrap lg:items-center -m-4">
                <div className="w-auto p-4">
                  <div className="overflow-hidden rounded-xl">
                    <img
                      className="transform hover:scale-105 transition ease-in-out duration-1000"
                      src="pexels-miriam-alonso-7592345.jpg"
                      alt="Blog 4"
                      style={{ width: "162px", height: "162px" }}
                    />
                  </div>
                </div>
                <div className="flex-1 p-4">
                  <div className="md:max-w-xs">
                    <div className="flex flex-col justify-between h-full">
                      <div className="mb-6">
                        <p className="mb-1.5 text-sm text-gray-500 font-medium uppercase tracking-px">
                          Bienestar
                        </p>
                        <a
                          className="inline-block hover:text-gray-800 hover:underline"
                          href="/principiantes"
                        >
                          <h3 className="text-xl font-semibold leading-normal">
                            Ejercicios Específicos para Principiantes
                          </h3>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
