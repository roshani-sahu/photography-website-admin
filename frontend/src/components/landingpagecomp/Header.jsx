import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", id: "home" },
  { label: "Services", id: "services" },
  { label: "How it Works", id: "how-it-works" },
  { label: "Professionals", id: "professionals" },
  { label: "Testimonials", id: "testimonials" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id) => {
    const el = document.getElementById(id);

    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Glass Background */}
      <div className="absolute inset-0 backdrop-blur-xl bg-gradient-to-r from-[#0b0120]/90 via-[#14022e]/80 to-[#0b0120]/90 border-b border-white/10" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        
        {/* LOGO */}
        <motion.h1
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-white text-xl sm:text-2xl font-semibold tracking-wide cursor-pointer"
        >
          ClickNow
        </motion.h1>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center gap-8 xl:gap-10 text-sm xl:text-base font-medium">
          {navItems.map((item, index) => (
            <motion.button
              key={index}
              onClick={() => scrollTo(item.id)}
              whileHover={{ y: -2 }}
              className={`relative transition-all duration-300 ${
                item.label === "Home"
                  ? "text-purple-300"
                  : "text-white/60 hover:text-white"
              }`}
            >
              {item.label}

              {item.label === "Home" && (
                <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-gradient-to-r from-purple-400 to-pink-400 rounded-full" />
              )}
            </motion.button>
          ))}
        </nav>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-3">

          {/* CTA BUTTON */}
          {/* <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="
              hidden sm:flex
              px-6 py-2.5 rounded-xl text-sm font-medium
              text-white
              bg-gradient-to-r 
              from-[#a855f7]/70 
              via-[#c084fc]/60 
              to-[#e9d5ff]/70
              backdrop-blur-md
              border border-white/10
              shadow-[0_4px_20px_rgba(168,85,247,0.25)]
              hover:from-[#a855f7]/80 hover:to-[#e9d5ff]/80
              transition-all duration-300
            "
          >
            Book Now
          </motion.button> */}

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden h-11 w-11 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center text-white"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="
              lg:hidden
              relative
              mx-4 my-2
              rounded-3xl
              border border-white/10
              bg-[#120325]/95
              backdrop-blur-2xl
              overflow-hidden
              shadow-2xl
            "
          >
            <div className="flex flex-col p-4">
              {navItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => scrollTo(item.id)}
                  className="
                    text-left
                    px-4 py-4
                    rounded-2xl
                    text-white/70
                    hover:text-white
                    hover:bg-white/5
                    transition-all duration-300
                  "
                >
                  {item.label}
                </button>
              ))}

              {/* MOBILE CTA */}
              {/* <button
                className="
                  mt-4
                  w-full
                  py-3
                  rounded-2xl
                  text-sm
                  font-medium
                  text-white
                  bg-gradient-to-r
                  from-purple-500
                  to-pink-500
                  hover:opacity-90
                  transition-all 
                "
              >
                Book Now
              </button> */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;