// Step2About.jsx
import { useState, useEffect } from "react";
import ChipSelect from "./ChipSelect";

export default function Step2({ registerValidate }) {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [address, setAddress] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  const [languages, setLanguages] = useState([]);

  const languageOptions = [
    "English", "Hindi", "Tamil", "Telugu",
    "Kannada", "Malayalam", "Bengali", "Marathi"
  ];

  useEffect(() => {
    registerValidate(() => {
      if (!name.trim()) return "Full name is required.";
      if (!gender) return "Please select a gender.";
      if (!dob) return "Date of birth is required.";
      if (!address.trim()) return "Address is required.";
      if (!state) return "Please select a state.";
      if (!city) return "Please select a city.";
      if (!pincode || pincode.length !== 6) return "Enter a valid 6-digit pincode.";
      if (!languages.length) return "Select at least one language.";
      return null;
    });
  }, [name, gender, dob, address, state, city, pincode, languages]);

  return (
    <div>
      <h2 className="text-xl text-white mb-2">Tell Us About Yourself</h2>
      <p className="text-white/50 mb-6">Help us know you better with some basic information.</p>

      <div className="">
        <label className="block text-white/60 mb-3">Full Name</label>
        <input placeholder="Enter your full name" className="w-full mb-5 input" value={name} onChange={(e) => setName(e.target.value)} />

    <label className="block text-white/60 mb-3">Gender</label>

        <select className="w-full mb-5 input" value={gender} onChange={(e) => setGender(e.target.value)}>
          <option className="text-black" value="">Select gender</option>
          <option className="text-black">Male</option>
          <option className="text-black">Female</option>
        </select>


    <label className="block text-white/60 mb-3">Date of Birth</label>
        <input type="date" className="w-full mb-5 input" value={dob} onChange={(e) => setDob(e.target.value)} />

           <label className="block text-white/60 mb-3">Permanent Address</label>

        <textarea placeholder="Enter your complete address" className="w-full mb-5 input" value={address} onChange={(e) => setAddress(e.target.value)} />

    <label className="block text-white/60 mb-3">State</label>
        <select className="w-full mb-5 input" value={state} onChange={(e) => setState(e.target.value)}>
          <option className="text-black" value="">Select state</option>
          <option className="text-black">Madhya Pradesh</option>
        </select>

<label className="block text-white/60 mb-3">City</label>
        <select className="w-full mb-5 input" value={city} onChange={(e) => setCity(e.target.value)}>
          <option className="text-black" value="">Select city</option>
          <option className="text-black">Indore</option>
        </select>

<label className="block text-white/60 mb-3">Pincode</label>
        <input placeholder="Enter pincode" maxLength={6} className="w-full mb-5 input" value={pincode} onChange={(e) => setPincode(e.target.value.replace(/\D/, ""))} />

        <div>
          <p className="text-white/60 mb-2">Languages Known</p>
          <ChipSelect options={languageOptions} selected={languages} setSelected={setLanguages} />
        </div>
      </div>
    </div>
  );
}