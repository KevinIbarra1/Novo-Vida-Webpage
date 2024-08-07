import React from "react";

export default function IndexSectionFooters9() {
  return (
    <React.Fragment>
      <section className="relative py-11 overflow-hidden bg-black flex items-center justify-center">
        <div className="relative z-10 container mx-auto text-center">
          <div className="flex flex-wrap justify-center items-center w-full">
            <div className="w-full sm:w-auto p-4 sm:p-8">
              <a href="/" className="text-blue-500 font-bold text-lg sm:text-lg md:text-xl lg:text-2xl">
                Novovida Gym Club
              </a>
            </div>
            <div className="w-full sm:w-auto p-4 sm:p-8">
              <ul className="flex flex-col sm:flex-row justify-center items-center">
                <li className="flex items-center my-2 sm:my-0">
                  <a
                    className="text-white hover:text-gray-300 font-medium px-2 py-1 sm:px-4 text-sm sm:text-base"
                    href="/"
                  >
                    INICIO
                  </a>
                  <span className="hidden sm:inline text-white sm:mx-2">|</span>
                </li>
                <li className="flex items-center my-2 sm:my-0">
                  <a
                    className="text-white hover:text-gray-300 font-medium px-2 py-1 sm:px-4 text-sm sm:text-base"
                    href="/Services"
                  >
                    SERVICIOS
                  </a>
                  <span className="hidden sm:inline text-white sm:mx-2">|</span>
                </li>
                <li className="flex items-center my-2 sm:my-0">
                  <a
                    className="text-white hover:text-gray-300 font-medium px-2 py-1 sm:px-4 text-sm sm:text-base"
                    href="/Memberships"
                  >
                    MEMBRESIAS
                  </a>
                  <span className="hidden sm:inline text-white sm:mx-2">|</span>
                </li>
                <li className="flex items-center my-2 sm:my-0">
                  <a
                    className="text-white hover:text-gray-300 font-medium px-2 py-1 sm:px-4 text-sm sm:text-base"
                    href="/About"
                  >
                    NOSOTROS
                  </a>
                  <span className="hidden sm:inline text-white sm:mx-2">|</span>
                </li>
                <li className="flex items-center my-2 sm:my-0">
                  <a
                    className="text-white hover:text-gray-300 font-medium px-2 py-1 sm:px-4 text-sm sm:text-base"
                    href="/BLOG"
                  >
                    BLOG
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full sm:w-auto p-4 sm:p-8">
              <div className="flex justify-center sm:justify-start space-x-4">
                <div className="w-auto p-1.5">
                  <a href="https://www.instagram.com/novovidagymclubpr/">
                    <img
                      src="instagram.svg"
                      alt="Instagram"
                      className="w-6 h-6 text-pink-600"
                    />
                  </a>
                </div>
                {/* <div className="w-auto p-1.5">
                  <a href="#">
                    <img
                      src="tiktok.svg"
                      alt="TikTok"
                      className="w-6 h-6 text-pink-600"
                    />
                  </a>
                </div> */}
                <div className="w-auto p-1.5">
                  <a href="https://www.facebook.com/profile.php?id=100087636903551">
                    <img
                      src="facebook.svg"
                      alt="Facebook"
                      className="w-6 h-6 text-pink-600"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
