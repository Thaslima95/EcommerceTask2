import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import React from "react";

export default function NavTabComponent({ description }) {
  console.log(description);
  return (
    <Tabs
      defaultActiveKey="home"
      transition={false}
      id="noanim-tab-example"
      className="mb-3"
    >
      <Tab className="px-10" eventKey="home" title="Description">
        {description}
      </Tab>
      <Tab className="px-10" eventKey="profile" title="Reviews">
        Tab content for Profile
      </Tab>
      <Tab className="px-10" eventKey="contact" title="Shipping">
        Tab content for Contact
      </Tab>
      <Tab className="px-10" eventKey="about seller" title="About Seller">
        Tab content for Contact
      </Tab>
    </Tabs>
  );
}
