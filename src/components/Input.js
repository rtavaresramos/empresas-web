import React, { useState } from "react";

import EmailIcon from "../icons/EmailIcon";
import PasswordIcon from "../icons/PasswordIcon";
import ShowIcon from "../icons/ShowIcon";
import HideIcon from "../icons/HideIcon";
import SearchIcon from "../icons/SearchIcon";
import CloseIcon from "../icons/CloseIcon";
import NotAllowed from "../icons/NotAllowed";

export default function Input(props) {
  const [input, setInput] = useState("");
  function setIcon(name) {
    switch (name) {
      case "email":
        return (
          <>
            <EmailIcon />
          </>
        );

      case "password":
        return (
          <>
            <PasswordIcon />
          </>
        );

      case "show":
        return (
          <>
            <ShowIcon />
          </>
        );

      case "hide":
        return (
          <>
            <HideIcon />
          </>
        );

      case "search":
        return (
          <>
            <SearchIcon />
          </>
        );

      case "close":
        return (
          <>
            <CloseIcon />
          </>
        );

      case "notAllowed":
        return (
          <>
            <NotAllowed />
          </>
        );

      default:
        return "";
    }
  }

  function finalClicked() {
    if (props.finalIcon === "close") {
      setInput("");
      props.finalIconClicked();
    } else if (props.finalIcon === "show" || props.finalIcon === "hide") {
      props.finalIconClicked();
    }
  }

  function changeInput(evt) {
    setInput(evt.target.value);
    props.inputEntry(evt.target.value);
  }


  return (
    <div className="d-flex flex-col">
      <div className="d-flex align-center">
        <span className="show-and-hide" onClick={props.initialIconClicked}>
          {setIcon(props.initialIcon)}
        </span>
        <input
          className={props.inputHome ? "input-home" : ""}
          value={props.inputValue ? props.inputValue : input}
          style={{ width: props.width, marginRight: 8 }}
          type={props.type}
          placeholder={props.placeholder}
          onChange={changeInput}
        />

        <span
          className={
            props.finalIcon === "show" || props.finalIcon === "hide"
              ? "show-and-hide"
              : ""
          }
          onClick={finalClicked}
        >
          {setIcon(props.finalIcon)}
        </span>
      </div>
      <div
        className="horizontal-divisor"
        style={{
          width: "100%",
          background: props.borderColor,
          marginBottom: props.marginBottom ? props.marginBottom : "2.112rem",
        }}
      ></div>
    </div>
  );
}
