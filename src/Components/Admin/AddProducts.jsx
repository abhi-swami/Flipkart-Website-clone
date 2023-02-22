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
import { useNavigate } from "react-router-dom";

const intitialData = {
  title: "",
  brand: "",
  img: "",
  mrp: "",
  price: "",
  rating: "",
};

const AddProducts = () => {
  const [data, setData] = useState(intitialData);
  const imgref = useRef();
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  // const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    const val =
      name === "mrp" || name === "price" || name === "rating"
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
    // console.log(imageurl);
    setData({ ...data, img: imageurl });
    setLoading(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      data.title === "" ||
      data.brand === "" ||
      data.img === "" ||
      data.price === "" ||
      data.rating === "" ||
      data.mrp === ""
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
    await fetch("http://localhost:8080/tablets", {
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
            placeholder="Enter Product Name"
            value={data.title}
            name="title"
            onChange={handleChange}
          />
          <FormLabel mt={4}>Brand Name</FormLabel>
          <Input
            type="text"
            placeholder="Enter Brand Name"
            value={data.brand}
            onChange={handleChange}
            name="brand"
          />
          {/* <FormLabel mt={4}>Brand Name</FormLabel>
          <Input
            type="text"
            placeholder="Enter Image Url"
            value={data.img}
            onChange={handleChange}
            name = "img"
          /> */}

          <FormLabel mt={4}>Product Image</FormLabel>
          <Input type="file" onChange={handleImage} ref={imgref} />

          <FormLabel mt={4}>Product Price (Rs.)</FormLabel>
          <Input
            type="number"
            placeholder="Enter Product Price"
            value={data.price}
            name="price"
            onChange={handleChange}
          />

          <FormLabel mt={4}>Product MRP</FormLabel>
          <Input
            type="number"
            placeholder="Enter Product MRP"
            name="mrp"
            value={data.mrp}
            onChange={handleChange}
          />

          <FormLabel mt={4}>Ratings</FormLabel>
          <Input
            type="number"
            placeholder="Enter User Ratings"
            value={data.rating}
            onChange={handleChange}
            name="rating"
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
