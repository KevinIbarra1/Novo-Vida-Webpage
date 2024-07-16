import React from "react";

export default function IndexSectionTestimonials7() {
  return (
    <React.Fragment>
      <section className="py-16 bg-white overflow-hidden">
        <div className="container px-4 mx-auto flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/3 flex justify-center">
            <img
              className="rounded-xl"
              src="excercicsing.jpg"
              alt="Fitness Importance"
            />
          </div>
          <div className="md:w-1/2 md:pl-12 mt-8 md:mt-0">
            <h2 className="mb-4 text-3xl md:text-4xl font-bold text-center md:text-left">
              ¿POR QUÉ EL <span className="text-blue-500">FITNESS</span> ES
              IMPORTANTE?
            </h2>
            <p className="text-lg text-gray-900 text-center md:text-left">
              Comenzar una vida fitness te permitirá sentirte más saludable,
              lleno de energía y capaz de enfrentar cualquier desafío. El
              ejercicio regular no solo fortalecerá tu cuerpo y reducirá el
              riesgo de enfermedades, sino que también liberará endorfinas que
              te harán sentir más feliz y relajado. ¡Da el primer paso hoy y
              empieza a construir tu nueva vida con nosotros en Novo Vida!
            </p>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
