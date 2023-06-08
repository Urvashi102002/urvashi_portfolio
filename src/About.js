import React from "react";
import "./About.css";
import aboutImg from "./img/urvashi.jpg";
function About() {
  //  Up To Top Btn
    window.addEventListener("scroll", function(){
      const upToTop = document.querySelector("a.bottom__to__top");
       upToTop.classList.toggle("active", window.scrollY > 0)
    });
  return (
    <div className="about component__space" id="About">
      <div className="container">
        <div className="row">
          <div className="col__2">
            /* <img src={aboutImg} alt="" className="about__img" /> */
          </div>
          <div className="col__2">
            <h1 className="about__heading">About Me</h1>
            <div className="about__meta">
              <p className="about__text p__color">
              I am a Third Year "B.Tech CSE Student" at VIT, BHOPAL.
               I interested in Competitive coding, web Development, UI/UX Designer, and a quick learner easily adapt to new technologies.
              </p>
              <p className="about__text p__color">
                I love to create solutions to real world problems.
                I am always exploring new domains and trying to learn new technologies.
              </p>


              <p className="about__text p__color">
               I am certified for  professional UI/UX Designer from Google.</p>
               <p className="about__text p__color">
               I am certified for Bits and Bytes for Computer Networking by Coursera. </p>
               <p className="about__text p__color">
               I am certified for React.js essential training by Linkedin </p>
            <p className="about__text p__color">
               I also completed 2 month internship in web developement domain </p>

               
             
              <div className="about__button d__flex align__items__center">
                <a href="#">
                  {/* <button className="about btn pointer">RESUME</button> */}
                  <a href="https://docs.google.com/document/d/1SDNIQuvRgJu-y--QNlMWkdJKgH903Wn2/edit?usp=share_link&ouid=117364868130934630060&rtpof=true&sd=true"><button className="about btn pointer"> RESUME</button></a>
                </a>
                {/* <a href="#">
                  <button className="about btn pointer">Hire Me</button>
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* UP TO TOP BTN */}
      <div className="up__to__top__btn">
        <a href="#" className="bottom__to__top">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-chevron-up white"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
          />
        </svg>
        </a>
      </div>
    </div>
  );
}

export default About;
