// Step4Legal.jsx
import Accordion from "./Accordion";

const UploadBox = ({ label }) => (
  <div className="border border-dashed border-white/20 rounded-xl p-6 text-center bg-white/5">
    <p className="text-white/70 text-sm mb-1">{label}</p>
    <p className="text-white/40 text-xs">PDF, JPG, PNG (Max 5MB)</p>
  </div>
);

export default function Step4() {
  return (
    <div>
      <h2 className="text-xl text-white mb-2">
        Legal & Identity Verification
      </h2>

      <p className="text-white/50 mb-6">
        Your profile will go live only after admin approval.
      </p>

      <div className="space-y-5">

        {/* SECURITY INFO */}
        <div className="p-4 rounded-xl bg-purple-500/10 border border-purple-400/20">
          <p className="text-purple-300 font-medium text-sm">
            Secured & Confidential
          </p>
          <p className="text-white/50 text-sm mt-1">
            Your documents are encrypted and securely stored.
          </p>
        </div>

        {/* AADHAAR */}
        <Accordion title="Aadhaar Verification">
        <label className="block text-white/60  mb-2">Aadhaar Number</label>
          <div className="space-y-4">
            <input
              placeholder="Enter Aadhaar Number"
              className="w-full input"
            />
                    <label className="block text-white/60   mb-2">Upload Aadhaar Card</label>

            <UploadBox label="Upload Aadhaar Front / PDF" />
          </div>
        </Accordion>

        {/* PAN */}
        <Accordion title="PAN Verification">
                    <label className="block text-white/60  mb-2">PAN Number</label>

          <div className="space-y-4">
            <input
              placeholder="Enter PAN Number"
              className="w-full input"
            />
                                <label className="block text-white/60   mb-2">Upload PAN Card</label>
            <UploadBox label="Upload PAN Card / PDF" />
          </div>
        </Accordion>

        {/* STATUS CARD */}
        <div className="p-4 rounded-xl bg-yellow-500/10 border border-yellow-400/20">
          <p className="text-yellow-300 font-medium text-sm">
            Verification Required
          </p>
          <p className="text-white/50 text-sm mt-1">
            Documents will be reviewed within 24–48 hours.
          </p>
        </div>

      </div>
    </div>
  );
}