import React from 'react';

const Footer = ({bubbles})=>{
return(
    <div className="row  footer">
     
    <ul className="col-12 ulBox">
    <li className="col-12 col-md-4 col-xxl-3  liBox">
    <div className="videoBgc">
          <video className="videoCustom" src={bubbles} autoPlay loop muted></video>
          <h6 className="standard">Shoe  boxxx</h6>
           <a href="#a" className="visible">Products</a>
           <a href="#a" className="visible">Configurator</a>
           <a href="#a" className="visible">Find us</a>
           <a href='#a' className="visible">Contact</a>
        </div>
     
    </li>
    <li className="col-12 col-md-4 col-xxl-3 liBox">
    <div className="videoBgc">
          <video className="videoCustom" src={bubbles} autoPlay loop muted></video>
          <h6 className="standard">Manage Account</h6>
          <a href="#a" className="visible">Log in</a>
          <a href="#a" className="visible">Sign in</a>
          <a href="#a" className="visible">Forgot password ?</a>
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
);
}
export default Footer