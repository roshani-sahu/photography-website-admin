// Step3Professional.jsx
import Accordion from "./Accordion";
import ChipSelect from "./ChipSelect";
import { useState } from "react";

export default function Step3() {
  const [days, setDays] = useState([]);

  const weekDays = [
    "Monday","Tuesday","Wednesday",
    "Thursday","Friday","Saturday","Sunday"
  ];

  return (
    <div>
      <h2 className="text-xl text-white mb-2">
        Build Your Professional Profile
      </h2>

      <p className="text-white/50 mb-6">
        This information will be visible to customers.
      </p>

      <div className="space-y-4">

        <Accordion title="Work Information">
          <select className="w-full input mb-4">
            <option>Years of Experience</option>
            <option className="text-black">1 Year</option>
            <option className="text-black">2 Years</option>
          </select>

          <p className="text-white/60 mb-2">Available Working Days</p>
          <ChipSelect  options={weekDays} selected={days} setSelected={setDays} />

          <label className="block text-white/60 mt-5 mb-2">Short Bio</label>

          <textarea
            placeholder="Tell customers about yourself and your expertise"
            className="w-full input mt-1 resize-none h-24"
          />
          
        </Accordion>

        <Accordion title="Working Locations">

         <label className="block text-white/60 mt-2 mb-2">Working State</label>
          <select className="w-full input mb-3">
            <option className="text-black">Select state</option>
           <option className="text-black">Madhya pradesh</option>
           <option className="text-black">Uttar pradesh</option>
          </select>

         <label className="block text-white/60 mt-5 mb-2">Working City</label>
          <select className="w-full input mb-5">
            <option className="text-black">Select city</option>
            <option className="text-black">Indore</option>
            <option className="text-black">Delhi</option>

          </select>

          <div className="flex gap-3">
            <button className="btn-light">Save Location</button>
            <button className="btn-light">Add More</button>
          </div>
        </Accordion>

        <Accordion title="Profile & Online Presence">

        <label className="block text-white/60 mt-2 mb-2">Google Work Drive URL</label>
          <input
            placeholder="Google Work Drive URL"
            className="w-full input mb-3"
          />

        <label className="block text-white/60 mt-2 mb-2">Instagram Profile URL</label>
          <input
            placeholder="Instagram Profile URL"
            className="w-full input mb-3"
          />

        <label className="block text-white/60 mt-5 mb-2">Personal/Company Website</label>
          <input
            placeholder="Website URL (optional)"
            className="w-full input"
          />
        </Accordion>

        <Accordion title="Additional Details">
                   <label className="block text-white/60 mt-3 mb-2">Company/Brand Name (optional) </label>
          <input placeholder="Company/Brand Name" className="w-full input mb-3"/>

              <label className="block text-white/60 mt-5 mb-2">Past Client Experience (optional)</label>
          <input placeholder="Past Client Experience" className="w-full input mb-3"/>

            <label className="block text-white/60 mt-5 mb-2">Awards & Achievements (optional)</label>
          <input placeholder="Awards & Achievements" className="w-full input"/>
        </Accordion>

      </div>
    </div>
  );
}