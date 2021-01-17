import React from "react";

// Images
import Logo1 from "../assets/img/logo-home.png";
import Logo2 from "../assets/img/logo-home@2x.png";
import Logo3 from "../assets/img/logo-home@3x.png";

export default function Logo() {
  return (
    <img className="logo_home" src={Logo1} srcSet={(Logo2, Logo3)} alt="logo" />
  );
}
