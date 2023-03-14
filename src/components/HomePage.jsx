import React from "react";

export const HomePage = () => {
    return (
        <div className="bg-red-800 ">
            <div
                className="h-screen bg-center bg-cover "
                style={{
                    backgroundImage: "url('https://res.cloudinary.com/be-chef/image/upload/v1678719560/mer01hp5uxn1oryawofe.png')",
                }}
            >
                <div className="h-full flex items-center justify-center">
                    <h1 className="text-white font-bold text-5xl">
                        A tu Bola Restaurante
                    </h1>
                </div>
                
            </div>
        </div>
    );
};
