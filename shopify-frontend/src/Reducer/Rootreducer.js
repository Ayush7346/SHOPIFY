import { combineReducers } from "redux";
import productReducer from './ProductReducer';
import { cartReducer } from "./CartReducer";

const root_reducer = combineReducers(
{ productReducer : productReducer,
    cartReducer:cartReducer
}
)

export default root_reducer;