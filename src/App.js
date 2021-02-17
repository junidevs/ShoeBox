
import React, { Suspense,useEffect,useRef,useState} from "react";
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
      })
    }
         buttonSettings();

          anime({
            targets: '.loginButton .signinButton',
            translateX:20,
            delay: anime.stagger(100, {start: 50}) // delay starts at 500ms then increase by 100ms for each elements.
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
       console.log('poza elementem');
       document.getElementById('toggleButton').removeEventListener('mouseover',buttonSettings);
   }
    });
     
  return (
  
     <div className="appContainer container-fluid">
       <video className="videoBackground" src={nikeMain} autoPlay loop muted></video>
         <div className="header col-12">
             <div className="row first">
                 <div className="logoSquare col-12 col-sm-12 col-md-5 col-lg-4 col-xl-5 col-xxl-5">
                   <nav className="navbar mainNav ">
  
                        <a className="anim navbar-brand" href="/">
                          <img src="https://freesvg.org/img/1517505968.png" alt="" width="30" height="24" className="d-inline-block align-top"/>
                        ShoeBoxxx
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
         <div className="col-12 adwertBox">
      
             <div className="addvertItem col-12 col-sm-8 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
               
               <img className="adwertImage" alt="model"  src={modelImage}/>
           
               <div className="detailBox">
               <h5 className="addPrice">Nike T-shirt White</h5>
               <h5 className="addPrice">Sizes: L M XXL</h5>
               <h5 className="addPrice">Colors : Red White</h5>
            
                <button className="buttonItem">Buy NOW</button>
                </div>
               </div>

               <div className="addvertItem col-12 col-sm-8 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
               <img className="adwertImage" alt="model"  src={modelImage}/>
           
               <div className="detailBox">
               <h5 className="addPrice">Nike T-shirt White</h5>
               <h5 className="addPrice">Sizes: L M XXL</h5>
               <h5 className="addPrice">Colors : Red White</h5>
            
                <button className="buttonItem">Buy NOW</button>
                </div>
               </div>
               <div className="addvertItem col-12 col-sm-8 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
               <img className="adwertImage" alt="model"  src={modelImage}/>
           
               <div className="detailBox">
               <h5 className="addPrice">Nike T-shirt White</h5>
               <h5 className="addPrice">Sizes: L M XXL</h5>
               <h5 className="addPrice">Colors : Red White</h5>
            
                <button className="buttonItem">Buy NOW</button>
                </div>
               </div>
               <div className="addvertItem col-12 col-sm-8 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
               <img className="adwertImage" alt="model"  src={modelImage}/>
           
               <div className="detailBox">
               <h5 className="addPrice">Nike T-shirt White</h5>
               <h5 className="addPrice">Sizes: L M XXL</h5>
               <h5 className="addPrice">Colors : Red White</h5>
            
                <button className="buttonItem">Buy NOW</button>
                </div>
               </div>
               <div className="addvertItem col-12 col-sm-8 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
               <img className="adwertImage" alt="model"  src={modelImage}/>
           
               <div className="detailBox">
               <h5 className="addPrice">Nike T-shirt White</h5>
               <h5 className="addPrice">Sizes: L M XXL</h5>
               <h5 className="addPrice">Colors : Red White</h5>
            
                <button className="buttonItem">Buy NOW</button>
                </div>
               </div>
               <div className="addvertItem col-12 col-sm-8 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
               <img className="adwertImage" alt="model"  src={modelImage}/>
           
               <div className="detailBox">
               <h5 className="addPrice">Nike T-shirt White</h5>
               <h5 className="addPrice">Sizes: L M XXL</h5>
               <h5 className="addPrice">Colors : Red White</h5>
            
                <button className="buttonItem">Buy NOW</button>
                </div>
               </div>
        </div>
        <div className="row  loginBox">
        <h2 className="loginTitle">Explore our Designs</h2>
              <button id="toggleButton"  ref={buttonLogin} type="submit" className="col-12 col-sm-8 col-md-4 col-lg-4 col-xl-4 col-xxl-4 loginButton">
          <h1>Login</h1>
                <div className="toggleMenu"><button className="iconButton" type="submit"><i class="user icon"></i></button></div>
                <div className="toggleMenu"><button className="iconButton" type="submit"><i class="google icon "></i></button></div>
                <div className="toggleMenu"><button className="iconButton" type="submit"><i class="facebook icon fb"></i></button></div>
              
              </button>
            <div ref={buttonSignIn}   className="col-12 col-sm-8 col-md-4 col-lg-4 col-xl-4 col-xxl-4 signinButton" >Sign In<i className="visibleArr angle double right icon"></i></div>
             </div>
        <div className="row  footer">
     
      <ul className="col-12 ulBox">
      <li className="col-12 col-md-4 col-xxl-3  liBox">
      <div className="videoBgc">
            <video className="videoCustom" src={bubbles} autoPlay loop muted></video>
            <h6 className="standard">Shoe  boxxx</h6>
             <a href='#' className="visible">Products</a>
             <a href='#' className="visible">Configurator</a>
             <a href='#' className="visible">Find us</a>
             <a href='#' className="visible">Contact</a>
          </div>
       
      </li>
      <li className="col-12 col-md-4 col-xxl-3 liBox">
      <div className="videoBgc">
            <video className="videoCustom" src={bubbles} autoPlay loop muted></video>
            <h6 className="standard">Manage Account</h6>
            <a className="visible">Log in</a>
            <a className="visible">Sign in</a>
            <a className="visible">Forgot password ?</a>
          </div>
      </li>
      <li className="col-12 col-md-4 col-xxl-6 liBox Custom">
          <div className="videoBgc">
            <video className="videoCustom" src={bubbles} autoPlay loop muted></video>
            <h6 className="flexText">Join to our Team</h6>
          </div>
      
      </li>
     
        </ul>
      
</div>

      </div>
      </div>
  );
}
export default App;