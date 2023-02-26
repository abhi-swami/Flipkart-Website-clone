import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  Text,
  useToast,
} from "@chakra-ui/react";

import React, { useContext, useEffect, useState } from "react";
import { AiOutlineStar } from "react-icons/ai";
import { BsSuitHeartFill } from "react-icons/bs";
import { ImCart } from "react-icons/im";
import { IoMdShareAlt } from "react-icons/io";
import { Link, useNavigate, useParams } from "react-router-dom";
import Styles from "../../Styles/Single.module.css";
import { convertor } from "../../Utils/function";
import { base_url } from "../../Utils/url";
import { getProduct } from "../../Utils/apiFunction";
import { useDispatch } from "react-redux";
import { PostCartProduct } from "../../Redux/Cart/cart.action";
import { CartContext } from "../../Context/CartContext";
import { LoginContext } from "../../Context/LoginContext";
import { useUserAuth } from "../../Context/UserAuthContext";

const SingleProduct = () => {
  const { productId } = useParams();
  const [data, setData] = useState([]);
  const [singleData, setSingleData] = useState([]);
  const { cardProucts } = useContext(CartContext);
  const toast = useToast();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { onOpen } = useContext(LoginContext);
  const { user } = useUserAuth();

  const handleCart = () => {
    if (user) {
      const payload = { ...data, quantity: 1 };

      dispatch(PostCartProduct(payload))
        .then(() => cardProucts())
        .then(() => navigate("/cart"))
        .catch((err) =>
          toast({
            position: `top`,
            title: `Oppps unable to add product`,
            description: err,
            status: "error",
            duration: 2000,
            isClosable: true,
          }).then(() => navigate("/cart"))
        );
    } else {
      onOpen();
    }
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
    if (productId) {
      const url = `${base_url}/allproducts/${productId}`;
      getProduct(url)
        .then((res) => setData(res))
        .catch((err) => console.log(err.message));
    }
  }, []);
  useEffect(() => {
    if (data) {
      getProduct(data.query_url)
        .then((res) => setSingleData(res))
        .catch((err) => console.log(err.message));
    }
  }, [data]);
  if (singleData) {
    const {
      name,
      current_price,
      original_price,
      rating,
      rating_count,
      thumbnail,
      id,
    } = data;
    const { specs, share_url } = singleData;

    let x = Math.ceil(
      ((original_price - current_price) / original_price) * 100
    );
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
            </Box>
          </Flex>
        </Box>
      </>
    );
  }
};

export default SingleProduct;
