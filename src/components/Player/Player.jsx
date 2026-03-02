import React, { useState } from "react";

const Player = ({ player }) => {

    const { name, role, country, image, price, rating, batting_style,
        bowling_style } = player;
    const [isSelected, setIsSelected] = useState(false);

    return (
        <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition duration-300">

            <figure className="px-6 pt-6 bg-slate-400">
                <img
                    src={image}
                    alt={name}
                    className="rounded-xl h-48 w-full  object-contain"
                />
            </figure>

            <div className="card-body">
                <h2 className="card-title text-lg font-bold">{name}</h2>

                <p className="text-sm text-gray-500">{role}</p>
                <p className="text-sm">{country}</p>

                {/* Batting & Bowling */}
                <div className="mt-3 space-y-1 text-sm">
                    <p><span className="font-semibold">Batting:</span> {batting_style}</p>
                    <p><span className="font-semibold">Bowling:</span> {bowling_style == "None" ? "not doing bowl" : bowling_style}</p>
                </div>

                <div className="flex justify-between items-center mt-3">
                    <span className="badge badge-primary">${price}</span>
                    <span className="badge badge-outline">⭐ {rating}</span>
                </div>

                <div className="card-actions mt-4">
                    <button disabled={isSelected} onClick={() => setIsSelected(true)} className="btn btn-success btn-sm w-full">
                        {isSelected ? "Selected" : "Choose Player"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Player;