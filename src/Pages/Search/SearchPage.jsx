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
  HStack,
  Menu,
  MenuButton,
  MenuList,
  Radio,
  RadioGroup,
  SimpleGrid,
  Text,
  VStack,
  Icon,
} from "@chakra-ui/react";

import React, { useEffect, useState, useContext } from "react";
import { AiFillStar } from "react-icons/ai";
import { productListGenerator } from "../../Utils/function";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { base_url } from "../../Utils/url";
import { getProduct } from "../../Utils/apiFunction";
import CardComponent from "../../Components/CardComponent";
import { SearchContext } from "../../Context/SearchContext";
import {
  createSearchParams,
  useLocation,
  useSearchParams,
} from "react-router-dom";
import { getSearchProducts } from "../../Redux/Favorite/Search/action";
import { TbArrowsDownUp } from "react-icons/tb";
import Pagination from "../../Components/Pagination";

const rating = [
  { id: 1, rating: 2 },
  { id: 2, rating: 3 },
  { id: 3, rating: 4 },
  { id: 4, rating: 5 },
];

const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchParamsStar, setSearchParamsStar] = useSearchParams();
  const [productList, setProductList] = useState([]);
  const [filterCategory, setFilterCategory] = useState([]);
  const [filterStar, setFilterStar] = useState([]);
  const [sortStar, setsortStar] = useState("");
  const [priceSorting, setPriceSorting] = useState("");
  const [isActive, setIsActive] = useState(false);
  const { query } = useContext(SearchContext);
  const [totalPage, setTotalPage] = useState(0);

  const dispatch = useDispatch();
  const location = useLocation();

  const { products, perPage, activePage } = useSelector((store) => {
    return {
      products: store.searchReducer.data,
      perPage: store.searchReducer.perPage,
      activePage: store.searchReducer.activePage,
    };
  }, shallowEqual);
  const varible = filterStar.length > 0 ? filterStar?.map(Number) : 0;
  const filterProducts = products?.filter((el) => el?.rating >= varible);

  const handleFilterValue = (val) => {
    setFilterCategory(val);
  };
  const handleFilterStar = (val) => {
    setFilterStar(val);
  };
  const handleStarSort = (val) => {
    setFilterStar("");
    setsortStar(val);
  };
  const handlePriceSorting = (val) => {
    setsortStar("");
    setPriceSorting(val);
  };

  useEffect(() => {
    let param = {};

    if (filterCategory.length !== 0) {
      param.filter = filterCategory;
      setSearchParams(createSearchParams({ filter: filterCategory }));
      setIsActive(true);
    } else if (filterCategory.length === 0) {
      setIsActive(false);
      setSearchParams(param);
    }
    if (filterStar.length !== 0 && isActive === false) {
      param.rating = filterStar;
      setSearchParamsStar(createSearchParams({ rating: filterStar }));
    } else if (filterStar.length === 0) {
      setSearchParamsStar(param);
    }
    if (sortStar.length) {
      param.star_sort = sortStar;
      setSearchParams(param);
    } else if (sortStar.length === 0) {
      setSearchParams(param);
    }
    if (priceSorting.length) {
      param.price_sort = priceSorting;
      setSearchParams(param);
    } else if (sortStar.length === 0) {
      setSearchParams(param);
    }
  }, [
    filterCategory,
    filterStar,
    sortStar,
    priceSorting,
    isActive,
    setSearchParams,
    setSearchParamsStar,
  ]);

  useEffect(() => {
    if (products.length === 0 || location || query) {
      const url = `${base_url}/allproducts?q=${query}`;
      const getProductsParam = {
        params: {
          brand: searchParams.getAll("filter"),
          rating_gte: isActive ? null : searchParamsStar.getAll("rating"),
          _sort:
            sortStar.length > 0
              ? "rating"
              : priceSorting.length > 0
              ? "current_price"
              : null,
          _order:
            sortStar.length > 0
              ? searchParams?.get("star_sort")
              : priceSorting.length > 0
              ? searchParams?.get("price_sort")
              : null,
        },
      };
      dispatch(getSearchProducts(getProductsParam, url));
    }
  }, [
    location.search,
    query,
    isActive,
    priceSorting.length,
    products.length,
    sortStar.length,
  ]);

  useEffect(() => {
    if (query) {
      const url = `${base_url}/allproducts?q=${query}`;
      getProduct(url).then((res) => setProductList(productListGenerator(res)));
    }
  }, [query]);
  useEffect(() => {
    setTotalPage(filterProducts?.length);
  }, [filterProducts]);

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
              {query.length > 2 && `Showing Result for ${query}`}
            </Heading>
            <Heading size={"md"} fontWeight={"bold"} textAlign={"left"} my={5}>
              Filter
            </Heading>
            <Accordion defaultIndex={[0, 1]} allowMultiple>
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
                <AccordionPanel pb={4}>
                  <VStack>
                    {productList.map((el) => (
                      <CheckboxGroup
                        key={el + Math.random() + Date.now()}
                        value={filterCategory}
                        onChange={handleFilterValue}
                      >
                        <Checkbox fontSize={"sm"} w={"100%"} value={el}>
                          {el}
                        </Checkbox>
                      </CheckboxGroup>
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
                  {rating.map((el) => (
                    <CheckboxGroup
                      key={el.id}
                      value={filterStar}
                      onChange={handleFilterStar}
                    >
                      <HStack>
                        <Checkbox
                          value={`${el.rating}`}
                          fontSize={"sm"}
                          w={"100%"}
                        >
                          <Box
                            as={"span"}
                            display="flex"
                            flexDirection={"row"}
                            my={1}
                            fontSize={"14px"}
                          >
                            {el.rating}
                            <Icon as={AiFillStar} mx={1} mt={1} />& above
                          </Box>
                          <Text as={"span"}></Text>
                        </Checkbox>
                      </HStack>
                    </CheckboxGroup>
                  ))}
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
                      Star Rating
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <VStack ml={0}>
                    <RadioGroup
                      defaultValue={sortStar}
                      onChange={handleStarSort}
                    >
                      <VStack direction="row" ml={-8}>
                        <Radio value="asc">Low To High</Radio>
                        <Radio color={"rgb(255,255,255)"} value="desc">
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
                mr={2}
              >
                <Text as={"span"} mt={0}>
                  Price
                </Text>
                <Icon as={TbArrowsDownUp} mx={1} fontSize={"12px"} />
              </MenuButton>
              <MenuList minW="155px">
                <RadioGroup
                  ml={3}
                  defaultValue={sortStar}
                  onChange={handlePriceSorting}
                >
                  <VStack direction="row" ml={-8}>
                    <Radio value="asc">Low To High</Radio>
                    <Radio value="desc">Hight To Low</Radio>
                  </VStack>
                </RadioGroup>
              </MenuList>
            </Menu>
          </Flex>
          <SimpleGrid columns={3} spacing="40px">
            {products
              .filter((el) => el.rating >= varible)
              .filter((_, index) => {
                return (
                  index >= perPage * (activePage - 1) &&
                  index < perPage * activePage
                );
              })
              .map((el) => (
                <Box key={el.id} border={"0px solid green"}>
                  <CardComponent key={el.id} cardData={el} />
                </Box>
              ))}
          </SimpleGrid>
          <Pagination posts={totalPage} />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default SearchPage;
