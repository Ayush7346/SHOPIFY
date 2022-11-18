import { GET_PRODUCT ,SEARCH_PRODUCT} from './Type.js';

const initialState = {
 product:[] , productdetails:{}
}

const productReducer = (state = initialState , action)=>{
     
     switch(action.type){
          
          case GET_PRODUCT:
                return {
                   ...state , product : action.payload
                }
                
           case SEARCH_PRODUCT:
           return{
               ...state,productdetails : action.payload
           }
          default:
          
            return state;
          
     }

}






export default productReducer;
