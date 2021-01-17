import React, { useState } from "react";

import EmailIcon from "../icons/EmailIcon";
import PasswordIcon from "../icons/PasswordIcon";
import ShowIcon from "../icons/ShowIcon";
import HideIcon from "../icons/HideIcon";
import SearchIcon from "../icons/SearchIcon";
import CloseIcon from "../icons/CloseIcon";

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

      default:
        return "";
    }
  }

  function finalClicked() {
    if (props.finalIcon === "close") {
      setInput("");
      props.finalIconClicked();
    } else {
      props.finalIconClicked();
    }
  }

  function changeInput(evt) {
    setInput(evt.target.value);
    props.inputEntry(evt);
  }

  return (
    <div className="d-flex flex-col">
      <div className="d-flex align-center">
        <span className="show-and-hide" onClick={props.initialIconClicked}>
          {setIcon(props.initialIcon)}
        </span>
        <input
          className={props.inputHome ? "input-home" : ""}
          value={input}
          style={{ width: props.width }}
          type={props.type}
          placeholder={props.placeholder}
          onChange={changeInput}
        />
        <span className="show-and-hide" onClick={finalClicked}>
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
