import { useDisclosure, useToast } from "@chakra-ui/react";
import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CartContext } from "../../Context/CartContext";
import {
  getCartProduct,
  deleteCartProduct,
} from "../../Redux/Cart/cart.action";
// import { useNavigate } from 'react-router-dom'
import CartItems from "./Cart Item/CartItems";
import "./cart.css";
import Address from "./Cart Item/Address";

const Cart = () => {
  const { data } = useSelector((store) => store.cartReducer);
  const dispatch = useDispatch();
  const { cardProucts } = useContext(CartContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  // const navigate = useNavigate();

  const handleRemove = (id) => {
    dispatch(deleteCartProduct(id))
      .then(() => cardProucts())
      .then(() => dispatch(getCartProduct()));
    toast({
      title: "Item Removed!",
      description: "Item has been removed from the cart.",
      status: "success",
      duration: 6000,
      isClosable: true,
    });
  };

  // variable data such as price,quantity,discount etc.
  let CartItemQuqntity = data.length;
  let price1 = data.map((el) => el.original_price * el.quantity);

  let TotalOriginalPrice = price1.reduce((res, sum) => res + sum, 0);
  let totalOriginalPrice = TotalOriginalPrice.toLocaleString("en-IN");

  let price2 = data.map((el) => el.current_price * el.quantity);
  let TotalCurrentlPrice = price2.reduce((res, sum) => res + sum, 0);
  let totalCurrentlPrice = TotalCurrentlPrice.toLocaleString("en-IN");

  //discount price
  let discountPrice = TotalOriginalPrice - TotalCurrentlPrice;
  discountPrice = discountPrice.toLocaleString("en-IN");

  useEffect(() => {
    if (data.length === 0) {
      dispatch(getCartProduct());
    }
  }, [data]);
  useEffect(() => {
    dispatch(getCartProduct());
  }, []);
  return (
    <div className="cart__container__main">
      <div className="cart__container__product">
        <div id="cart__box1">
          <div>
            <p href="/#">ClickCart </p>
          </div>
          <div>
            <p href="/#">Grocery</p>
          </div>
        </div>

        <div id="cart__box2">
          <div>
            <p>From Saved Address</p>
          </div>
          <div>
            <button>Enter Delevery Pincode</button>
          </div>
        </div>

        <div className="cart__components__container">
          {data.map((item) => (
            <CartItems key={item.id} {...item} handleRemove={handleRemove} />
          ))}
          <div className="place__order">
            <button onClick={onOpen}>PLACE ORDER</button>
          </div>
        </div>
      </div>
      <div className="cart__container__price">
        <div>PRICE DETAILS</div>
        <div className="cart_price">
          <div>
            <p>Price {CartItemQuqntity} items</p>
            <p>₹ {totalOriginalPrice}</p>
          </div>
          <div>
            <p>Discount</p>
            <p>− ₹ {discountPrice}</p>
          </div>
          <div>
            <p>Delivery Charges</p>
            <p>Free</p>
          </div>
          <div>
            <p>Total Amount</p>
            <p>₹ {totalCurrentlPrice}</p>
          </div>
          <div>
            <p>You will save ₹ {discountPrice} on this order</p>
          </div>
        </div>
      </div>
      {isOpen && <Address isOpen={isOpen} onOpen={onOpen} onClose={onClose} />}
    </div>
  );
};

export default Cart;
