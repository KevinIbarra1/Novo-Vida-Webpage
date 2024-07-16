import React from 'react';

export default function IndexSectionFooters9() {
    return (
        <React.Fragment>
            <section className="relative py-16 overflow-hidden bg-black h-screen flex items-center justify-center">
                <div className="relative z-10 container px-4 mx-auto text-center">
                    <div className="flex flex-wrap justify-center items-center">
                        <div className="w-auto p-8">
                            <a href="/" className="text-blue-500 font-bold text-lg">
                                Novo Vida Gym Club
                            </a>
                        </div>
                        <div className="w-auto p-8">
                            <ul className="flex justify-center items-center">
                                <li className="flex items-center">
                                    <a className="text-white hover:text-gray-300 font-medium px-4" href="/">INICIO</a>
                                    <span className="text-white">|</span>
                                </li>
                                <li className="flex items-center">
                                    <a className="text-white hover:text-gray-300 font-medium px-4" href="/Services">SERVICIOS</a>
                                    <span className="text-white">|</span>
                                </li>
                                <li className="flex items-center">
                                    <a className="text-white hover:text-gray-300 font-medium px-4" href="/Memberships">MEMBRESIAS</a>
                                    <span className="text-white">|</span>
                                </li>
                                <li className="flex items-center">
                                    <a className="text-white hover:text-gray-300 font-medium px-4" href="/About">SOBRE NOSOTROS</a>
                                    <span className="text-white">|</span>
                                </li>
                                <li className="flex items-center">
                                    <a className="text-white hover:text-gray-300 font-medium px-4" href="/BLOG">BLOG</a>
                                </li>
                            </ul>
                        </div>
                        <div className="w-auto p-8">
                            <div className="flex justify-center space-x-4">
                                <div className="w-auto p-1.5">
                                    <a href="https://www.instagram.com/novovidagymclubpr/">
                                        <img src="instagram.svg" alt="Instagram" className="w-6 h-6 text-pink-600" />
                                    </a>
                                </div>
                                <div className="w-auto p-1.5">
                                    <a href="#">
                                        <img src="tiktok.svg" alt="TikTok" className="w-6 h-6 text-pink-600" />
                                    </a>
                                </div>
                                <div className="w-auto p-1.5">
                                    <a href="https://www.facebook.com/profile.php?id=100087636903551">
                                        <img src="facebook.svg" alt="Facebook" className="w-6 h-6 text-pink-600" />
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
