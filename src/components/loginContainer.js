import React from 'react';

const loginContainer=({buttonLogin,buttonSignIn})=>{
return(
    <div className="row  loginBox">
             <h2 className="loginTitle">Explore our Designs</h2>
             <button id="toggleButton"  ref={buttonLogin} type="submit" className="col-12 col-sm-8 col-md-4 col-lg-4 col-xl-4 col-xxl-4 loginButton">
                <h1>Login</h1>
                    <div className="toggleMenu">
                        <button className="iconButton" type="submit">
                            <i class="user icon"></i>
                        </button>
                    </div>
                    <div className="toggleMenu">
                        <button className="iconButton" type="submit">
                            <i class="google icon"></i>
                        </button>
                     </div>
                    <div className="toggleMenu">
                        <button className="iconButton" type="submit">
                            <i class="facebook icon fb"></i>
                        </button>
                    </div>
             </button>
                <div 
                     ref={buttonSignIn}   
                     className="col-12 col-sm-8 col-md-4 col-lg-4 col-xl-4 col-xxl-4 signinButton" >
                        Sign In
                        <i className="visibleArr angle double right icon"></i>
                </div>
        </div>
);
}
export default loginContainer;