import React from "react";
import { CheckCircleIcon, DeleteIcon } from "@chakra-ui/icons";
import {
  Box,
  Circle,
  Flex,
  Text,
  Image,
  useToast,
  Tooltip,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  Heading,
  ModalCloseButton,
  ModalBody,
  HStack,
  PinInput,
  PinInputField,
  ModalFooter,
  Button,
} from "@chakra-ui/react";
import { AiFillEdit, AiFillStar } from "react-icons/ai";
import axios from "axios";
import { convertor } from "../../Utils/function";
import { Link } from "react-router-dom";
import EditProduct from "./EditProduct";

const ProductItem = ({
  name,
  brand,
  current_price,
  original_price,
  rating,
  rating_count,
  thumbnail,
  query_url,
  id,
  getData,
  url,
}) => {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const editProduct = (id) => {
    console.log(id);
    onOpen();
  };

  const deleteProduct = async () => {
    return axios.delete(`${url}/${id}`);
  };

  const handleDelete = (id) => {
    deleteProduct(id)
      .then(() =>
        toast({
          position: "bottom-center",
          duration: 1200,
          render: () => (
            <Flex
              color="white"
              border="4px solid white"
              p={"10px"}
              bgColor="green.400"
              borderRadius={"15px"}
            >
              <CheckCircleIcon w={30} h={30} />
              <Text size="lg" ml="15px">{`${name} has been deleted!`}</Text>
            </Flex>
          ),
        })
      )
      .then(() => getData());
  };

  return (
    <Box border={"0px solid red"} width={"100%"}>
      <Flex
        w="100%"
        justify="space-between"
        pt="20px"
        pb={"20px"}
        gap={"20px"}
        borderBottom="1px solid gainsboro"
        alignItems={"center"}
      >
        <Image display="block" src={thumbnail} w="100px" />
        <Box w="50%" textAlign={"start"}>
          <Box fontSize={"16px"}>
            <Flex>
              <Text as="span" fontSize={"16px"} fontWeight={"bold"} mr={2}>
                Ratings :
              </Text>
              {convertor(rating)}

              <Box mt={1.5} ml={2}>
                <AiFillStar color="rgb(56,142,60)" />
              </Box>
            </Flex>
          </Box>
          <Text fontSize={"16px"}>
            <Text as="span" fontSize={"16px"} fontWeight={"bold"}>
              Brand :{" "}
            </Text>
            {brand}
          </Text>

          <Text fontSize={"16px"}>
            <Text as="span" fontSize={"16px"} fontWeight={"bold"}>
              Actual Price :{" "}
            </Text>
            {convertor(original_price)}
          </Text>
          <Text fontSize={"16px"}>
            <Text as="span" fontSize={"16px"} fontWeight={"bold"}>
              Discounted Price :{" "}
            </Text>
            {convertor(current_price)}
          </Text>

          <Text noOfLines={1} fontSize={"16px"} mb="20px">
            <Text as="span" fontSize={"16px"} fontWeight={"bold"}>
              Product Name :{" "}
            </Text>
            {name}
          </Text>
        </Box>
        <Box display={"flex"} gap={3}>
          <Tooltip label="Delete">
            <Circle
              as="button"
              bgColor="#f1f1f1"
              display="flex"
              justifyContent="center"
              alignItems="center"
              w="30px"
              p={["1", "1", "2"]}
              onClick={() => handleDelete(id)}
            >
              <DeleteIcon
                boxSize="1em"
                display="flex"
                justifyContent="center"
                alignItems="center"
              />
            </Circle>
          </Tooltip>
          <Tooltip label="Edit">
            <Circle
              as="button"
              bgColor="#f1f1f1"
              display="flex"
              justifyContent="center"
              alignItems="center"
              w="30px"
              p={["1", "1", "2"]}
              onClick={() => editProduct(id)}
            >
              <AiFillEdit />
            </Circle>
          </Tooltip>
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent w={"70%"}>
              <ModalHeader>
                <Heading size={"sm"}>Enter The Details Here</Heading>
              </ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <HStack my={1}></HStack>
                <HStack justifyContent={"center"} alignItems={"center"}>
                  <EditProduct id={id} />
                </HStack>
              </ModalBody>

              <ModalFooter
                justifyContent={"center"}
                alignItems={"center"}
              ></ModalFooter>
            </ModalContent>
          </Modal>
        </Box>
      </Flex>
    </Box>
  );
};

export default ProductItem;
