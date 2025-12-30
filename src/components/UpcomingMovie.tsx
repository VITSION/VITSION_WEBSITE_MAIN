import React from 'react';

const UpcomingMovie = () => {
    return (
        <div className="w-full flex justify-center my-12 px-4">
            <div className="relative group cursor-pointer overflow-hidden rounded-3xl shadow-2xl border border-white/10 max-w-2xl w-full">
                <img
                    src="/film1.webp"
                    alt="Upcoming Movie"
                    className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                {/* Text Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                    <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase opacity-0 group-hover:opacity-100 transform translate-y-10 group-hover:translate-y-0 transition-all duration-500 delay-100 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">
                        Upcoming Movie
                    </h2>
                    <p className="text-gray-300 text-lg tracking-[0.5em] uppercase mt-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-200">
                        Coming really soon
                    </p>
                </div>
            </div>
        </div>
    );
};

export default UpcomingMovie;
