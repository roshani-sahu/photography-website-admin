import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pb-8 pt-32 overflow-hidden bg-[#0b0120]">
      
      {/* MAIN BACKGROUND GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0b0120] via-[#14022e] to-[#1a0033]" />

      {/* LEFT SOFT LIGHT */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-purple-700/20 blur-[140px] rounded-full" />

      {/* RIGHT IMAGE GLOW */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/20 blur-[120px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1 rounded-full bg-purple-500/10 border border-purple-400/20 text-purple-300 text-xs tracking-wider mb-6"
          >
            THE EDITORIAL TALENT NETWORK
          </motion.div>

          {/* HEADING (GRADIENT TEXT) */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-extrabold leading-[1.05]"
          >
            <span className="bg-gradient-to-b from-white to-purple-200 bg-clip-text text-transparent">
              Discover
            </span>{" "}
            <br />
            <span className="bg-gradient-to-b from-white to-purple-200 bg-clip-text text-transparent">
              Artists for
            </span>{" "}
            <br />
            <span className="bg-gradient-to-b from-white to-purple-300 bg-clip-text text-transparent">
              Every Moment
            </span>
          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/60 mt-6 max-w-lg text-[15px] leading-relaxed"
          >
            Elevate your event with our curated roster of verified musicians,
            master photographers, and visionary performers. Luxury services at
            your fingertips.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-4 mt-8"
          >
            <button className="px-8 py-4 rounded-xl text-white font-medium 
              bg-gradient-to-r from-[#a855f7]/80 via-[#c084fc]/70 to-[#e9d5ff]/80
              shadow-[0_10px_30px_rgba(168,85,247,0.25)]
              hover:scale-105 transition">
              Explore Professionals
            </button>

            <div className="flex gap-3">
  <div className="w-10 h-10  rounded-lg flex items-center justify-center">
    <img
      src="/mobicon.png"
      alt="Mobile App"
      className=" object-contain"
    />
  </div>

  <div className="w-10 h-10  rounded-lg flex items-center justify-center">
    <img
      src="/playstoreicon.png"
      alt="Play Store"
      className="object-contain"
    />
  </div>
</div>
          </motion.div>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <img
            src="/hero.png"
            alt="DJ"
            className="rounded-2xl w-full object-cover relative z-10"
          />

          {/* TESTIMONIAL */}
          <div className="absolute bottom-8 left-8 z-20 
            bg-[#1a0933]/70 backdrop-blur-xl 
            border border-white/10 
            p-5 rounded-xl max-w-xs shadow-xl">
            
            <p className="text-white/80 text-sm italic">
              "The music was the soul of our gala. Unforgettable experience."
            </p>

            <span className="text-white/40 text-xs block mt-3">
              — MARCO R. / EVENT CURATOR
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;