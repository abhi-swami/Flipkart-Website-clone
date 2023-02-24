import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Checkbox,
  CheckboxGroup,
  Flex,
  Grid,
  GridItem,
  Heading,
  Menu,
  MenuButton,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
  Radio,
  RadioGroup,
  SimpleGrid,
  Stack,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { productListGenerator, starGenderator } from "../../Utils/function";
import { base_url } from "../../Utils/url";
import CardComponent from "../../Components/CardComponent";

/*
http://localhost:8080/mobiles
http://localhost:8080/tablets
http://localhost:8080/tv
http://localhost:8080/laptops
http://localhost:8080/washing-machine
http://localhost:8080/refrigerators
*/

const starRating = [
  { id: 1, star: 2 },
  { id: 2, star: 3 },
  { id: 3, star: 4 },
  { id: 4, star: 5 },
];

const url = `${base_url}/allproducts?q=Refrigerator`;

const SearchPage = () => {
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
    <Box pos={"relative"} border={"0px solid green"} bgColor={"gray.100"}>
      <Grid
        minHeight={"100vh"}
        pos={"relative"}
        templateColumns={"20% 75%"}
        gap={2}
        py={{ base: 1, sm: 2, lg: 1 }}
        mt={15}
      >
        <GridItem ml={7} position={"-webkit-sticky"} bgColor={"white"}>
          <Box pos={"sticky"} top={10} w={"70%"} ml={8}>
            <Heading
              size={"sm"}
              fontWeight={"md"}
              textDecor={"underline"}
              color={"rgb(41,116,242)"}
              textAlign={"left"}
              my={5}
            >
              Showing Result for
            </Heading>
            <Heading size={"md"} fontWeight={"bold"} textAlign={"left"} my={5}>
              Filter
            </Heading>
            <Accordion defaultIndex={[0,1]} allowMultiple>
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
                <AccordionPanel pb={4} >
                <CheckboxGroup  value={''} >
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
                  </CheckboxGroup>
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
                <CheckboxGroup  value={''} >
                  <VStack>
                    {starRating.map((el) => (
                      <Checkbox key={el.id} fontSize={"sm"} w={"100%"}>
                        <Box display="flex" flexDirection={"row"}>
                          {starGenderator(el.star)}
                        </Box>
                      </Checkbox>
                    ))}
                  </VStack>
                  </CheckboxGroup>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
            <Heading size={"md"} fontWeight={"bold"} textAlign={"left"} my={5}>
              Sort
            </Heading>
            <Accordion defaultIndex={[0]} allowMultiple>
              <AccordionItem>
                <h2>
                  <AccordionButton
                    _hover={{ backgroundColor: "rgb(41,116,242)" }}
                  >
                    <Box as="span" flex="1" textAlign="left">
                      Price Rating
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <VStack ml={0}>
                    <RadioGroup  >
                      <VStack  direction="row" ml={-8}>
                        <Radio  value="1">
                          Low To High
                        </Radio>
                        <Radio  color={'rgb(255,255,255)'} value="2">
                          Hight To Low
                        </Radio>
                      </VStack>
                    </RadioGroup>
                  </VStack>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>
        </GridItem>
        <GridItem p={{ base: 1, sm: 1, md: 1 }} ml={8}>
          <Flex justifyContent={"flex-end"} mb={5} bgColor={"white"}>
            <Menu closeOnSelect={true} bgColor={"white"}>
              <MenuButton
                bgColor={"white"}
                as={Button}
                _hover={{ backgroundColor: "rgb(41,116,242)" }}
              >
                Sort
              </MenuButton>
              <MenuList minW="10px">
                <MenuOptionGroup defaultValue="asc" type="radio">
                  <MenuItemOption
                    // onClick={() => setPriceSorting("asc")}
                    _hover={{ backgroundColor: "rgb(41,116,242)" }}
                    value="asc"
                  >
                    Price: Low To High
                  </MenuItemOption>
                  <MenuItemOption
                    // onClick={() => setPriceSorting("desc")}
                    _hover={{ backgroundColor: "rgb(41,116,242)" }}
                    value="desc"
                  >
                    Price:Hight To Low
                  </MenuItemOption>
                </MenuOptionGroup>
              </MenuList>
            </Menu>
          </Flex>
          <SimpleGrid columns={3} spacing="40px">
            {data.map((el) => (
              <Box key={el.id}>
                <CardComponent key={el.id} {...el} />
              </Box>
            ))}
          </SimpleGrid>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default SearchPage;
