import React from "react";

export const BlogPost = ({title, description, photoUrl}) => {
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden ">
            {photoUrl && (
                <img
                    className="mx-auto shadow-lg rounded-lg overflow-hidden justify-center"
                    src={photoUrl}
                    alt={`Photo for ${title}`}
                />
            )}
            <div className="px-6 py-4 flex-col justify-center">
                <h3 className="text-lg font-medium text-gray-900 ">{title}</h3>
                <div className="mt-2">
                    <p className="text-sm text-gray-500">{description}</p>
                </div>
            </div>
        </div>
    );
};
