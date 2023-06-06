import React from "react";
import "./Project.css";
import Project1 from './img/project 1.png';
import Project2 from './img/gym.jpg';
import Project3 from './img/food.png';
import Project4 from './img/pizza.png';
import Project5 from './img/gold.png';
import Project6 from "./img/DRUM.png";

function Project() {
  return (
    <div className="project component__space" id="Portfolio">
      <div className="heading">
        <h1 className="heading">My Mini Projects</h1>
        {/* <p className="heading p__color">
          There are many variations of passages of Lorem Ipsum available,
        </p> */}
        {/* <p className="heading p__color">
          but the majority have suffered alteration.
        </p> */}
      </div>
       <div className="container">
           <div className="row">
             
             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project1} alt="" className="project__img" />
                           

                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     {/* <h5 className="project__text">REACT PROJECT</h5> */}
                     <h4 className="project__text">Language Translator</h4>
                     {/* <a href="#" className="project__btn"  >view details</a> */}
                     {/* <button className="project-btn"> view details</button> */}
                     <a href="https://github.com/Urvashi102002/language-translator"><button className="project__btn"> View Details</button></a>
                    
    
                     

                     </div>
                 </div>
             </div>


             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project2} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     {/* <h5 className="project__text">Development</h5> */}
                     <h4 className="project__text">GYM Website</h4>
                     {/* <a href="#" className="project__btn">View Details</a> */}
                     <a href="https://github.com/Urvashi102002/Gym-website"><button className="project__btn"> View Details</button></a>
                     </div>
                 </div>

             </div>


             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project3} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">Development</h5>
                     <h4 className="project__text">Food Delivery website</h4>
                     {/* <a href="#" className="project__btn">View Details</a> */}
                     <a href="https://github.com/Urvashi102002/food-delivery"><button className="project__btn"> View Details</button></a>
                     </div>
                 </div>
             </div>


             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project4} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     {/* <h5 className="project__text">Development</h5> */}
                     <h4 className="project__text">UX-Design App</h4> <style color="black"></style>
                     {/* <a href="#" className="project__btn">View Details</a> */}
                     <a href="https://www.figma.com/proto/hEKNlFoKXdXmruVbHvaSmL/Google-UX-Design-Certificate---Zia's-Pizza-high-fidelity-prototype?node-id=1-921&starting-point-node-id=1%3A4"><button className="project__btn"> View Details</button></a>
                     </div>
                 </div>
             </div>


             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project5} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     {/* <h5 className="project__text">Development</h5> */}
                     <h4 className="project__text">UX design website</h4>
                     {/* <a href="#" className="project__btn">View Details</a> */}
                     <a href="https://xd.adobe.com/view/dd69676c-fbdf-4487-b3ac-7bfeb51815e5-883a/"><button className="project__btn"> View Details</button></a>
                     </div>
                 </div>
             </div>


             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project6} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     {/* <h5 className="project__text">Development</h5> */}
                     <h4 className="project__text">Drum kit website</h4>
                     {/* <a href="#" className="project__btn">View Details</a> */}
                     <a href="https://github.com/Urvashi102002/drum-website"> <button className="project__btn">View Details</button></a>
                     
                     </div>
                 </div>
             </div>
             
             {/* <div className="view__more__btn d__flex align__items__center justify__content__center pxy__30">
             <button className="view__more pointer btn">View more</button>
             </div> */}

           </div>
       </div>
    </div>
  );
}

export default Project;