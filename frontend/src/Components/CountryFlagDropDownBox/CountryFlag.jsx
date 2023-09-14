import React, { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import "./flags.css";
import { Dropdown } from "react-bootstrap";
import { Typography } from "@mui/material";

export default function CountryFlag() {
  const [select, setSelect] = useState("SE");
  const onSelect = (code) => setSelect(code);
  console.log("SELECT", select);
  return (
    // <ReactFlagsSelect
    //   selected={select}
    //   onSelect={onSelect}
    //   countries={["fi", "GB", "IE", "IT", "NL", "SE"]}
    //   /*showSelectedLabel={showSelectedLabel}
    //     selectedSize={selectedSize}
    //     showOptionLabel={showOptionLabel}
    //     optionsSize={optionsSize}
    //     placeholder={placeholder}
    //     searchable={searchable}
    //     searchPlaceholder={searchPlaceholder}
    //     alignOptionsToRight={alignOptionsToRight}
    //     fullWidth={fullWidth}
    //     disabled={disabled} */
    // />
    // <Dropdown className="show dropdown">
    //   <Dropdown.Toggle
    //     variant="primary"
    //     id="dropdown-basic"
    //     className="btn btn-primary"
    //     style={{
    //       position: "absolute",
    //       background: "white",
    //       color: "black",
    //       width: "100px",
    //       height: "24px",
    //       border: "none",
    //       borderRadius: "0px",
    //       margin: "10px",
    //       padding: "0px",
    //       display: "flex",
    //     }}
    //   >
    //     <Typography
    //       style={{
    //         marginTop: "-10px", //styleName: Text-title;
    //         fontFamily: "Inter",
    //         fontSize: "16px",
    //         fontWeight: "500",
    //         lineHeight: "22px",
    //         letterSpacing: "0px",
    //         textAlign: "left",
    //         color: "#1C1C1C",
    //       }}
    //     >
    //       Help
    //     </Typography>
    //   </Dropdown.Toggle>

    //   <Dropdown.Menu>
    //     <Dropdown.Item>
    //       {" "}
    //       <img src="https://flagsapi.com/AE/flat/32.png" alt="" />
    //     </Dropdown.Item>
    //     <Dropdown.Item>
    //       {" "}
    //       <img src="https://flagsapi.com/AE/flat/32.png" alt="" />
    //     </Dropdown.Item>
    //     <Dropdown.Item>
    //       {" "}
    //       <img src="https://flagsapi.com/AE/flat/32.png" alt="" />
    //     </Dropdown.Item>
    //     <Dropdown.Item>
    //       {" "}
    //       <img src="https://flagsapi.com/AE/flat/32.png" alt="" />
    //     </Dropdown.Item>
    //   </Dropdown.Menu>
    // </Dropdown>
    <select name="languages" style={{ width: "200px" }}>
      <option value="https://flagsapi.com/AE/flat/32.png">
        <img src="https://flagsapi.com/AE/flat/32.png" alt="" />
      </option>
      <option value="C++">C++</option>
      <option value="" selected>
        <img src="https://flagsapi.com/AE/flat/32.png" alt="" />
      </option>
      <option value="Python">Python</option>
      <option value="R">R</option>
      <option value="Scala">Scala</option>
      <option value="Swift">Swift</option>
    </select>
  );
}
