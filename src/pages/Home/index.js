import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import "./styles.css";

import Nav from "../../components/Nav";

export default function Home() {
  let history = useHistory();
  const [text, setText] = useState("Clique na busca para iniciar.");

  useEffect(() => {
    if (
      window.uid !== undefined &&
      window.accessToken !== undefined &&
      window.client !== undefined
    ) {
    } else {
      history.push("/login");
    }
  }, []);
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
