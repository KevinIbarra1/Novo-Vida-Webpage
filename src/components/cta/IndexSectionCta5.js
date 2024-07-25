import React from 'react';

export default function IndexSectionCta5() {
  return (
    <React.Fragment>
      <>
        <section
          className="bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("image00022.webp")' }}
        >
          <div
            className="bg-black bg-opacity-60 py-40"
            style={{ backdropFilter: "blur(9px)" }}
          >
            <div className="container px-4 mx-auto">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="mb-4 text-white text-3xl md:text-6xl font-bold">
                  TE <span className="text-blue-NV">AYUDAMOS</span> A <span className="text-pink-NV">CONSTRUIR</span>
                </h2>
                <h2 className="mb-4 text-white text-3xl md:text-6xl font-bold">
                  UNA <span className="text-blue-NV">NUEVA</span> <span className="text-pink-NV">VIDA</span>
                </h2>
                {/* <div className="md:inline-block">
                  <button className="py-4 px-6 w-full md:w-auto text-white font-semibold border border-transparent rounded-xl shadow-4xl focus:ring focus:ring-blue-300 bg-blue-500 hover:bg-blue-600 transition ease-in-out duration-200" type="button">
                    Become a member
                  </button>
                </div> */}
              </div>
            </div>
          </div>
        </section>
      </>
    </React.Fragment>
  );
}
