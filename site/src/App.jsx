import { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Forum from "./pages/Forum";
import PullCounter from "./pages/PullCounter";
import NotFonund from "./pages/NotFound";
import Main from "./pages/Main";

import backgroundHome from "./assets/pictures/26 event/background.jpg";
import backgroundPull from "./assets/pictures/26 event/pull.jpg";
import backgroundForum from "./assets/pictures/26 event/Back.jpg";

const AppLayout = () => {
  const location = useLocation();
  const getBackground = () => {
    switch (location.pathname) {
      case "/Main":
        return backgroundHome;
        break;
      case "/Forum":
        return backgroundForum;
        break;
      case "/PullCounter":
        return backgroundPull;
        break;
      default:
        return "none";
    }
  };
  useEffect(() => {
    document.body.style.backgroundImage = `url(${getBackground()})`;
    document.body.style.backgroundSize = `cover`;
    document.body.style.backgroundRepeat = `no-repeat`;
    document.body.style.backgroundPosition = `center center`;
  }, [location]);
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/Main" element={<Main></Main>}></Route>

        <Route path="/Forum" element={<Forum></Forum>}></Route>
        <Route
          path="/PullCounter"
          element={<PullCounter></PullCounter>}
        ></Route>
        <Route path="/*" element={<NotFonund></NotFonund>}></Route>
      </Routes>
    </>
  );
};

function App() {
  return (
    <>
      <Router>
        <AppLayout></AppLayout>
      </Router>

      <Footer></Footer>
    </>
  );
}

export default App;
