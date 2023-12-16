import { useContext, useState, createContext, useEffect } from "react";

const getUserContext = createContext();
export const ItemMasterProvider = ({ children }) => {
  const [getUser, setgetUser] = useState({});
  let getFun = async () => {
    const myData = await localStorage.getItem("myKey");
  };
  useEffect(() => {
    getFun();
  }, []);
  return (
    <getUserContext.Provider value={{ getUser }}>
      {children}
    </getUserContext.Provider>
  );
};

export const useItemMaster = () => {
  return useContext(getUserContext);
};
