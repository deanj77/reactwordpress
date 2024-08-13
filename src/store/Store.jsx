import React, { useState } from "react";
import AppContext from "../contexts/AppContext";

const RootStore = ({ children }) => {
  const [nameContext, setNameContext] = useState("mohammad");
  const [logedIn, setLogedIn] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [searched, setSearched] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  return (
    <AppContext.Provider
      value={{
        nameContext,
        setNameContext,
        logedIn,
        setLogedIn,
        isOpen,
        setIsOpen,
        searched,
        setSearched,
        searchValue,
        setSearchValue,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default RootStore;
