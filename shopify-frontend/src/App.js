import './App.css';
import Footer from './componenet/Footer/Footer';
import Header from './componenet/header/Header';
import Product from './componenet/Product/Product';
import ProductHomePage from './componenet/Product/ProductHomePage';

function App() {
  return (
    <div className="App">
       <Header />
       <ProductHomePage />
       <Footer />
    </div>
  );
}

export default App;
