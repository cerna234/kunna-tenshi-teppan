import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";
import ScrollToTop from "./helpers/scrollToTop";
import NavBarComp from "./components/NavBarComp";
import Home from "./pages/Home";
import About from "./pages/About";
import Booking from "./pages/Booking";
import Menu from "./pages/Menu";
import ErrorPage from "./pages/ErrorPage";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <NavBarComp />
      <ScrollToTop />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/menu" component={Menu} />
        <Route path="/booking" component={Booking} />
        <Route component={ErrorPage} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
