import React from "react";
import Context from "./Context";
import useStorage from "../../utils/useStorage";

const StoreProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useStorage("accessTok");
  const [client, setClient] = useStorage("client");
  const [uid, setUid] = useStorage("uid");

  return (
    <Context.Provider
      value={{
        accessToken,
        setAccessToken,
        client,
        setClient,
        uid,
        setUid,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default StoreProvider;
