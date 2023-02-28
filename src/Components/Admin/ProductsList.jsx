import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Checkbox,
  Flex,
  Grid,
  GridItem,
  Heading,
  Menu,
  MenuButton,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { productListGenerator, starGenderator } from "../../Utils/function";
import { base_url } from "../../Utils/url";
import ProductItem from "./ProductItem";

/*
http://localhost:8080/mobiles
http://localhost:8080/tablets
http://localhost:8080/tv
http://localhost:8080/laptops
http://localhost:8080/washing-machine
http://localhost:8080/refrigerators
*/
const categories = [
  { id: 1, category: "Mobiles" },
  { id: 2, category: "Tablets" },
  { id: 3, category: "TV" },
  { id: 4, category: "Laptops" },
  { id: 5, category: "Washing Mach..." },
  { id: 6, category: "Refrigerators" },
];
const starRating = [
  { id: 1, star: 2 },
  { id: 2, star: 3 },
  { id: 3, star: 4 },
  { id: 4, star: 5 },
];

const url = `${base_url}/allproducts?q=laptop`;

const ProductsList = () => {
  const [data, setData] = useState([]);
  const [productList, setProductList] = useState([]);
  const getData = async () => {
    axios
      .get(`${url}`)
      .then((res) => {
        setData(res.data);
        setProductList(productListGenerator(res.data));
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <Box pos={"relative"} border={"0px solid green"}>
      <Grid
        minHeight={"100vh"}
        pos={"relative"}
        templateColumns={"28% 70%"}
        gap={2}
        py={{ base: 1, sm: 2, lg: 1 }}
        mt={15}
      >
        <GridItem ml={7} position={"-webkit-sticky"}>
          <Box pos={"sticky"} top={10} w={"70%"}>
            <Heading
              size={"sm"}
              fontWeight={"md"}
              textDecor={"underline"}
              color={"rgb(41,116,242)"}
              textAlign={"left"}
              my={5}
            >
              Results
            </Heading>
            <Accordion defaultIndex={[0]} allowMultiple>
              <AccordionItem>
                <h2>
                  <AccordionButton
                    _hover={{ backgroundColor: "rgb(41,116,242)" }}
                  >
                    <Box as="span" flex="1" textAlign="left">
                      Categories
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <VStack>
                    {categories.map((el) => (
                      <Checkbox key={el.id} fontSize={"16px"} w={"100%"}>
                        {el.category}
                      </Checkbox>
                    ))}
                  </VStack>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton
                    _hover={{ backgroundColor: "rgb(41,116,242)" }}
                  >
                    <Box as="span" flex="1" textAlign="left">
                      Brands
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} overflowY={"scroll"} h={"200px"}>
                  <VStack>
                    {productList.map((el) => (
                      <Checkbox
                        key={el + Math.random() + Date.now()}
                        fontSize={"sm"}
                        w={"100%"}
                      >
                        {el}
                      </Checkbox>
                    ))}
                  </VStack>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton
                    _hover={{ backgroundColor: "rgb(41,116,242)" }}
                  >
                    <Box as="span" flex="1" textAlign="left">
                      Star Rating
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <VStack>
                    {starRating.map((el) => (
                      <Checkbox key={el.id} fontSize={"sm"} w={"100%"}>
                        <Box display="flex" flexDirection={"row"}>
                          {starGenderator(el.star)}
                        </Box>
                      </Checkbox>
                    ))}
                  </VStack>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>
        </GridItem>

        <GridItem p={{ base: 1, sm: 1, md: 1 }}>
          <Flex justifyContent={"flex-end"} mb={59}></Flex>
          <SimpleGrid columns={1} spacing="50px" border={"0px solid black"}>
            <Box mt={1}>
              {data.map((el) => {
                return (
                  <ProductItem
                    key={el.id}
                    {...el}
                    getData={getData}
                    url={url}
                  />
                );
              })}
            </Box>
          </SimpleGrid>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default ProductsList;
