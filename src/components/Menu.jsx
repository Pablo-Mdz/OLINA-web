import React from "react";

export const Menu = () => {
    return (
        <div className="bg-gray-100 font-pop" style={{
            // backgroundImage: "url('./../assets/11.png')",
            backgroundImage: "url('https://res.cloudinary.com/be-chef/image/upload/v1672792193/ds4fsmo4ivw6a7ddwl7j.jpg')",
        }}>
        {/* className="h-screen bg-center bg-cover " */}
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="lg:flex lg:items-center lg:justify-between">
                    <h2 className="text-3xl font-extrabold tracking-tight text-gothic sm:text-4xl">
                        Menú
                    </h2>
                </div>
                <div className="mt-8 grid grid-cols-1 gap-12 lg:grid-cols-2 xl:grid-cols-4">
                    {/* Menú 1 */}
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <div className="px-6 py-4">
                            <h3 className="text-lg font-medium text-gray-900">
                                Menú 1
                            </h3>
                            <div className="mt-2">
                                <p className="text-sm text-gray-500">
                                    Incluye 2 entradas, 1 plato principal y 1
                                    postre.
                                </p>
                            </div>
                            <div className="mt-4">
                                <h4 className="text-gray-600 font-bold text-lg mb-2">
                                    Entradas
                                </h4>
                                <ul className="list-disc pl-5">
                                    <li>Ensalada de la casa</li>
                                    <li>Tortilla de patatas</li>
                                </ul>
                            </div>
                            <div className="mt-4">
                                <h4 className="text-gray-600 font-bold text-lg mb-2">
                                    Plato principal
                                </h4>
                                <p>Paella de mariscos</p>
                            </div>
                            <div className="mt-4">
                                <h4 className="text-gray-600 font-bold text-lg mb-2">
                                    Postre
                                </h4>
                                <p>Crema catalana</p>
                            </div>
                            <div className="mt-4">
                                <h4 className="text-gray-600 font-bold text-lg mb-2">
                                    Precio
                                </h4>
                                <p className="text-green-600 font-bold">
                                    $35.00
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Menú 2 */}
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <div className="px-6 py-4">
                            <h3 className="text-lg font-medium text-gray-900">
                                Menú 2
                            </h3>
                            <div className="mt-2">
                                <p
                                    className="text-sm text-gray-500"
                                >
                                    Incluye 2 entradas, 1 plato principal y 1
                                    postre.
                                </p>
                            </div>
                            <div className="mt-4">
                                <h4 className="text-gray-600 font-bold text-lg mb-2">
                                    Entradas
                                </h4>
                                <ul className="list-disc pl-5">
                                    <li>Calamares a la romana</li>
                                    <li>Gambas al ajillo</li>
                                </ul>
                            </div>
                            <div className="mt-4">
                                <h4 className="text-gray-600 font-bold text-lg mb-2">
                                    Plato principal
                                </h4>
                                <p>Cochinillo asado</p>
                            </div>
                            <div className="mt-4">
                                <h4 className="text-gray-600 font-bold text-lg mb-2">
                                    Postre
                                </h4>
                                <p>Tarta de Santiago</p>
                            </div>
                            <div className="mt-4">
                                <h4 className="text-gray-600 font-bold text-lg mb-2">
                                    Precio
                                </h4>
                                <p className="text-green-600 font-bold">
                                    $45.00
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Menú 3 */}
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <div className="px-6 py-4">
                            <h3 className="text-lg font-medium text-gray-900">
                                Menú 3
                            </h3>
                            <div className="mt-2">
                                <p className="text-sm text-gray-500">
                                    Incluye 2 entradas, 1 plato principal y 1
                                    postre.
                                </p>
                            </div>
                            <div className="mt-4">
                                <h4 className="text-gray-600 font-bold text-lg mb-2">
                                    Entradas
                                </h4>
                                <ul className="list-disc pl-5">
                                    <li>Croquetas de jamón</li>
                                    <li>Patatas bravas</li>
                                </ul>
                            </div>
                            <div className="mt-4">
                                <h4 className="text-gray-600 font-bold text-lg mb-2">
                                    Plato principal
                                </h4>
                                <p>Arroz con pollo</p>
                            </div>
                            <div className="mt-4">
                                <h4 className="text-gray-600 font-bold text-lg mb-2">
                                    Postre
                                </h4>
                                <p>Flan de huevo</p>
                            </div>
                            <div className="mt-4">
                                <h4 className="text-gray-600 font-bold text-lg mb-2">
                                    Precio
                                </h4>
                                <p className="text-green-600 font-bold">
                                    $30.00
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Menú 4 */}
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <div className="px-6 py-4">
                            <h3 className="text-lg font-medium text-gray-900">
                                Menú 4
                            </h3>
                            <div className="mt-2">
                                <p className="text-sm text-gray-500">
                                    Incluye 2 entradas, 1 plato principal y 1
                                    postre.
                                </p>
                            </div>
                            <div className="mt-4">
                                <h4 className="text-gray-600 font-bold text-lg mb-2">
                                    Entradas
                                </h4>
                                <ul className="list-disc pl-5">
                                    <li>Pulpo a la gallega</li>
                                    <li>Tortilla española</li>
                                </ul>
                            </div>
                            <div className="mt-4">
                                <h4 className="text-gray-600 font-bold text-lg mb-2">
                                    Plato principal
                                </h4>
                                <p>Paella mixta</p>
                            </div>
                            <div className="mt-4">
                                <h4 className="text-gray-600 font-bold text-lg mb-2">
                                    Postre
                                </h4>
                                <p>Crema catalana</p>
                            </div>
                            <div className="mt-4">
                                <h4 className="text-gray-600 font-bold text-lg mb-2">
                                    Precio
                                </h4>
                                <p className="text-green-600 font-bold">
                                    $50.00
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
                    {/* Menú 5 */}
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <div className="px-6 py-4">
                            <h3 className="text-lg font-medium text-gray-900">
                                Menú para eventos 1
                            </h3>
                            <div className="mt-2">
                                <p className="text-sm text-gray-500">
                                    Incluye variedad de platos españoles y
                                    tapas.
                                </p>
                            </div>
                            <div className="mt-4">
                                <h4 className="text-gray-600 font-bold text-lg mb-2">
                                    Platos españoles
                                </h4>
                                <ul className="list-disc pl-5">
                                    <li>Pulpo a la gallega</li>
                                    <li>Croquetas de jamón</li>
                                    <li>Tortilla española</li>
                                    <li>Gazpacho</li>
                                    <li>Paella mixta</li>
                                </ul>
                            </div>
                            <div className="mt-4">
                                <h4 className="text-gray-600 font-bold text-lg mb-2">
                                    Tapas
                                </h4>
                                <ul className="list-disc pl-5">
                                    <li>Patatas bravas</li>
                                    <li>Boquerones en vinagre</li>
                                    <li>Queso manchego</li>
                                    <li>Jamón ibérico</li>
                                </ul>
                            </div>
                            <div className="mt-4">
                                <h4 className="text-gray-600 font-bold text-lg mb-2">
                                    Precio
                                </h4>
                                <p className="text-green-600 font-bold">
                                    $70.00 por persona
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Menú 6 */}
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <div className="px-6 py-4">
                            <h3 className="text-lg font-medium text-gray-900">
                                Menú para eventos 2
                            </h3>
                            <div className="mt-2">
                                <p className="text-sm text-gray-500">
                                    Incluye variedad de platos españoles y
                                    tapas.
                                </p>
                            </div>
                            <div className="mt-4">
                                <h4 className="text-gray-600 font-bold text-lg mb-2">
                                    Platos españoles
                                </h4>
                                <ul className="list-disc pl-5">
                                    <li>Gazpacho</li>
                                    <li>Callos a la madrileña</li>
                                    <li>Tortilla española</li>
                                    <li>Paella mixta</li>
                                </ul>
                            </div>
                            <div className="mt-4">
                                <h4 className="text-gray-600 font-bold text-lg mb-2">
                                    Tapas
                                </h4>
                                <ul className="list-disc pl-5">
                                    <li>Patatas bravas</li>
                                    <li>Pimientos de Padrón</li>
                                    <li>Chorizo al vino</li>
                                    <li>Jamón ibérico</li>
                                </ul>
                            </div>
                            <div className="mt-4">
                                <h4 className="text-gray-600 font-bold text-lg mb-2">
                                    Precio
                                </h4>
                                <p className="text-green-600 font-bold">
                                    $80.00 por persona
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Menú 7 */}
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <div className="px-6 py-4">
                            <h3 className="text-lg font-medium text-gray-900">
                                Menú para eventos 3
                            </h3>
                            <div className="mt-2">
                                <p className="text-sm text-gray-500">
                                    Incluye variedad de platos españoles y
                                    tapas.
                                </p>
                            </div>
                            <div className="mt-4">
                                <h4 className="text-gray-600 font-bold text-lg mb-2">
                                    Platos españoles
                                </h4>
                                <ul className="list-disc pl-5">
                                    <li>Gazpacho</li>
                                    <li>Croquetas de pollo</li>
                                    <li>Ensalada de tomate y queso</li>
                                    <li>Fideuá</li>
                                </ul>
                            </div>
                            <div className="mt-4">
                                <h4 className="text-gray-600 font-bold text-lg mb-2">
                                    Tapas
                                </h4>
                                <ul className="list-disc pl-5">
                                    <li>Patatas bravas</li>
                                    <li>Croquetas de jamón</li>
                                    <li>Queso manchego</li>
                                    <li>Jamón ibérico</li>
                                </ul>
                            </div>
                            <div className="mt-4">
                                <h4 className="text-gray-600 font-bold text-lg mb-2">
                                    Precio
                                </h4>
                                <p className="text-green-600 font-bold">
                                    $75.00 por persona
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Menú 8 */}
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <div className="px-6 py-4">
                            <h3 className="text-lg font-medium text-gray-900">
                                Menú para eventos 4
                            </h3>
                            <div className="mt-2">
                                <p className="text-sm text-gray-500">
                                    Incluye variedad de platos españoles y
                                    tapas.
                                </p>
                            </div>
                            <div className="mt-4">
                                <h4 className="text-gray-600 font-bold text-lg mb-2">
                                    Platos españoles
                                </h4>
                                <ul className="list-disc pl-5">
                                    <li>Salmorejo</li>

                                    <li>Paella de mariscos</li>
                                    <li>Empanadillas de atún</li>
                                    <li>Lomo a la plancha</li>
                                </ul>
                            </div>
                            <div className="mt-4">
                                <h4 className="text-gray-600 font-bold text-lg mb-2">
                                    Tapas
                                </h4>
                                <ul className="list-disc pl-5">
                                    <li>Tortilla de patatas</li>
                                    <li>Pimientos de Padrón</li>
                                    <li>Gambas al ajillo</li>
                                    <li>Queso manchego</li>
                                </ul>
                            </div>
                            <div className="mt-4">
                                <h4 className="text-gray-600 font-bold text-lg mb-2">
                                    Precio
                                </h4>
                                <p className="text-green-600 font-bold">
                                    $90.00 por persona
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


