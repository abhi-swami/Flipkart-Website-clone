import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  Input,
  ListItem,
  Text,
  UnorderedList,
  useToast,
  VStack,
} from "@chakra-ui/react";

import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiOutlineStar } from "react-icons/ai";
import { BiFileBlank, BiHeart, BiShareAlt } from "react-icons/bi";
import { BsSuitHeartFill } from "react-icons/bs";
import { ImCart } from "react-icons/im";
import { IoMdFlash, IoMdShareAlt } from "react-icons/io";
import { Link } from "react-router-dom";
import ImageCaraosel from "../../Components/SingleProduct/ImageCaraosel";
import Styles from "../../Styles/Single.module.css";
import { convertor } from "../../Utils/function";
import { base_url } from "../../Utils/url";

const SingleProduct = () => {
  const url = `${base_url}/refrigerators/10`;
  const [data, setData] = useState([]);
  const [singleData, setSingleData] = useState([]);
  const {
    name,
    brand,
    current_price,
    original_price,
    rating,
    rating_count,
    thumbnail,
    query_url,
    id,
  } = data;
  const { heighlights, specs, thumbnails, share_url } = singleData;
  console.log(share_url);
  let x = Math.ceil(((original_price - current_price) / original_price) * 100);

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

  useEffect(() => {
    axios
      .get(url)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err.message));
  }, []);
  useEffect(() => {
    if (data) {
      axios
        .get(data.query_url)
        .then((res) => setSingleData(res.data))
        .catch((err) => console.log(err.message));
    }
  }, [data]);
  if (singleData) {
    return (
      <>
        <Box w={"100%"}>
          <Flex py={2} pl={2} pr={2} gap="2px" className={Styles.main_flex}>
            <Box
              w="35%"
              boxShadow={"md"}
              height={"auto"}
              position={"-webkit-sticky"}
              ml={2}
              mt={6}
            >
              <Box pos={"sticky"} top={10}>
                <Box mt={10}>
                  <Text cursor={"pointer"} ml="94%" mb={"-25px"}>
                    <BsSuitHeartFill color="rgb(200,200,200)" />
                  </Text>
                  <Box width={"50%"} margin={"auto"}>
                    <Image src={thumbnail} m="auto" objectFit={"fill"} />
                  </Box>
                </Box>
                {/* <Box mt={10}><ImageCaraosel /></Box> */}
                <Flex
                  gap={"2%"}
                  mt={5}
                  className={Styles.Button_flex}
                  justifyContent={"center"}
                >
                  <Button
                    fontWeight="bold"
                    fontSize={18}
                    onClick={handleCart}
                    color="white"
                    _hover={{ bgColor: "none" }}
                    bg={"rgb(255,159,0)"}
                  >
                    <Icon as={ImCart} />
                    <Text as={"span"} ml={4}>
                      ADD TO CART
                    </Text>
                  </Button>
                  <Button
                    variant={"ghost"}
                    fontWeight="bold"
                    fontSize={18}
                    _hover={{ bgColor: "none" }}
                    onClick={handleBuy}
                    color="white"
                    bg={"rgb(251,100,27)"}
                  >
                    <Icon as={ImCart} />
                    <Text as={"span"} ml={4}>
                      BUY NOW
                    </Text>
                  </Button>
                </Flex>
              </Box>
            </Box>
            <Box w="60%" pl={5} pt="10px">
              <Box>
                <Link to={share_url} target={"_blank"}>
                  <Flex fontSize={20} fontWeight="500" justifyContent={"end"}>
                    <IoMdShareAlt />
                  </Flex>
                </Link>
                <Text fontSize={20} fontWeight="500" textAlign={"left"}>
                  {name}
                </Text>
                <HStack p={"1px"} pr={1} my={2} color={"black"}>
                  <Flex
                    bgColor={"rgb(56,142,60)"}
                    px={1}
                    color={"white"}
                    gap={2}
                    borderRadius={2}
                  >
                    <Text fontSize={"14px"}>{rating}</Text>
                    <Text fontSize={"14px"} mt={"4px"}>
                      <AiOutlineStar />
                    </Text>
                  </Flex>
                  <Text
                    fontSize={"13px"}
                    fontWeight={"medium"}
                    color={"rgb(139,135,135)"}
                  >
                    {convertor(rating_count)} Ratings
                  </Text>
                </HStack>
                <HStack fontSize="18px" fontWeight={"medium"}>
                  <Text color={"rgb(56,142,60)"} pt={1} fontSize={"15px"}>
                    Extra ₹{convertor(original_price - current_price)} off
                  </Text>
                </HStack>
                <HStack
                  justifyContent="left"
                  alignContent="flex-end"
                  color={"gray.600"}
                  fontSize="18px"
                  fontWeight={"medium"}
                >
                  <Text fontWeight={"bold"} color={"black"}>
                    ₹ {convertor(current_price)}
                  </Text>
                  <Text textDecor={"line-through"} pt={1} fontSize={"14px"}>
                    ₹ {convertor(original_price)}
                  </Text>
                  <Text color={"rgb(56,142,60)"} pt={1} fontSize={"15px"}>
                    {x}% off
                  </Text>
                </HStack>
                <HStack
                  color={"gray.600"}
                  fontSize="15px"
                  fontWeight={"medium"}
                  mt={5}
                >
                  <Text fontWeight={"bold"} color={"black"}>
                    Available offers
                  </Text>
                </HStack>
                <Flex my={2}>
                  <Image
                    src={
                      "https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
                    }
                    w={"20px"}
                    mt={1}
                  />
                  <Text ml={2}>Flipkart Pay Later</Text>
                </Flex>
                <Flex my={2}>
                  <Image
                    src={
                      "https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
                    }
                    w={"20px"}
                    mt={1}
                  />
                  <Text ml={2}>
                    <Text as={"span"} fontWeight="semibold">
                      Bank Offer
                    </Text>{" "}
                    10% instant discount on PNB Credit Card, up to ₹1500, on
                    orders of ₹5,000 and above{" "}
                    <Text
                      as={"span"}
                      fontWeight="semibold"
                      fontSize={"12px"}
                      color={"blue"}
                    >
                      T&C
                    </Text>
                  </Text>
                </Flex>
                <Flex my={2}>
                  <Image
                    src={
                      "https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
                    }
                    w={"20px"}
                    mt={1}
                  />
                  <Text ml={2}>
                    <Text as={"span"} fontWeight="semibold">
                      Bank Offer
                    </Text>{" "}
                    10% off on Yes Bank Credit Card, up to ₹1,500. On orders of
                    ₹10,000 and above{" "}
                    <Text
                      as={"span"}
                      fontWeight="semibold"
                      fontSize={"12px"}
                      color={"blue"}
                    >
                      T&C
                    </Text>
                  </Text>
                </Flex>
                <Flex my={2}>
                  <Image
                    src={
                      "https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
                    }
                    w={"20px"}
                    mt={1}
                  />
                  <Text ml={2}>
                    <Text as={"span"} fontWeight="semibold">
                      Bank Offer
                    </Text>{" "}
                    Get additional ₹1500 off on Debit and Credit cards{" "}
                    <Text
                      as={"span"}
                      fontWeight="semibold"
                      fontSize={"12px"}
                      color={"blue"}
                    >
                      T&C
                    </Text>
                  </Text>
                </Flex>
                <Box boxShadow={"lg"} pl={2}>
                  <Heading textAlign={"left"} my={2} fontSize={"18px"}>
                    Specifications
                  </Heading>
                  {specs?.map((el) =>
                    el.title && el.details.length > 0 ? (
                      <Flex key={Math.random()} textAlign={"justify"}>
                        <Box
                          border={"0px solid pink"}
                          w={"60%"}
                          boxShadow={"sm"}
                        >
                          <Heading my={1} fontSize={"16px"}>
                            {el.title}
                          </Heading>

                          <Flex
                            border={"0px solid green"}
                            w={"90%"}
                            textAlign={"left"}
                            flexDirection={"column"}
                          >
                            {el.details.map((x) => (
                              <HStack
                                borderBottom={"0.5px solid lightgray"}
                                mt={3}
                                key={Math.random()}
                              >
                                <Box w={"40%"}>
                                  <Text color={"rgb(135,135,151)"}>
                                    {x.property}
                                  </Text>
                                </Box>
                                <Box w={"60%"} textAlign={"justify"}>
                                  <Text color={"rgb(135,135,151)"}>
                                    {x.value}
                                  </Text>
                                </Box>
                              </HStack>
                            ))}
                          </Flex>
                        </Box>
                      </Flex>
                    ) : null
                  )}
                </Box>
              </Box>
              {/* <Flex alignItems={"center"} gap="5px" mt={5}>
                <Checkbox isInvalid>Add to Compare</Checkbox>
                <Text>|</Text>
                <BiShareAlt color="blue" />
                <Text>|</Text>
                <Flex alignItems={"center"} gap="5px">
                  <BiFileBlank color="blue" />
                  <Text color="blue">Print</Text>
                </Flex>
              </Flex>
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
                    </Box>
                  </Box>
                </Flex>
              </Box> */}
            </Box>
          </Flex>
        </Box>
      </>
    );
  }
};

export default SingleProduct;
