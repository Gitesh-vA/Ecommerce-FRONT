import Header from './Header'; //Include Header
import Footer from './Footer';
import Home from './Home'
import About from './About'
import Products from './Products'
import Contact from './Contact'
import SingleProduct from './SingleProduct'
import ShoppingCart from './ShoppingCart';
import SignUp from './SignUp';
import SignIn from './SignIn';

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      
        <BrowserRouter>
          <Header></Header>
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/single-product" element={<SingleProduct />} />
            <Route path="/shopping-cart" element={<ShoppingCart></ShoppingCart>} />
            <Route path="/signup" element={<SignUp></SignUp>} />
            <Route path="/Signin" element={<SignIn></SignIn>} />
            </Routes>
            <Footer></Footer>
        </BrowserRouter>
     
    </div>
  );
}
export default App;