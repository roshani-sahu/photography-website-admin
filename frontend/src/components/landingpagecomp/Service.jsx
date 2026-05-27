import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Camera, Music, Mic2, Heart, User, Sparkles } from "lucide-react";

const services = [
  {
    title: "Photography & Videography",
    desc: "Professional Photo and video Coverage",
    icon: <Camera size={20} />,
    img: "/new/Photo.png",
  },
  {
    title: "Music & Live Performance",
    desc: "Professional Photo and video Coverage",
    icon: <Music size={20} />,
    img: "/new/music.png",
  },
  {
    title: "Professional DJ Services",
    desc: "Professional Photo and video Coverage",
    icon: <Mic2 size={20} />,
    img: "/new/DJ.png",
  },
  {
    title: "Live Wedding Painter",
    desc: "Professional Photo and video Coverage",
    icon: <Heart size={20} />,
    img: "/new/Wedding.png",
  },
  {
    title: "Professional Anchor Services",
    desc: "Professional Photo and video Coverage",
    icon: <User size={20} />,
    img: "/new/Anchor.png",
  },
  {
    title: "Professional Magician Services",
    desc: "Professional Photo and video Coverage",
    icon: <Sparkles size={20} />,
    img: "/new/Magician.png",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } },
};

const Service = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.1 });

  return (
    <section className="bg-[#100528] py-24 px-6 relative overflow-hidden">

      {/* Background subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0b0120] via-[#14022e] to-[#1a0033]" />

      <div className="relative max-w-7xl mx-auto">

        {/* TOP TEXT */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className="text-purple-400 text-xs tracking-[0.3em] mb-4">
            THE EXHIBITION
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold text-white">
            Curated Professional Services
          </h2>
        </motion.div>

        {/* GRID */}
        <motion.div
          ref={ref}
          // variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-8"
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              // variants={cardVariants}
              whileHover={{ y: -6 }}
              className="
                group
                rounded-3xl p-6
                bg-white/[0.02]
                backdrop-blur-xl
                border border-white/10
                hover:border-purple-400/30
                transition-all duration-300
                hover:shadow-[0_0_50px_rgba(168,85,247,0.12)]
              "
            >
              
              {/* ICON */}
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 
                flex items-center justify-center mb-8
                shadow-[0_0_20px_rgba(168,85,247,0.25)] text-purple-300">
                {service.icon}
              </div>

              {/* TITLE */}
              <h3 className="text-white text-xl font-semibold my-2">
                {service.title}
              </h3>

              {/* DESC */}
              <p className="text-white/50 text-sm leading-relaxed mb-6">
                {service.desc}
              </p>

              {/* IMAGE */}
              <div className="relative rounded-xl overflow-hidden">
                <img
                  src={service.img}
                  alt={service.title}
                  className="
                    w-full h-[300px] object-cover rounded-xl
                    transition-transform duration-500 ease-out
                    group-hover:scale-110
                  "
                />

                {/* subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/10 to-transparent" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Service;