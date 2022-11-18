import { createStore  , Middleware , compose, applyMiddleware } from 'redux'
import root_reducer from './Reducer/Rootreducer'
import thunk from 'redux-thunk'


const myStore = createStore(
    root_reducer , {} , compose(
    applyMiddleware(thunk),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);


export default myStore;