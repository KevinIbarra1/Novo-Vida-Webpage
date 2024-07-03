import React, { useState } from 'react';

export default function IndexSectionNavigations4() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <React.Fragment>
      <section className="overflow-hidden">
        <div className="flex items-center justify-between px-7 xl:px-40 py-5 lg:py-7 bg-white navColor">
          <div className="w-auto">
            <div className="flex flex-wrap items-center">
              <div className="w-auto mr-14 flex items-center">
                <a href="/" className="flex items-center">
                  <img src="NovoVidaLogo.png" alt="Novo Vida Logo" className="h-8" />
                  <span className="ml-2 text-poppins font-bold text-2xl">Novo Vida Gym Club</span>
                </a>
              </div>
            </div>
          </div>
          <div className="w-auto">
            <div className="flex flex-wrap items-center">
              <div className="w-auto hidden lg:block">
                <ul className="flex items-center mr-16">
                  <li className="mr-9 font-medium hover:text-gray-700"><a href="/" className="navTextOption">INICIO</a></li>
                  <li className="mr-9 font-medium hover:text-gray-700"><a href="/Services" className="navTextOption">SERVICIOS</a></li>
                  <li className="mr-9 font-medium hover:text-gray-700"><a href="/Memberships" className="navTextOption">MEMBRESIAS</a></li>
                  <li className="mr-9 font-medium hover:text-gray-700"><a href="/About" className="navTextOption">SOBRE NOSOTROS</a></li>
                  <li className="font-medium hover:text-gray-700"><a href="/BLOG" className="navTextOption">BLOG</a></li>
                </ul>
              </div>
              <div className="w-auto lg:hidden">
                <button onClick={toggleMenu} className="navbar-burger text-indigo-600">
                  <svg width={51} height={51} viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width={56} height={56} rx={28} fill="currentColor" />
                    <path d="M37 32H19M37 24H19" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={`fixed inset-0 z-50 bg-blue-NV transition-transform transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="absolute top-5 right-5">
            <button onClick={toggleMenu} className="text-white">
              <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 18L18 6M6 6L18 18" stroke="#FFFFFF" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
          <nav className="flex flex-col items-center justify-center h-full">
            <ul className="text-center">
              <li className="mb-12"><a className="text-white text-lg font-medium hover:text-gray-400" href="#">HOME</a></li>
              <li className="mb-12"><a className="text-white text-lg font-medium hover:text-gray-400" href="#">SERVICES</a></li>
              <li className="mb-12"><a className="text-white text-lg font-medium hover:text-gray-400" href="#">MEMBERSHIPS</a></li>
              <li className="mb-12"><a className="text-white text-lg font-medium hover:text-gray-400" href="#">BLOG</a></li>
              <li className="mb-12"><a className="text-white text-lg font-medium hover:text-gray-400" href="#">ABOUT</a></li>
            </ul>
          </nav>
        </div>
      </section>
    </React.Fragment>
  );
}
