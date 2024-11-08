import React from "react";

export default function IndexSectionCta5() {
  return (
    <React.Fragment>
      <section
        className="relative bg-no-repeat bg-center bg-cover overflow-hidden"
        style={{ backgroundImage: 'url("labarra.jpg")', height: "35vh" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm"></div>
        <div className="relative py-20 container px-4 mx-auto text-center text-white flex items-center justify-center h-full">
          <div className="max-w-3xl mx-auto">
          <h2 className="mb-4 text-3xl md:text-6xl font-bold">
          Un cuerpo <span className="text-blue-NV">activo</span>
            </h2>
            <h2 className="mb-4 text-3xl md:text-6xl font-bold">
              es una mente <span className="text-blue-NV">positiva</span> y <span className="text-pink-NV">productiva</span>
            </h2>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
