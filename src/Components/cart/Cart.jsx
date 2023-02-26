import { useToast } from '@chakra-ui/react'
// import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { deleteItemFromCart, getCartProducts } from '../../Redux/cart/action'
import CartItems from './Cart Item/CartItems'
import "./cart.css"




const Cart = () => {
  // const [data,setData] = useState([])
  const { loading, products, error } = useSelector( (store) => store.cartReducer );
  const toast = useToast();
  // const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleRemove = async (id) => {
   await dispatch(deleteItemFromCart(id));
    dispatch(getCartProducts())
    toast({
      title: "Item Removed!",
      description: "Item has been removed from the cart.",
      status: "success",
      duration: 6000,
      isClosable: true,
    });
  };

 
  useEffect(()=>{
    dispatch(getCartProducts())
  },[])

//  console.log(data)
// variable data such as price,quantity,discount etc.
 let CartItemQuqntity = products.length
 let price1 = products.map((el) => el.original_price)
 let TotalOriginalPrice = price1.reduce((res,sum)=> res+sum,0)
 let totalOriginalPrice = TotalOriginalPrice.toLocaleString('en-IN')
//  console.log(totalOriginalPrice)

let price2 = products.map((el) => el.current_price)
 let TotalCurrentlPrice = price2.reduce((res,sum)=> res+sum,0)
 let totalCurrentlPrice=TotalCurrentlPrice.toLocaleString('en-IN')

 //discount price
 let discountPrice = TotalOriginalPrice-TotalCurrentlPrice
 discountPrice =discountPrice.toLocaleString('en-IN')
//  -----------------


  return (
    <div className="cart__container__main">
      <div className='cart__container__product'>
         <div id="cart__box1">
             <div><p href="/#">ClickCart ({CartItemQuqntity})</p></div>
             <div><p href='/#'>Grocery</p></div>
         </div>

         <div id="cart__box2">
             <div><p>From Saved Address</p></div>
             <div><button>Enter Delevery Pincode</button></div>
         </div>

         
         <div className='cart__components__container'>
             {products.map((item) => <CartItems
              key = {item.id}
               {...item} 
               handleRemove={handleRemove} 
               />
               )}
         <div className='place__order'>
             <button>PLACE ORDER</button>
         </div>
         </div>
      </div>
      <div className='cart__container__price'>
         <div>PRICE DETAILS</div>
         <div className="cart_price">
            <div>
              <p>Price ({CartItemQuqntity} items)</p>
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
    </div>
  )
}

export default Cart