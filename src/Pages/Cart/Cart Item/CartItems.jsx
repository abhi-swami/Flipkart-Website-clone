import {
  Badge,
  Box,
  Button,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { patchCartProduct } from "../../../Redux/Cart/cart.action";
import "./cartItems.css";

const CartItems = ({
  name,
  brand,
  current_price,
  original_price,
  thumbnail,
  id,
  quantity,
  handleRemove,
}) => {
  const [qty, setQty] = useState(quantity);
  const dispatch = useDispatch();
  const handleQunatity = (num) => {
    setQty(num);
  };
  useEffect(() => {
    dispatch(patchCartProduct(id, Number(qty)));
  }, [qty]);

  return (
    <Box className="cart__main">
      <Box>
        <img src={thumbnail} alt="pic" />
      </Box>
      <Box mt={10}>
        <Text textAlign={"left"} fontWeight={"medium"}>
          {brand}
        </Text>
        <Text textAlign={"left"} py={2}>
          {name}
        </Text>

        <Box id="price">
          <Text fontSize={"15px"}>
            <b>₹{current_price.toLocaleString("en-IN")}</b>
          </Text>
          <Text>
            <s>₹{original_price.toLocaleString("en-IN")}</s>
          </Text>
          <Text>
            {Math.floor((1 - current_price / original_price) * 100)}% Off
          </Text>
        </Box>
        <Box className="btn__container">
          <Button variant={"ghost"}>Select Quantity</Button>
          <Badge px={2} py={1} bgColor={"white"} fontWeight={"400"}>
            <NumberInput
              focusBorderColor="rgb(41,116,242)"
              defaultValue={1}
              max={10}
              min={1}
              keepWithinRange={true}
              clampValueOnBlur={true}
              maxW="100px"
              mr="2rem"
              value={qty}
              onChange={handleQunatity}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </Badge>
        </Box>

        <Box className="btn__container">
          <Button>SAVE FOR LATER</Button>
          <Button onClick={() => handleRemove(id)}>REMOVE</Button>
        </Box>
      </Box>
      <Box></Box>
    </Box>
  );
};

export default CartItems;
