import React, { useState } from "react";
import Select from "react-select";
import CountryFlag3 from "./CountryFlag3";

function CountryFlag4() {
  const countries = [
    {
      value: "united-states",
      label: "United States",
      flagUrl: "https://flagsapi.com/AE/flat/32.png",
    },
    {
      value: "canada",
      label: "Canada",
      flagUrl: "https://example.com/ca-flag.png",
    },
    // Add more countries and their flag URLs here
  ];
  const defaultCountry = countries[0].flagUrl; // Set your desired default country

  const [selectedCountry, setSelectedCountry] = useState(defaultCountry);

  const handleCountryChange = (selectedOption) => {
    setSelectedCountry(selectedOption);
  };

  return (
    <>
      <CountryFlag3
        countries={countries}
        onChange={handleCountryChange}
        defaultValue={defaultCountry}
      />
      {selectedCountry && (
        <div>
          <div>
            <img
              src={selectedCountry.flagUrl}
              alt={`${selectedCountry.label} Flag`}
              style={{ width: "64px" }}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default CountryFlag4;
