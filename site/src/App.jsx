import { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

// npm install react-router-dom
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
      case "/":
        return backgroundHome;
        break;
      case "/forum":
        return backgroundForum;
        break;
      case "/pull-counter":
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
        <Route path="/" element={<Main></Main>}></Route>

        <Route path="/forum" element={<Forum></Forum>}></Route>
        <Route
          path="/pull-counter"
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
