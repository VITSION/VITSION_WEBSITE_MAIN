import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from "@/lib/utils";

const FloatingDockNav = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { label: "Home", path: "/" },
        { label: "Globus", path: "/globus" },
        { label: "Events", path: "/events" },
        { label: "Films", path: "/films" },
        { label: "Gallery", path: "/gallery" },
        { label: "Team", path: "/team" },
    ];

    return (
<motion.div
    initial={{ 
        width: "98%",
        top: "2rem"
    }}
    animate={{
        width: scrolled ? "auto" : "98%",
        top: scrolled ? "1rem" : "2rem"
    }}
    transition={{ type: "spring", bounce: 0.25, duration: 0.6 }}
    className={cn(
        "fixed left-1/2 -translate-x-1/2 z-50 flex items-center",
        scrolled
            ? "bg-black/80 backdrop-blur-xl border border-white/10 shadow-2xl rounded-full px-2 py-2 gap-2 justify-center"
            : "bg-transparent justify-between px-6 py-3"
    )}
>

            {/* Logo Section */}
            {/* Wrapper ensures width balance for centering links in Unscrolled mode */}
            <motion.div
                layout="position"
                className={cn(
                    "flex items-center justify-start z-10",
                    // When unscrolled, give it a fixed width to balance the Contact button
                    scrolled ? "w-auto" : "w-[120px] md:w-[160px]"
                )}
            >
                <div
                    className="flex items-center gap-2 cursor-pointer group"
                    onClick={() => navigate('/')}
                >
                    <motion.img
                        layout
                        src="/vitsion white.png"
                        alt="Logo"
                        className={cn(
                            "object-contain",
                            scrolled ? "w-6 h-6" : "w-10 h-10"
                        )}
                    />
                    <AnimatePresence mode='wait'>
                        {!scrolled && (
                            <motion.span
                                initial={{ opacity: 0, width: 0 }}
                                animate={{ opacity: 1, width: "auto" }}
                                exit={{ opacity: 0, width: 0 }}
                                transition={{ duration: 0.2 }}
                                className="text-xl font-bold tracking-widest text-white group-hover:text-gray-300 overflow-hidden whitespace-nowrap"
                            >
                                VITSION
                            </motion.span>
                        )}
                    </AnimatePresence>
                </div>
            </motion.div>

            {/* Navigation Links */}
            {/* Pure Flex - No absolute positioning to avoid layout thrashing */}
            <motion.div
                layout="position"
                className={cn(
                    "flex items-center justify-center",
                    scrolled ? "" : "flex-1" // flex-1 allows it to fill space in Unscrolled, keeping structure stable
                )}
            >
                <div className={cn(
                    "flex items-center overflow-x-auto scrollbar-hide no-scrollbar transition-all duration-500",
                    // Apply different styling for the 'pill' look in Unscrolled vs Scrolled
                    scrolled
                        ? "gap-1"
                        : "bg-black/60 backdrop-blur-md border border-white/10 rounded-full px-2 py-1 gap-1"
                )}>
                    {navLinks.map((link) => {
                        const isActive = location.pathname === link.path;
                        return (
                            <button
                                key={link.label}
                                onClick={() => navigate(link.path)}
                                className={cn(
                                    "rounded-full font-medium transition-colors duration-300 uppercase tracking-wider whitespace-nowrap",
                                    isActive
                                        ? "bg-white text-black shadow-lg"
                                        : "text-gray-300 hover:text-white hover:bg-white/10",
                                    scrolled ? "text-xs px-3 py-1" : "text-xs md:text-sm px-4 py-1.5"
                                )}
                            >
                                {link.label}
                            </button>
                        );
                    })}
                </div>
            </motion.div>

            {/* Right Actions */}
            <motion.div
                layout="position"
                className={cn(
                    "flex items-center justify-end z-10",
                    // Match Logo wrapper width for center balance
                    scrolled ? "w-auto" : "w-[120px] md:w-[160px]"
                )}
            >
                <button
                    onClick={() => navigate('/contact')}
                    className={cn(
                        "rounded-full bg-white text-black font-bold uppercase tracking-wider hover:bg-gray-200 transition-all duration-300 whitespace-nowrap",
                        scrolled ? "text-xs px-4 py-1.5" : "text-xs md:text-sm px-6 py-2"
                    )}
                >
                    Contact
                </button>
            </motion.div>
        </motion.div>
    );
};

export default FloatingDockNav;
