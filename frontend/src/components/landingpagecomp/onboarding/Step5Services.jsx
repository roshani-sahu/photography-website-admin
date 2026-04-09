import { useState, useEffect, useRef } from "react";
import Accordion from "./Accordion";
import { ChevronDown, X, UploadCloud, FileText } from "lucide-react";

const eventOptions = [
  "Wedding", "Pre-Wedding", "Engagement", "Birthday",
  "Corporate Event", "Product Shoot", "Fashion Shoot", "Real Estate Shoot"
];

const serviceTypes = [
  "Photo and Videography Services",
  "Wedding Photography",
  "Portrait Photography",
  "Fashion & Editorial",
  "Product & Commercial",
  "Real Estate Photography",
  "Event Coverage",
  "Drone Videography",
  "Documentary Filmmaking",
];

const teamSizes = [
  "Solo (Just me)",
  "2 Members",
  "3-5 Members",
  "6-10 Members",
  "10+ Members",
];

const stateCities = {
  "Madhya Pradesh": ["Indore", "Bhopal", "Gwalior", "Jabalpur", "Ujjain"],
  "Uttar Pradesh": ["Lucknow", "Kanpur", "Agra", "Varanasi", "Noida"],
  "Maharashtra": ["Mumbai", "Pune", "Nagpur", "Nashik", "Aurangabad"],
  "Delhi": ["New Delhi", "Dwarka", "Rohini", "Saket", "Lajpat Nagar"],
  "Rajasthan": ["Jaipur", "Jodhpur", "Udaipur", "Kota", "Ajmer"],
};

function LocationBlock({ index, onSave, onRemove }) {
  const [state, setState] = useState("");
  const [selectedCities, setSelectedCities] = useState([]);
  const [cityDropOpen, setCityDropOpen] = useState(false);

  const cities = stateCities[state] || [];

  const toggleCity = (city) =>
    setSelectedCities((prev) =>
      prev.includes(city) ? prev.filter((c) => c !== city) : [...prev, city]
    );

  const handleSave = () => {
    if (state && selectedCities.length) onSave({ state, cities: selectedCities });
  };

  return (
    <div className="border border-white/10 rounded-xl p-4 space-y-3 relative">
      {index > 0 && (
        <button onClick={onRemove} className="absolute top-3 right-3 text-white/40 hover:text-white">
          <X size={14} />
        </button>
      )}

      <div>
        <label className="block text-white/60 mb-2">State</label>
        <select
          className="w-full input"
          value={state}
          onChange={(e) => { setState(e.target.value); setSelectedCities([]); }}
        >
          <option className="text-black" value="">Select state</option>
          {Object.keys(stateCities).map((s) => (
            <option key={s} className="text-black">{s}</option>
          ))}
        </select>
      </div>

      {state && (
        <div className="relative">
          <label className="block text-white/60 mb-2">City</label>
          <div
            onClick={() => setCityDropOpen(!cityDropOpen)}
            className="input flex justify-between cursor-pointer"
          >
            <span className="text-white/50">
              {selectedCities.length ? `${selectedCities.length} selected` : "Select cities"}
            </span>
            <span className="text-white/40 text-xs">▾</span>
          </div>

          {cityDropOpen && (
            <div className="absolute z-20 mt-1 w-full bg-[#1c1530] border border-white/10 rounded-xl p-2 max-h-40 overflow-y-auto scrollbar-hide">
              {cities.map((city) => (
                <div
                  key={city}
                  onClick={() => toggleCity(city)}
                  className={`px-3 py-2 rounded-lg cursor-pointer text-sm mb-1 ${
                    selectedCities.includes(city)
                      ? "bg-purple-600 text-white"
                      : "text-white/70 hover:bg-white/10"
                  }`}
                >
                  {city}
                </div>
              ))}
            </div>
          )}

          {selectedCities.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2">
              {selectedCities.map((city) => (
                <span key={city} className="chip flex items-center gap-1">
                  {city}
                  <X size={12} className="cursor-pointer" onClick={() => toggleCity(city)} />
                </span>
              ))}
            </div>
          )}
        </div>
      )}

      <button onClick={handleSave} className="btn-light mt-1">Save Location</button>
    </div>
  );
}

export default function Step5Services({ registerValidate }) {
  const [form, setForm] = useState({
    serviceType: "",
    events: [],
    isFullTime: true,
    teamSize: "",
    cameras: "",
    lenses: "",
    lighting: "",
    drone: "",
    editing: "",
    hourlyPrice: "",
    packagePrice: "",
    urgent: true,
    travel: false,
    cancellation: false,
    agreement: false,
  });

  const [blocks, setBlocks] = useState([0]);
  const [savedLocations, setSavedLocations] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [serviceDropdownOpen, setServiceDropdownOpen] = useState(false);
  const [teamDropdownOpen, setTeamDropdownOpen] = useState(false);
  const [passbookFile, setPassbookFile] = useState(null);
  const passbookRef = useRef(null);

  useEffect(() => {
    registerValidate(() => {
      if (!form.serviceType) return "Please select a service type.";
      if (!form.events.length) return "Select at least one event type.";
      if (!form.teamSize) return "Please select your team size.";
      if (!form.cameras.trim()) return "Please enter your camera equipment.";
      if (!form.editing.trim()) return "Please enter your editing software.";
      if (!form.hourlyPrice.trim()) return "Hourly price is required.";
      if (!form.packagePrice.trim()) return "Package price is required.";
      return null;
    });
  }, [form]);

  const toggleEvent = (item) => {
    setForm((prev) => ({
      ...prev,
      events: prev.events.includes(item)
        ? prev.events.filter((e) => e !== item)
        : [...prev.events, item],
    }));
  };

  const handleSaveLocation = (data) => {
    setSavedLocations((prev) => {
      const idx = prev.findIndex((l) => l.state === data.state);
      if (idx >= 0) { const u = [...prev]; u[idx] = data; return u; }
      return [...prev, data];
    });
  };

  const addBlock = () => setBlocks((prev) => [...prev, prev.length]);
  const removeBlock = (i) => setBlocks((prev) => prev.filter((_, idx) => idx !== i));

  return (
    <div className="space-y-6">

      {/* SERVICE TYPE */}
      <div className="relative">
        <label className="label">Service Type</label>
        <div
          onClick={() => { setServiceDropdownOpen(!serviceDropdownOpen); setTeamDropdownOpen(false); setDropdownOpen(false); }}
          className="input flex justify-between cursor-pointer"
        >
          {form.serviceType || <span className="text-white/40">Select service type</span>}
          <ChevronDown size={16} />
        </div>
        {serviceDropdownOpen && (
          <div className="absolute z-20 mt-2 w-full bg-[#1c1530] border border-white/10 rounded-xl p-3 max-h-48 overflow-y-auto scrollbar-hide">
            {serviceTypes.map((item) => (
              <div
                key={item}
                onClick={() => { setForm({ ...form, serviceType: item }); setServiceDropdownOpen(false); }}
                className={`px-3 py-2 rounded-lg cursor-pointer text-sm mb-1 ${
                  form.serviceType === item ? "bg-purple-600 text-white" : "hover:bg-white/10 text-white"
                }`}
              >
                {item}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* EVENT TYPE */}
      <div className="relative">
        <label className="label">Speciality or Event type</label>
        <div
          onClick={() => { setDropdownOpen(!dropdownOpen); setServiceDropdownOpen(false); setTeamDropdownOpen(false); }}
          className="input flex justify-between cursor-pointer"
        >
          <span className="text-white/40">Select Events</span>
          <ChevronDown size={16} />
        </div>
        {dropdownOpen && (
          <div className="absolute z-20 mt-2 w-full scrollbar-hide bg-[#1c1530] border border-white/10 rounded-xl p-3 max-h-48 overflow-y-auto">
            {eventOptions.map((item) => (
              <div
                key={item}
                onClick={() => toggleEvent(item)}
                className={`px-3 py-2 rounded-lg cursor-pointer text-sm mb-1 ${
                  form.events.includes(item) ? "bg-purple-600 text-white" : "hover:bg-white/10 text-white"
                }`}
              >
                {item}
              </div>
            ))}
          </div>
        )}
        <div className="flex flex-wrap text-white gap-2 mt-3">
          {form.events.map((item) => (
            <div key={item} className="chip">
              {item}
              <X size={14} onClick={() => toggleEvent(item)} />
            </div>
          ))}
        </div>
      </div>

      {/* RADIO */}
      <div>
        <label className="label">Are you a full-time professional or a freelancer?</label>
        <div className="flex text-white text-lg gap-6">
          <label className="flex gap-2">
            <input type="radio" checked={form.isFullTime} onChange={() => setForm({ ...form, isFullTime: true })} />
            Full-Time
          </label>
          <label className="flex gap-2">
            <input type="radio" checked={!form.isFullTime} onChange={() => setForm({ ...form, isFullTime: false })} />
            Freelancer
          </label>
        </div>
      </div>

      {/* TEAM SIZE */}
      <div className="relative">
        <label className="label">What is your team size?</label>
        <div
          onClick={() => { setTeamDropdownOpen(!teamDropdownOpen); setServiceDropdownOpen(false); setDropdownOpen(false); }}
          className="input flex justify-between cursor-pointer"
        >
          {form.teamSize || <span className="text-white/40">Select team size</span>}
          <ChevronDown size={16} />
        </div>
        {teamDropdownOpen && (
          <div className="absolute z-20 mt-2 w-full bg-[#1c1530] border border-white/10 rounded-xl p-3 max-h-48 overflow-y-auto scrollbar-hide">
            {teamSizes.map((item) => (
              <div
                key={item}
                onClick={() => { setForm({ ...form, teamSize: item }); setTeamDropdownOpen(false); }}
                className={`px-3 py-2 rounded-lg cursor-pointer text-sm mb-1 ${
                  form.teamSize === item ? "bg-purple-600 text-white" : "hover:bg-white/10 text-white/70"
                }`}
              >
                {item}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* TEXTAREAS */}
      {[
        { label: "What camera(s) do you own?", key: "cameras" },
        { label: "What lenses do you own?", key: "lenses" },
        { label: "Do you own lighting equipment?", key: "lighting" },
        { label: "Do you own a drone?", key: "drone" },
        { label: "What editing software do you use?", key: "editing" },
      ].map((item) => (
        <div key={item.key}>
          <label className="label">{item.label}</label>
          <textarea
            className="input"
            value={form[item.key]}
            onChange={(e) => setForm({ ...form, [item.key]: e.target.value })}
          />
        </div>
      ))}

      {/* PRICING */}
      <div>
        <label className="label">Hourly Price</label>
        <input className="input" placeholder="Enter hourly price" value={form.hourlyPrice} onChange={(e) => setForm({ ...form, hourlyPrice: e.target.value })} />
      </div>
      <div>
        <label className="label">Package Price</label>
        <input className="input" placeholder="Enter package price" value={form.packagePrice} onChange={(e) => setForm({ ...form, packagePrice: e.target.value })} />
      </div>

      {/* TOGGLES */}
      <Toggle label="Available for urgent bookings" value={form.urgent} onChange={(v) => setForm({ ...form, urgent: v })} />
      <Toggle label="Willing to travel outside city" value={form.travel} onChange={(v) => setForm({ ...form, travel: v })} />

      {/* SECONDARY LOCATION */}
      {form.travel && (
        <Accordion title="Secondary Working Location">
          <div className="space-y-4">
            {blocks.map((_, i) => (
              <LocationBlock key={i} index={i} onSave={handleSaveLocation} onRemove={() => removeBlock(i)} />
            ))}

            <button onClick={addBlock} className="btn-light w-full">+ Add More Location</button>

            {savedLocations.length > 0 && (
              <div className="mt-3 space-y-2">
                <p className="text-white/40 text-xs uppercase tracking-widest mb-2">Saved Locations</p>
                {savedLocations.map((loc, i) => (
                  <div key={i} className="flex flex-wrap items-center gap-2 p-3 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-purple-300 text-sm font-medium">{loc.state}</span>
                    <span className="text-white/30">—</span>
                    {loc.cities.map((c) => (
                      <span key={c} className="chip text-xs">{c}</span>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>
        </Accordion>
      )}

      <Toggle label="Cancellation Policy" value={form.cancellation} onChange={(v) => setForm({ ...form, cancellation: v })} />
      <Toggle label="Platform Commission Agreement" value={form.agreement} onChange={(v) => setForm({ ...form, agreement: v })} />

      {/* BANK */}
      <Accordion title="Bank Information">
        <div className="space-y-4">
          <input className="input" placeholder="Account Number" />
          {!passbookFile ? (
            <div
              onClick={() => passbookRef.current.click()}
              className="border border-dashed border-white/20 rounded-xl p-6 text-center bg-white/5 cursor-pointer hover:border-purple-400/40 hover:bg-white/[0.04] transition"
            >
              <UploadCloud size={24} className="mx-auto text-white/30 mb-2" />
              <p className="text-white/60 text-sm">Click to upload passbook</p>
              <p className="text-white/30 text-xs mt-1">PDF, JPG, PNG (Max 5MB)</p>
              <input
                ref={passbookRef}
                type="file"
                accept=".pdf,.jpg,.jpeg,.png"
                className="hidden"
                onChange={(e) => e.target.files[0] && setPassbookFile(e.target.files[0])}
              />
            </div>
          ) : (
            <div className="flex items-center justify-between p-3 rounded-xl bg-purple-500/10 border border-purple-400/20">
              <div className="flex items-center gap-3">
                <FileText size={18} className="text-purple-300" />
                <div>
                  <p className="text-white text-sm truncate max-w-[200px]">{passbookFile.name}</p>
                  <p className="text-white/40 text-xs">{(passbookFile.size / 1024).toFixed(1)} KB</p>
                </div>
              </div>
              <button onClick={() => setPassbookFile(null)} className="text-white/40 hover:text-white">
                <X size={16} />
              </button>
            </div>
          )}
          <input className="input" placeholder="UPI ID" />
          <input className="input" placeholder="Bank Name" />
          <input className="input" placeholder="Branch Name" />
          <input className="input" placeholder="IFSC Code" />
        </div>
      </Accordion>

    </div>
  );
}

const Toggle = ({ label, value, onChange }) => (
  <div className="flex justify-between items-center">
    <span className="text-white/70">{label}</span>
    <div
      onClick={() => onChange(!value)}
      className={`w-12 h-6 rounded-full ${value ? "bg-green-500" : "bg-gray-500"} cursor-pointer`}
    >
      <div className={`toggle-dot ${value && "on"}`} />
    </div>
  </div>
);
