
import React, { Suspense,useEffect} from "react";
//import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";
import "react-colorful/dist/index.css";
import { proxy} from "valtio";
//import { Canvas} from "react-three-fiber";
//import Picker from './components/picker';
//import Shoe from './components/Shoe';
import './customStyles/styles.css';
import airforce from './images/airforce.png';
import bgc from './images/background.jpg';
import blueShoe from './images/blueShoe.png';
import pinkShoe from  './images/pinkShoe.png';
import blackShoe from './images/blackShoe.png';
import whiteShoe from './images/whiteShoe.png';
import nikemovie from './images/nikemovie.mp4';
import ScrollReveal from 'scrollreveal'
import * as $ from 'jquery';
import AwesomeSlider from 'react-awesome-slider';
import coreStyles from 'react-awesome-slider/src/core/styles.scss';
import animationStyles from 'react-awesome-slider/src/styled/fold-out-animation/fold-out-animation.scss';
import TypeIt from "typeit";


const state = proxy({
  current: null,
  items: {
    laces: "#ffffff",
    mesh: "#ffffff",
    caps: "#ffffff",
    inner: "#ffffff",
    sole: "#ffffff",
    stripes: "#ffffff",
    band: "#ffffff",
    patch: "#ffffff",
  },
})


 const App =()=> {
  useEffect(() => {

    new TypeIt("#typed", {
      strings: "",
      waitUntilVisible: true,
    })
    .type("We create a FASHION", {delay: 100})
    .pause(300)
    .move(-0)
    .delete(7, {delay: 1000})
    .type("Future", {delay: 1000})
    .pause(300)
    .move(-0)
    .delete(6, {delay: 1000})
    .type("People", {delay: 1000})
    .go();


    setTimeout(() =>{
      ScrollReveal().reveal('.image', {
        scale:3,
        distance: '5px',
        easing: 'cubic-bezier(0.5, 0, 0, 1)',
        duration: 2500,
        delay: 0,
        useDelay: 'once',
        opacity: 0,
        rotate: {
          x: 0,
          y: 0,
          z: 0
         },    
    });


         ScrollReveal().reveal('.anim', {
           scale:3,
           distance: '100px',
           easing: 'cubic-bezier(0.5, 0, 0, 1)',
           duration: 1977,
           delay:   0,
           useDelay: 'once',
           opacity: 0,
           rotate: {
             x: 150,
             y: 30,
             z: 180
            },    
       });
     },0); });
     
  return (
  
     <div className="appContainer container-fluid">
         <div className="header">
             <div className="row first">
                 <div className="logoSquare col-12 col-sm-12 col-md-5 col-lg-4 col-xl-5 col-xxl-5">
                   <nav className="navbar mainNav ">
  
                        <a className="anim navbar-brand" href="/">
                          <img src="https://freesvg.org/img/1517505968.png" alt="" width="30" height="24" className="d-inline-block align-top"/>
                        ShoeBox
                        </a>

                    </nav>
                 </div>
         
             <div className="navSquare col-12 col-sm-12 col-md-7 col-lg-8 col-xl-7 col-xxl-7">
             <ul className="ui six item menu customUl">
              <li className="item customLi">
                  Products
              </li>
              <li className="item customLi">
                  Our Team
              </li>
              <li className="item customLi">
                  Blog
                  </li>
                  <li className=" customLi item">
                  Products
              </li>
              <li className="item customLi">
                  Our Team
              </li>
              <li className="item customLi">
                  Blog
                  </li>
                </ul>
              
               </div>
         </div>
       </div>

       <div className="row second">
       
         <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 mainContent"> 
        
          <h2 className="anim col-7 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4 ">Best <br></br> force</h2>
          <img className="image mainImage col-7 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-3" src={airforce} alt="airforce" ></img>
          <h3 className="anim col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4 ">Air<br></br> One</h3>
          
         </div>
         
       </div>
       <div className="row sizerBox">
                     
                     <div className="col-xxl-12">
                     <h1 className="bestsellers">Bestsellers</h1>

                 <div className=" col-11 col-sm-10 col-xxl-8">
                   <AwesomeSlider 
                   animation="foldOutAnimation"
                cssModule={[coreStyles, animationStyles]}>
                
              
                <div><img className="sliderImage"  src={pinkShoe}/></div> 
                <div><img className="sliderImage"  src={blackShoe}/></div> 
                <div><img className="sliderImage"  src={whiteShoe}/></div> 
                <div><img className="sliderImage"  src={blueShoe}/></div> 
 
              </AwesomeSlider>
              </div>
                  </div>
                  
      </div>
      <div className="shapesAdvert row">
          <div className="leftShape col-12">
             <div className="content contentStraigt col-2">
               <h1 id="typed" className="typed"></h1>
             </div>
      </div>
      <div className="rightShape">
      <div className="content contentVideo col-2">
   

      <video autoPlay  >
      <source src={nikemovie} type="video/ogg" />
      <source src={nikemovie} type="video/mp4" />
    </video>
      </div>

      
        </div>
      
      </div>
     
      </div>
  );
}
export default App;