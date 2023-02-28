import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  useToast,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { CheckCircleIcon, WarningIcon } from "@chakra-ui/icons";

import { getProduct, patchProduct } from "../../Utils/apiFunction";
import { base_url } from "../../Utils/url";

const intitialData = {
  name: "",
  brand: "",
  current_price: "",
  original_price: "",
  rating: "",
  rating_count: "",
  thumbnail: "",
  query_url: "",
};

const EditProduct = ({ id }) => {
  const url = `${base_url}/allproducts/${id}`;
  const [data, setData] = useState(intitialData);
  const [loading] = useState(false);
  const toast = useToast();
  const {
    name,
    brand,
    current_price,
    original_price,
    rating,
    rating_count,
    thumbnail,
  } = data;

  const handleChange = (e) => {
    const { name, value } = e.target;
    const val =
      name === "current_price" ||
      name === "original_price" ||
      name === "rating" ||
      name === "rating_count"
        ? Number(value)
        : value;
    setData({ ...data, [name]: val });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      name === "" ||
      brand === "" ||
      thumbnail === "" ||
      current_price === 0 ||
      original_price === 0 ||
      rating === 0 ||
      rating_count === 0
    ) {
      toast({
        position: "top-left",
        render: () => (
          <Flex color="red" border="4px solid white" p={"10px"} bgColor="red">
            <WarningIcon w={30} h={30} />
            <Text size="lg" ml="15px">
              Please Add All Details
            </Text>
          </Flex>
        ),
      });
      return;
    }
    patchProduct(url, data)
      .then(() =>
        toast({
          position: "bottom",
          render: () => (
            <Flex
              color="white"
              border="4px solid white"
              p={"10px"}
              bgColor="green.400"
            >
              <CheckCircleIcon w={30} h={30} />
              <Text size="lg" ml="15px">
                Product has been updated!!{" "}
              </Text>
            </Flex>
          ),
        })
      )
      .then(setData(intitialData));
  };
  useEffect(() => {
    if (id) {
      getProduct(url).then((res) => setData(res));
    }
  }, []);

  return (
    <Box mt={8}>
      <form onSubmit={handleSubmit}>
        <FormControl isRequired>
          <FormLabel>Product Name</FormLabel>
          <Input
            type="text"
            id="10"
            placeholder="Enter Product Name"
            value={name}
            name="name"
            onChange={handleChange}
          />
          <FormLabel mt={4}>Brand Name</FormLabel>
          <Input
            type="text"
            id="11"
            placeholder="Enter Brand Name"
            value={brand}
            onChange={handleChange}
            name="brand"
          />
          <FormLabel mt={4}>Image URL</FormLabel>
          <Input
            type="url"
            id="12"
            placeholder="Enter Image Url"
            value={thumbnail}
            onChange={handleChange}
            name="thumbnail"
          />

          <FormLabel mt={4}>Current Price (Rs.)</FormLabel>
          <Input
            type="number"
            id="13"
            placeholder="Enter Product Price"
            value={current_price}
            name="current_price"
            onChange={handleChange}
          />

          <FormLabel mt={4}>Original Price</FormLabel>
          <Input
            id="14"
            type="number"
            placeholder="Enter Product MRP"
            name="original_price"
            value={original_price}
            onChange={handleChange}
          />

          <FormLabel mt={4}>Ratings</FormLabel>
          <Input
            type="number"
            id="15"
            placeholder="Enter User Ratings"
            value={rating}
            onChange={handleChange}
            name="rating"
          />
          <FormLabel mt={4}>Rating Counts</FormLabel>
          <Input
            id="16"
            type="number"
            placeholder="Enter User Ratings"
            value={rating_count}
            onChange={handleChange}
            name="rating_count"
          />

          <Button
            mb={2}
            mt={8}
            colorscheme="green"
            type="submit"
            isLoading={loading}
          >
            UPDATE IT!
          </Button>
        </FormControl>
      </form>
    </Box>
  );
};

export default EditProduct;
