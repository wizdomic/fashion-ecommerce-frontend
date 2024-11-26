import "./App.css";
import Footer from "./customer/components/footer/Footer.jsx";
import Navigation from "./customer/components/navigation/Navigation.jsx";
import Product from "./customer/components/product/Product.jsx";
import HomePage from "./customer/pages/homePage/HomePage.jsx"
import ProductDetails from './customer/components/ProductDetails/ProductDetails.jsx'

function App() {
  return (
    <>
      <div className="">
        <div>
          <Navigation />
        </div>
        {/* <div><HomePage/></div> */}
        {/* <div><Product/></div> */}
        <ProductDetails/>

        <div><Footer/></div>
      </div>
    </>
  );
}

export default App;
