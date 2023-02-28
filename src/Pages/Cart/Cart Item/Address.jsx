import {
  Box,
  Button,
  Heading,
  FormControl,
  GridItem,
  FormLabel,
  Input,
  Select,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../../../Context/UserAuthContext";
// import { LoginContext } from "../../Context/LoginContext";
import Success from "./Success";

export default function Address({ isOpen, onOpen, onClose }) {
  const [isSuccess, setIsSuccess] = useState(false);
  const { logOut } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = () => {
    setIsSuccess(true);
  };
  const handleOpen = () => {
    setIsSuccess(true);
  };
  const handleClose = () => {
    setIsSuccess(false);
    // inputLogout()
    logOut();
    navigate("/", { relative: true });
  };

  return (
    <>
      <Button onClick={onOpen}>Trigger modal</Button>

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            {" "}
            <Heading w="100%" textAlign={"center"} fontWeight="normal" mb="2%">
              User Details
            </Heading>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box w={"70%"} m={"auto"} boxShadow={"xl"} p={9}>
              <FormControl as={GridItem} colSpan={[6, 3]}>
                <FormLabel
                  htmlFor="country"
                  fontSize="sm"
                  fontWeight="md"
                  color="gray.700"
                  _dark={{
                    color: "gray.50",
                  }}
                >
                  Country / Region
                </FormLabel>
                <Select
                  id="country"
                  name="country"
                  autoComplete="country"
                  placeholder="Select option"
                  focusBorderColor="brand.400"
                  shadow="sm"
                  size="sm"
                  w="full"
                  rounded="md"
                >
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                </Select>
              </FormControl>
              <FormControl as={GridItem} colSpan={6}>
                <FormLabel
                  htmlFor="street_address"
                  fontSize="sm"
                  fontWeight="md"
                  color="gray.700"
                  _dark={{
                    color: "gray.50",
                  }}
                  mt="2%"
                >
                  Street address
                </FormLabel>
                <Input
                  type="text"
                  name="street_address"
                  id="street_address"
                  autoComplete="street-address"
                  focusBorderColor="brand.400"
                  shadow="sm"
                  size="sm"
                  w="full"
                  rounded="md"
                />
              </FormControl>
              <FormControl as={GridItem} colSpan={[6, 6, null, 2]}>
                <FormLabel
                  htmlFor="city"
                  fontSize="sm"
                  fontWeight="md"
                  color="gray.700"
                  _dark={{
                    color: "gray.50",
                  }}
                  mt="2%"
                >
                  City
                </FormLabel>
                <Input
                  type="text"
                  name="city"
                  id="city"
                  autoComplete="city"
                  focusBorderColor="brand.400"
                  shadow="sm"
                  size="sm"
                  w="full"
                  rounded="md"
                />
              </FormControl>
              <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
                <FormLabel
                  htmlFor="state"
                  fontSize="sm"
                  fontWeight="md"
                  color="gray.700"
                  _dark={{
                    color: "gray.50",
                  }}
                  mt="2%"
                >
                  State / Province
                </FormLabel>
                <Input
                  type="text"
                  name="state"
                  id="state"
                  autoComplete="state"
                  focusBorderColor="brand.400"
                  shadow="sm"
                  size="sm"
                  w="full"
                  rounded="md"
                />
              </FormControl>
              <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
                <FormLabel
                  htmlFor="postal_code"
                  fontSize="sm"
                  fontWeight="md"
                  color="gray.700"
                  _dark={{
                    color: "gray.50",
                  }}
                  mt="2%"
                >
                  ZIP / Postal
                </FormLabel>
                <Input
                  type="text"
                  name="postal_code"
                  id="postal_code"
                  autoComplete="postal-code"
                  focusBorderColor="brand.400"
                  shadow="sm"
                  size="sm"
                  w="full"
                  rounded="md"
                />
              </FormControl>
            </Box>
          </ModalBody>
          <ModalFooter justifyContent={"center"} alignItems={"center"}>
            <Button
              onClick={handleSubmit}
              variant="ghost"
              bgColor="green"
              mr={3}
              color={"white"}
              _hover={{ color: "black" }}
            >
              Submit
            </Button>
            <Success
              isSuccess={isSuccess}
              handleOpen={handleOpen}
              handleClose={handleClose}
            />
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
