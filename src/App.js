import { useEffect } from "react";
import Aos from "aos";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/layout/navbar/Navbar";
import Complain from "./pages/Complain";
import { complainsType } from "./fakers/data";
function App() {
  let lang = localStorage.getItem("lang")
    ? JSON.parse(localStorage.getItem("lang"))
    : "ar";
  // handle animation effect
  useEffect(() => {
    Aos.init({
      offset: 0,
      duration: 1200,
    });
  }, []);
  // handle scroll to top
  function ScrollToTopAfterChangePage() {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    return null;
  }
  // handle change direction when the language change
  useEffect(() => {
    document.documentElement.setAttribute("lang", lang);
    if (lang === "ar") {
      document.getElementsByTagName("body")[0].style.direction = "rtl";
    } else {
      document.getElementsByTagName("body")[0].style.direction = "ltr";
    }
  }, [lang]);
  return (
    <Router>
      <ScrollToTopAfterChangePage />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home data={complainsType} />} />
      </Routes>
      <Routes>
        <Route
          path="/complain/:id"
          element={<Complain data={complainsType} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
