import {GET_PRODUCT,SEARCH_PRODUCT} from '../Reducer/Type' 
import axios from 'axios';


export const getProducts = () => (dispatch) =>{
  
   axios.get('/product/getProduct').then(
   

      res =>{
               console.log(res);  
               dispatch({
                  type:GET_PRODUCT,
                  payload: res.data
               })
                 
        }
   )

}


export const searchProduct = (id) => (dispatch) =>{
      
      axios.get(`/product/searchProduct/${id}`).then(
        res =>{
            
            dispatch({
              type:SEARCH_PRODUCT,
              payload:res.data
            })
        
        }
      )
} 

