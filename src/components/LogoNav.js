import React from "react";

// Images
import Logo1 from "../assets/img/logo-nav.png";
import Logo2 from "../assets/img/logo-nav@2x.png";
import Logo3 from "../assets/img/logo-nav@3x.png";

export default function Logo() {
  return (
    <img className="logo_nav" src={Logo1} srcSet={(Logo2, Logo3)} alt="logo" />
  );
}
