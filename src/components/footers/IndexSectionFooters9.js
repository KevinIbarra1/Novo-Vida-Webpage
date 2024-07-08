import React from 'react';

export default function IndexSectionFooters9() {
    return (
        <React.Fragment>
            <section className="relative py-16 overflow-hidden bg-black">
                <div className="relative z-10 container px-4 mx-auto">
                    <div className="flex flex-wrap justify-between items-center -m-8">
                        <div className="w-auto p-8">
                            <a href="/" className="text-blue-500 font-bold text-lg">
                                Novo Vida Gym Club
                            </a>
                        </div>
                        <div className="w-auto p-8">
                            <ul className="flex flex-wrap items-center -m-5">
                                <li className="p-5">
                                    <a className="text-white hover:text-gray-300 font-medium" href="/">INICIO</a>
                                </li>
                                <li className="p-5">
                                    <a className="text-white hover:text-gray-300 font-medium" href="/Services">SERVICIOS</a>
                                </li>
                                <li className="p-5">
                                    <a className="text-white hover:text-gray-300 font-medium" href="/Memberships">MEMBRESIAS</a>
                                </li>
                                <li className="p-5">
                                    <a className="text-white hover:text-gray-300 font-medium" href="/About">SOBRE NOSOTROS</a>
                                </li>
                                <li className="p-5">
                                    <a className="text-white hover:text-gray-300 font-medium" href="/BLOG">BLOG</a>
                                </li>
                            </ul>
                        </div>
                        <div className="w-auto p-8">
                            <div className="flex flex-wrap -m-1.5">
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
