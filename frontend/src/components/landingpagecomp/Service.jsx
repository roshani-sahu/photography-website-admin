import { motion } from "framer-motion";
import { Camera, Music, Mic2, Heart, User, Sparkles } from "lucide-react";

const services = [
  {
    title: "Photo",
    desc: "Capture timeless moments with award-winning photographers specializing in portraits and events.",
    icon: <Camera size={20} />,
    img: "/hero.png",
  },
  {
    title: "Music",
    desc: "Live bands and soloists performing across all genres to set the perfect atmosphere for your night.",
    icon: <Music size={20} />,
    img: "/hero.png",
  },
  {
    title: "DJ",
    desc: "High-energy performers with state-of-the-art equipment to keep your dance floor packed.",
    icon: <Mic2 size={20} />,
    img: "/hero.png",
  },
  {
    title: "Wedding",
    desc: "All-in-one planning and performance packages to make your special day truly unforgettable.",
    icon: <Heart size={20} />,
    img: "/hero.png",
  },
  {
    title: "Anchor",
    desc: "Professional hosts and emcees to guide your event flow with charisma and precision.",
    icon: <User size={20} />,
    img: "/hero.png",
  },
  {
    title: "Magician",
    desc: "Spellbinding close-up magic and stage shows that will leave your guests in absolute awe.",
    icon: <Sparkles size={20} />,
    img: "/hero.png",
  },
];

const Service = () => {
  return (
    <section className="bg-[#0b0120] py-24 px-6 relative overflow-hidden">

      {/* Background subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0b0120] via-[#14022e] to-[#1a0033]" />

      <div className="relative max-w-7xl mx-auto">

        {/* TOP TEXT */}
        <div className="text-center mb-16">
          <p className="text-purple-400 text-xs tracking-[0.3em] mb-4">
            THE EXHIBITION
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold text-white">
            Curated Professional Services
          </h2>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
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
                    w-full h-[200px] object-cover rounded-xl
                    transition-transform duration-500 ease-out
                    group-hover:scale-110
                  "
                />

                {/* subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/10 to-transparent" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;