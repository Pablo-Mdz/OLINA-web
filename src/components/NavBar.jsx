import React from "react";
import {Link} from "react-router-dom";

export const NavBar = () => {
    return (
        <div className="bg-violet-600 font-pop">
            <nav className="flex justify-between items-center px-4 py-3">
                {/* <div className="mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16"> */}
                <div className="text-white font-bold text-2xl">OLINA</div>
                <div className="flex">
                    <a
                        href="/"
                        className="text-white font-medium mx-3 hover:text-gray-400"
                    >
                        Home
                    </a>
                    <a
                        href="/allPost"
                        className="text-white font-medium mx-3 hover:text-gray-400"
                    >
                        Posts
                    </a>
                    {/* <a
                        href="/post"
                        className="text-white font-medium mx-3 hover:text-gray-400"
                    >
                        Post details
                    </a> */}
                    <a
                        href="/gallery"
                        className="text-white font-medium mx-3 hover:text-gray-400"
                    >
                        Gallery
                    </a>
                    <a
                        href="/about"
                        className="text-white font-medium mx-3 hover:text-gray-400"
                    >
                        About me
                    </a>
                    <a
                        href="/wordlist"
                        className="text-white font-medium mx-3 hover:text-gray-400"
                    >
                        Word List
                    </a>

                    <Link
                        to="/contactMe"
                        className="text-white font-medium mx-3 hover:text-gray-400"
                    >
                        Contactame
                    </Link>
                </div>
                {/* </div>
            </div> */}
            </nav>
        </div>
    );
};
