import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function Contact() {
  return (
    <section className="min-h-screen bg-[#0b0120] text-white px-6 py-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">

        {/* LEFT INFO */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Contact ClickNow
          </h1>

          <p className="text-white/60 mb-10 leading-7">
            Get in touch with ClickNow for bookings, partnerships,
            support, or business inquiries. Our team is here to assist
            you and ensure a smooth experience for both customers and
            event professionals.
          </p>

          <div className="space-y-6">

            {/* EMAIL */}
            <div className="flex items-start gap-4">
              <div className="h-11 w-11 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center">
                <Mail size={18} />
              </div>

              <div>
                <h3 className="font-semibold text-lg">Email</h3>
                <p className="text-white/60">
                  support@clicknow.co.in
                </p>
              </div>
            </div>

            {/* PHONE */}
            <div className="flex items-start gap-4">
              <div className="h-11 w-11 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center">
                <Phone size={18} />
              </div>

              <div>
                <h3 className="font-semibold text-lg">Phone</h3>
                <p className="text-white/60">
                  +91 9253842526
                </p>
              </div>
            </div>

            {/* ADDRESS */}
            <div className="flex items-start gap-4">
              <div className="h-11 w-11 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center">
                <MapPin size={18} />
              </div>

              <div>
                <h3 className="font-semibold text-lg">Office Address</h3>
                <p className="text-white/60 leading-7">
                  494/18 Vijay Nagar, <br />
                  Hisar, Haryana, India
                </p>
              </div>
            </div>

            {/* BUSINESS HOURS */}
            <div className="flex items-start gap-4">
              <div className="h-11 w-11 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center">
                <Clock size={18} />
              </div>

              <div>
                <h3 className="font-semibold text-lg">Business Hours</h3>
                <p className="text-white/60">
                  Monday – Saturday
                </p>
                <p className="text-white/60">
                  10:00 AM – 7:00 PM
                </p>
              </div>
            </div>

          </div>

          {/* EXTRA INFO */}
          <div className="mt-10 space-y-5">

            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-xl">
              <h3 className="text-lg font-semibold mb-2">
                Customer Support
              </h3>

              <p className="text-white/60 leading-7">
                Need assistance with bookings, event professionals,
                or platform-related queries? Our support team is
                available to provide quick and reliable assistance.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-xl">
              <h3 className="text-lg font-semibold mb-2">
                Become a Professional Partner
              </h3>

              <p className="text-white/60 leading-7">
                Event professionals can apply and join our network
                directly through the official ClickNow app. We welcome
                photographers, musicians, DJs, decorators, anchors,
                performers, and other event service providers to grow
                their business with ClickNow.
              </p>
            </div>

          </div>
        </div>

        {/* FORM */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white/5 border border-white/10 backdrop-blur-xl p-7 rounded-3xl space-y-5 sticky top-24"
        >

          <div>
            <h2 className="text-2xl font-semibold mb-2">
              Send us a message
            </h2>

            <p className="text-white/50 text-sm">
              We’ll get back to you as soon as possible.
            </p>
          </div>

          <input
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-purple-500 transition-all"
            placeholder="Your Name"
          />

          <input
            type="email"
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-purple-500 transition-all"
            placeholder="Email Address"
          />

          <input
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-purple-500 transition-all"
            placeholder="Subject"
          />

          <textarea
            rows={5}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none resize-none focus:border-purple-500 transition-all"
            placeholder="Your Message"
          />

          <button className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 transition-all text-white font-medium">
            Send Message
          </button>

          <p className="text-xs text-white/40 text-center leading-6">
            For collaborations, partnerships, or business opportunities,
            feel free to contact us through email or phone.
          </p>

        </motion.form>
      </div>
    </section>
  );
}