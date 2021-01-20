import { createContext } from "react";

const StoreContext = createContext({
  accessToken: null,
  setAccessToken: () => {},
  client: null,
  setClient: () => {},
  uid: null,
  setUid: () => {},
});

export default StoreContext;
