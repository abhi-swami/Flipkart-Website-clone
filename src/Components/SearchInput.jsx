import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import React,{useState}from 'react'
const SearchBox = () => {
const [searchtext,setSearchext]=useState("")
const handleSearch=()=>{
  console.log("hi")
}
  return (
    <InputGroup h="100%" >
      <Input paddingLeft={1} h='100%' onChange={(e)=>setSearchext(e.target.value)} type="text" colorScheme="white"
      color="#797979"
      bg="white" borderRadius={"1px"}  
      placeholder='Search for products,brands and more' w="100%"/>
      <InputRightElement h="100%" paddingRight={1}  cursor={'pointer'}
        pointerEvents="auto" onClick={handleSearch}
        children={<FaSearch color="#2974f2" />}
      />
    </InputGroup>
  );
};

export default SearchBox;
