import {CART_PRODUCT} from './Type';

const initialstate = {
  cart:"cart_details_id",
  cartdetail:[]
}
 
  
export const cartReducer = (state = initialstate , action) => {
         
         switch(action.type){
             
             case CART_PRODUCT:
               return{
                 ...state , cartdetail:action.payload.product
               }
               
              default :
               return state;
         
         }

}