import LightRays from "@/components/LightRays";
import FloatingDockNav from "@/components/FloatingDockNav";
import UpcomingMovie from "@/components/UpcomingMovie";

import {
  motion,
  useScroll,
  useTransform
} from "framer-motion";

import { useRef } from "react";

const Index = () => {
  const titleRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: titleRef,
    offset: ["start 80%", "center center"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [-300, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className="relative w-full overflow-x-hidden">

      {/* FIXED BACKGROUND VIDEO */}
      <section>

        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="w-full h-full object-cover opacity-15 md:opacity-20"
        >
          <source src="/Globus/Theaterscreen.mp4" type="video/mp4" />

        </video>
      </section>
      {/* NAV */}
      <header className="fixed top-0 left-0 w-full z-50">
        <FloatingDockNav />
      </header>

      {/* HERO */}


      {/* TITLE */}
      <section
        ref={titleRef}
        className="relative z-10 py-24 md:py-24 flex justify-center overflow-hidden"
      >
        <motion.h6
          style={{ x, opacity }}
          className="text-white text-center font-black text-[clamp(1.6rem,8vw,10rem)] leading-[0.2]"
        >
          Upcoming Film
        </motion.h6>
      </section>

      {/* UPCOMING MOVIE */}
      <motion.section
        className="relative z-10 w-full flex justify-center px-4 py-20 md:py-10"
        initial={{ opacity: 0, y: 150 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <UpcomingMovie />
      </motion.section>

    </div>
  );
};

export default Index;
