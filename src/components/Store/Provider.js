import React from "react";
import Context from "./Context";
import useStorage from "../../utils/useStorage";

const StoreProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useStorage("accessTok");
  const [client, setClient] = useStorage("client");
  const [uid, setUid] = useStorage("uid");
  const [textSearch, setTextSearch] = useStorage("textSearch");

  return (
    <Context.Provider
      value={{
        accessToken,
        setAccessToken,
        client,
        setClient,
        uid,
        setUid,
        textSearch,
        setTextSearch
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default StoreProvider;
