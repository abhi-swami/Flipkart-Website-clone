import { Link, useNavigate } from "react-router-dom";
import { HStack, useToast } from "@chakra-ui/react";
import {
  Modal,
  ModalContent,
  ModalOverlay,
  Box,
  Heading,
  Text,
  Image,
  FormControl,
  FormLabel,
  Input,
  Button,
  Stack,
  InputGroup,
  Center,
  Icon,
} from "@chakra-ui/react";

import { FcGoogle } from "react-icons/fc";
import React, { useEffect, useState } from "react";
import { useUserAuth } from "../../Context/UserAuthContext";
import MySingUp from "./MySignUp";
// import {RouteLink} from 'react-router-dom'
const LoginModal = ({ isOpen, onOpen, onClose }) => {
  const toast = useToast();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const { user, login } = useUserAuth();
  const [title, setTitle] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  //  const navigate=useNavigate()
  // const title={user?.email.substring(0, user.email.indexOf("@"))}
  // const title=user?.email.substring(0, user.email.indexOf("@"))
  const handlePassword = (e) => {
    setError("");
    setPassword(e.target.value);
  };
  const handleSubmit = async () => {
    setError("");
    try {
      await login(email, password).then((res) => {
        if (res._tokenResponse.email === "admin@clickcart.in") {
          navigate("/admin");
        }
      });

      toast({
        title: `Welcome `,
        description: " login successfull",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
      setPassword("");
      setEmail("");
      onClose();
    } catch (err) {
      setEmail("");
      setPassword("");
      setError(err.message);
    }
  };
  useEffect(() => {
    if (user) {
      setTitle(user?.email.substring(0, user.email.indexOf("@")));
    }
  }, [user]);
  return (
    <>
      {error.length > 0 &&
        toast({
          title: "Error",
          description: error,
          status: "error",
          duration: 3000,
          isClosable: true,
        })}

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <Box className="container">
            <Box className="left_col">
              <Box display={"flex"} flexDirection="column" gap={"10px"}>
                <Heading textAlign="center" color={"#2a73f3"}>
                  Login
                </Heading>
                <Text color={"#d7d8dc"} fontWeight="500" pl={2}>
                  Get access to your Orders, WishList and Recommendations
                </Text>
              </Box>
              <Box
                display="grid"
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Image src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/login_img_c4a81e.png"></Image>
              </Box>
            </Box>

            {/* right side */}
            <Box className="right_col">
              <Box
                display={"flex"}
                flexDirection="column"
                justifyContent="space-between"
                gap="20px"
                p={"20px 40px"}
              >
                <FormControl id="email" isRequired>
                  <FormLabel>Email</FormLabel>
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your Email"
                  />
                </FormControl>
                <FormControl id="password" isRequired>
                  <FormLabel>Password</FormLabel>
                  <InputGroup>
                    <Input
                      type="password"
                      value={password}
                      // onChange={(e) => setPassword(e.target.value)}
                      onChange={handlePassword}
                      placeholder="Enter your password"
                    />
                    {/* <InputRightElement h={"full"}>
                    <Button>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement> */}
                  </InputGroup>
                  <Box mt="10px" color={"blue.500"} cursor="pointer">
                    <Text _hover={{ textDecoration: "underline" }}>
                      Forgot your Password ?
                    </Text>
                  </Box>
                </FormControl>
                <HStack spacing={6} justifyContent={"center"}>
                  <Box>
                    <Button
                      onClick={handleSubmit}
                      w={"180%"}
                      colorScheme={"blue"}
                      variant={"solid"}
                      ml={-7}
                    >
                      Login
                    </Button>
                  </Box>

                  <Center>
                    <Button w={"full"} maxW={"md"}>
                      <Center>
                        <Text pr={3}>Sign in with </Text>

                        <Icon as={FcGoogle} fontSize={"lg"} />
                      </Center>
                    </Button>
                  </Center>
                </HStack>

                <Box
                  my={"5px"}
                  color={"blue.500"}
                  display={["grid", "grid", "flex"]}
                  gap={1}
                  justifyContent="center"
                  onClick={onOpen}
                  border={"0px solid black"}
                >
                  <MySingUp />
                  {/* <Text color={"black"}>New to Click-Cart ?</Text>
                  <Link to="/signup">
                    <Text >Create an account</Text>
                  </Link> */}
                </Box>
              </Box>
            </Box>
          </Box>
        </ModalContent>
      </Modal>
    </>
  );
};

export default LoginModal;
