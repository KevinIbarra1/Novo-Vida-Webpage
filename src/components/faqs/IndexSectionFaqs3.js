import React, { useState } from "react";

export default function IndexSectionFaqs3() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    if (openFAQ === index) {
      setOpenFAQ(null);
    } else {
      setOpenFAQ(index);
    }
  };

  const faqData = [
    {
      question: "¿Cuáles son los horarios de operación del gimnasio?",
      answer:
        "Nuestro gimnasio está abierto de lunes a viernes de 6:00 am a 9:00 pm y los sábados de 8:00 am a 3:00 pm.",
    },
    {
      question:
        "¿Ofrecen algún tipo de orientación para el uso de los equipos?",
      answer:
        "Sí, al iniciar una membresía con nosotros no solo obtienes orientación sobre cómo utilizar los equipos, sino que también obtienes un plan de alimentación y entrenamiento totalmente gratuito.",
    },
    {
      question: "¿Puedo obtener un programa de entrenamiento personalizado?",
      answer:
        "Sí, nuestros entrenadores personales pueden crear un programa de entrenamiento personalizado basado en tus objetivos y necesidades.",
    },
    {
      question: "¿La membresía es por contrato?",
      answer:
        "Ninguna de nuestras membresías requiere la implementación de un contrato.",
    },
  ];

  return (
    <React.Fragment>
      <section className="relative pt-5 pb-8 overflow-hidden">
        <img
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
          src="flaro-assets/images/faqs/gradient.svg"
          alt="gradient"
        />
        <div className="relative z-10 container px-4 mx-auto">
          <div className="md:max-w-4xl mx-auto">
            <p className="mb-7 text-sm text-indigo-600 text-center font-semibold uppercase tracking-px pt-8">
              TIENES PREGUNTAS?
            </p>
            <h2 className="mb-16 text-6xl md:text-8xl xl:text-10xl text-center font-bold font-heading tracking-px-n leading-none">
              Preguntas Frecuentes
            </h2>
            <div className="mb-11 flex flex-wrap -m-1">
              {faqData.map((faq, index) => (
                <div key={index} className="w-full p-1">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full text-left"
                  >
                    <div
                      className={`py-7 px-8 bg-white bg-opacity-60 border-2 ${
                        openFAQ === index
                          ? "border-indigo-600"
                          : "border-gray-200"
                      } rounded-2xl shadow-10xl transition-all duration-300`}
                    >
                      <div className="flex items-center justify-between -m-2">
                        <div className="flex-1 p-2 text-left">
                          <h3 className="text-lg font-semibold leading-normal">
                            {faq.question}
                          </h3>
                          <div
                            className={`overflow-hidden transition-max-height duration-300 ease-in-out ${
                              openFAQ === index ? "max-h-screen" : "max-h-0"
                            }`}
                            style={{
                              maxHeight: openFAQ === index ? "1000px" : "0",
                            }}
                          >
                            <p className="text-gray-600 mt-2 font-medium">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                        <div className="w-auto p-2">
                          <svg
                            className={`relative top-1 transition-transform duration-300 ${
                              openFAQ === index ? "transform rotate-180" : ""
                            }`}
                            width={20}
                            height={20}
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d={`M4.16732 12.5L10.0007 6.66667L15.834 12.5`}
                              stroke="#4F46E5"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
              ))}
            </div>
            <div className="text-gray-600 text-center font-medium">
              <p>TIENES PREGUNTAS ADICIONALES?</p>
              <a
                className="font-semibold text-indigo-600 hover:text-indigo-700"
                href="/About"
              >
                Contáctanos
              </a>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
