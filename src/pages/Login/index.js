import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import StoreContext from "../../components/Store/Context";
import axios from "axios";

// Components

import Input from "../../components/Input";
import Logo from "../../components/Logo";
import Loading from "../../components/Loading";

// Styles
import "./styles.css";

export default function Login() {
  const { setAccessToken, setClient, setUid } = useContext(StoreContext);

  const history = useHistory();

  // Input type icon controll

  const [loadingComponent, setLoadingComponent] = useState();
  const [finalIcon, setFinalIcon] = useState("show");
  const [type, setType] = useState("password");

  // Initial State  from Email, Password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  // Functions
  function changeInputType() {
    type === "password" ? setType("text") : setType("password");
    finalIcon === "show" ? setFinalIcon("hide") : setFinalIcon("show");
  }

  async function handleForm(evt) {
    setLoadingComponent(<Loading />);
    await evt.preventDefault();
    axios
      .post(`https://empresas.ioasys.com.br/api/v1//users/auth/sign_in`, {
        email,
        password,
      })
      .then((res) => {
        if (res.status === 200) {
          setAccessToken(res.headers["access-token"]);
          setClient(res.headers.client);
          setUid(res.headers.uid);
          return history.push("/home");
        }
      })
      .catch((err) => {
        if (err) {
          setError(true);
          setLoadingComponent(<></>);
          setError("Credenciais informadas são inválidas, tente novamente.");
        }
      });
  }

  function checkInputEmailEntry(evt) {
    setEmail(evt.target.value);
  }

  function checkInputPasswordEntry(evt) {
    setPassword(evt.target.value);
  }

  function showLoading() {
    setLoadingComponent(<Loading />);
  }

  // Code in JSX
  return (
    <>
      {loadingComponent}
      <div className="login-container d-flex flex-center">
        <form
          onSubmit={handleForm}
          className="form d-flex flex-col flex-center"
        >
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
              borderColor={error ? "var(--danger)" : "#383743"}
              inputEntry={checkInputEmailEntry}
              finalIcon={error ? "notAllowed" : ""}
            />
            <Input
              initialIcon="password"
              type={type}
              placeholder="Senha"
              borderColor={error ? "var(--danger)" : "#383743"}
              finalIcon={error ? "notAllowed" : finalIcon}
              finalIconClicked={!error && changeInputType}
              inputEntry={checkInputPasswordEntry}
            />
          </div>

          <span className="error">{error}</span>

          <div className="button-container">
            <button
              className={email === "" || password === "" ? "disabled" : ""}
              type="submit"
              onClick={showLoading}
              disabled={email === "" || password === ""}
            >
              Entrar
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
