import React from "react";
import { useState } from "react";

export default function CountryFlag2() {
  const countries = [
    {
      name: "United States",
      flagUrl: "https://flagsapi.com/AE/flat/32.png",
    },
    {
      name: "Canada",
      flagUrl: "https://example.com/ca-flag.png",
    },
    // Add more countries and their flag URLs here
  ];
  const [selectedCountry, setSelectedCountry] = useState("");

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
  };
  return (
    <div>
      <select onChange={handleCountryChange} value={selectedCountry}>
        <option value="">Select a country</option>
        {countries.map((country, index) => (
          <option key={index} value={country.name}>
            <img src={country.flagUrl} alt="" />
          </option>
        ))}
      </select>
      {selectedCountry && (
        <img
          src={countries.find((c) => c.name === selectedCountry)?.flagUrl}
          alt={`${selectedCountry} flag`}
        />
      )}
    </div>
  );
}
