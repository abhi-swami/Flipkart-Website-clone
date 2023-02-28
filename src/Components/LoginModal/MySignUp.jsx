import { useNavigate } from "react-router-dom";

import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
  Box,
  Image,
  Stack,
  Center,
  useToast,
} from "@chakra-ui/react";

import React, { useEffect, useState } from "react";

import { useUserAuth } from "../../Context/UserAuthContext";

export default function MySingUp() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { user } = useUserAuth();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const toast = useToast();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [title, setTitle] = useState("");
  const { signUp } = useUserAuth();
  const handleEmail = (e) => {
    setError("");
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setError("");
    setPassword(e.target.value);
  };
  const handleSubmit = async () => {
    setError("");
    try {
      await signUp(email, password);
      toast({
        title: `Dear,${title}  Welcome to Click-Cart Family`,
        description: " successfully ",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
      navigate("/");
      onClose();
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    if (user) {
      setTitle(user?.email.substring(0, user.email.indexOf("@")));
    }
  }, [user]);
  if (error.length > 0) {
    return toast({
      title: "Error",
      description: error,
      status: "info",
      duration: 3000,
      isClosable: true,
    });
  }

  return (
    <>
      <Button onClick={onOpen}>
        <Text color={"black"}>New to Click-Cart ?</Text>

        <Text onClick={onOpen}>Create an account</Text>
      </Button>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent w={"200%"}>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6} pl={4}>
            <Box display="grid" alignItems={"center"} justifyContent={"center"}>
              <Image src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/login_img_c4a81e.png"></Image>
            </Box>

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
                    onChange={handleEmail}
                    placeholder="Enter your Email"
                  />
                </FormControl>
                <FormControl id="password" isRequired>
                  <FormLabel>Password</FormLabel>

                  <Input
                    type="password"
                    value={password}
                    onChange={handlePassword}
                    placeholder="Enter your password"
                  />
                </FormControl>
                <Stack spacing={6} mt={10}>
                  <Box>
                    <Button
                      onClick={handleSubmit}
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
                  mt={"10px"}
                  color={"blue.500"}
                  display={["grid", "grid", "flex"]}
                  gap={1}
                  justifyContent="center"
                  onClick={onClose}
                >
                  <Text>Already an Account? Click Here</Text>
                </Box>
              </Box>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
