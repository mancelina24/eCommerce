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

function App() {
  return (
    <>
      <PageContent>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/shop" component={Shop} />
          <Route path="/about" component={About} />
          <Route path="/blog" component={Blog} />
          <Route path="/contact" component={Contact} />
          <Route path="/pages" component={Pages} />
        </Switch>
        <Footer />
      </PageContent>
    </>
  );
}

export default App;
