import React from "react";

export default function BeforeAndAfter() {
  return (
    <div className="pb-12">
      <h4 className="mb-16 text-6xl md:text-7xl font-bold font-heading text-center tracking-px-n leading-tight">
        Casos de Éxito
      </h4>
      <div
        className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-0" // 50px gap on mobile, no gap on desktop
        style={{ gap: "50px" }} // Ensures 50px on small screens
      >
        {/* Before Image Section */}
        <div className="text-center flex-1">
          <div
            className="overflow-hidden rounded-md mx-auto"
            style={{ maxWidth: "400px", height: "400px" }} // Fixed size
          >
            <img
              src="AracellysBeforeAfter.webp"
              alt="Antes"
              className="w-full h-full object-contain" // Prevent distortion
            />
          </div>
        </div>
        {/* After Image Section */}
        <div className="text-center flex-1">
          <div
            className="overflow-hidden rounded-md mx-auto"
            style={{ maxWidth: "400px", height: "400px" }} // Fixed size
          >
            <img
              src="ClarimarBeforeAfter.webp"
              alt="Después"
              className="w-full h-full object-contain" // Prevent distortion
            />
          </div>
        </div>
      </div>
    </div>
  );
}
