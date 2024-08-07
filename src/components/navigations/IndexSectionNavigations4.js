import React, { useState } from "react";

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
                  <img
                    src="NovoVidaLogo.png"
                    alt="Novovida Logo"
                    className="h-8 md:h-8"
                  />
                  <span className="ml-2 text-poppins font-bold text-lg md:text-xl">
                    Novovida Gym Club
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="w-auto">
            <div className="flex flex-wrap items-center">
              <div className="w-auto hidden lg:block">
                <ul className="flex items-center">
                  <li className="flex items-center">
                    <a
                      href="/"
                      className=" px-4 font-medium hover:text-gray-700 text-lg md:text-xl navTextOption"
                    >
                      INICIO
                    </a>
                    <span className="text-black">|</span>
                  </li>
                  <li className="flex items-center">
                    <a
                      href="/Services"
                      className="navTextOption px-4 font-medium hover:text-gray-700 text-lg md:text-xl"
                    >
                      SERVICIOS
                    </a>
                    <span className="text-black">|</span>
                  </li>
                  <li className="flex items-center">
                    <a
                      href="/Memberships"
                      className="navTextOption px-4 font-medium hover:text-gray-700 text-lg md:text-xl"
                    >
                      MEMBRESIAS
                    </a>
                    <span className="text-black">|</span>
                  </li>
                  <li className="flex items-center">
                    <a
                      href="/About"
                      className="navTextOption px-4 font-medium hover:text-gray-700 text-lg md:text-xl"
                    >
                       NOSOTROS
                    </a>
                    <span className="text-black">|</span>
                  </li>
                  <li className="flex items-center">
                    <a
                      href="/BLOG"
                      className="navTextOption px-4 font-medium hover:text-gray-700 text-lg md:text-xl"
                    >
                      BLOG
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-auto lg:hidden">
                <button
                  onClick={toggleMenu}
                  className="navbar-burger text-indigo-600"
                >
                  <svg
                    width={51}
                    height={51}
                    viewBox="0 0 56 56"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width={56} height={56} rx={28} fill="currentColor" />
                    <path
                      d="M37 32H19M37 24H19"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`fixed inset-0 z-50 bg-blue-NV transition-transform transform ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="absolute top-5 right-5">
            <button onClick={toggleMenu} className="text-white">
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 18L18 6M6 6L18 18"
                  stroke="#FFFFFF"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <nav className="flex flex-col items-center justify-center h-full">
            <ul className="text-center">
              <li className="mb-12">
                <a
                  className="text-white text-lg md:text-xl font-medium hover:text-gray-400"
                  href="/"
                >
                  INICIO
                </a>
              </li>
              <li className="mb-12">
                <a
                  className="text-white text-lg md:text-xl font-medium hover:text-gray-400"
                  href="/Services"
                >
                  SERVICIOS
                </a>
              </li>
              <li className="mb-12">
                <a
                  className="text-white text-lg md:text-xl font-medium hover:text-gray-400"
                  href="/Memberships"
                >
                  MEMBRESIAS
                </a>
              </li>
              <li className="mb-12">
                <a
                  className="text-white text-lg md:text-xl font-medium hover:text-gray-400"
                  href="/About"
                >
                   NOSOTROS
                </a>
              </li>
              <li className="mb-12">
                <a
                  className="text-white text-lg md:text-xl font-medium hover:text-gray-400"
                  href="/BLOG"
                >
                  BLOG
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    </React.Fragment>
  );
}
