import React from "react";
import { Link } from "react-router-dom";

export default function EnterpriseCard(props) {
  return (
    <>
      <Link to={`company/${props.company.id}`} className="card">
        <img
          src={`https://empresas.ioasys.com.br${props.company.photo}`}
          alt={`Enterprise ${props.company.enterprise_name}`}
        />

        <div className="details">
          <h2>{props.company.enterprise_name}</h2>
          <h3>{props.company.enterprise_type.enterprise_type_name}</h3>
          <p>{props.company.country}</p>
        </div>
      </Link>
    </>
  );
}
