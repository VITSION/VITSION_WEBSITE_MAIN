"use client";

import React, { useState } from "react";
import StaggeredMenu from "@/components/StaggeredMenu";
import MagicBento from "@/components/MagicBento";
import { X } from "lucide-react";

type EventItem = {
    title: string;
    desc: string;
    poster: string;
    color: string;
    tag?: string;
    participants?: string;
    date?: string;
    bentoDesc?: string;
    images?: string[];
};

const eventItems: EventItem[] = [
    {
        title: "Alumni Meet",
        desc: "09/08/25",
        poster: "/Events 2k25-26/Alumni Meet.png",
        color: "#F4EDE4",
        tag: "Networking",
        participants: "100+",
        date: "09/08/25",
        bentoDesc: "The Alumni Meet is a special virtual gathering designed to reconnect former and current members of the club in a meaningful and engaging setting. The event celebrates shared experiences, achievements, and the journey of the community while fostering mentorship, networking, and knowledge exchange. By bringing together alumni and present members, the meet strengthens long-term connections and reinforces the club’s legacy, vision, and collaborative spirit.",
        images: [
            "/Events 2k25-26/Event 1- Alumni/WhatsApp Image 2025-12-12 at 19.27.27 (1).jpeg"
        ]
    },
    {
        title: "Camera Handling Workshop",
        desc: "02/11/25",
        poster: "/Events 2k25-26/Camera Handling Workshop .jpg",
        color: "#E7F0F7",
        tag: "Workshop",
        participants: "100+",
        date: "02/11/25",
        bentoDesc: "The Camera Handling Workshop is a practical session focused on building a strong foundation in camera operation and on-set techniques. Participants will learn framing, movement, focus control, and handling practices essential for effective visual storytelling. Designed for beginners and aspiring filmmakers, the workshop emphasizes hands-on learning and industry-relevant skills used in film and content production.",
        images: [
            "/Events 2k25-26/Event 2 - Camera Handling/20251102_103856.jpg",
            "/Events 2k25-26/Event 2 - Camera Handling/20251102_110632.jpg",
            "/Events 2k25-26/Event 2 - Camera Handling/20251102_114959.jpg"
        ]
    },
    {
        title: "Cinesharks 1.0",
        desc: "24/09/25",
        poster: "/Events 2k25-26/Cineshark .jpg",
        color: "#F7E7E7",
        tag: "Competition",
        participants: "100+",
        date: "24/09/25",
        bentoDesc: "Cine Shark is a strategy-driven pitching event where participants reimagine an underperforming film as a potential blockbuster. Teams analyze creative and commercial aspects, pitch innovative improvements, and propose investment strategies to achieve profitability. The event combines cinema, business thinking, and presentation skills, offering a dynamic platform to showcase creativity, market awareness, and strategic decision-making.",
        images: [
            "/Events 2k25-26/Event 3 - Cineshark/IMG_0042.JPG",
            "/Events 2k25-26/Event 3 - Cineshark/IMG_0056.JPG",
            "/Events 2k25-26/Event 3 - Cineshark/IMG_0109.JPG"
        ]
    },
    {
        title: "Cineshot Memes",
        desc: "31/08/25",
        poster: "/Events 2k25-26/Cineshot Memes (1).jpg",
        color: "#F4EDE4",
        tag: "Fun",
        participants: "100+",
        date: "31/08/25",
        bentoDesc: "Cineshot Memes is a creative online event that encourages participants to express their passion for cinema through visual storytelling and humor. By transforming iconic film moments into engaging meme content, the event blends creativity, cinematic knowledge, and digital expression. It provides a platform for participants to showcase originality while celebrating movies in a fun, structured, and engaging format.",
        images: [
            "/Events 2k25-26/Event 4 - Cineshot/Jamie Chastain.png"
        ]
    },
    {
        title: "Cineverse",
        desc: "15/06/25",
        poster: "/Events 2k25-26/Cineverse (1).jpg",
        color: "#E7F0F7",
        tag: "Exhibition",
        participants: "100+",
        date: "15/06/25",
        bentoDesc: "Cineverse is an interactive, cinema-themed event designed to challenge participants’ knowledge, observation skills, and creative thinking. Through multiple engaging rounds, teams decode connections, interpret film plots in unconventional ways, and identify movies using visual cues. The event encourages collaboration, quick reasoning, and a deeper appreciation of storytelling across cinema. Cineverse offers a dynamic platform for film enthusiasts to compete, connect, and showcase their cinematic insight in an energetic and well-structured format.",
        images: [
            "/Events 2k25-26/Event 5 - Cineverse/WhatsApp Image 2025-12-13 at 20.20.59 (1).jpeg",
            "/Events 2k25-26/Event 5 - Cineverse/WhatsApp Image 2025-12-13 at 20.20.59.jpeg",
            "/Events 2k25-26/Event 5 - Cineverse/WhatsApp Image 2025-12-13 at 20.21.29.jpeg"
        ]
    },
    {
        title: "Colour Grading Workshop",
        desc: "13/06/25",
        poster: "/Events 2k25-26/Colour Grading Workshop  (2).jpg",
        color: "#F7E7E7",
        tag: "Workshop",
        participants: "100+",
        date: "13/06/25",
        bentoDesc: "This workshop introduces participants to the fundamentals of professional colour grading using DaVinci Resolve. The session covers essential concepts, basic workflows, and practical techniques used in film and digital content production. Designed for beginners and aspiring creators, the workshop offers clear, hands-on insights that help enhance visual storytelling and improve post-production quality.",
        images: [
            "/Events 2k25-26/Event 6 - Colour Grading/WhatsApp Image 2025-10-28 at 20.46.51.jpeg",
            "/Events 2k25-26/Event 6 - Colour Grading/WhatsApp Image 2025-10-28 at 20.46.52.jpeg",
            "/Events 2k25-26/Event 6 - Colour Grading/WhatsApp Image 2025-10-28 at 20.46.53.jpeg"
        ]
    },
    {
        title: "From Campus to Camera",
        desc: "Short film workshop (03/09/25)",
        poster: "/Events 2k25-26/How to make a Shortfilm as a Student.png",
        color: "#F4EDE4",
        tag: "Workshop",
        participants: "100+",
        date: "03/09/25",
        bentoDesc: "From Campus to Camera is a hands-on workshop designed to introduce students to the fundamentals of short film making. The session covers the complete creative process—from idea development and scripting to camera basics, lighting, and execution. Aimed at aspiring filmmakers, the workshop provides practical insights into translating stories into visual narratives, empowering students to confidently begin their journey in cinema.",
        images: [
            "/Events 2k25-26/Event 7 - How to make a Shortfilm/20250903_121217.jpg",
            "/Events 2k25-26/Event 7 - How to make a Shortfilm/20250903_122022.jpg",
            "/Events 2k25-26/Event 7 - How to make a Shortfilm/20250903_125556.jpg"
        ]
    },
    {
        title: "Meesaya Murukku",
        desc: "26/08/25",
        poster: "/Events 2k25-26/Meesaya murukku.png",
        color: "#E7F0F7",
        tag: "Cultural",
        participants: "100+",
        date: "26/08/25",
        bentoDesc: "Meesaya Murukku is an exclusive film screening event curated for first- and second-year students, offering an engaging cinematic experience within the campus community. The event aims to bring students together through storytelling, entertainment, and shared viewing, creating a relaxed yet organized environment for cultural engagement. Designed with attention to quality and audience experience, the screening promotes community bonding while celebrating contemporary cinema in a structured and professional setting.",
        images: [
            "/Events 2k25-26/Event 8 - Meesaya Muruku/20250826_142222.jpg",
            "/Events 2k25-26/Event 8 - Meesaya Muruku/20250826_142734.jpg",
            "/Events 2k25-26/Event 8 - Meesaya Muruku/IMG_7864.jpeg"
        ]
    },
    {
        title: "Poster Reimagined",
        desc: "31/08/25",
        poster: "/Events 2k25-26/Poster reimagined.png",
        color: "#F7E7E7",
        tag: "Design",
        participants: "100+",
        date: "31/08/25",
        bentoDesc: "Poster Reimagined is a creative design challenge that invites participants to reinterpret iconic movie posters through their own artistic vision. The event encourages originality, visual storytelling, and design thinking as participants transform familiar cinematic visuals into fresh, imaginative concepts. Conducted in an online format, the competition provides a platform to showcase creativity, technical skill, and innovation while celebrating the art of film poster design.",
        images: [
            "/Events 2k25-26/Event 9 - Poster Reimagined/2.png",
            "/Events 2k25-26/Event 9 - Poster Reimagined/3.png",
            "/Events 2k25-26/Event 9 - Poster Reimagined/4.png"
        ]
    },
    {
        title: "Retrograde",
        desc: "29/09/25",
        poster: "/Events 2k25-26/Retrograde.png",
        color: "#F4EDE4",
        tag: "Retrospective",
        participants: "100+",
        date: "29/09/25",
        bentoDesc: "Retrograde is an open mic event that celebrates the fusion of classic and contemporary performance styles. Centered around the theme of old versus new, the event invites participants to reinterpret timeless art forms through a modern lens. From nostalgic influences to fresh expressions, Retrograde offers a vibrant platform for performers to showcase creativity, talent, and individuality in an engaging and supportive cultural setting.",
        images: [
            "/Events 2k25-26/Event 10 - Retrograde/08158c6f-4712-4ff8-85eb-4d57572286de.jpg",
            "/Events 2k25-26/Event 10 - Retrograde/1273640d-d2cf-4592-86d8-a846951d0331.jpg",
            "/Events 2k25-26/Event 10 - Retrograde/3e4c8f79-5fe9-42eb-9562-28d6248b3a20.jpg"
        ]
    },
    {
        title: "Video Editing Workshop",
        desc: "01/11/25",
        poster: "/Events 2k25-26/Video Editing Workshop .jpg",
        color: "#E7F0F7",
        tag: "Workshop",
        participants: "100+",
        date: "01/11/25",
        bentoDesc: "The Video Editing Workshop is a hands-on learning session designed to introduce participants to essential video editing techniques and workflows. The workshop covers cutting, transitions, effects, and storytelling principles used to transform raw footage into polished cinematic content. Ideal for beginners and aspiring editors, the session focuses on practical skills, creative clarity, and industry-relevant practices.",
        images: [
            "/Events 2k25-26/Event 11 - Editing Work/IMG_20251101_105401.jpg",
            "/Events 2k25-26/Event 11 - Editing Work/IMG_20251101_111930.jpg",
            "/Events 2k25-26/Event 11 - Editing Work/IMG_20251101_114030.jpg"
        ]
    },
    {
        title: "Curtain Raiser",
        desc: "30/07/25",
        poster: "/Events 2k25-26/curtain raiser.jpeg",
        color: "#F7E7E7",
        tag: "Inauguration",
        participants: "100+",
        date: "30/07/25",
        bentoDesc: "Curtain Raiser marks the official opening event of the club, setting the stage for the activities and initiatives planned for the year. The event offers an engaging introduction to the club’s vision, creative direction, and upcoming events through a well-structured and interactive session. Designed to inform, inspire, and connect, Curtain Raiser brings together members, coordinators, and attendees to celebrate creativity, collaboration, and the spirit of cinema in a professional and welcoming environment.",
        images: [
            "/Events 2k25-26/Event 12 - Curtain Raiser/IMG_20250730_121803649.jpg",
            "/Events 2k25-26/Event 12 - Curtain Raiser/IMG_20250730_121842167.jpg"
        ]
    },
    {
        title: "Cinesharks 2.0",
        desc: "31/10/25 - 01/11/25",
        poster: "/Events 2k25-26/Cineshark 2.0.jpeg",
        color: "#F4EDE4",
        tag: "Competition",
        participants: "100+",
        date: "31/10/25, 01/11/25",
        bentoDesc: "Cine Shark 2.0 is a competitive pitching event that challenges participants to transform an underperforming film into a profitable cinematic success. Teams analyze creative potential, develop strategic improvements, and present investment-driven pitches aimed at reaching breakeven and beyond. Blending cinema, business strategy, and presentation skills, the event offers a dynamic platform to showcase innovation, market insight, and competitive thinking.",
        images: [
            "/Events 2k25-26/Event 13 - Cineshark 2.0/IMG_5235.jpeg",
            "/Events 2k25-26/Event 13 - Cineshark 2.0/IMG_5307.jpeg",
            "/Events 2k25-26/Event 13 - Cineshark 2.0/IMG_5362.jpeg"
        ]
    },
];

export default function Events25_26() {
    const [showBento, setShowBento] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);

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

    // Split events into two rows, 6 each
    const firstHalf = eventItems.slice(0, 6);
    const secondHalf = eventItems.slice(6);

    // Duplicate for infinite scroll smoothness
    const eventsRow1 = [...firstHalf, ...firstHalf, ...firstHalf, ...firstHalf];
    const eventsRow2 = [...secondHalf, ...secondHalf, ...secondHalf, ...secondHalf];

    const handleEventClick = (event: EventItem) => {
        setSelectedEvent(event);
        setShowBento(true);
    };

    return (
        <>
            <div className={`fixed inset-0 z-[2000] bg-black/50 transition-opacity duration-300 ${showBento ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} onClick={() => setShowBento(false)} />

            <div
                className={`fixed top-0 right-0 h-full w-full md:w-[80vw] lg:w-[70vw] z-[2001] transform transition-transform duration-500 ease-in-out ${showBento ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <button
                    onClick={() => setShowBento(false)}
                    className="absolute top-6 right-6 z-50 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
                >
                    <X size={24} />
                </button>
                <div className="h-full overflow-y-auto p-4 md:p-12 flex items-center justify-center">
                    <MagicBento
                        textAutoHide={true}
                        enableStars={true}
                        enableSpotlight={true}
                        enableBorderGlow={true}
                        enableTilt={true}
                        enableMagnetism={true}
                        clickEffect={true}
                        spotlightRadius={300}
                        particleCount={12}
                        glowColor="132, 0, 255"
                        // @ts-ignore
                        selectedEvent={selectedEvent}
                    />
                </div>
            </div>

            {/* MENU */}
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
                        menuButtonColor="#f1efefff"
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

            {/* PAGE */}
            <div
                style={{
                    background: "#000",
                    color: "#fff",
                    minHeight: "100vh",
                    overflowX: "hidden",
                    fontFamily: "system-ui, sans-serif",
                }}
            >
                {/* HERO */}
                <section
                    style={{
                        height: "auto",
                        minHeight: "0",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "#000",
                        padding: 0,
                        margin: 0,
                    }}
                >
                    <h1
                        style={{
                            fontSize: "clamp(3rem, 7vw, 6rem)",
                            letterSpacing: "0.12em",
                            margin: 0,
                            fontWeight: 700,
                        }}
                    >
                        EVENTS
                    </h1>
                </section>

                {/* ROW 1: MOVES LEFT */}
                <section
                    style={{
                        padding: "40px 0 80px",
                        margin: "0 0 60px",
                        overflow: "visible",
                    }}
                >
                    <div style={{ overflow: "visible" }}>
                        <div
                            style={{
                                display: "flex",
                                width: "max-content",
                                animation: "moveLeft 40s linear infinite",
                                animationPlayState: showBento ? "paused" : "running",
                                columnGap: "8px",
                            }}
                        >
                            {eventsRow1.map((item, i) => (
                                <div
                                    key={`r1-${i}`}
                                    onClick={() => handleEventClick(item)}
                                    className="film-card"
                                    style={{
                                        width: "240px",
                                        padding: "14px",
                                        borderRadius: "8px",
                                        boxShadow: "0 20px 40px rgba(0,0,0,0.45)",
                                        background: item.color,
                                        flexShrink: 0,
                                        cursor: "pointer",
                                        textDecoration: "none",
                                        // @ts-ignore
                                        "--rotate": i % 2 ? "-2deg" : "2deg",
                                        transform: "rotate(var(--rotate))",
                                    }}
                                >
                                    <div
                                        style={{
                                            width: "100%",
                                            height: 0,
                                            paddingBottom: "125%",
                                            borderRadius: "6px",
                                            marginBottom: "10px",
                                            backgroundImage: `url('${item.poster}')`,
                                            backgroundSize: "cover",
                                            backgroundPosition: "center",
                                            backgroundColor: "#ddd",
                                        }}
                                    />
                                    <h3
                                        style={{
                                            fontSize: "1.2rem",
                                            margin: "0 0 4px 0",
                                            color: "#111",
                                            fontWeight: 900,
                                        }}
                                    >
                                        {item.title}
                                    </h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ROW 2: MOVES RIGHT */}
                <section
                    style={{
                        padding: "40px 0 80px",
                        margin: 0,
                        overflow: "visible",
                    }}
                >
                    <div style={{ overflow: "visible" }}>
                        <div
                            style={{
                                display: "flex",
                                width: "max-content",
                                animation: "moveRight 40s linear infinite",
                                animationPlayState: showBento ? "paused" : "running",
                                columnGap: "8px",
                            }}
                        >
                            {eventsRow2.map((item, i) => (
                                <div
                                    key={`r2-${i}`}
                                    onClick={() => handleEventClick(item)}
                                    className="film-card"
                                    style={{
                                        width: "240px",
                                        padding: "14px",
                                        borderRadius: "8px",
                                        boxShadow: "0 20px 40px rgba(0,0,0,0.45)",
                                        background: item.color,
                                        flexShrink: 0,
                                        cursor: "pointer",
                                        textDecoration: "none",
                                        // @ts-ignore
                                        "--rotate": i % 2 ? "-2deg" : "2deg",
                                        transform: "rotate(var(--rotate))",
                                    }}
                                >
                                    <div
                                        style={{
                                            width: "100%",
                                            height: 0,
                                            paddingBottom: "125%",
                                            borderRadius: "6px",
                                            marginBottom: "10px",
                                            backgroundImage: `url('${item.poster}')`,
                                            backgroundSize: "cover",
                                            backgroundPosition: "center",
                                            backgroundColor: "#ddd",
                                        }}
                                    />
                                    <h3
                                        style={{
                                            fontSize: "1.2rem",
                                            margin: "0 0 4px 0",
                                            color: "#111",
                                            fontWeight: 900,
                                        }}
                                    >
                                        {item.title}
                                    </h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>

            <style>{`
        @keyframes moveLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes moveRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        
        /* Film card hover effect */
        .film-card {
          transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94), box-shadow 0.3s ease;
        }
        .film-card:hover {
          transform: rotate(var(--rotate)) scale(1.1) !important;
          z-index: 10;
          box-shadow: 0 30px 60px rgba(0,0,0,0.6) !important;
        }
      `}</style>
        </>
    );
}
