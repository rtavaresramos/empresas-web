import React from "react";
import { Link } from "react-router-dom";
import LeftArrowIcon from "../icons/LeftArrowIcon";

export default function Nav(props) {
  return (
    <div className="nav">
      <Link to="/home">
        <LeftArrowIcon />
      </Link>

      <h2>{props.name}</h2>
    </div>
  );
}
