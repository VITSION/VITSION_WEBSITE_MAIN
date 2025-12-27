
import StaggeredMenu from "@/components/StaggeredMenu";

const Padam = () => {
    const menuItems = [
        { label: "Home", ariaLabel: "Go to home page", link: "/" },
        { label: "Globus", ariaLabel: "Globus", link: "/globus" },
        { label: "Events", ariaLabel: "View our events", link: "/events" },
        { label: "Films", ariaLabel: "View our films", link: "/films" },
        { label: "Gallery", ariaLabel: "Browse gallery", link: "/gallery" },
        { label: "Team", ariaLabel: "Meet the team", link: "/team" },
        { label: "Contact", ariaLabel: "Get in touch", link: "#" },
    ];

    const socialItems = [
        { label: "Instagram", link: "https://www.instagram.com/vitsionmoviemakers" },
        { label: "LetterBox", link: "https://letterboxd.com/vitsion/" },
    ];

    return (
        <div className="min-h-screen bg-black text-white font-sans flex items-center justify-center relative overflow-hidden">
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
                        logoUrl="/vitsion_new_logo.png"
                        accentColor="#0c0c0cff"
                        isFixed={true}
                        className=""
                        onMenuOpen={() => { }}
                        onMenuClose={() => { }}
                    />
                </div>
            </div>

            <main className="z-10 text-center p-8">
                <h1 className="text-6xl font-bold mb-6 tracking-widest text-[#D4AF37]">PADAM</h1>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto border-t border-b border-gray-700 py-6">
                    Details about the film will appear here. This is a placeholder page for individual movie details.
                </p>
            </main>
        </div>
    );
};

export default Padam;
