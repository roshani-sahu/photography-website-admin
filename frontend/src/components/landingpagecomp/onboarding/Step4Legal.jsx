// Step4Legal.jsx
import { useState, useEffect, useRef } from "react";
import Accordion from "./Accordion";
import { UploadCloud, X, FileText } from "lucide-react";

function UploadBox({ label, file, onUpload, onRemove }) {
  const inputRef = useRef(null);

  return (
    <div>
      <label className="block text-white/60 mb-2">{label}</label>
      {!file ? (
        <div
          onClick={() => inputRef.current.click()}
          className="border border-dashed border-white/20 rounded-xl p-6 text-center bg-white/5 cursor-pointer hover:border-purple-400/40 hover:bg-white/[0.04] transition"
        >
          <UploadCloud size={24} className="mx-auto text-white/30 mb-2" />
          <p className="text-white/60 text-sm">Click to upload</p>
          <p className="text-white/30 text-xs mt-1">PDF, JPG, PNG (Max 5MB)</p>
          <input
            ref={inputRef}
            type="file"
            accept=".pdf,.jpg,.jpeg,.png"
            className="hidden"
            onChange={(e) => e.target.files[0] && onUpload(e.target.files[0])}
          />
        </div>
      ) : (
        <div className="flex items-center justify-between p-3 rounded-xl bg-purple-500/10 border border-purple-400/20">
          <div className="flex items-center gap-3">
            <FileText size={18} className="text-purple-300" />
            <div>
              <p className="text-white text-sm truncate max-w-[200px]">{file.name}</p>
              <p className="text-white/40 text-xs">{(file.size / 1024).toFixed(1)} KB</p>
            </div>
          </div>
          <button onClick={onRemove} className="text-white/40 hover:text-white">
            <X size={16} />
          </button>
        </div>
      )}
    </div>
  );
}

export default function Step4({ registerValidate }) {
  const [aadhaar, setAadhaar] = useState("");
  const [aadhaarFile, setAadhaarFile] = useState(null);
  const [pan, setPan] = useState("");
  const [panFile, setPanFile] = useState(null);

  useEffect(() => {
    registerValidate(() => {
      if (!aadhaar || aadhaar.length !== 12) return "Enter a valid 12-digit Aadhaar number.";
      if (!aadhaarFile) return "Please upload your Aadhaar card.";
      if (!pan || pan.length !== 10) return "Enter a valid 10-character PAN number.";
      if (!panFile) return "Please upload your PAN card.";
      return null;
    });
  }, [aadhaar, aadhaarFile, pan, panFile]);

  return (
    <div>
      <h2 className="text-xl text-white mb-2">Legal & Identity Verification</h2>
      <p className="text-white/50 mb-6">Your profile will go live only after admin approval.</p>

      <div className="space-y-5">

        <div className="p-4 rounded-xl bg-purple-500/10 border border-purple-400/20">
          <p className="text-purple-300 font-medium text-sm">Secured & Confidential</p>
          <p className="text-white/50 text-sm mt-1">Your documents are encrypted and securely stored.</p>
        </div>

        <Accordion title="Aadhaar Verification">
          <div className="space-y-4">
            <div>
              <label className="block text-white/60 mb-2">Aadhaar Number</label>
              <input
                placeholder="Enter Aadhaar Number"
                maxLength={12}
                className="w-full input"
                value={aadhaar}
                onChange={(e) => setAadhaar(e.target.value.replace(/\D/g, ""))}
              />
            </div>
            <UploadBox
              label="Upload Aadhaar Card"
              file={aadhaarFile}
              onUpload={setAadhaarFile}
              onRemove={() => setAadhaarFile(null)}
            />
          </div>
        </Accordion>

        <Accordion title="PAN Verification">
          <div className="space-y-4">
            <div>
              <label className="block text-white/60 mb-2">PAN Number</label>
              <input
                placeholder="Enter PAN Number"
                maxLength={10}
                className="w-full input"
                value={pan}
                onChange={(e) => setPan(e.target.value.toUpperCase())}
              />
            </div>
            <UploadBox
              label="Upload PAN Card"
              file={panFile}
              onUpload={setPanFile}
              onRemove={() => setPanFile(null)}
            />
          </div>
        </Accordion>

        <div className="p-4 rounded-xl bg-yellow-500/10 border border-yellow-400/20">
          <p className="text-yellow-300 font-medium text-sm">Verification Required</p>
          <p className="text-white/50 text-sm mt-1">Documents will be reviewed within 24–48 hours.</p>
        </div>

      </div>
    </div>
  );
}
