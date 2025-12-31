"use client";

import React, { useState, useRef, useEffect } from "react";
import StaggeredMenu from "@/components/StaggeredMenu";
import { X, Play, ArrowLeft, ArrowRight } from "lucide-react"; // Added ArrowLeft/Right for potential controls
import { Button } from "@/components/ui/button";

type Film = {
  title: string;
  desc: string;
  poster: string;
  banner: string;
  color: string;
  year: string;
  certificate: string;
  duration: string;
  language: string;
  genre: string;
  tags: string[];
  link: string;
  director: string;
};

const row1: Film[] = [
  {
    title: "Inception",
    desc: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    poster: "https://via.placeholder.com/1080x1350",
    banner: "https://images.unsplash.com/photo-1604871000636-074fa5117945?auto=format&fit=crop&q=80&w=2000",
    color: "#F4EDE4",
    year: "2010",
    certificate: "UA",
    duration: "2h 28m",
    language: "English",
    genre: "Sci-Fi | Action | Thriller",
    tags: ["Mind-Bending", "Dream Heist", "Visual Masterpiece"],
    link: "https://www.youtube.com/watch?v=YoHD9XEInc0",
    director: "Christopher Nolan"
  },
  {
    title: "Interstellar",
    desc: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    poster: "https://via.placeholder.com/1080x1350",
    banner: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=2000",
    color: "#E7F0F7",
    year: "2014",
    certificate: "UA",
    duration: "2h 49m",
    language: "English",
    genre: "Sci-Fi | Drama | Adventure",
    tags: ["Space Travel", "Emotional", "Time Dilation"],
    link: "https://www.youtube.com/watch?v=zSWdZVtXT7E",
    director: "Christopher Nolan"
  },
  {
    title: "Whiplash",
    desc: "A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an instructor who will stop at nothing to realize a student's potential.",
    poster: "https://via.placeholder.com/1080x1350",
    banner: "https://images.unsplash.com/photo-1519892300165-cb5542fb4747?auto=format&fit=crop&q=80&w=2000",
    color: "#F7E7E7",
    year: "2014",
    certificate: "A",
    duration: "1h 46m",
    language: "English",
    genre: "Drama | Music",
    tags: ["Intensity", "Jazz", "Psychological"],
    link: "https://www.youtube.com/watch?v=7d_jQycdQGo",
    director: "Damien Chazelle"
  },
];

const row2: Film[] = [
  {
    title: "Fight Club",
    desc: "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.",
    poster: "https://via.placeholder.com/1080x1350",
    banner: "https://images.unsplash.com/photo-1599839575945-a9e5af0c3fa5?auto=format&fit=crop&q=80&w=2000",
    color: "#EDE7F7",
    year: "1999",
    certificate: "A",
    duration: "2h 19m",
    language: "English",
    genre: "Drama",
    tags: ["Cult Classic", "Psychological", "Dark"],
    link: "https://www.youtube.com/watch?v=qtRKdVHc-cE",
    director: "David Fincher"
  },
  {
    title: "Blade Runner",
    desc: "A blade runner must pursue and terminate four replicants who stole a ship in space, and have returned to Earth to find their creator.",
    poster: "https://via.placeholder.com/1080x1350",
    banner: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?auto=format&fit=crop&q=80&w=2000",
    color: "#E7F7EF",
    year: "1982",
    certificate: "UA",
    duration: "1h 57m",
    language: "English",
    genre: "Sci-Fi | Thriller",
    tags: ["Cyberpunk", "Dystopian", "Noir"],
    link: "https://www.youtube.com/watch?v=eogpIG53Cis",
    director: "Ridley Scott"
  },
  {
    title: "Dune",
    desc: "A noble family becomes embroiled in a war for control over the galaxy's most valuable asset while its heir becomes troubled by visions of a dark future.",
    poster: "https://via.placeholder.com/1080x1350",
    banner: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&q=80&w=2000",
    color: "#F7F3E7",
    year: "2021",
    certificate: "UA",
    duration: "2h 35m",
    language: "English",
    genre: "Action | Adventure | Drama",
    tags: ["Epic", "Desert", "Space Opera"],
    link: "https://www.youtube.com/watch?v=n9xhJrPXop4",
    director: "Denis Villeneuve"
  },
];

export default function Films() {
  const [selectedFilm, setSelectedFilm] = useState<Film | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const menuItems = [
    { label: "Home", ariaLabel: "Go to home page", link: "/" },
    { label: "Globus", ariaLabel: "Globus", link: "/globus" },
    { label: "Events", ariaLabel: "View our events", link: "/events" },
    { label: "Films", ariaLabel: "View our films", link: "/films" },
    { label: "Gallery", ariaLabel: "Browse gallery", link: "/gallery" },
    { label: "Team", ariaLabel: "Meet the team", link: "/team" },
    { label: "Contact", ariaLabel: "Get in touch", link: "/contact" },
  ];

  const socialItems = [
    { label: "Instagram", link: "https://www.instagram.com/vitsionmoviemakers" },
    { label: "Linkedin", link: "https://www.linkedin.com/company/vitsionmoviemakersclub/" },
    { label: "LetterBox", link: "https://letterboxd.com/vitsion/" },
    { label: "YouTube", link: "http://www.youtube.com/@VITSIONMovieMakers" },
  ];

  // Combine rows for the single strip - duplicated 8x for safety on wide screens
  const allFilms = [...row1, ...row2, ...row1, ...row2, ...row1, ...row2, ...row1, ...row2, ...row1, ...row2, ...row1, ...row2, ...row1, ...row2, ...row1, ...row2];

  return (
    <>
      {/* MENU - Updated button color for white bg */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 999,
          pointerEvents: "none",
        }}
      >
        <div style={{ pointerEvents: "auto" }}>
          <StaggeredMenu
            position="right"
            items={menuItems}
            socialItems={socialItems}
            displaySocials={true}
            displayItemNumbering={false}
            menuButtonColor="#ffffff"
            openMenuButtonColor="#0f0e0eff"
            changeMenuColorOnOpen={true}
            colors={["#0a0a0aff", "#f1ececff", "#3a3a3a"]}
            logoUrl="/vitsion white.png"
            accentColor="#0c0c0cff"
            isFixed={true}
            className=""
            onMenuOpen={() => { }}
            onMenuClose={() => { }}
          />
        </div>
      </div>

      {/* PAGE CONTAINER */}
      <div
        className="w-full h-screen bg-black flex flex-col items-start justify-center overflow-hidden relative gap-8 pt-24 md:gap-12 md:pt-32"
      >

        {/* ROW 1: MOVES LEFT */}
        <div
          className="w-full overflow-hidden flex items-center justify-start"
        >
          <div
            className="film-track flex relative items-center px-0 min-w-max hover:paused"
            style={{
              animation: 'moveFilmRoll 60s linear infinite',
            }}
          >
            {/* PERFORATIONS TOP */}
            <div className="film-perforation film-perforation-top" />

            {/* FILMS */}
            {allFilms.map((film, i) => (
              <div
                key={`r1-film-${i}`}
                onClick={() => setSelectedFilm(film)}
                className="film-card-item group relative cursor-pointer"
                style={{
                  backgroundColor: '#fff',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                  transition: 'transform 0.3s ease, filter 0.3s ease',
                  flexShrink: 0
                }}
              >
                <div
                  className="w-full h-full bg-gray-200 overflow-hidden relative"
                >
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url('${film.poster}')` }}
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-bold tracking-widest text-lg uppercase">View</span>
                  </div>
                </div>
              </div>
            ))}

            {/* PERFORATIONS BOTTOM */}
            <div className="film-perforation film-perforation-bottom" />
          </div>
        </div>

        {/* ROW 2: MOVES RIGHT */}
        <div
          className="w-full overflow-hidden flex items-center justify-start"
        >
          <div
            className="film-track flex relative items-center px-0 min-w-max hover:paused"
            style={{
              animation: 'moveFilmRollRight 60s linear infinite',
            }}
          >
            {/* PERFORATIONS TOP */}
            <div className="film-perforation film-perforation-top" />

            {/* FILMS */}
            {allFilms.map((film, i) => (
              <div
                key={`r2-film-${i}`}
                onClick={() => setSelectedFilm(film)}
                className="film-card-item group relative cursor-pointer"
                style={{
                  backgroundColor: '#fff',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                  transition: 'transform 0.3s ease, filter 0.3s ease',
                  flexShrink: 0
                }}
              >
                <div
                  className="w-full h-full bg-gray-200 overflow-hidden relative"
                >
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url('${film.poster}')` }}
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-bold tracking-widest text-lg uppercase">View</span>
                  </div>
                </div>
              </div>
            ))}

            {/* PERFORATIONS BOTTOM */}
            <div className="film-perforation film-perforation-bottom" />
          </div>
        </div>

      </div>

      {/* MODAL OVERLAY (Kept largely the same but ensured z-index covers white bg) */}
      {selectedFilm && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-300">
          <div className="relative w-full max-w-5xl bg-[#141414] rounded-2xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300 border border-white/10">

            <div className="flex flex-col md:flex-row h-full max-h-[90vh] overflow-y-auto md:overflow-hidden">

              {/* Mobile: Image Area */}
              <div className="relative w-full md:w-2/3 h-auto md:h-full flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent z-10 md:hidden" />
                <img
                  src={selectedFilm.banner}
                  alt={selectedFilm.title}
                  className="w-full h-auto md:h-full object-cover"
                />
              </div>

              {/* Content Area */}
              <div className="w-full md:w-1/3 relative p-6 md:p-12 flex flex-col justify-start md:justify-center items-start gap-6 bg-[#141414] z-20">

                <h2 className="text-2xl md:text-4xl font-bold text-white tracking-wide uppercase leading-tight text-left pr-10">
                  {selectedFilm.title}
                </h2>

                {/* Metadata */}
                <div className="flex flex-wrap gap-x-4 gap-y-2 text-gray-400 text-sm md:text-base font-medium">
                  <span className="text-white">{selectedFilm.year}</span>
                  <span>•</span>
                  <span>{selectedFilm.duration}</span>
                  <span>•</span>
                  <span>{selectedFilm.language}</span>
                </div>

                {/* Action Buttons */}
                <div className="w-full flex items-center gap-4">
                  <Button
                    onClick={() => window.open(selectedFilm.link, '_blank')}
                    className="flex-1 md:flex-none h-12 px-8 bg-red-600 hover:bg-red-700 text-white font-bold text-lg rounded-lg transition-all shadow-lg flex items-center justify-center gap-2"
                  >
                    <Play className="w-5 h-5 fill-current" />
                    Watch Now
                  </Button>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm md:text-base leading-relaxed text-left">
                  {selectedFilm.desc}
                </p>

                <div className="flex flex-wrap gap-2 text-xs text-gray-500 uppercase tracking-widest">
                  {selectedFilm.genre}
                </div>
              </div>
            </div>

            {/* Close Button */}
            <button
              onClick={() => setSelectedFilm(null)}
              className="absolute top-4 right-4 z-[100] p-2 bg-black/50 hover:bg-black/80 text-white rounded-full transition-colors border border-white/10"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}

      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .film-track {
          box-sizing: border-box;
          height: 380px;
          min-height: 380px;
          padding-top: 65px;
          padding-bottom: 65px;
          will-change: transform;
          background-color: #1c1c1c;
          border-top: 2px solid #555;
          border-bottom: 2px solid #555;
          box-shadow: 0 0 0 1px #000; /* Extra definition */
        }
        .film-card-item {
          width: 200px;
          height: 250px;
          padding: 8px;
          margin-right: 32px;
          flex-shrink: 0;
        }
        .film-perforation {
          position: absolute;
          left: 0;
          right: 0;
          height: 30px;
          background-image: linear-gradient(to right, #FFFFFF 50%, transparent 50%);
          background-size: 40px 100%;
          background-repeat: repeat-x;
          opacity: 1;
          z-index: 20;
          pointer-events: none;
        }
        .film-perforation-top { top: 18px; }
        .film-perforation-bottom { bottom: 18px; }

        @media (max-width: 768px) {
          .film-track {
            height: 240px;
            padding-top: 30px;
            padding-bottom: 30px;
            background-color: #1E1E1E;
          }
          .film-card-item {
            width: 140px;
            height: 180px;
            padding: 6px;
            margin-right: 16px;
          }
          .film-perforation {
            height: 14px;
            background-image: linear-gradient(90deg, #FFFFFF 8px, transparent 8px);
            background-size: 16px 100%;
          }
          .film-perforation-top { top: 6px; }
          .film-perforation-bottom { bottom: 6px; }
        }

        @keyframes moveFilmRoll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes moveFilmRollRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .hover\:paused:hover {
          animation-play-state: paused !important;
        }
        /* Invert white logo to black for this white page */
        .sm-logo-img {
          /* filter: invert(1); - Removed for black background */
        }
      `}</style>
    </>
  );
}
