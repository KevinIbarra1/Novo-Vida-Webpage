import React from "react";
import { useNavigate } from "react-router-dom";

export default function ServicesSectionCta5() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/About");
  };

  return (
    <React.Fragment>
      <>
        <section className="relative py-28 overflow-hidden callToActionColor">
          <img
            className="absolute bottom-0 right-0"
            src="flaro-assets/images/cta/gradient.svg"
            alt=""
          />
          <div className="relative z-10 container px-4 mx-auto">
            <div className="flex flex-wrap items-center -m-8">
              <div className="w-full md:w-1/2 p-8">
                <h2 className="mb-5 text-6xl md:text-7xl text-white font-bold tracking-px-n leading-tight">
                  ¿Listo para comenzar?
                </h2>
                <p className="text-white text-opacity-90 font-medium md:max-w-md">
                  Únete a Novovida Gym Club y comienza tu viaje hacia un estilo
                  de vida más saludable y activo. Contamos con instalaciones de
                  primera y entrenadores profesionales para ayudarte a alcanzar
                  tus metas.
                </p>
              </div>
              <div className="w-full md:w-1/2 p-8">
                <div className="flex flex-wrap ml-auto md:w-56 -m-2">
                  <div className="w-full p-2">
                    <button
                      className="py-4 px-6 w-full font-medium rounded-xl shadow-6xl focus:ring focus:ring-gray-300 bg-white hover:bg-gray-100 transition ease-in-out duration-200"
                      type="button"
                      onClick={handleClick}
                    >
                      CONTÁCTANOS
                    </button>
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
