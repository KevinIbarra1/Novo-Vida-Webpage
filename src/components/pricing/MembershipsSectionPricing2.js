import React from "react";

export default function MembershipsSectionPricing2() {
  return (
    <React.Fragment>
      <section className="pt-24 pb-28 bg-blueGray-50 overflow-hidden">
        <div className="container px-4 mx-auto">
          <h2 className="mb-24 text-6xl md:text-7xl font-bold font-heading text-center tracking-px-n leading-tight md:max-w-xl mx-auto">
            Elige el plan que más se adapte a ti.
          </h2>
          <div className="mb-24 md:max-w-6xl mx-auto">
            <div className="flex flex-wrap -m-4">
              {/* Plan 1 */}
              <div className="w-full md:w-1/3 p-4">
                <div
                  className="flex flex-col justify-between px-9 pt-8 pb-9 h-full bg-white bg-opacity-90 border-blueGray-100 rounded-4xl"
                  style={{ backdropFilter: "blur(46px)", minHeight: "400px" }}
                >
                  <div>
                    <span className="mb-3 inline-block text-sm text-blue-NV font-semibold uppercase tracking-px leading-snug">
                      Entrenamiento Independiente
                    </span>
                    <h3 className="mb-3 text-4xl text-gray-900 font-bold leading-none">
                      $45/mes
                    </h3>
                    <p className="mb-6 text-sm text-gray-600 font-medium leading-relaxed">
                      - Incluye guía de rutinas básicas.
                      <br />
                      - Entrenamiento individual ilimitado de lunes a sábado.
                      <br />- Sala de espera para niños.
                    </p>
                  </div>
                  <div className="mt-auto">
                    <button
                      className="py-4 px-9 w-full font-semibold border border-blueGray-300 hover:border-blueGray-400 rounded-xl focus:ring focus:ring-gray-50 bg-blue-NV text-white hover:bg-gray-50 transition ease-in-out duration-200"
                      type="button"
                    >
                      Suscríbete ahora
                    </button>
                  </div>
                </div>
              </div>
              {/* Plan 2 */}
              <div className="w-full md:w-1/3 p-4">
                <div
                  className="flex flex-col justify-between px-9 pt-8 pb-9 h-full bg-white bg-opacity-90 border-blueGray-100 rounded-4xl"
                  style={{ backdropFilter: "blur(46px)", minHeight: "400px" }}
                >
                  <div>
                    <span className="mb-4 inline-block text-sm text-blue-NV font-semibold uppercase tracking-px leading-snug">
                      Entrenamiento Personalizado
                    </span>
                    <h3 className="mb-3 text-4xl text-gray-900 font-bold leading-none">
                      $139/mes
                    </h3>
                    <p className="mb-6 text-sm text-gray-600 font-medium leading-relaxed">
                      - Incluye dos días a la semana de entrenamiento personalizado.
                      <br />
                      - Plan de sugerencias alimentarias mensual.
                      <br />
                      - Evaluación mensual.
                      <br />- Acceso ilimitado al gimnasio de lunes a sábado.
                    </p>
                  </div>
                  <div className="mt-auto">
                    <button
                      className="py-4 px-9 w-full font-semibold border border-blueGray-300 hover:border-blueGray-400 rounded-xl focus:ring focus:ring-gray-50 bg-blue-NV text-white hover:bg-gray-50 transition ease-in-out duration-200"
                      type="button"
                    >
                      Suscríbete ahora
                    </button>
                  </div>
                </div>
              </div>
              {/* Plan 3 */}
              <div className="w-full md:w-1/3 p-4">
                <div
                  className="flex flex-col justify-between px-9 pt-8 pb-9 h-full bg-white bg-opacity-90 border-blueGray-100 rounded-4xl"
                  style={{ backdropFilter: "blur(46px)", minHeight: "400px" }}
                >
                  <div>
                    <span className="mb-4 inline-block text-sm text-blue-NV font-semibold uppercase tracking-px leading-snug">
                      Servidor Público
                    </span>
                    <h3 className="mb-3 text-4xl text-gray-900 font-bold leading-none">
                      $35/mes
                    </h3>
                    <p className="mb-6 text-sm text-gray-600 font-medium leading-relaxed">
                      - Incluye dos días a la semana de entrenamiento personalizado.
                      <br />
                      - Plan de sugerencias alimentarias mensual.
                      <br />
                      - Evaluación mensual.
                      <br />- Acceso ilimitado al gimnasio de lunes a sábado.
                    </p>
                  </div>
                  <div className="mt-auto">
                    <button
                      className="py-4 px-9 w-full font-semibold border border-blueGray-300 hover:border-blueGray-400 rounded-xl focus:ring focus:ring-gray-50 bg-blue-NV text-white hover:bg-gray-50 transition ease-in-out duration-200"
                      type="button"
                    >
                      Suscríbete ahora
                    </button>
                  </div>
                </div>
              </div>
              {/* Plan 4 */}
              <div className="w-full md:w-1/3 p-4">
                <div
                  className="flex flex-col justify-between px-9 pt-8 pb-9 h-full bg-white bg-opacity-90 border-blueGray-100 rounded-4xl"
                  style={{ backdropFilter: "blur(46px)", minHeight: "400px" }}
                >
                  <div>
                    <span className="mb-4 inline-block text-sm text-blue-NV font-semibold uppercase tracking-px leading-snug">
                      Novo Seniors
                    </span>
                    <h3 className="mb-3 text-4xl text-gray-900 font-bold leading-none">
                      $29/mes
                    </h3>
                    <p className="mb-6 text-sm text-gray-600 font-medium leading-relaxed">
                      - Personas de 60 años en adelante.
                      <br />- Entrenamiento individual ilimitado de lunes a sábado.
                    </p>
                  </div>
                  <div className="mt-auto">
                    <button
                      className="py-4 px-9 w-full font-semibold border border-blueGray-300 hover:border-blueGray-400 rounded-xl focus:ring focus:ring-gray-50 bg-blue-NV text-white hover:bg-gray-50 transition ease-in-out duration-200"
                      type="button"
                    >
                      Suscríbete ahora
                    </button>
                  </div>
                </div>
              </div>
              {/* Plan 5 */}
              <div className="w-full md:w-1/3 p-4">
                <div
                  className="flex flex-col justify-between px-9 pt-8 pb-9 h-full bg-white bg-opacity-90 border-blueGray-100 rounded-4xl"
                  style={{ backdropFilter: "blur(46px)", minHeight: "400px" }}
                >
                  <div>
                    <span className="mb-4 inline-block text-sm text-blue-NV font-semibold uppercase tracking-px leading-snug">
                      Novo Family
                    </span>
                    <h3 className="mb-3 text-4xl text-gray-900 font-bold leading-none">
                      $80/mes
                    </h3>
                    <p className="mb-6 text-sm text-gray-600 font-medium leading-relaxed">
                      - Oferta válida mientras todos los participantes se mantengan activos.
                      <br />- Acceso ilimitado al gimnasio de lunes a sábado.
                    </p>
                  </div>
                  <div className="mt-auto">
                    <button
                      className="py-4 px-9 w-full font-semibold border border-blueGray-300 hover:border-blueGray-400 rounded-xl focus:ring focus:ring-gray-50 bg-blue-NV text-white hover:bg-gray-50 transition ease-in-out duration-200"
                      type="button"
                    >
                      Suscríbete ahora
                    </button>
                  </div>
                </div>
              </div>
              {/* Plan 6 */}
              <div className="w-full md:w-1/3 p-4">
                <div
                  className="flex flex-col justify-between px-9 pt-8 pb-9 h-full bg-white bg-opacity-90 border-blueGray-100 rounded-4xl"
                  style={{ backdropFilter: "blur(46px)", minHeight: "400px" }}
                >
                  <div>
                    <span className="mb-4 inline-block text-sm text-blue-NV font-semibold uppercase tracking-px leading-snug">
                      Servidor Público
                    </span>
                    <h3 className="mb-3 text-4xl text-gray-900 font-bold leading-none">
                      $35/mes
                    </h3>
                    <p className="mb-6 text-sm text-gray-600 font-medium leading-relaxed">
                      - Incluye dos días a la semana de entrenamiento personalizado.
                      <br />
                      - Plan de sugerencias alimentarias mensual.
                      <br />
                      - Evaluación mensual.
                      <br />- Acceso ilimitado al gimnasio de lunes a sábado.
                    </p>
                  </div>
                  <div className="mt-auto">
                    <button
                      className="py-4 px-9 w-full font-semibold border border-blueGray-300 hover:border-blueGray-400 rounded-xl focus:ring focus:ring-gray-50 bg-blue-NV text-white hover:bg-gray-50 transition ease-in-out duration-200"
                      type="button"
                    >
                      Suscríbete ahora
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="mb-4 text-sm text-gray-500 text-center font-medium leading-relaxed">
            Confiado por servicios de pago seguros
          </p>
          <div className="flex flex-wrap justify-center">
            <div className="w-auto">
              <a href="#">
                <img
                  src="https://static.shuffle.dev/uploads/files/6e/6e0f5129d29c66a42389554d32247ff33a40eeff/ath-logo-vector-svg-1719684351283-webp-1719684411421.webp"
                  alt="ATH Logo"
                />
              </a>
            </div>
            <div className="w-auto">
              <a href="#">
                <img src="flaro-assets/logos/brands/amex.svg" alt="Amex Logo" />
              </a>
            </div>
            <div className="w-auto">
              <a href="#">
                <img
                  src="flaro-assets/logos/brands/mastercard.svg"
                  alt="Mastercard Logo"
                />
              </a>
            </div>
            <div className="w-auto">
              <img
                src="flaro-assets/logos/brands/paypal.svg"
                alt="Paypal Logo"
              />
            </div>
            <div className="w-auto">
              <a href="#">
                <img src="flaro-assets/logos/brands/visa.svg" alt="Visa Logo" />
              </a>
            </div>
            <div className="w-auto">
              <a href="#">
                <img
                  src="flaro-assets/logos/brands/apple-pay.svg"
                  alt="Apple Pay Logo"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
