import { Switch, Route } from "react-router-dom";
import "./App.css";
import "./index.css";
import PageContent from "./layout/PageContent";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Pages from "./pages/Pages";
import LoginForm from "./pages/LoginForm";
import Pricing from "./pages/Pricing";
import ProductDetail from "./pages/ProductDetail";
import Team from "./pages/Team";

function App() {
  return (
    <>
      <PageContent>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/shop" component={Shop} />
          <Route path="/about" component={About} />
          <Route path="/blog" component={Blog} />
          <Route path="/contact" component={Contact} />
          <Route path="/pages" component={Pages} />
          <Route path="/singup" component={LoginForm} />
          <Route path="/productdetail/:id" component={ProductDetail} />
          <Route path="/pricing" component={Pricing} />
          <Route path="/team" component={Team} />
        </Switch>
      </PageContent>
    </>
  );
}

export default App;
