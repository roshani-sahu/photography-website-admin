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
              For Event Hosts

            </span>
          </h2>

          {/* Subtext */}
          <p className="text-white/60 mt-4 mb-10">
Whether it’s a wedding, private party, corporate gathering, or celebration — ClickNow helps you connect with trusted professionals without the stress.
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
Every professional is reviewed for quality, reliability, professionalism, and event experience.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-purple-300 mt-1">
                <Star size={20} />
              </div>
              <div>
                <h4 className="text-white text-xl font-semibold">
Genuine Client Reviews
                </h4>
                <p className="text-white/50 text-base mt-1">
Read authentic experiences and ratings from real clients before confirming your booking.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-purple-300 mt-1">
                <CreditCard size={20} />
              </div>
              <div>
                <h4 className="text-white text-xl font-semibold">
Secure & Hassle-Free Booking
                </h4>
                <p className="text-white/50 text-base mt-1">
Book confidently with transparent communication, secure payments, and dedicated support.
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
For Professionals & Artists              </span>
            </h2>

            {/* Subtext */}
            <p className="text-white/60 mt-4 mb-10">
Grow your brand, showcase your talent, and connect with clients actively searching for event professionals.
            </p>

            {/* LIST */}
            <div className="space-y-8 max-w-md">

              <div className="flex gap-4">
                <div className="text-purple-300 mt-1">
                  <Image size={20} />
                </div>
                <div>
                  <h4 className="text-white font-semibold">
Build Your Professional Presence
                  </h4>
                  <p className="text-white/50 text-base mt-1">
Showcase portfolios, reels, galleries to attract quality clients.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-purple-300 mt-1">
                  <Wallet size={20} />
                </div>
                <div>
                  <h4 className="text-white font-semibold">
Receive More Booking Opportunities
                  </h4>
                  <p className="text-white/50 text-base mt-1">
Get connected with clients looking for photographers, musicians, live artists, DJs, and entertainers for their events.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-purple-300 mt-1">
                  <TrendingUp size={20} />
                </div>
                <div>
                  <h4 className="text-white font-semibold">
Grow Your Brand
                  </h4>
                  <p className="text-white/50 text-base mt-1">
Expand your reach, build credibility, collect reviews, and grow your event business with ClickNow.
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