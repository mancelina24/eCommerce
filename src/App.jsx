import { Switch, Route, useHistory } from "react-router-dom";
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
  logoutUser,
  verifyToken,
} from "./store/actions/authActions";
import ShoppingCart from "./pages/ShoppingCart";
import PaymentPage from "./pages/PaymentPage";
import OrderConfirmationPage from "./pages/OrderConfirmationPage";
import ShopProducts from "./compenents/shop/ShopPorducts";

function App() {
  const dispatch = useDispatch();
  // const history = useHistory();

  useEffect(() => {
    dispatch(checkAuthState());
  }, [dispatch]);

  return (
    <>
      <PageContent>
        <Switch>
          <Route path="/signup" component={SignupLogin} />
          <Route exact path="/" component={Home} />
          <Route path="/shop" component={Shop} />
          <Route
            path="/shop/:gender/:categoryName/:categoryId"
            render={(props) => <ShopProducts {...props} />}
          />
          <Route path="/about" component={About} />
          <Route path="/blog" component={Blog} />
          <Route path="/contact" component={Contact} />
          <Route path="/pages" component={Pages} />
          <Route path="/products" component={Products} />
          <Route path="/productdetail/:id" component={ProductDetail} />
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
