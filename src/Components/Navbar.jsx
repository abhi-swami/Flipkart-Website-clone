import {
  Image,
  Flex,
  Icon,
  Text,
  Button,
  Box,
  useDisclosure,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Circle,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";

import { FaUserCircle } from "react-icons/fa";
// import {useState} from 'react'
import HoverSelect from "./HoverSelect";
import logo from "../Images/click_cart.png";
import { FaShoppingCart } from "react-icons/fa";

import SearchBox from "./SearchInput";
import LoginModal from "./LoginModal/LoginModal";
import { useUserAuth } from "../Context/UserAuthContext";
import { ChevronDownIcon } from "@chakra-ui/icons";
import Logout from "./LoginModal/Logout";
import { useContext, useEffect } from "react";
import { LoginContext } from "../Context/LoginContext";
import { CartContext } from "../Context/CartContext";
const Navbar = () => {
  const navigate = useNavigate();
  const { user, logOut } = useUserAuth();
  const { cartCount, cardProucts } = useContext(CartContext);
  const { isOpen, onOpen, onClose } = useContext(LoginContext);
  const handleLogOut = async () => {
    try {
      await logOut();
      navigate("/login");
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleClick = () => {
    navigate("/");
  };
  useEffect(() => {
    cardProucts();
  }, []);
  return (
    <Flex
      h="55px"
      marginBottom="0px"
      // paddingRight="10%"
      // paddingLeft="10%"
      paddingTop="0.5rem"
      paddingBottom="0.5rem"
      as="nav"
      align="center"
      wrap="wrap"
      bg="#2974f2"
      color="white"
      position={"sticky"}
      top={0}
      zIndex={4}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Text
        fontSize={{ base: "sm", md: "md", lg: "lg", xl: "x-large" }}
        fontWeight="bold"
        cursor={"pointer"}
        pr={2}
        onClick={handleClick}
      >
        Click-Cart
      </Text>
      <Box mr={4} h="100%" cursor="pointer" pt={2} onClick={handleClick}>
        <Image src={logo} alt="placeholder image" h="90%" />
      </Box>

      <Box
        alignItems={"center"}
        justifyContent={"center"}
        mr={5}
        w={"40%"}
        h="83%"
        border="1px"
      >
        <SearchBox />
      </Box>
      {user ? (
        <Logout />
      ) : (
        <Button
          onClick={onOpen}
          w="11%"
          colorscheme="white"
          fontWeight={"500"}
          color="#2974f2"
          bg="white"
          mr={10}
          h="72%"
          borderRadius={1}
        >
          Login
        </Button>
      )}
      <Text fontWeight="600" fontSize="medium" cursor={"pointer"}>
        Become a Seller
      </Text>

      <HoverSelect
        options={[
          { label: "Notification Preferences", value: "option1" },
          { label: "24x7 customer care", value: "option2" },
          { label: "Advertise", value: "option3" },
          { label: "Download App", value: "option4" },
        ]}
      />

      <Box ml="15px" cursor={"pointer"}>
        <Flex mr={4} justifyContent={"center"} alignItems={"center"}>
          <Link to={"/cart"}>
            <Flex
              fontWeight="600"
              fontSize={{ base: "sm", md: "md" }}
              mt={1}
              mr={2}
              position={"relative"}
              alignItems="center"
              justifyContent="center"
            >
              {user &&
              user?.email.substring(0, user.email.indexOf("@")) !== "admin" ? (
                cartCount === 0 ? null : (
                  <Circle
                    position={"absolute"}
                    left={1}
                    top={-1}
                    size="40px"
                    w={"14px"}
                    h={"14px"}
                    bg="tomato"
                    color="white"
                  >
                    <Text as={"span"} fontSize={"10px"} color={"white"}>
                      {cartCount}
                    </Text>
                  </Circle>
                )
              ) : null}
              <Icon as={FaShoppingCart} w={4} h={4} mr={1} pt={1} />
              <Text as={"span"} pt={0}>
                Cart
              </Text>
            </Flex>
          </Link>
        </Flex>
      </Box>
      {/* <Box mr={4} h="100%" cursor='pointer' >
         <Text  fontSize={{ base: "sm", md: "md" }} fontWeight="bold">
          {user&&user.email.substring(0, user.email.indexOf("@"))}
        </Text>  */}

      {/* {login && user && (
        <Menu>
          <MenuButton
            righticon={<ChevronDownIcon />}
            bg="transparent"
            variant="outline"
            shadow={"none"}
            _hover={"none"}
            _focus={"none"}
          >
            <Icon as={FaUserCircle} w={4} h={4} />
          </MenuButton>
          <MenuList
            color="black"
            colorscheme="white"
            bg="white"
            marginTop={2}
            zIndex="1000"
          >
            <MenuItem>
              {" "}
              {user && user.email.substring(0, user.email.indexOf("@"))}
            </MenuItem>
            <MenuItem onClick={handleLogOut}>LogOut</MenuItem>
          </MenuList>
        </Menu>
      )} */}
      <LoginModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
    </Flex>
  );
};

export default Navbar;
