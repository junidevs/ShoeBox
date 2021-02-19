import React from 'react';
import { Link } from 'react-router-dom';
import SignOutButton from './SignOut';
import * as ROUTES from '../constants/routes';
import { AuthUserContext } from './Session/index';
const Navigation= ({authUser})=>{

    return(
        <>
         <AuthUserContext.Consumer>
            {
                 authUser => authUser ? <NavigationAuth /> : <NavigationNonAuth />
            }
            </AuthUserContext.Consumer>
        </>
    );

}
export default Navigation;


const NavigationAuth = () => (
    <div className="navSquare col-12 col-sm-12 col-md-7 col-lg-8 col-xl-7 col-xxl-7">
    <ul className="ui six item menu customUl">
            <li className="item customLi">
                <Link to="/account">Account</Link>
            </li>
            <li className="item customLi">
            <Link to="/team">Home</Link>
            </li>
            <li className="item customLi">
            <Link to="/mainPage">Main Page</Link>
            </li>
            <li className="item customLi">
            <Link to="/blog">SignOut</Link>
            </li>
         
       </ul>
</div>
  );
   
  const NavigationNonAuth = () => (
    <div className="navSquare col-12 col-sm-12 col-md-7 col-lg-8 col-xl-7 col-xxl-7">
    <ul className="ui six item menu customUl">
            <li className="item customLi">
                <Link to="/products">Products</Link>
            </li>
            <li className="item customLi">
            <Link to="/team">Our Team</Link>
            </li>
            <li className="item customLi">
            <Link to="/blog">Blog</Link>
            </li>
            <li className=" customLi item">
            <Link to="/login">Log In</Link>
            </li>
            <li className="item customLi">
            <Link to="/signin">Sign In</Link>
            </li>
            <li className="item customLi">
            <Link to="/contact">Contact</Link>
            </li>
       </ul>
</div>
  );
   