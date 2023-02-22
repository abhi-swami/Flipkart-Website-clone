
import { Box,} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { productListGenerator } from "../../Utils/function";
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


const url = `${base_url}/allproducts`;


const ProductsList = () => {
  const [data, setData] = useState([]);
  const [productList, setProductList] = useState([]);

  const getData = async () => {
    axios
      .get(`${url}`)
      .then((res) => {
        setData(res.data)
        setProductList([productListGenerator(res.data)])
      })
      .catch((err) => console.log(err));
  };


  useEffect(() => {
    getData();
  }, []);

  return (
    <Box mt={8}>
      {data.map((el) => {
        return <ProductItem key={el.id} {...el} getData={getData} url={url} />;
      })}
    </Box>
  );
};

export default ProductsList;
