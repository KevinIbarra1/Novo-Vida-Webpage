import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import IndexSectionNavigations4 from "../components/navigations/IndexSectionNavigations4";
import BlogSectionBlog2 from "../components/blog/BlogSectionBlog2";
import IndexSectionFooters9 from "../components/footers/IndexSectionFooters9";

const meta = {
  title: "Blog de Fitness y Salud de Novovida - La Importancia de la Nutrición en el Fitness",
  meta: [
    {
      name: "keywords",
      content: "blog de fitness, consejos de salud, nutrición, dieta y ejercicio, bienestar, gimnasio Novovida",
    },
    {
      name: "description",
      content: "Descubre cómo una dieta equilibrada es fundamental para complementar tu régimen de ejercicios y ayudarte a alcanzar tus metas de fitness. Lee más en el blog de Novovida.",
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
            La Importancia de la Nutrición en el Fitness
          </h1>
          <div className="w-full mt-6">
            <img
              src="pexels-daniela-constantini-5591663.webp"
              alt="Nutrition and Fitness"
              className="w-full lg:w-1/3 object-cover rounded-lg mb-4 lg:mb-0 lg:mr-6 float-left"
              style={{ float: 'left', margin: '0 20px 20px 0' }} // Increased margin
            />
            <p className="text-lg text-justify mb-4">
              La nutrición es un componente crucial del rendimiento físico y la recuperación. Una dieta equilibrada puede complementar tu régimen de ejercicios y ayudarte a alcanzar tus metas de fitness. Los macronutrientes – proteínas, carbohidratos y grasas – son fundamentales para el funcionamiento del cuerpo, y cada uno desempeña un papel vital en tu dieta.
            </p>
            <p className="text-lg text-justify mb-4">
              Además, los micronutrientes, como las vitaminas y los minerales, son esenciales para mantener la salud general. La hidratación también es clave para optimizar el rendimiento, y debes asegurarte de beber suficiente agua antes, durante y después de los entrenamientos. El timing de las comidas es otro aspecto importante; saber cuándo y qué comer antes y después de los ejercicios puede marcar una gran diferencia en tu rendimiento y recuperación.
            </p>
            <p className="text-lg text-justify mb-4">
              Además, aunque no son esenciales para todos, algunos suplementos pueden ser beneficiosos, dependiendo de tus necesidades específicas. Una nutrición adecuada puede potenciar tus entrenamientos, acelerar la recuperación y mejorar tu salud general. En Novovida, te ofrecemos guías y consejos para que puedas mantener una dieta balanceada que complemente tu rutina de ejercicios.
            </p>
          </div>
        </div>
      </div>
      <IndexSectionFooters9 />
    </React.Fragment>
  );
}
