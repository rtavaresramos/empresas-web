import { createContext } from "react";

const StoreContext = createContext({
  accessToken: null,
  setAccessToken: () => {},
  client: null,
  setClient: () => {},
  uid: null,
  setUid: () => {},
  textSearch: null,
  setTextSearch: ()=>{}
});

export default StoreContext;
