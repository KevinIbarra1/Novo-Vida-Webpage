import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import IndexSectionNavigations4 from "../components/navigations/IndexSectionNavigations4";
import BlogSectionBlog2 from "../components/blog/BlogSectionBlog2";
import IndexSectionFooters9 from "../components/footers/IndexSectionFooters9";

const meta = {
  title: "Blog de Fitness y Salud de Novovida - La Importancia de la Dieta y el Ejercicio para Perder Peso",
  meta: [
    {
      name: "keywords",
      content: "blog de fitness, consejos de salud, perder peso, dieta y ejercicio, bienestar, gimnasio Novovida",
    },
    {
      name: "description",
      content: "Descubre cómo una dieta equilibrada y el ejercicio regular son esenciales para perder peso y mantener un estilo de vida saludable. Lee más en el blog de Novovida.",
    },
  ],
  link: [],
  style: [],
  script: [],
};

export default function Blog() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <IndexSectionNavigations4 />
      <div className="p-6 bg-white text-black">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mt-6">
            La Importancia de la Dieta y el Ejercicio para Perder Peso
          </h1>
          <div className="w-full mt-6">
            <img
              src="/weightloss.jpg"
              alt="Fitness and Health"
              className="w-full lg:w-1/3 object-cover rounded-lg mb-4 lg:mb-0 lg:mr-6 float-left"
              style={{ float: 'left', margin: '0 20px 20px 0' }} // Increased margin
            />
            <p className="text-lg text-justify mb-4">
              Perder peso es un objetivo común para muchas personas, y dos componentes clave para lograrlo son la dieta y el ejercicio. Si bien ambos son esenciales, entender cómo funcionan juntos puede ayudarte a alcanzar tus metas de forma más efectiva.
            </p>
            <p className="text-lg text-justify mb-4">
              La dieta es fundamental cuando se trata de perder peso. Esto se debe a que la cantidad de calorías que consumes debe ser menor que la cantidad de calorías que quemas. Elegir alimentos ricos en nutrientes y bajos en calorías, como frutas, verduras, proteínas magras y granos enteros, puede ayudarte a sentirte satisfecho mientras reduces la ingesta calórica.
            </p>
            <p className="text-lg text-justify mb-4">
              El ejercicio regular no solo ayuda a quemar calorías, sino que también mejora la salud cardiovascular, fortalece los músculos y aumenta el bienestar general. Actividades como correr, nadar, levantar pesas y practicar yoga pueden ser muy beneficiosas. La clave es encontrar una rutina que disfrutes y que puedas mantener a largo plazo.
            </p>
            <p className="text-lg text-justify mb-4">
              Para obtener los mejores resultados, combina una dieta saludable con un programa de ejercicio regular. No solo verás una pérdida de peso más rápida, sino que también mejorarás tu estado de ánimo, energía y salud general. Recuerda que cada persona es diferente, por lo que es importante encontrar un equilibrio que funcione para ti.
            </p>
            <p className="text-lg text-justify mb-4">
              Perder peso no es una tarea fácil, pero con una combinación de dieta equilibrada y ejercicio regular, es completamente alcanzable. En Novovida, estamos aquí para apoyarte en cada paso de tu viaje hacia un estilo de vida más saludable. ¡Comienza hoy y siente la diferencia!
            </p>
          </div>
        </div>
      </div>
      <IndexSectionFooters9 />
    </React.Fragment>
  );
}
