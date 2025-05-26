import React from "react";
import { useNavigate } from "react-router-dom";
import { Animate } from "react-simple-animate";
import { handleCVDownload } from "../../utils.js/utils";

import "./styles.scss";

const Home = () => {
  const navigate = useNavigate();

  // const handleNavigateToContactMePage = () => {
  //   navigate("/contact");
  // };

  return (
    <section id="home" className="home">
      <div className="home__text-wrapper">
        <h1>
          Hello, I'm <span className="home__text-wrapper__text-decoration">Mahendra Jella</span>
          <br />
          Full stack developer
        </h1>
      </div>
      <Animate
        play
        duration={1.5}
        delay={1}
        start={{
          transform: "translateY(550px)",
        }}
        end={{
          transform: "translatex(0px)",
        }}
      >
        <div className="home__contact-me">
          {/* <button onClick={handleNavigateToContactMePage}>Hire Me</button> */}
          <button className="home__contact-me__download-btn"  onClick={handleCVDownload}>Download CV</button>
        </div>

      </Animate>
    </section>
  );
};
export default Home;
