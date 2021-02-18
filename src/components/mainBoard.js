import React from 'react';
import airforce from '../images/airforce.png';

const mainBoard = () =>{
return(
    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 mainContent"> 
        
    <h2 className="anim col-7 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4 ">Best <br></br> force</h2>
    <img className="image mainImage col-7 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-3" src={airforce} alt="airforce" ></img>
    <h3 className="anim col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4 ">Air<br></br> One</h3>
    
   </div>
   
);
}
export default mainBoard;