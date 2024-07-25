import React from "react";

export default function AboutSectionCta10() {
  return (
    <React.Fragment>
      <>
        <section
          className="bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("image00037.jpeg")' }}
        >
          <div
            className="bg-black bg-opacity-60 py-28"
            style={{ backdropFilter: "blur(12px)" }}
          >
            <div className="container px-4 mx-auto">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="mb-4 text-white text-6xl md:text-6xl font-bold">
                  Sobre Nosotros
                </h2>
                <div className="md:inline-block"></div>
              </div>
            </div>
          </div>
        </section>
      </>
    </React.Fragment>
  );
}
