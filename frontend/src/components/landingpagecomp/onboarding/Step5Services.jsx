// Step5Services.jsx
import { useState } from "react";
import ChipSelect from "./ChipSelect";
import Toggle from "./ToggleSwitch";
import Accordion from "./Accordion";

export default function Step5() {
  const [services, setServices] = useState([]);
  const [urgent, setUrgent] = useState(true);
  const [travel, setTravel] = useState(false);
  const [cancel, setCancel] = useState(false);
  const [commission, setCommission] = useState(false);

  const options = [
    "Wedding", "Pre-Wedding", "Engagement",
    "Birthday", "Corporate Event",
    "Product Shoot", "Fashion Shoot", "Real Estate"
  ];

  return (
    <div>
      <h2 className="text-xl text-white mb-2">
        Professional Services
      </h2>

      <p className="text-white/50 mb-6">
        Configure your services and booking preferences.
      </p>

      <div className="space-y-6">

        {/* CATEGORY */}
        <div>
          <label className="text-white/60 text-sm mb-2 block">
            Service Category
          </label>
          <select className="w-full input">
            <option>Photo and Videography</option>
            <option>DJ</option>
            <option>Musician</option>
          </select>
        </div>

        {/* SPECIALITY */}
        <div>
          <label className="text-white/60 text-sm mb-2 block">
            Speciality
          </label>
          <ChipSelect
            options={options}
            selected={services}
            setSelected={setServices}
          />
        </div>

        {/* TOGGLES */}
        <div className="space-y-4">

          <div className="flex justify-between items-center">
            <span className="text-white/70">
              Available for urgent bookings
            </span>
            <Toggle enabled={urgent} setEnabled={setUrgent} />
          </div>

          <div className="flex justify-between items-center">
            <span className="text-white/70">
              Willing to travel
            </span>
            <Toggle enabled={travel} setEnabled={setTravel} />
          </div>

          <div className="flex justify-between items-center">
            <span className="text-white/70">
              Cancellation Policy Enabled
            </span>
            <Toggle enabled={cancel} setEnabled={setCancel} />
          </div>

          <div className="flex justify-between items-center">
            <span className="text-white/70">
              Accept Platform Commission
            </span>
            <Toggle enabled={commission} setEnabled={setCommission} />
          </div>

        </div>

        {/* BANK DETAILS */}
        <Accordion title="Bank Information">
          <div className="space-y-4">
            <input placeholder="Account Number" className="w-full input" />
            <input placeholder="IFSC Code" className="w-full input" />
            <input placeholder="Bank Name" className="w-full input" />
            <input placeholder="Branch Name" className="w-full input" />
            <input placeholder="UPI ID (Optional)" className="w-full input" />
          </div>
        </Accordion>

      </div>
    </div>
  );
}