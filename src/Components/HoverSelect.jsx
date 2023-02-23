import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import {  Icon,Button,Menu, MenuButton, MenuList, MenuItem, VStack ,StackDivider, MenuIcon} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

const HoverSelect = ({ options }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
    console.log(selectedOption)
    setIsOpen(false);
  };

  return (


<Menu  isOpen={isOpen} onClose={() => setIsOpen(false)} onOpen={() => setIsOpen(true)}>
  <MenuButton  fontWeight="600"  onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)} color="white" bg="#2974f2" border="none" boxShadow="none" w='100px'  rightIcon={<ChevronDownIcon />}>
    More<Icon as={FaChevronDown} />
  </MenuButton>
  <MenuList color='black' colorscheme='white' bg='white' marginTop={2} zIndex="1000"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}>
     {options.map((option) => (
      
          <MenuItem  h='50px' w='200px' fontSize={'small'} padding='10px' 
          ml={3}
            key={option.value}
            value={option.value}
            onClick={handleSelectChange}
          >
         
            {option.label}
          
          </MenuItem>
         
        ))}
  </MenuList>
</Menu>)
};

export default HoverSelect;
