import {
  Box,
  Grid,
  GridItem,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import AddProducts from "../../Components/Admin/AddProducts";
import ProductsList from "../../Components/Admin/ProductsList";
import EditProduct from "../../Components/Admin/EditProduct";
import { base_url } from "../../Utils/url";
// import { AdminApiFunction } from "../../Redux/Admin/admin.api";
// import { useDispatch,useSelector } from "react-redux";
import { getProduct } from "../../Utils/apiFunction";
import { useUserAuth } from "../../Context/UserAuthContext";

/*
http://localhost:8080/mobiles
http://localhost:8080/tablets
http://localhost:8080/tv
http://localhost:8080/laptops
http://localhost:8080/washing-machine
http://localhost:8080/refrigerators
http://localhost:8080/allproducts
*/
const initial = {
  allProduct: `${base_url}/allproducts`,
  mobiles: `${base_url}/mobiles`,
  tablets: `${base_url}/tablets`,
  tv: `${base_url}/tv`,
  laptops: `${base_url}/laptops`,
  washingMachine: `${base_url}/washingMachine`,
  refrigerators: `${base_url}/refrigerators`,
};

const Admin = () => {
  const { user } = useUserAuth();
  const [data, setData] = useState(initial);
  let [allProduts, setAllProduts] = useState(0);
  let [mobiles, setMobiles] = useState(0);
  let [tablets, setTablets] = useState(0);
  let [tv, setTV] = useState(0);
  let [laptops, setLaptops] = useState(0);
  let [washingMachine, setWashingMachine] = useState(0);
  let [refrigerators, setRefrigerators] = useState(0);

  useEffect(() => {
    getProduct(`${data.allProduct}`).then((res) => setAllProduts(res.length));
  }, [data.allProduct]);
  useEffect(() => {
    getProduct(`${data.mobiles}`).then((res) => setMobiles(res.length));
  }, [data.mobiles]);
  useEffect(() => {
    getProduct(`${data.tablets}`).then((res) => setTablets(res.length));
  }, [data.tablets]);
  useEffect(() => {
    getProduct(`${data.tv}`).then((res) => setTV(res.length));
  }, [data.tv]);
  useEffect(() => {
    getProduct(`${data.laptops}`).then((res) => setLaptops(res.length));
  }, [data.laptops]);
  useEffect(() => {
    getProduct(`${data.washingMachine}`).then((res) =>
      setWashingMachine(res.length)
    );
  }, [data.washingMachine]);
  useEffect(() => {
    getProduct(`${data.refrigerators}`).then((res) =>
      setRefrigerators(res.length)
    );
  }, [data.refrigerators]);
  console.log(
    allProduts,
    mobiles,
    tablets,
    tv,
    laptops,
    washingMachine,
    refrigerators
  );
  const boxStyle = {
    m: "auto",
    height: "200px",
    p: 3,
    borderRadius: "20px",
    fontSize: "25px",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
  };
  return (
    <Box w={["95%", "95%", "80%"]} m="auto" mt={8} mb={16}>
      <Tabs size="md" variant="enclosed">
        <TabList>
          <Tab>Home</Tab>
          <Tab>All Products</Tab>
          <Tab>Add Product</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Heading
              size={"lg"}
              textAlign={"left"}
              mt={4}
              textTransform={"capitalize"}
            >
              Welcome {user?.email?.substring(0, user?.email?.indexOf("@"))}
            </Heading>

            <Grid
              mt={8}
              templateColumns="repeat(4, 1fr)"
              justifyContent={"space-evenly"}
              alignItems={"center"}
              _hover={{ cursor: "pointer" }}
              gap={6}
            >
              <GridItem backgroundColor={"green"} style={boxStyle}>
                {allProduts} All Products
              </GridItem>
              <GridItem backgroundColor={"orange"} style={boxStyle}>
                {mobiles} Mobiles
              </GridItem>
              <GridItem style={boxStyle} backgroundColor={"tomato"}>
                {tablets} Tablet
              </GridItem>
              <GridItem style={boxStyle} backgroundColor={"blue.300"}>
                {tv} TV
              </GridItem>
              <GridItem style={boxStyle} backgroundColor={"cyan.500"}>
                {laptops} Laptops
              </GridItem>
              <GridItem style={boxStyle} backgroundColor={"lightcoral"}>
                {washingMachine} Washing Machine
              </GridItem>
              <GridItem style={boxStyle} backgroundColor={"yellow.400"}>
                {refrigerators} Refrigerators
              </GridItem>
            </Grid>
          </TabPanel>
          <TabPanel>
            <Heading size={"lg"} textAlign={"left"} mt={4}>
              All Products List
            </Heading>
            <ProductsList />
          </TabPanel>
          <TabPanel>
            <Heading size={"lg"} textAlign={"left"} mt={4}>
              Add Product
            </Heading>
            <AddProducts />
          </TabPanel>

          <TabPanel>
            <Heading size={"lg"} textAlign={"left"} mt={4}>
              All Products List
            </Heading>
            <EditProduct />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default Admin;
