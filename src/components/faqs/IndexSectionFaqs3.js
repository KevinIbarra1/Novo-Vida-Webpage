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
      question: "6. ¿Ofrecen clases de prueba o membresías de prueba?",
      answer:
        "Sí, ofrecemos una clase de prueba gratuita para nuevos miembros y membresías de prueba de una semana para que puedas experimentar nuestras instalaciones y servicios.",
    },
    {
      question: "2. ¿Qué tipos de equipos y servicios ofrecen?",
      answer:
        "Nuestro gimnasio cuenta con una amplia variedad de equipos de última generación, incluyendo máquinas de cardio, pesas libres, y máquinas de resistencia. También ofrecemos clases grupales, entrenamientos personales, y programas de bienestar.",
    },
    {
      question: "3. ¿Cuáles son los horarios de apertura?",
      answer:
        "Nuestro gimnasio está abierto de lunes a viernes de 6:00 a.m. a 10:00 p.m., y los fines de semana de 8:00 a.m. a 8:00 p.m. Queremos asegurarnos de que tengas la flexibilidad para entrenar cuando más te convenga.",
    },
    {
      question: "4. ¿Existen programas de entrenamiento personalizados?",
      answer:
        "Sí, ofrecemos programas de entrenamiento personalizados diseñados por nuestros entrenadores certificados para ayudarte a alcanzar tus objetivos de acondicionamiento físico.",
    },
  ];

  return (
    <React.Fragment>
      <section className="relative pt-24 pb-28 overflow-hidden">
        <img
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
          src="flaro-assets/images/faqs/gradient.svg"
          alt="gradient"
        />
        <div className="relative z-10 container px-4 mx-auto">
          <div className="md:max-w-4xl mx-auto">
            <p className="mb-7 text-sm text-indigo-600 text-center font-semibold uppercase tracking-px">
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
                href="#"
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
