import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/Main/Main";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { useEffect, useState } from "react";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
// import Extra from "./components/Extra/Extra";
import Portfolio from "./pages/Portfolio/Portfolio";
import Detail from "./pages/Detail/Detail";
import Showroom from "./pages/Showroom/Showroom";
function App() {
  const [agent, setAgent] = useState(undefined);
  const [now, setNow] = useState(0);
  useEffect(() => {
    function change(e) {
      if (
        e.target.innerWidth < 1366 &&
        e.target.innerWidth > 767 &&
        agent !== "tablet"
      ) {
        setAgent("tablet");
      }
      if (e.target.innerWidth < 768 && agent !== "mb") {
        setAgent("mb");
      }
      if (e.target.innerWidth > 1365 && agent !== "pc") {
        setAgent("pc");
      }
    }
    window.addEventListener("resize", change);

    return () => {
      window.removeEventListener("resize", change);
    };
  }, [agent]);
  useEffect(() => {
    const size = window.innerWidth;
    if (size < 1366 && size > 767) {
      setAgent("tablet");
    }
    if (size < 768) {
      setAgent("mb");
    }
    if (size > 1365) {
      setAgent("pc");
    }
    return () => {};
  }, []);

  return (
    <Router>
      <Header agent={agent} now={now} setNow={setNow} />
      <Routes>
        <Route path="/" element={<Main agent={agent} />} />
        <Route path="/about/*" element={<About agent={agent} now={now} />} />
        <Route path="/portfolio/*" element={<Portfolio agent={agent} />} />
        <Route
          path="/portfolio/detail/:id"
          element={<Detail agent={agent} />}
        />
        <Route path="/showroom/*" element={<Showroom agent={agent} />} />
        <Route path="/contact/*" element={<Contact agent={agent} />} />
      </Routes>
      <Footer agent={agent} />
    </Router>
  );
}

export default App;
