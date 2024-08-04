import React from "react";

export default function BeforeAndAfter() {
  return (
    <div className="pb-12">
      <h4 className="mb-16 text-6xl md:text-7xl font-bold font-heading text-center tracking-px-n leading-tight">
        Caso de Éxito
      </h4>
      <div className="flex flex-col md:flex-row md:space-x-4 justify-around items-center space-y-8 md:space-y-0">
        {/* Before Image Section */}
        <div className="text-center flex-1">
          <h5 className="px-4 font-medium hover:text-gray-700 text-lg md:text-xl navTextOption">
            Antes
          </h5>
          <div
            className="overflow-hidden  rounded-md max-w-full mx-auto"
            style={{ maxWidth: "350px", height: "500px" }}
          >
            <img
              src="beforeClarimar.webp"
              alt="Antes"
              className="h-full w-full object-cover" // Changed from object-contain to object-cover
            />
          </div>
        </div>
        {/* After Image Section */}
        <div className="text-center flex-1">
          <h5 className="px-4 font-medium hover:text-gray-700 text-lg md:text-xl navTextOption">
            Después
          </h5>
          <div
            className="overflow-hidden rounded-md max-w-full mx-auto"
            style={{ maxWidth: "350px", height: "500px" }}
          >
            <img
              src="IMG_7647.webp"
              alt="Después"
              className="h-full w-full object-cover" // Changed from object-contain to object-cover
            />
          </div>
        </div>
      </div>
    </div>
  );
}
