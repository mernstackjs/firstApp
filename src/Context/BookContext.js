import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ContextContainer = createContext();

export const ContextProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get("http://localhost:3333/books")
        .then((res) => setData(res.data));
    };
    fetchData();
  }, []);
  return (
    <ContextContainer.Provider value={[data, setData]}>
      {children}
    </ContextContainer.Provider>
  );
};
