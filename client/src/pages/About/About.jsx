import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AboutView from "./sub/AboutView/AboutView";
import Business from "./sub/Business/Business";
import WhoWeAre from "./sub/WhoWeAre/WhoWeAre";

function About({ agent, now }) {
  const navigate = useNavigate();
  useEffect(() => {
    const img = new Image();
    img.src = "/assets/about/whoweare/about-main.gif";
    return () => {};
  }, []);

  return (
    <main>
      {now === 0 ? (
        <WhoWeAre agent={agent} navigate={navigate} />
      ) : now === 1 ? (
        <AboutView agent={agent} navigate={navigate} />
      ) : (
        <Business agent={agent} navigate={navigate} />
      )}
    </main>
  );
}

export default About;
