import './App.css';
import Footer from './componenet/Footer/Footer';
import Header from './componenet/header/Header';
import Product from './componenet/Product/Product';
import ProductHomePage from './componenet/Product/ProductHomePage';
import { Provider } from 'react-redux'
import myStore from './Store'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProductDetail from './componenet/ProductDetails/ProductDetail';
import Cart from './componenet/Cart/Cart';

function App() {
  return (

    <Provider store={myStore}> 
      <BrowserRouter>
        <div className="App">
          <Header />
          <Routes>
            <Route path='/' element={  <ProductHomePage />} />
            <Route path='/product/*' element={  <ProductDetail />} />
            <Route path='/cart' element={  <Cart />} />
            
            
    
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
