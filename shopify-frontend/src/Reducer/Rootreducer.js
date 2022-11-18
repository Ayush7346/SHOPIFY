import { combineReducers } from "redux";
import productReducer from './ProductReducer';


const root_reducer = combineReducers(
{ productReducer : productReducer
}
)

export default root_reducer;