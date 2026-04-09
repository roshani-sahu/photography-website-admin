import { useState, useEffect } from "react";
import toast from "react-hot-toast";

export default function Step1({ registerValidate }) {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [showOtp, setShowOtp] = useState(false);
  const [verified, setVerified] = useState(false);

  useEffect(() => {
    registerValidate(() => {
      if (!verified) return "Please verify your phone number.";
      return null;
    });
  }, [verified]);

  const handleRequestOtp = () => {
    if (phone.length !== 10) return toast.error("Enter a valid 10-digit number");
    setShowOtp(true);
    toast.success("OTP sent to +91 " + phone);
  };

  const handleVerifyOtp = () => {
    if (otp.length !== 6) return toast.error("Enter a valid 6-digit OTP");
    setVerified(true);
    setShowOtp(false);
    toast.success("OTP Verified Successfully ✓");
  };

  return (
    <div>
      <h2 className="text-xl text-white mb-2">
        Verify Your Phone Number
      </h2>

      <p className="text-white/50 mb-6">
        We use your phone number for booking confirmations and security.
      </p>

      {/* PHONE INPUT */}
      <div className="flex gap-3">
        <div className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white">
          +91
        </div>

        <input
          placeholder="Enter your phone number"
          maxLength={10}
          value={phone}
          onChange={(e) =>
            setPhone(e.target.value.replace(/\D/g, ""))
          }
          className="flex-1 input"
        />
      </div>

      {/* REQUEST OTP */}
      {!showOtp && !verified && (
        <button
          onClick={handleRequestOtp}
          className="w-full mt-4 py-3 rounded-xl bg-white text-black font-medium"
        >
          Request OTP
        </button>
      )}

      {/* OTP INPUT */}
      {showOtp && !verified && (
        <div className="mt-4 space-y-3">
          <input
            placeholder="Enter 6 digit OTP"
            maxLength={6}
            value={otp}
            onChange={(e) =>
              setOtp(e.target.value.replace(/\D/g, ""))
            }
            className="w-full input text-center tracking-widest"
          />

          <button
            onClick={handleVerifyOtp}
            className="w-full py-3 rounded-xl bg-purple-500 text-white font-medium"
          >
            Verify OTP
          </button>
        </div>
      )}

      {/* SUCCESS CARD */}
      {verified && (
        <div className="mt-5 p-4 rounded-xl border border-green-400/30 bg-green-500/10">
          <p className="text-green-400 font-medium">
            ✔ Phone Verified Successfully
          </p>
          <p className="text-white/60 text-sm mt-1">
            +91 {phone}
          </p>
        </div>
      )}

      {/* SECURITY INFO */}
      <div className="mt-5 p-4 rounded-xl bg-purple-500/10 border border-purple-400/20">
        <p className="text-purple-300 font-medium text-sm">
          Security Verification
        </p>
        <p className="text-white/50 text-sm mt-1">
          Your phone number is encrypted and used only for booking confirmations and account security.
        </p>
      </div>
    </div>
  );
}