
import {CART_PRODUCT} from '../Reducer/Type'
import axios from 'axios';


export const fetchCart = (id) => (dispatch) =>{
       
     
     //id --> cart id    

       axios.get(`/cart/fetchCart/${id}`).then(
          
          res =>{       console.log(res)
          
                 dispatch({
                  
                  type:CART_PRODUCT,
                  payload: res.data
                  
                 })
          }
       
       )
       


}