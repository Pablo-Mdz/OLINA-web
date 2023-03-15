import React from "react";
import {Link} from "react-router-dom";


export const NavBar = () => {
    return (
        <div className="bg-violet-600 font-pop">
            <nav className="flex justify-between items-center px-4 py-3">
            {/* <div className="mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16"> */}
                <div className="text-white font-bold text-2xl">
                  OLINA
                </div>
                <div className="flex">
                    <a
                        href="/"
                        className="text-white font-medium mx-3 hover:text-gray-400"
                    >
                        Inicio
                    </a>
                    <a
                        href="/menu"
                        className="text-white font-medium mx-3 hover:text-gray-400"
                    >
                        Posts
                    </a>
                    <a
                        href="/menu"
                        className="text-white font-medium mx-3 hover:text-gray-400"
                    >
                        Gallery
                    </a>
                    <a
                        href="/galery"
                        className="text-white font-medium mx-3 hover:text-gray-400"
                    >
                        Flege
                    </a>

                    <Link
                        to="/Contact"
                        className="text-white font-medium mx-3 hover:text-gray-400"
                    >
                        Contacto
                    </Link>
                </div>
            {/* </div>
            </div> */}
            </nav>
        </div>
    );
};
