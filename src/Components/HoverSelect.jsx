import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import {
  Icon,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  VStack,
  StackDivider,
  MenuIcon,
  Box,
  Text,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

const HoverSelect = ({ options }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const [isOpen, setIsOpen] = useState(false);

  const [toggleIcon, setToggleIcon] = useState();

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
    setIsOpen(false);
  };

  return (
    <Menu
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      onOpen={() => setIsOpen(true)}
    >
      <MenuButton
        fontWeight="600"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        color="white"
        bg="#2974f2"
        border="none"
        boxShadow="none"
        w="100px"
        righticon={<ChevronDownIcon />}
      >
        <Box
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"center"}
          gap={1}
        >
          <Text as={"span"}>More</Text>
          {isOpen ? (
            <Icon as={FaChevronUp} mt={1.5} />
          ) : (
            <Icon as={FaChevronDown} mt={1.5} />
          )}
        </Box>
      </MenuButton>
      <MenuList
        color="black"
        colorscheme="white"
        bg="white"
        marginTop={2}
        zIndex="1000"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        {options.map((option) => (
          <MenuItem
            h="50px"
            w="200px"
            fontSize={"small"}
            padding="10px"
            ml={3}
            key={option.value}
            value={option.value}
            onClick={handleSelectChange}
          >
            {option.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default HoverSelect;
