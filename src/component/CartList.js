import { useState, useEffect } from 'react';
import '../App.css';
import '../images/css/cart.css';



function CartList({cart}) {

    const [CART,setCART] = useState([])
    useEffect(() => {
        setCART(cart)
    },[cart])

    return (
        <div>
            {
                CART?.map((cartItem,cartindex) => {
                    return (
                        <div className='cart'>
                          <>  <img src={cartItem.url} width={40}/> 
                            <span1> <b> {cartItem.name} </b></span1></>
                            <button 
                             onClick={() => {
                                const _CART = CART.map((item,index) =>  {
                                    return cartindex === index ? {...item, quantity: item.quantity>0 ? item.quantity-1 : 0} : item
                                })
                                setCART(_CART)
                             }}
                              >-</button>
                            <span> <b>{cartItem.quantity}</b> </span>
                            <button 
                                onClick={() => {
                                    const _CART = CART.map((item,index) => {
                                        return cartindex === index ? {...item,quantity: item.quantity+1} : item
                                    })
                                    setCART(_CART)
                                }}
                                >
                                +</button>
                            <span2> <i class="fa-solid fa-indian-rupee-sign "></i> <b>{ cartItem.price*cartItem.quantity}</b></span2>
        
                        </div>
                    )
                })
            }

         <div className='total'>  <span>  Total<i class="fa-solid fa-indian-rupee-sign "></i></span>
                {
                     
                    CART.map(item => item.price*item.quantity).reduce((total,value) =>  total+value,0)
                 
                }
                
            </div>
        </div>
    )
}

export default CartList