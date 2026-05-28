import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    id: "1",
    title: "Submit Your Requirements",
    desc: "Share your event details, preferred services, location, and schedule through a quick booking request.",
  },
  {
    id: "2",
    title: "Get Matched",
    desc: "Our team carefully selects the best-fit verified professionals based on your event requirements and preferences.",
  },
  {
    id: "3",
    title: "Confirm & Manage",
    desc: "Finalize your booking, coordinate event details, and manage everything seamlessly through ClickNow.",
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

const HowItWorks = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.3 });

  return (
    <section className="relative py-28 px-6 overflow-hidden bg-[#0b0120]">

      {/* BACKGROUND GRADIENT */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-[#0b0120] via-[#14022e] to-[#1a0033]" /> */}

      {/* SOFT GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-purple-600/10 blur-[120px]" />

      <div className="relative max-w-7xl mx-auto">

        {/* HEADING */}
        <motion.div
          className="text-center mb-20"
          // initial={{ opacity: 0, y: 30 }}
          // animate={inView ? { opacity: 1, y: 0 } : {}}
          // transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-semibold 
            bg-gradient-to-b from-white to-purple-200 
            bg-clip-text text-transparent">
            Book Your Event in 3 Simple Steps
          </h2>

          <p className="text-white/60 mt-4">
Tell us what you need, and our team will match you with the most suitable verified professionals for your event.
          </p>
        </motion.div>

        {/* STEPS */}
        <motion.div
          ref={ref}
          // variants={containerVariants}
          // initial="hidden"
          // animate={inView ? "visible" : "hidden"}
          className="relative grid md:grid-cols-3 gap-10 items-center"
        >

          {/* CONNECTOR LINE */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />

          {steps.map((step, i) => (
           <motion.div
  key={i}
  // variants={itemVariants}
  whileHover={{ y: -6 }}
  className={`
    relative z-10 group
    rounded-3xl p-10 text-center
    backdrop-blur-xl
    border border-white/10
    bg-white/[0.02]
    transition-all duration-300

    ${i === 1 
      ? "translate-y-6 md:-translate-y-6 scale-105 shadow-[0_0_60px_rgba(168,85,247,0.15)]" 
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
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;