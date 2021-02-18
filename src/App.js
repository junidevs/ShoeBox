import React, { Suspense,useEffect,useRef,useState} from "react";
//import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";
import "react-colorful/dist/index.css";
import { proxy} from "valtio";
//import { Canvas} from "react-three-fiber";
//import Picker from './components/picker';
//import Shoe from './components/Shoe';
import './customStyles/styles.css';
import bgc from './images/background.jpg';
import blueShoe from './images/blueShoe.png';
import pinkShoe from  './images/pinkShoe.png';
import blackShoe from './images/blackShoe.png';
import whiteShoe from './images/whiteShoe.png';
import modelImage from './images/modeliMAGE.jpg';
import nikemovie from './images/nikemovie.mp4';
import bubbles from './images/bubbles.mp4';
import nikeMain from './images/nikeMain.mp4';
import ScrollReveal from 'scrollreveal'
import * as $ from 'jquery';
import AwesomeSlider from 'react-awesome-slider';
import coreStyles from 'react-awesome-slider/src/core/styles.scss';
import animationStyles from 'react-awesome-slider/src/styled/fold-out-animation/fold-out-animation.scss';
import TypeIt from "typeit";
import anime from 'animejs/lib/anime.es.js';
import Tilt from 'react-vanilla-tilt'
import MainBoard from './components/mainBoard';
import AnimeBackground from './components/animeBackground';
import Logo from './components/logo';
import logoImg from './images/logo.png';
import Navigation from './components/navigation';
import Products from './components/products';
import LoginContainer from './components/loginContainer';
import Footer from './components/footer';

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
  
  const buttonLogin=useRef();
  const buttonSignIn=useRef();

  useEffect(() => {
         buttonSignIn.current.children[0].style.opacity="0";
    const buttonSettings =()=>{
             buttonSignIn.current.addEventListener('mouseover',()=>{
               buttonSignIn.current.children[0].style.opacity="1";
               buttonSignIn.current.children[0].style.marginLeft="30px";
             });
             buttonSignIn.current.addEventListener('mouseout',()=>{
               buttonSignIn.current.children[0].style.opacity="0";
               buttonSignIn.current.children[0].style.marginLeft="0px";
             });
               buttonLogin.current.addEventListener('click',()=>{      
               buttonLogin.current.style.outline="none";     
             })
             buttonLogin.current.addEventListener('click',()=>{
               for(let i=0;i<=2;i++)
               {
                 buttonLogin.current.children[i].style.color="white";
               }
             })}
             buttonSettings();

          anime({
            targets: '.loginButton .signinButton',
            translateX:20,
            delay: anime.stagger(100, {start: 50}) 
          });

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
     },0); 
     return ()=>{

       document.getElementById('toggleButton').removeEventListener('mouseover',buttonSettings);
   }
    });
     
  return (
     <div className="appContainer container-fluid">
         <AnimeBackground source={nikeMain}  />
        <div className="header col-12">
             <div className="row first">
                 <div className="logoSquare col-12 col-sm-12 col-md-5 col-lg-4 col-xl-5 col-xxl-5">
                     <Logo source={logoImg} height="34px" width="35px" className="d-inline-block align-top" />
                 </div>
                   <Navigation /> 
              </div>
        </div>
          <div className="row second">  
             <MainBoard />
          </div>
            <div className="row sizerBox">
                <div className="col-xxl-8">
                         <h1 className="bestsellers">Bestsellers</h1>
                       <AwesomeSlider 
                           animation="foldOutAnimation"
                           cssModule={[coreStyles, animationStyles]}>
                             <div><img className="sliderImage"  src={pinkShoe}/></div> 
                             <div><img className="sliderImage"  src={blackShoe}/></div> 
                             <div><img className="sliderImage"  src={whiteShoe}/></div> 
                             <div><img className="sliderImage"  src={blueShoe}/></div> 
                       </AwesomeSlider>
                </div>              
           <div className="shapesAdvert row">    
               <div className="leftShape">
                      <div className="content">
                        <h1 id="typed" className="typed"></h1>
                      </div>
               </div>
         <div className="rightShape">
             <div className="content">
                  <video autoPlay muted loop  >
                    <source src={nikemovie} type="video/ogg" />
                    <source src={nikemovie} type="video/mp4" />
                  </video>
             </div>
        </div>
    </div>
            <p className="productList">Our top products</p>
              <Products modelImage={modelImage} />
              <LoginContainer buttonLogin={buttonLogin} buttonSignIn={buttonSignIn} />
              <Footer bubbles={bubbles} />
         </div>
      </div>
  );
}
export default App;