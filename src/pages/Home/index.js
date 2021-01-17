import React, { useState } from "react";

import "./styles.css";

import Nav from "../../components/Nav";

export default function Home() {
  const [text, setText] = useState("Clique na busca para iniciar.");

  function searchCompany(evt) {
    setText(evt);
  }
  return (
    <div className="home-container flex-col">
      <Nav searchCompanyByName={searchCompany} />
      <div className="d-flex flex-center fill-height">
        <h3>{text}</h3>
      </div>
    </div>
  );
}
