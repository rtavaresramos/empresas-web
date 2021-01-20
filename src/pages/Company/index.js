import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import Nav from "../../components/Nav";
import StoreContext from "../../components/Store/Context";
import axios from "axios";
// import Loading from "../../components/Loading";

import "./styles.css";

// import Nav from "../../components/Nav";

export default function Company() {
  let { companyId } = useParams();
  const { accessToken, client, uid } = useContext(StoreContext);

  const [company, setCompany] = useState({});

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    await axios
      .get(`https://empresas.ioasys.com.br/api/v1/enterprises/${companyId}`, {
        headers: {
          "access-token": accessToken,
          client,
          uid,
        },
      })
      .then((res) => setCompany(res.data.enterprise));
  }

  return (
    <>
      <Nav name={company.enterprise_name} />
      <div className="company-card">
        <img
          src={`https://empresas.ioasys.com.br${company.photo}`}
          alt={`Enterprise ${company.enterprise_name}`}
        />

        <p>{company.description}</p>
      </div>
    </>
  );
}
