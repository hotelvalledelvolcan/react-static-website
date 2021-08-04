import React from 'react'
import Contact from "./Contact";
import Logo from "./Logo";

const InfoSection = () => {
  return (
    <>
      <div className="header-info-left d-none d-sm-block">
        <Logo/>
        <Contact/>
      </div>
    </>
  );
};

export default InfoSection;
