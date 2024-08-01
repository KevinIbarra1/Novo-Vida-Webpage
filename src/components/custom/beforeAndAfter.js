import React from 'react';

export default function BeforeAndAfter() {
    return (
        <React.Fragment>
            <div className="bg-gray-100 p-8">
                <h4 className="font-semibold text-lg text-center mb-6">Caso de Éxito</h4>
                <div className="flex justify-around items-center">
                    <div className="text-center">
                        <h5 className="font-semibold text-gray-800 mb-4">Antes</h5>
                        <div className="overflow-hidden h-40 w-40 relative">
                            <img src="beforeClarimar.webp" alt="Antes" className="shadow-lg rounded-md absolute top-0 left-0 h-full w-full object-cover" style={{ objectPosition: 'center top' }} />
                        </div>
                    </div>
                    <div className="text-center">
                        <h5 className="font-semibold text-gray-800 mb-4">Después</h5>
                        <div className="overflow-hidden h-60 w-60 relative">
                            <img src="IMG_7647.webp" alt="Después" className="shadow-lg rounded-md absolute top-0 left-0 h-full w-full object-cover" />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
