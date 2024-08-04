import React from "react";

export default function BeforeAndAfter() {
  return (
    <div className="pb-12">
      <h4 className="font-semibold text-3xl text-center mb-6">Caso de Éxito</h4>
      <div className="flex flex-col md:flex-row md:space-x-4 justify-around items-center space-y-8 md:space-y-0">
        {/* Before Image Section */}
        <div className="text-center flex-1">
          <h5 className="font-semibold text-gray-800 mb-4 text-xl">Antes</h5>
          <div
            className="overflow-hidden  rounded-md max-w-full mx-auto"
            style={{ maxWidth: "350px", height: "500px" }}
          >
            <img
              src="beforeClarimar.webp"
              alt="Antes"
              className="h-full w-full object-contain"
            />
          </div>
        </div>
        {/* After Image Section */}
        <div className="text-center flex-1">
          <h5 className="font-semibold text-gray-800 mb-4 text-xl">Después</h5>
          <div
            className="overflow-hidden rounded-md max-w-full mx-auto"
            style={{ maxWidth: "350px", height: "500px" }}
          >
            <img
              src="IMG_7647.webp"
              alt="Después"
              className="h-full w-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
