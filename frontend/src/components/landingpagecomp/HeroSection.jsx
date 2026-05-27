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

      <div className="relative max-w-7xl mx-auto px-6 grid  gap-12 items-center">
        
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
              Discover Artists for
            </span>{" "}
            <br />
            {/* <span className="bg-gradient-to-b from-white to-purple-200 bg-clip-text text-transparent">
              
            </span>{" "} */}
            
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
            {/* APP STORE */}
            <a href="#" className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-purple-400/30 hover:bg-white/[0.08] transition">
              <svg viewBox="0 0 24 24" className="w-6 h-6 text-white fill-current" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <div className="text-left">
                <p className="text-white/40 text-[10px] leading-none">Download on the</p>
                <p className="text-white font-semibold text-sm leading-tight mt-0.5">App Store</p>
              </div>
            </a>

            {/* GOOGLE PLAY */}
            <a href="#" className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-purple-400/30 hover:bg-white/[0.08] transition">
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current text-white" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.18 23.76c.3.17.64.22.99.14l12.12-6.99-2.56-2.56-10.55 9.41zm-1.1-20.7C2.03 3.22 2 3.4 2 3.6v16.8c0 .2.03.38.08.54l.06.06 9.41-9.41v-.22L2.14 2.99l-.06.07zm18.44 8.7l-2.59-1.5-2.88 2.88 2.88 2.88 2.61-1.51c.74-.43.74-1.32-.02-1.75zm-17.34 9.6l10.55-9.41-2.56-2.56L2.08 20.96l1.1.4z"/>
              </svg>
              <div className="text-left">
                <p className="text-white/40 text-[10px] leading-none">Get it on</p>
                <p className="text-white font-semibold text-sm leading-tight mt-0.5">Google Play</p>
              </div>
            </a>
          </motion.div>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          {/* <img
            src="/hero.png"
            alt="DJ"
            className="rounded-2xl w-full object-cover relative z-10"
          /> */}

          {/* TESTIMONIAL */}
          {/* <div className="absolute bottom-8 left-8 z-20 
            bg-[#1a0933]/70 backdrop-blur-xl 
            border border-white/10 
            p-5 rounded-xl max-w-xs shadow-xl">
            
            <p className="text-white/80 text-sm italic">
              "The music was the soul of our gala. Unforgettable experience."
            </p>

            <span className="text-white/40 text-xs block mt-3">
              — MARCO R. / EVENT CURATOR
            </span>
          </div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;