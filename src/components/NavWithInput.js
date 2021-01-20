import React, { useState, useContext, useEffect } from "react";
import StoreContext from "./Store/Context";

import Logo from "./LogoNav";
import Input from "./Input";

export default function Nav(props) {
  const { textSearch, setTextSearch } = useContext(StoreContext);
  const [inputWidth, setInputWidth] = useState(0);


  function changeInputWidth() {
    inputWidth === 0 ? setInputWidth("100%") : setInputWidth(0);
  }

  function clearInput(){
    setTextSearch(null)
   changeInputWidth()
    props.cleanSearch()
  }

  useEffect(()=>{
    if(props.isOpen=== true){
     setInputWidth("100%")
    }
  }, [props.isOpen])
  
  function searchCompany(evt) {
    setTextSearch(evt)
     props.searchCompanyByName(evt);
  }
  return (
    <div className="nav-with-input">
      <div
        className="home-logo"
        style={{ display: inputWidth === 0 ? "block" : "none" }}
      >
        <Logo />
      </div>
      <div
        className="search-container"
        style={{ justifyContent: inputWidth === 0 ? "flex-end" : "center" }}
      >
        <Input
          inputHome
          marginBottom="0"
          width={inputWidth}
          initialIcon="search"
          borderColor={inputWidth === 0 ? "transparent" : "white"}
          initialIconClicked={changeInputWidth}
          finalIconClicked={clearInput}
          placeholder="Pesquisar"
          finalIcon={inputWidth === 0 ? "" : "close"}
          inputEntry={searchCompany}
          inputValue={textSearch ? props.searchValue : false}
        />
      </div>
    </div>
  );
}
