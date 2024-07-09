import React from "react";

export default function ServicesSectionFeatures2() {
  return (
    <React.Fragment>
      <>
        <section className="pt-28  bg-white overflow-hidden">
          <div className="container px-4 mx-auto">
            <div className="mb-20 flex flex-wrap -m-8 items-center">
              <div className="w-full md:w-1/2 p-8">
                <h2 className="text-6xl md:text-7xl font-bold font-heading tracking-px-n leading-tight">
                  NOVO <span className="text-blue-500">VIDA</span> GYM CLUB
                </h2>
                <p className="text-lg text-gray-900 font-medium leading-relaxed mt-4">
                  Being physically active can improve your brain health, help
                  manage weight, reduce the risk of disease, strengthen bones
                  and muscles, and improve your ability to do everyday
                  activities. Adults who sit less and do any amount of
                  moderate-to-vigorous physical activity gain some health
                  benefits.
                </p>
              </div>
              <div className="w-full md:w-1/2 p-8">
                <img
                  className="rounded-3xl"
                  src="https://static.shuffle.dev/uploads/files/6e/6e0f5129d29c66a42389554d32247ff33a40eeff/pexels-victorfreitas-791763.jpg"
                  alt="People exercising"
                />
              </div>
            </div>
          </div>
        </section>

        <section
          className="relative bg-no-repeat bg-center bg-cover overflow-hidden"
          style={{ backgroundImage: 'url("labarra.jpg")', height: '35vh' }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm"></div>
          <div className="relative py-20 container px-4 mx-auto text-center text-white flex items-center justify-center h-full">
            <div className="max-w-3xl mx-auto">
              <h2 className="mb-4 text-2xl md:text-4xl font-bold">
                Your <span className="text-blue-500">body</span> can do it
              </h2>
              <h2 className="text-2xl md:text-4xl font-bold">
                It's time to convince your <span className="text-pink-NV">mind</span>
              </h2>
            </div>
          </div>
        </section>

        <section className="pt-28 pb-36 bg-white overflow-hidden">
          <div className="container px-4 mx-auto">
            <div className="flex flex-wrap -m-3">
              <div className="w-full md:w-1/3 p-3">
                <a className="flex justify-center md:block h-full" href="#">
                  <div className="relative h-full rounded-3xl overflow-hidden">
                    <img
                      className="h-full md:w-full object-cover transform hover:scale-105 transition ease-in-out duration-1000"
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
                        <h3 className="text-lg text-white text-center font-semibold">
                          Independent Training
                        </h3>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="w-full md:w-1/3 p-3">
                <a className="flex justify-center md:block h-full" href="#">
                  <div className="relative h-full rounded-3xl overflow-hidden">
                    <img
                      className="h-full md:w-full object-cover transform hover:scale-105 transition ease-in-out duration-1000"
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
                        <h3 className="text-lg text-white text-center font-semibold">
                          Weight Loss Program
                        </h3>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="w-full md:w-1/3 p-3">
                <a className="flex justify-center md:block h-full" href="#">
                  <div className="relative h-full rounded-3xl overflow-hidden">
                    <img
                      className="h-full md:w-full object-cover transform hover:scale-105 transition ease-in-out duration-1000"
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
                        <h3 className="text-lg text-white text-center font-semibold">
                          Personal Training
                        </h3>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </>
    </React.Fragment>
  );
}