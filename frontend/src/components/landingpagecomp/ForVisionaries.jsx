import { CheckCircle, Star, CreditCard, Image, Wallet, TrendingUp } from "lucide-react";
import { useState } from "react";
import OnboardingModal from "./onboarding/OnboardingModal";

const ForVisionaries = () => {
const [openModal, setOpenModal] = useState(false);
  return (
    <section className="bg-[#100528] py-28 px-6 relative overflow-hidden">

      {/* Background gradient */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-[#0b0120] via-[#14022e] to-[#1a0033]" /> */}

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">

        {/* LEFT SIDE */}
        <div>
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
            <span className="text-white">For the </span>
            <span className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
              Visionaries
            </span>
          </h2>

          {/* Subtext */}
          <p className="text-white/60 mt-4 mb-10">
            Exceptional events require exceptional partners.
          </p>

          {/* LIST */}
          <div className="space-y-8 max-w-lg">

            {/* ITEM */}
            <div className="flex gap-4">
              <div className="text-purple-300 mt-1">
                <CheckCircle size={20} />
              </div>
              <div>
                <h4 className="text-white text-xl font-semibold">
                  Verified Professionals
                </h4>
                <p className="text-white/50 text-base mt-1">
                  Every artist undergoes a rigorous vetting process for talent and reliability.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-purple-300 mt-1">
                <Star size={20} />
              </div>
              <div>
                <h4 className="text-white text-xl font-semibold">
                  Real Reviews
                </h4>
                <p className="text-white/50 text-base mt-1">
                  Authentic feedback from our community ensures zero surprises on event day.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-purple-300 mt-1">
                <CreditCard size={20} />
              </div>
              <div>
                <h4 className="text-white text-xl font-semibold">
                  Seamless Booking
                </h4>
                <p className="text-white/50 text-base mt-1">
                  One-click scheduling and secure payments through our encrypted gateway.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="relative">

          <div className="
            rounded-3xl p-10
            bg-white/[0.04]
            backdrop-blur-xl
            border border-white/10
            shadow-[0_0_60px_rgba(168,85,247,0.08)]
          ">

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
              <span className="text-white">For the </span>
              <span className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                Superstars
              </span>
            </h2>

            {/* Subtext */}
            <p className="text-white/60 mt-4 mb-10">
              Your craft deserves a stage that matches your ambition.
            </p>

            {/* LIST */}
            <div className="space-y-8 max-w-md">

              <div className="flex gap-4">
                <div className="text-purple-300 mt-1">
                  <Image size={20} />
                </div>
                <div>
                  <h4 className="text-white font-semibold">
                    Showcase Talent
                  </h4>
                  <p className="text-white/50 text-base mt-1">
                    Upload cinematic reels and high-res galleries to attract high-end clientele.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-purple-300 mt-1">
                  <Wallet size={20} />
                </div>
                <div>
                  <h4 className="text-white font-semibold">
                    Get Booked
                  </h4>
                  <p className="text-white/50 text-base mt-1">
                    Set your rates, manage your calendar, and get paid instantly on completion.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-purple-300 mt-1">
                  <TrendingUp size={20} />
                </div>
                <div>
                  <h4 className="text-white font-semibold">
                    Grow Audience
                  </h4>
                  <p className="text-white/50 text-base mt-1">
                    Benefit from our platform’s marketing reach and premium branding.
                  </p>
                </div>
              </div>
            </div>

            {/* BUTTON */}
            <button 
            //  onClick={() => setOpenModal(true)}
              onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
             className="
              mt-10 w-full py-3 rounded-xl
              bg-purple-400/20
              text-white font-medium
              hover:bg-purple-400/30
              transition
            ">
              Apply as a Professional
            </button>
          </div>
        </div>
      </div>

      {openModal && (
        <OnboardingModal onClose={() => setOpenModal(false)} />
      )}
    </section>
  );
};

export default ForVisionaries;