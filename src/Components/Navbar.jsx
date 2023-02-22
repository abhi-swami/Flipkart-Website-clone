import { Image,Flex, Icon, Text, Button, Box } from "@chakra-ui/react";
import HoverSelect from "./HoverSelect";
import logo from '../Images/click_cart.png'
import { FaShoppingCart } from "react-icons/fa";

import SearchBox from "./SearchInput";
const Navbar = () => {
  return (
    <Flex
      h="55px"
     marginBottom="0px"
      paddingRight="10%"
      paddingLeft="10%"
      paddingTop="0.5rem"
      paddingBottom="0.5rem"
      as="nav"
      align="center"
      wrap="wrap"
      bg="#2974f2"
      color="white"
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Box mr={4} h="100%" cursor='pointer' >
        {/* <Text  fontSize={{ base: "sm", md: "md" }} fontWeight="bold">
          Flipkart
        </Text> */}
        <Image src={logo} alt="placeholder image" h="100%"/>
      </Box>
      <Box   alignItems={"center"}
      justifyContent={"center"} mr={5} w={"40%"} h="83%" border='1px'>
        <SearchBox />
      </Box>

      <Button w="11%" colorscheme="white" fontWeight={'500'}
      color="#2974f2"
      bg="white" mr={10} h="72%" borderRadius={1}>
        Login
      </Button>
      <Text fontWeight="600" fontSize="medium"  cursor={'pointer'}>
        Become a Seller
      </Text>
     
        <HoverSelect 
        
          options={[
            { label: "Notification Preferences", value: "option1" },
            { label: "24x7 customer care", value: "option2" },
            { label: "Advertise", value: "option3" },
            { label: "Download App", value: "option4" }
          ]}
        />
   
    
      <Box  ml='15px' cursor={'pointer'}>
          <Flex align="center">
            <Icon as={FaShoppingCart} w={4} h={4} ml={0}/>
            <Text fontWeight="600" fontSize={{ base: "sm", md: "md" }} ml={1}>
              Cart
            </Text>
          </Flex>
        </Box>
     
    </Flex>
  );
};

export default Navbar;
 