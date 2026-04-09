// Step3Professional.jsx
import Accordion from "./Accordion";
import ChipSelect from "./ChipSelect";
import { useState, useEffect } from "react";
import { X } from "lucide-react";

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
        <label className="block text-white/60 mb-2">Working State</label>
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
          <label className="block text-white/60 mb-2">Working City</label>
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

export default function Step3({ registerValidate }) {
  const [days, setDays] = useState([]);
  const [experience, setExperience] = useState("");
  const [bio, setBio] = useState("");
  const [blocks, setBlocks] = useState([0]);
  const [savedLocations, setSavedLocations] = useState([]);

  const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  useEffect(() => {
    registerValidate(() => {
      if (!experience) return "Please select years of experience.";
      if (!days.length) return "Select at least one working day.";
      if (!bio.trim()) return "Short bio is required.";
      if (!savedLocations.length) return "Please save at least one working location.";
      return null;
    });
  }, [experience, days, bio, savedLocations]);

  const handleSave = (data) => {
    setSavedLocations((prev) => {
      const idx = prev.findIndex((l) => l.state === data.state);
      if (idx >= 0) { const u = [...prev]; u[idx] = data; return u; }
      return [...prev, data];
    });
  };

  const addBlock = () => setBlocks((prev) => [...prev, prev.length]);
  const removeBlock = (i) => setBlocks((prev) => prev.filter((_, idx) => idx !== i));

  return (
    <div>
      <h2 className="text-xl text-white mb-2">Build Your Professional Profile</h2>
      <p className="text-white/50 mb-6">This information will be visible to customers.</p>

      <div className="space-y-4">

        <Accordion title="Work Information">
          <select className="w-full input mb-4" value={experience} onChange={(e) => setExperience(e.target.value)}>
            <option className="text-black" value="">Years of Experience</option>
            <option className="text-black">1 Year</option>
            <option className="text-black">2 Years</option>
            <option className="text-black">3 Years</option>
            <option className="text-black">4 Years</option>
            <option className="text-black">5+ Years</option>
          </select>

          <p className="text-white/60 mb-2">Available Working Days</p>
          <ChipSelect options={weekDays} selected={days} setSelected={setDays} />

          <label className="block text-white/60 mt-5 mb-2">Short Bio</label>
          <textarea
            placeholder="Tell customers about yourself and your expertise"
            className="w-full input mt-1 resize-none h-24"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
        </Accordion>

        <Accordion title="Working Locations">
          <div className="space-y-4">
            {blocks.map((_, i) => (
              <LocationBlock key={i} index={i} onSave={handleSave} onRemove={() => removeBlock(i)} />
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

        <Accordion title="Profile & Online Presence">
          <label className="block text-white/60 mt-2 mb-2">Google Work Drive URL</label>
          <input placeholder="Google Work Drive URL" className="w-full input mb-3" />

          <label className="block text-white/60 mt-2 mb-2">Instagram Profile URL</label>
          <input placeholder="Instagram Profile URL" className="w-full input mb-3" />

          <label className="block text-white/60 mt-5 mb-2">Personal/Company Website</label>
          <input placeholder="Website URL (optional)" className="w-full input" />
        </Accordion>

        <Accordion title="Additional Details">
          <label className="block text-white/60 mt-3 mb-2">Company/Brand Name (optional)</label>
          <input placeholder="Company/Brand Name" className="w-full input mb-3" />

          <label className="block text-white/60 mt-5 mb-2">Past Client Experience (optional)</label>
          <input placeholder="Past Client Experience" className="w-full input mb-3" />

          <label className="block text-white/60 mt-5 mb-2">Awards & Achievements (optional)</label>
          <input placeholder="Awards & Achievements" className="w-full input" />
        </Accordion>

      </div>
    </div>
  );
}
