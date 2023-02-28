import { createContext, useState } from "react";

export const SearchContext = createContext();

export default function SearchContextProvider({ children }) {
  const [query, setQuery] = useState("mobiles");
  const inputQuery = (val) => {
    setQuery(val);
  };
  return (
    <SearchContext.Provider value={{ query, inputQuery }}>
      {children}
    </SearchContext.Provider>
  );
}
