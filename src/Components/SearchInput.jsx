import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import React, { useContext, useState, useRef, useEffect } from "react";
import { SearchContext } from "../Context/SearchContext";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";

const initial = { search: "" };

const SearchBox = () => {
  const { inputQuery } = useContext(SearchContext);
  const [searchtext, setSearchext] = useState(initial);
  const { value } = searchtext.search;
  const navigate = useNavigate();
  // let ref = useRef();

  const handleSearch = (e) => {
    const { name, value } = e.target;
    setSearchext({ ...searchtext, [name]: value });
    inputQuery(searchtext.search);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      navigate("/search");
    }
  };
  // useEffect(() => {
  //   if (searchtext) {
  //     ref.current = setTimeout(() => {
  //       inputQuery(searchtext.search);
  //     }, 800);
  //     const cleanUp = () => {
  //       clearTimeout(ref.current);
  //       navigate("/search");
  //     };
  //     return cleanUp;
  //   }
  // }, [searchtext]);
  return (
    <InputGroup h="100%">
      <Input
        paddingLeft={1}
        h="100%"
        type="text"
        name="search"
        value={value}
        colorscheme="white"
        color="#797979"
        bg="white"
        borderRadius={"1px"}
        placeholder="Search for products,brands and more"
        w="100%"
        onChange={handleSearch}
        onKeyDown={handleKeyDown}
      />
      <InputRightElement
        h="100%"
        paddingRight={1}
        cursor={"pointer"}
        pointerEvents="auto"
        onClick={handleSearch}
        children={<FaSearch color="#2974f2" />}
      />
    </InputGroup>
  );
};

export default SearchBox;
