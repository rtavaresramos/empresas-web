import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

// Components

import Input from "../../components/Input";
import Logo from "../../components/Logo";

// Styles
import "./styles.css";

export default function Login() {
  let history = useHistory();
  // Input type icon controll
  const [finalIcon, setFinalIcon] = useState("show");
  const [type, setType] = useState("password");

  // Initial State  from Email, Password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Functions
  function changeInputType() {
    type === "password" ? setType("text") : setType("password");
    finalIcon === "show" ? setFinalIcon("hide") : setFinalIcon("show");
  }

  function handleForm() {
    axios
      .post(`https://empresas.ioasys.com.br/api/v1//users/auth/sign_in`, {
        email,
        password,
      })
      .then((response) => {
        window.accessToken = response.headers["access-token"];
        window.client = response.headers.client;
        window.uid = response.headers.uid;
      })
      .finally((ok) => history.push("/home"));
  }

  function checkInputEmailEntry(evt) {
    setEmail(evt.target.value);
  }

  function checkInputPasswordEntry(evt) {
    setPassword(evt.target.value);
  }

  // Code in JSX
  return (
    <>
      <div className="login-container d-flex flex-center">
        <section className="form d-flex flex-col flex-center">
          <Logo />
          <div className="login-header">
            <h3>Bem vindo ao Empresas</h3>
            <p>
              Lorem ipsum dolor sit amet, contetur adipiscing elit. Nunc
              accumsan.
            </p>
          </div>
          <div className="input-group">
            <Input
              initialIcon="email"
              type="email"
              placeholder="Email"
              borderColor="#383743"
              inputEntry={checkInputEmailEntry}
            />
            <Input
              initialIcon="password"
              type={type}
              placeholder="Senha"
              borderColor="#383743"
              finalIcon={finalIcon}
              finalIconClicked={changeInputType}
              inputEntry={checkInputPasswordEntry}
            />
          </div>

          <div className="button-container">
            <button
              className={email === "" || password === "" ? "disabled" : ""}
              type="button"
              onClick={handleForm}
              disabled={email === "" || password === ""}
            >
              Entrar
            </button>
          </div>
        </section>
      </div>
    </>
  );
}
