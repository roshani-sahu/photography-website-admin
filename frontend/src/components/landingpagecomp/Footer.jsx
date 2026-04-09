import { Globe, AtSign } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-[#060013] pt-5 px-6 pb-3">

      {/* Rounded container */}
      <div className="
        mx-auto
        rounded-[40px]
        
        backdrop-blur-xl
        px-10 py-12
      ">

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10">

          {/* LEFT */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              ClickNow
            </h3>

            <p className="text-white/50 max-w-sm mb-6 leading-relaxed">
              Empowering artists and curators through digital innovation.
            </p>

            <p className="text-white/40 text-sm">
              © 2024 ClickNow Digital Gallery. All rights reserved.
            </p>
          </div>

          {/* CENTER LINKS */}
          <div className="flex flex-wrap gap-8 text-white/50 text-sm">
            <a className="hover:text-white transition cursor-pointer">
              Privacy Policy
            </a>
            <a className="hover:text-white transition cursor-pointer">
              Terms of Service
            </a>
            <a className="hover:text-white transition cursor-pointer">
              Contact
            </a>
            <a className="hover:text-white transition cursor-pointer">
              Support
            </a>
          </div>

          {/* RIGHT ICONS */}
          <div className="flex items-center gap-4">
            
            <div className="
              w-12 h-12 rounded-full
              bg-white/5 border border-white/10
              flex items-center justify-center
              hover:bg-white/10 transition
            ">
              <Globe size={18} className="text-white/70" />
            </div>

            <div className="
              w-12 h-12 rounded-full
              bg-white/5 border border-white/10
              flex items-center justify-center
              hover:bg-white/10 transition
            ">
              <AtSign size={18} className="text-white/70" />
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;