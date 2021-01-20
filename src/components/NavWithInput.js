import React, { useState } from "react";

import Logo from "./LogoNav";
import Input from "./Input";

export default function Nav(props) {
  const [inputWidth, setInputWidth] = useState(0);

  function changeInputWidth() {
    inputWidth === 0 ? setInputWidth("100%") : setInputWidth(0);
  }

  function searchCompany(evt) {
    props.searchCompanyByName(evt);
  }
  return (
    <div className="nav-with-input">
      <div
        className="home-logo"
        style={{ display: inputWidth === 0 ? "block" : "none" }}
      >
        <Logo />
      </div>
      <div
        className="search-container"
        style={{ justifyContent: inputWidth === 0 ? "flex-end" : "center" }}
      >
        <Input
          inputHome
          marginBottom="0"
          width={inputWidth}
          initialIcon="search"
          borderColor={inputWidth === 0 ? "transparent" : "white"}
          initialIconClicked={changeInputWidth}
          finalIconClicked={changeInputWidth}
          placeholder="Pesquisar"
          finalIcon={inputWidth === 0 ? "" : "close"}
          enterPressed={searchCompany}
        />
      </div>
    </div>
  );
}
