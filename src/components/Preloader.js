import React,{useEffect} from 'react';
import ScrollReveal from 'scrollreveal'
import * as $ from 'jquery';

const Preloader =()=>{

    useEffect(() => {
        setTimeout(() =>{
             $('.visiblePreloader').css({"opacity":"0"});
             $('.visiblePreloader').css({"z-index":"-999"});
             ScrollReveal().reveal('.anim', {
               scale:0,
               distance: '150px',
               easing: 'cubic-bezier(0.5, 0, 0, 1)',
               duration: 1977,
               delay: 20,
               useDelay: 'once',
               opacity: 0,
               rotate: {
                 x: 150,
                 y: 30,
                 z: 180
                },    
           });
         },1500); });
         
    return(
        <div className="visiblePreloader">
        <div className="d-flex justify-content-center ">
  <div className="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div>
        </div>
    );
}
export default Preloader;