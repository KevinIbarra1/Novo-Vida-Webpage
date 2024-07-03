import React from 'react';

export default function IndexSectionCta5() {
  return (
    <React.Fragment>
      <section className="relative bg-no-repeat bg-center bg-cover bg-fixed overflow-hidden" style={{ backgroundImage: 'url("gymStock.jpg")' }}>
        <div className="absolute inset-0 bg-black bg-opacity-40" style={{ backdropFilter: 'blur(9px)' }}></div>
        <div className="relative py-40 container px-4 mx-auto text-center text-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="mb-4 text-4xl md:text-6xl font-bold">
              LET’S <span className="text-blue-NV">GRIND</span> YOUR <span className="text-pink-NV">BODY</span>
            </h2>
            <h2 className="mb-11 text-4xl md:text-6xl font-bold">
              GET FIT WITH <span className="text-pink-NV">NOVO VIDA</span>
            </h2>
            <div className="inline-block">
              <button className="py-4 px-6 w-full md:w-auto text-white font-semibold border border-transparent rounded-xl shadow-4xl focus:ring focus:ring-blue-300 bg-blue-500 hover:bg-blue-600 transition ease-in-out duration-200" type="button">
                Become a member
              </button>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
