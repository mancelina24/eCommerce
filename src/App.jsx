import { Switch } from "react-router-dom";
import "./App.css";
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
        <h1 class="text-5xl font-bold underline">Hello world!</h1>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/about" component={About} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/pages" component={Pages} />
        </Switch>
        <Footer />
      </PageContent>
    </>
  );
}

export default App;
