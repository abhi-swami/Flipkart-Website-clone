
import "./cartItems.css"




const CartItems = ({name,brand,current_price,original_price,thumbnail,id,handleRemove}) => {

  
  return (
   
    <div className='cart__main'>
        <div>
            <img src={thumbnail} alt="pic" />
        </div>
        <div>
            <p>{name}</p>
            <p>{brand}</p>
            <p>Seller: IWQNBecommerce
                <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
                 alt="logo" height="3%" width="18%"/></p>
             <div id="price">
                <p><s>₹{original_price.toLocaleString('en-IN')}</s></p>
                <p><b>₹{current_price.toLocaleString('en-IN')}</b></p>
                <p>{Math.floor((1-(current_price/original_price))*100)}% Off</p>
             </div>
             <p>Out of Stock</p>
             <div id="btn__container">
                <button>SAVE FOR LATER</button>
                <button onClick={()=>handleRemove(id)} >REMOVE</button>
             </div>
        </div>
        <div></div>
    </div>
    
  )
}

export default CartItems