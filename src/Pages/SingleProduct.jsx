import {
  Box,
  Button,
  Checkbox,
  Flex,
  Image,
  Input,
  ListItem,
  Text,
  UnorderedList,
  useToast,
} from "@chakra-ui/react";

// import axios from "axios";

import React from "react";

// import { useState } from "react";

// import { useEffect } from "react";

import { BiFileBlank, BiHeart, BiShareAlt } from "react-icons/bi";

import { Link } from "react-router-dom";

import ImageCaraosel from "../../Components/SingleProduct/ImageCaraosel";

import Styles from "../../Style/Single.module.css";

const SingleProduct = () => {
  // const [data,setData] = useState("");

  const toast = useToast();

  const handleCart = () => {
    toast({
      title: "Product Added Success",
      description: "Okie. Product Added...",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  const handleBuy = () => {
    toast({
      title: "Redirect to checkout",
      description: "Okie. Redirecting...",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  // useEffect(()=>{

  //     axios.get("")
  //     .then((res)=>setData(res.data))
  //     .catch((err)=>console.log(err.message))
  // },[])

  return (
    <>
      <Box w={"100%"}>
        <Flex py={2} pl={2} pr={2} gap="2px" className={Styles.main_flex}>
          <Box w="50%">
            <Box mt={2}>
              <Text color={"red"} ml="95%" mb={"-25px"}>
                <BiHeart size={25} />
              </Text>
              <Image
                src="https://www.reliancedigital.in/medias/Apple-iPhone-14-Plus-Mobile-Phone-493177772-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w2NzUyMnxpbWFnZS9qcGVnfGltYWdlcy9oNjIvaGJhLzk4OTA1NDc2NjI4NzguanBnfDk1NjAyMGYwZmY2MTYzNWRkYWFmNzg0ODg1YTRkMWY2ZmQzY2I0YjliNDNjZTZlNTc0YjA2ODAwMzg3YWIyNTI"
                w={"60%"}
                m="auto"
              />
            </Box>
            <Box mt={10}>
              <ImageCaraosel />
            </Box>
            <Flex mt={10}>
              <Image
                src="https://i.ibb.co/stBL1WJ/Screenshot-20230122-010858.png"
                w={"15%"}
              />
              <Image
                src="https://i.ibb.co/kydgvgW/Screenshot-20230122-010853.png"
                w={"15%"}
              />
            </Flex>
          </Box>
          <Box w="60%" pl={5} pt="10px">
            <Box>
              <Text fontSize={20} fontWeight="500">
                Apple iPhone 14 Plus 256 GB, Blue(493177772)
              </Text>
              <Flex alignItems={"center"} gap="5px" mt={5}>
                <Checkbox isInvalid>Add to Compare</Checkbox>
                <Text>|</Text>
                <BiShareAlt color="blue" />
                <Text>|</Text>
                <Flex alignItems={"center"} gap="5px">
                  <BiFileBlank color="blue" />
                  <Text color="blue">Print</Text>
                </Flex>
              </Flex>
            </Box>
            <Box w={"100%"} border="1px solid gray" mt={3}></Box>
            <Box mt={5}>
              <Flex className={Styles.inner_flex}>
                <Box w={"50%"}>
                  <Text fontSize={16} fontWeight="500">
                    Gain more with offers (1)
                  </Text>
                  <UnorderedList mt={2}>
                    <ListItem fontSize={14}>
                      HDFC BANK Offer: Get Rs.4000 Instant Discount on CC/DC
                      EMI&
                      <br />
                      CC Fulswipe. 6 Months No Cost EMI..
                    </ListItem>
                  </UnorderedList>
                  <Text mt={5} fontSize={16} fontWeight="500">
                    Save more with EMI/Cashback (5)
                  </Text>
                  <UnorderedList mt={2}>
                    <ListItem fontSize={14}>
                      Credit Card No-Cost EMI Options.
                    </ListItem>
                    <ListItem fontSize={14}>
                      Debit Card No-Cost EMI Options.
                    </ListItem>
                    <ListItem fontSize={14}>
                      Credit Card Low-Cost EMI Options.
                    </ListItem>
                  </UnorderedList>
                  <Text mt={5} fontSize={16} fontWeight="500">
                    Warranty
                  </Text>
                  <UnorderedList mt={2}>
                    <ListItem fontSize={14}>
                      Warranty: 1 Year manufacturer warranty
                    </ListItem>
                  </UnorderedList>
                  <Text mt={5} fontSize={16} fontWeight="500">
                    Key Features
                  </Text>
                  <UnorderedList mt={2}>
                    <ListItem fontSize={14}>
                      16.95 cm (6.7 Inch) Super Retina XDR OLED display
                    </ListItem>
                    <ListItem fontSize={14}>
                      12 MP Main + 12 MP Ultra Wide Lens Rear Camera
                    </ListItem>
                    <ListItem fontSize={14}>
                      12 MP Selfie Camera, Fingerprint-resistant oleophobic
                      coating
                    </ListItem>
                  </UnorderedList>
                  <Text mt={5} fontSize={16} fontWeight="500">
                    Return Policy
                  </Text>
                  <UnorderedList mt={2}>
                    <ListItem fontSize={14}>
                      Items are eligible for return within 7 Days of Delivery.
                    </ListItem>
                    <ListItem fontSize={14}>
                      All accessories, product & packaging need to be
                      <br />
                      returned in original condition.
                    </ListItem>
                  </UnorderedList>
                  <Flex alignItems={"center"} mt={5} gap={1}>
                    <Text fontSize={16} fontWeight="500">
                      Got Feedback to share on this page?
                    </Text>
                    <Link to="">
                      <Text fontSize={16} fontWeight="500" color={"blue"}>
                        report here.
                      </Text>
                    </Link>
                  </Flex>
                </Box>
                <Box w={"50%"} borderLeft="1px solid gray" pl={5}>
                  <Flex alignItems={"center"} gap={3}>
                    <Text>Deal Price: </Text>
                    <Text color={"blue"} fontWeight="bold" fontSize={25}>
                      ₹ {94900.0}
                    </Text>
                  </Flex>
                  <Box mt={5}>
                    <Flex alignItems={"center"} mt="5px">
                      <Text>Offer Price: ₹</Text>
                      <Text
                        textDecoration={"line-through"}
                        fontWeight="semibold"
                        fontSize={17}
                      >
                        {99900.0}
                      </Text>
                    </Flex>
                    <Flex alignItems={"center"} gap={2} mt="5px">
                      <Text>MRP :</Text>
                      <Text
                        textDecoration={"line-through"}
                        fontWeight="semibold"
                        fontSize={17}
                      >
                        {99900.0}
                      </Text>
                      <Text>(Inclusive of all taxes)</Text>
                    </Flex>
                    <Text
                      fontSize={18}
                      color="green"
                      fontWeight="bold"
                      mt="5px"
                    >
                      You Save: 5%(₹5,000)
                    </Text>
                    <Text fontWeight={"500"} fontSize={16} mt="5px">
                      EMIs (Credit Cards) from ₹4556.42/month{" "}
                    </Text>
                    <Text fontWeight={"500"} fontSize={22} mt="5px">
                      FREE Shipping!
                    </Text>
                  </Box>
                  <Box mt={5} mr={5}>
                    <Input
                      placeholder="Enter / Detect PIN Code"
                      border={"1px solid black"}
                    />
                    <Flex gap={"2%"} mt={5} className={Styles.Button_flex}>
                      <Button
                        border={"2px solid red"}
                        fontWeight="bold"
                        fontSize={18}
                        onClick={handleCart}
                        color="white"
                        bg={"#e42529"}
                      >
                        ADD TO CART
                      </Button>
                      <Button
                        border={"2px solid red"}
                        fontWeight="bold"
                        fontSize={18}
                        onClick={handleBuy}
                        color=""
                        bg={"#fc6027"}
                      >
                        BUY NOW
                      </Button>
                    </Flex>
                  </Box>
                </Box>
              </Flex>
            </Box>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default SingleProduct;
