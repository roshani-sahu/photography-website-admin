import { motion } from "framer-motion";

const navItems = ["Home", "Services", "How it Works", "Professionals"];

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      
      {/* Glass Background Layer */}
      <div className="absolute inset-0 backdrop-blur-xl bg-gradient-to-r from-[#0b0120]/80 via-[#14022e]/70 to-[#0b0120]/80 border-b border-white/10" />

      <div className="relative max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <motion.h1
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-white text-xl font-semibold tracking-wide"
        >
          ClickNow
        </motion.h1>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-10 text-base font-medium">
          {navItems.map((item, index) => (
            <motion.a
              key={index}
              whileHover={{ y: -1 }}
              className={`relative cursor-pointer transition ${
                item === "Home"
                  ? "text-purple-300"
                  : "text-white/60 hover:text-white"
              }`}
            >
              {item}

              {/* Active underline */}
              {item === "Home" && (
                <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-gradient-to-r from-purple-400 to-pink-400 rounded-full" />
              )}
            </motion.a>
          ))}
        </nav>

        {/* CTA Button */}
        <motion.button
  whileHover={{ scale: 1.04 }}
  whileTap={{ scale: 0.97 }}
  className="
    px-8 py-2.5 rounded-lg text-sm font-medium
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
</motion.button>
      </div>
    </header>
  );
};

export default Header;