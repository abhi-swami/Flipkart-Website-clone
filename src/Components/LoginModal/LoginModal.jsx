import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
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
} from "@chakra-ui/react";

// import { FcGoogle } from "react-icons/fc";
import React, { useState } from 'react'
import { useUserAuth } from "../../Context/UserAuthContext";
// import {RouteLink} from 'react-router-dom'
const LoginModal = ({ isOpen, onOpen, onClose }) => {
  const toast = useToast();
   const [email,setEmail]=useState("")
   const [password,setPassword]=useState("")
   const [error,setError]=useState("")
   const {login,googleSignIn}=useUserAuth()
   const navigate=useNavigate()
   const handleSubmit=async ()=>{
    setError("")
  try{
    await login(email,password)
    toast({
      title: "Error",
      description: "successfully loggedIn",
      status: "success",
      duration: 2000,
      isClosable: true,
    })
   navigate("/search")
  onClose()
  }
  catch(err){
  setError(err.message)
  }}
  const handleGoogleSignIn=async ()=>{
    await googleSignIn()
    try{
await googleSignIn()
navigate("/search")
    }
    catch(err){
      setError(err.message)
    }
  }
  return (
    <>
   
  
   {error&&toast({
      title: "Error",
      description: error,
      status: "success",
      duration: 3000,
      isClosable: true,
    })
    }
   
      

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <Box className="container" >
          <Box className="left_col">
            <Box display={"flex"} flexDirection="column" gap={"10px"}>
              <Heading textAlign='center' color={"#2a73f3"}
                    >Login</Heading>
              <Text color={"#d7d8dc"} fontWeight="500">
                Get access to your Orders, WishList and Recommendations
              </Text>
            </Box>
            <Box display="grid" alignItems={"center"} justifyContent={"center"}>
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
                    type="text"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                  />
                  {/* <InputRightElement h={"full"}>
                    <Button>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement> */}
                </InputGroup>
                <Box
                  mt="10px"
                  color={"blue.500"}
                 
                  cursor="pointer"
                >
                  <Text _hover={{textDecoration:"underline"}}>Forgot your Password?</Text>
                </Box>
              </FormControl>
              <Stack spacing={6}>
                <Box>
                  <Button onClick={handleSubmit}
                    w={"100%"}
                   
                   
                 
                    colorScheme={"blue"}
                    variant={"solid"}
                  >
                    Login
                  </Button>
                </Box>
              </Stack>
              <Center>or</Center>
              <Center>
                <Button onClick={handleGoogleSignIn} colorScheme={"blue"}
                    variant={"solid"}
                  w={"full"}
                  maxW={"md"}
                  
                 
                  // leftIcon={<FcGoogle />}
                 
                >
                  <Center>
                    <Text>Sign in with Google</Text>
                  </Center>
                </Button>
              </Center>
              <Box
                mt={"60px"}
                color={"blue.500"}
                display={["grid","grid",'flex']}
                gap={1}
                justifyContent="center"
              >
                <Text color={'black'}>New to VIP Mart?</Text>
                <Link to='/signup'>
                  <Text onClick={onClose}>Create an account</Text>
                  </Link>
              </Box>
            </Box>
          </Box>
        </Box>
        </ModalContent>
      </Modal>
  
  

    </>
  )
}

export default LoginModal