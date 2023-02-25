import {Link,useNavigate} from 'react-router-dom'
import { useToast } from "@chakra-ui/react";
import {
  
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
import React,{useState} from 'react'
import {useUserAuth} from '../../Context/UserAuthContext'
const SignUp = () => {
  const toast = useToast();
  const navigate=useNavigate()
const [email,setEmail]=useState("")
const [password,setPassword]=useState("")
const [error,setError]=useState("")
const {signUp} =useUserAuth()
const handleSubmit=async ()=>{
  setError("")
try{
  await signUp(email,password)
  toast({
    title: "Error",
    description: "successfully signup",
    status: "success",
    duration: 2000,
    isClosable: true,
  })
 navigate("/")
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
      <Box className="container" w="30%" borderRadius={"15px"}justifyContent={'center'} shadow={'dark-lg'} alignItems={'center'} align={'center'} margin={"auto"}>
          <Box className="left_col">
            <Box display={"flex"} flexDirection="column" gap={"10px"}>
              <Heading textAlign='center' color={"#2a73f3"}
                    >SignUp</Heading>
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
                 
                </InputGroup>
                <Box
                  mt="10px"
                  color={"blue.500"}
                 
                  cursor="pointer"
                >
                  <Text _hover={{textDecoration:"underline"}}>Forgot your Password?</Text>
                </Box>
              </FormControl>
              <Stack spacing={1}>
                <Box>
                  <Button onClick={handleSubmit}
                    w={"100%"}
                   
                   
                 
                    colorScheme={"blue"}
                    variant={"solid"}
                  >
                    SignUp
                  </Button>
                </Box>
              </Stack>
              <Center>or</Center>
              
              <Box 
                mt={"-5px"}
                color={"blue.500"}
                display={["grid","grid",'flex']}
                gap={1}
                justifyContent="center"
              >
             
               <Link to='/login'>
                  <Text>Already an Account? Click Here</Text>
                  </Link>
              </Box>
            </Box>
          </Box>
        </Box>
    </>
  )
}

export default SignUp