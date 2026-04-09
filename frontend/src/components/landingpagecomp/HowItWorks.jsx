import { motion } from "framer-motion";

const steps = [
  {
    id: "1",
    title: "Browse",
    desc: "Explore thousands of verified portfolios and read real client reviews.",
  },
  {
    id: "2",
    title: "Book",
    desc: "Secure your date with instant booking and transparent pricing structures.",
  },
  {
    id: "3",
    title: "Manage",
    desc: "Coordinate with your artist through our integrated workspace.",
  },
];

const HowItWorks = () => {
  return (
    <section className="relative py-28 px-6 overflow-hidden bg-[#0b0120]">

      {/* BACKGROUND GRADIENT */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-[#0b0120] via-[#14022e] to-[#1a0033]" /> */}

      {/* SOFT GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-purple-600/10 blur-[120px]" />

      <div className="relative max-w-7xl mx-auto">

        {/* HEADING */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-semibold 
            bg-gradient-to-b from-white to-purple-200 
            bg-clip-text text-transparent">
            Seamless Connection
          </h2>

          <p className="text-white/60 mt-4">
            Three simple steps to elevate your next gathering.
          </p>
        </div>

        {/* STEPS */}
        <div className="relative grid md:grid-cols-3 gap-10 items-center">

          {/* CONNECTOR LINE */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />

          {steps.map((step, i) => (
           <motion.div
  key={i}
  whileHover={{ y: -6 }}
  className={`
    relative z-10 group
    rounded-3xl p-10 text-center
    backdrop-blur-xl
    border border-white/10
    bg-white/[0.02]
    transition-all duration-300

    ${i === 1 
      ? "-translate-y-6 scale-105 shadow-[0_0_60px_rgba(168,85,247,0.15)]" 
      : "translate-y-6"
    }
  `}
>

              {/* STEP NUMBER */}
              <div className="w-16 h-16 mx-auto mb-6 rounded-full 
                flex items-center justify-center
                bg-purple-500/10 border border-purple-400/20
                text-purple-300 text-xl font-semibold
                ">
                {step.id}
              </div>

              {/* TITLE */}
              <h3 className="text-white text-xl font-semibold mb-3">
                {step.title}
              </h3>

              {/* DESC */}
              <p className="text-white/50 text-sm leading-relaxed">
                {step.desc}
              </p>

              {/* HOVER GLOW */}
              <div className="absolute inset-0 rounded-3xl bg-purple-500/5 opacity-0 group-hover:opacity-100 transition" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;