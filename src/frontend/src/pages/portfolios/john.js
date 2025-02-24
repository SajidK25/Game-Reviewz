import "../../styles/John.scss";
import {useEffect} from "react";
import {NavLink} from "react-router-dom";
import John from "../../assets/john.jpg";
import Java_logo from "../../assets/Java_logo.png";
import HTML_logo from "../../assets/HTML5_logo.png";
import CSS_logo from "../../assets/CSS3_logo.png";
import JavaScript_logo from "../../assets/javascript.png";
import SQL_logo from "../../assets/sql.png";
import React_logo from "../../assets/React_logo.png";


export default function JohnPage() {

    useEffect(() => {
        const nav = document.getElementById("nav");
        nav.style.display = "none";

        return () => {
            nav.style.display = "";
        };
    }, []);

  return (
    <div>
        <div className={"photo"}>
      <nav className="johnNav">
          <div className="johnNavItems">
              <div className={"johnName"}>
                  <span>John Beltran</span>
              </div>
              <ul>
                  <div className={"navContainer"}>
                  <li>
                      <a href="#johnAbout">About Me</a>
                  </li>
                  <li>
                      <a href="#johnSkills">Skills</a>
                  </li>
                  <li>
                      <a href="#johnResume">Resume</a>
                  </li>
                  <li className={"lastLi"}>
                      <a href="#johnContact">Contact</a>
                  </li>
                  </div>
            </ul>
          </div>
      </nav>
      <div className={"container"}>
        <div className={"profileContainer"}>
          <div className={"profileIntro"}>
            <h1 className={"greeting"}>Hey there!</h1>
            <p className={"greetingPara"}>
              I'm John and I am a front end developer who is proficient in Java,
              React, HTML, and CSS. I am a recent graduate with a Bachelor's
              degree in Computer Science, and not only that I have have earned
              multiple certifications from LinkedIn, and freeCodeCamp.org. Even
              still, there is still so much to learn so I hope to improve my
              skills even more to create the best results possible.
            </p>
          </div>
          <div className={"profilePhoto"}>
              <img src={John}/>
          </div>
        </div>
      </div>
        </div>
        <div className={"defaultContainer"}>
            <div className={"skills"}>
                <h1>
                    Skills I've Learned
                </h1>
            </div>
            <div className={"logos"}>
                <img src={Java_logo} alt={"Java Logo"} />
                <img src={HTML_logo} alt={"HTML Logo"} />
                <img src={CSS_logo} alt={"CSS Logo"} />
                <img src={JavaScript_logo} alt="JavaScript Logo" />
                <img src={SQL_logo} alt="SQL Logo" />
                <img src={React_logo} alt={"React Logo"} />
            </div>
        </div>
        <br/>
    </div>
  );
}
