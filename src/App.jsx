import { Switch, Route } from "react-router-dom";
import { useEffect } from "react";
import "./App.css";
import "./index.css";
import PageContent from "./layout/PageContent";

import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Pages from "./pages/Pages";
import Pricing from "./pages/Pricing";
import ProductDetail from "./pages/ProductDetail";
import Team from "./pages/Team";
import Products from "./pages/Products";
import SignupLogin from "./pages/SignupLogin";
import { useDispatch, useSelector } from "react-redux";
import {
  checkAuthState,
} from "./store/actions/authActions";
import ShoppingCart from "./pages/ShoppingCart";
import PaymentPage from "./pages/PaymentPage";
import OrderConfirmationPage from "./pages/OrderConfirmationPage";



function App() {
  const dispatch = useDispatch();
  // const history = useHistory();
  const user = useSelector((state) => state.client.user);
  useEffect(() => {
    dispatch(checkAuthState());
  }, [dispatch,user]);



  return (
    <>
    <PageContent>
      <Switch>
        <Route path="/signup" component={SignupLogin} />
        <Route exact path="/" component={Home} />
        <Route exact path="/shop" component={Shop} />{" "}
        {/* Order matters in React Router v5 - more specific routes should come first */}
        <Route path="/shop/:gender/:categoryName/:categoryId/:productNameSlug/:productId" component={ProductDetail} />
        <Route path="/shop/:gender/:categoryName/:categoryId" component={Shop} />{" "}
        <Route path="/about" component={About} />
        <Route path="/blog" component={Blog} />
        <Route path="/contact" component={Contact} />
        <Route path="/pages" component={Pages} />
        <Route path="/products" component={Products} />
        <Route path="/pricing" component={Pricing} />
        <Route path="/team" component={Team} />
        <Route path="/cart" component={ShoppingCart} />
        <Route path="/payment" component={PaymentPage} />
        <Route path="/order-confirmation" component={OrderConfirmationPage} />
      </Switch>
    </PageContent>
  </>
  );
}

export default App;
