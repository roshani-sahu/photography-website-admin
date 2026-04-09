import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Elena Vance",
    role: "ART DIRECTOR",
    text: "Found the perfect quartet for my gallery opening. The booking process was so smooth it felt like magic.",
    img: "/user1.jpg",
  },
  {
    name: "Marcus Thorne",
    role: "PROFESSIONAL DJ",
    text: "ClickNow transformed my side hustle into a full-time career. The quality of clients here is unmatched.",
    img: "/user2.jpg",
  },
  {
    name: "Sofia Ricci",
    role: "EVENT PLANNER",
    text: "The only platform that understands the intersection of high art and modern digital convenience.",
    img: "/user3.jpg",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Testimonials = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.3 });

  return (
    <section className="relative py-28 px-6 overflow-hidden bg-[#0b0120]">

      {/* Background gradient */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-[#0b0120] via-[#14022e] to-[#1a0033]" /> */}

      <div className="relative max-w-7xl mx-auto">

        {/* HEADING */}
        <motion.h2
          className="text-center text-4xl md:text-5xl font-semibold 
          bg-gradient-to-b from-white to-purple-200 
          bg-clip-text text-transparent mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          What the Community Says
        </motion.h2>

        {/* GRID */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-8 items-center"
        >

          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              className={`
                relative group
                rounded-3xl p-8
                bg-white/[0.03]
                backdrop-blur-xl
                border border-white/10
                transition-all duration-300
                hover:border-purple-400/30
                hover:shadow-[0_0_60px_rgba(168,85,247,0.12)]

                ${i === 1 
                  ? "-translate-y-6 scale-105" 
                  : "translate-y-6"
                }
              `}
            >

              {/* STARS */}
              <div className="flex gap-1 mb-5 text-purple-300">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} size={16} fill="currentColor" />
                ))}
              </div>

              {/* TEXT */}
              <p className="text-white/60 italic leading-relaxed mb-8">
                "{item.text}"
              </p>

              {/* USER */}
              <div className="flex items-center gap-4">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover border border-purple-400/30"
                />

                <div>
                  <h4 className="text-white font-semibold text-sm">
                    {item.name}
                  </h4>
                  <p className="text-white/40 text-xs tracking-wide">
                    {item.role}
                  </p>
                </div>
              </div>

              {/* hover glow */}
              <div className="absolute inset-0 rounded-3xl bg-purple-500/5 opacity-0 group-hover:opacity-100 transition" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;