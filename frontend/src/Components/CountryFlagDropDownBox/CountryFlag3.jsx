import React from "react";
import Select from "react-select";

export default function CountryFlag3({ countries, onChange, defaultValue }) {
  const placeholderOption = {
    value: "placeholder",
    label: (
      <div>
        <img
          src="https://flagsapi.com/AE/flat/32.png"
          alt="Placeholder"
          style={{ width: "24px", marginRight: "8px" }}
        />
      </div>
    ),
    isDisabled: true,
  };
  return (
    <Select
      options={[
        placeholderOption,
        ,
        ...countries.map((country) => ({
          value: country.flagUrl,

          label: (
            <div>
              <img
                src={country.flagUrl}
                alt={`${country.label} Flag`}
                style={{ width: "18px" }}
              />
            </div>
          ),
        })),
        (defaultValue = { defaultValue }),
      ]}
      onChange={onChange}
      isSearchable={true}
      placeholder=""
      defaultValue={defaultValue}
    />
  );
}
