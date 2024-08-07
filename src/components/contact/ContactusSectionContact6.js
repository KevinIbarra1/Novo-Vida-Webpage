import React from 'react';

export default function ContactusSectionContact6() {
    return (
        <React.Fragment>
            <>
                <section className="pt-24 pb-36 bg-white overflow-hidden">
                    <div className="container px-4 mx-auto">
                        <div className="mb-20 text-center md:max-w-xl mx-auto text-left">
                            <h2 className="mb-4 text-6xl md:text-7xl font-bold font-heading tracking-px-n leading-tight">¡Encuéntranos!</h2>
                            <p className="text-lg text-gray-600 font-medium leading-normal md:max-w-lg mx-auto">
                                En Novovida, nos dedicamos a ayudarte a alcanzar tus metas de fitness. Visítanos en Sabana Grande y descubre nuestras instalaciones y entrenadores expertos. ¡Estamos aquí para apoyarte!
                            </p>
                        </div>
                        <div className="flex flex-wrap xl:items-center -m-8 justify-center">
                            <div className="w-full md:w-1/2 p-8">
                                <div className="max-w-max mx-auto overflow-hidden rounded-3xl">
                                    <a href="https://maps.app.goo.gl/gv5Dh6Gn8ck9J1nY7" target="_blank" rel="noopener noreferrer">
                                        <img className="transform hover:scale-105 transition ease-in-out duration-1000" src="https://static.shuffle.dev/uploads/files/6e/6e0f5129d29c66a42389554d32247ff33a40eeff/Screenshot-2024-06-27-at-7-36-45-PM.png" alt="Gym Location" />
                                    </a>
                                </div>
                            </div>
                            <div className="p-8">
                                <p className="mb-4 font-bold uppercase tracking-px text-lg blueText">Email</p>
                                <ul className="mb-12">
                                    <li className="text-lg text-gray-600 font-medium leading-normal">novovidapr@gmail.com</li>
                                </ul>
                                <p className="mb-4 font-bold uppercase tracking-px text-lg blueText">Phone</p>
                                <ul className="mb-14">
                                    <li className="text-lg text-gray-600 font-medium leading-normal">+1 (787) 617-4064</li>
                                </ul>
                                <p className="mb-4 font-bold uppercase tracking-px text-lg blueText">Address</p>
                                <ul>
                                    <li className="text-lg text-gray-600 font-medium leading-normal">Novovida Gym Club, 23R4+23R, </li>
                                    <li className="text-lg text-gray-600 font-medium leading-normal">Sabana Grande, 00637</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        </React.Fragment>
    );
}
