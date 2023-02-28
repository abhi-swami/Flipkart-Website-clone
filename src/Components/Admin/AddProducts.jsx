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
import React, { useRef, useState } from "react";
import { CheckCircleIcon, WarningIcon } from "@chakra-ui/icons";

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

const AddProducts = () => {
  const [data, setData] = useState(intitialData);
  const imgref = useRef();
  const [loading, setLoading] = useState(false);
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

  const handleImage = async () => {
    setLoading(true);
    let form = new FormData();
    form.append("image", imgref.current.files[0]);
    let res = await fetch(
      "https://api.imgbb.com/1/upload?expiration=600&key=0dc66cccd3a39544a0bdbcace49e0027",
      {
        method: "POST",
        body: form,
      }
    );
    let acc_res = await res.json();
    const imageurl = acc_res.data.display_url;
    setData({ ...data, thumbnail: imageurl });
    setLoading(false);
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
          <Flex color="white" border="4px solid white" p={"10px"} bgColor="red">
            <WarningIcon w={30} h={30} />
            <Text size="lg" ml="15px">
              Add Product Image
            </Text>
          </Flex>
        ),
      });
      return;
    }
    toast({
      position: "top-left",
      render: () => (
        <Flex
          color="white"
          border="4px solid white"
          p={"10px"}
          bgColor="green.400"
        >
          <CheckCircleIcon w={30} h={30} />
          <Text size="lg" ml="15px">
            Product has been added!!{" "}
          </Text>
        </Flex>
      ),
    });
    await fetch("https://click-cart-api.onrender.com/testing", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(setData(intitialData));
    // navigate("/")
  };

  return (
    <Box mt={8}>
      <form onSubmit={handleSubmit}>
        <FormControl isRequired>
          <FormLabel>Product Name</FormLabel>
          <Input
            type="text"
            id="1"
            placeholder="Enter Product Name"
            value={name}
            name="name"
            onChange={handleChange}
          />
          <FormLabel mt={4}>Brand Name</FormLabel>
          <Input
            id="2"
            type="text"
            placeholder="Enter Brand Name"
            value={brand}
            onChange={handleChange}
            name="brand"
          />
          {/* <FormLabel mt={4}>Brand Name</FormLabel>
          <Input
            type="text"
            placeholder="Enter Image Url"
            value={img}
            onChange={handleChange}
            name = "img"
          /> */}

          <FormLabel mt={4}>Product Image</FormLabel>
          <Input id="3" type="file" onChange={handleImage} ref={imgref} />

          <FormLabel mt={4}>Product Price (Rs.)</FormLabel>
          <Input
            id="4"
            type="number"
            placeholder="Enter Product Price"
            value={current_price}
            name="current_price"
            onChange={handleChange}
          />

          <FormLabel mt={4}>Product MRP</FormLabel>
          <Input
            id="5"
            type="number"
            placeholder="Enter Product MRP"
            name="original_price"
            value={original_price}
            onChange={handleChange}
          />

          <FormLabel mt={4}>Ratings</FormLabel>
          <Input
            id="6"
            type="number"
            placeholder="Enter User Ratings"
            value={rating}
            onChange={handleChange}
            name="rating"
          />
          <FormLabel mt={4}>User Ratings</FormLabel>
          <Input
            id="1"
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
            Add New Product
          </Button>
        </FormControl>
      </form>
    </Box>
  );
};

export default AddProducts;
