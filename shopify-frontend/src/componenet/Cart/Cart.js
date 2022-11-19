import React , {useEffect ,useState} from 'react'
import './Cart.css'
import {connect} from 'react-redux'
import {fetchCart} from '../../Action/CartAction'
import CartTile from './CartTile';




function Cart({cart_reducer, fetchCart}) {

  
  const [quantity , setQuantity] =  useState(1);
  
  const handleQuantity = (x) => {
       setQuantity(x);
  }
  
useEffect(
        () =>{
        
    
            // const arr = location.pathname.split('/');
            const prd_id = "6376085d30fe3cfabe1d4761"; 
            console.log(prd_id)
            fetchCart(prd_id);
        
        }

,[])

const totalPrice = () =>{
     
     let val = 0;
     cart_reducer.cartdetail.map(e =>(
          
          val = val + e.price
     ))
     
     console.log(val);
     
      return val;
}



    return (
        <div>
        

            {cart_reducer.cartdetail.map(e => (

             <CartTile name = {e.name} price={e.price}
               desc={e.desc} picture_url = {e.picture_url} 
             />

            ))}


            <div>
                <div className='container total-cart-value'>


                    <div className='details-prd my-4'>

                        <div
                            style={{ fontWeight: "bolder", fontSize: "23px" }}
                        >Shipping</div>
                        <div>FREE</div>


                    </div>

                    <hr />

                    <div className='details-prd my-4'>
                        <div
                            style={{ fontWeight: "bolder", fontSize: "23px" }}
                        >Price</div>
                        <div>{totalPrice()}</div>
                    </div>

                    <hr />

                    <button className='btn btn-primary'>Check Out</button>


                </div>



            </div>

        </div >
    )
}

const mapStateToProps = (state) =>({
   
   cart_reducer : state.cartReducer

})

export default  connect(mapStateToProps , {fetchCart})  (Cart);