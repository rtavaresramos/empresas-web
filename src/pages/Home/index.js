import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import StoreContext from "../../components/Store/Context";
import axios from "axios";

import "./styles.css";

import NavWithInput from "../../components/NavWithInput";
import EnterpriseCard from "../../components/EnterpriseCard";

export default function Home() {
  const { accessToken, client, uid } = useContext(StoreContext);
  const [content, setContent] = useState(
    <div className="content-container">
      <h3>Clique na busca para iniciar.</h3>
    </div>
  );

  async function searchCompany(evt) {
    await axios
      .get(`https://empresas.ioasys.com.br/api/v1/enterprises`, {
        headers: {
          "access-token": accessToken,
          client,
          uid,
        },
        params: { name: evt },
      })
      .then((res) => {
        if (res.data.enterprises.length > 0) {
          const contentArr = [];
          res.data.enterprises.map((company) =>
            contentArr.push(<EnterpriseCard company={company} />)
          );
          setContent(
            <div className="cards-container">
              {contentArr.map((data) => data)}
            </div>
          );
        } else {
          setContent(
            <div className="content-container">
              <h3 className="not-found">
                Nenhuma empresa foi encontrada para a busca realizada.
              </h3>
            </div>
          );
        }
      })
      .catch((err) => {
        if (err.length) {
          setContent(
            <div className="content-container">
              <h3 className="danger-text">
                Sessão expirada, refaça o login e tente novamente.
              </h3>
            </div>
          );
        }
      });
  }
  return (
    <div className="home-container flex-col">
      <NavWithInput searchCompanyByName={searchCompany} />
      <div className="d-flex flex-center">{content}</div>
    </div>
  );
}
