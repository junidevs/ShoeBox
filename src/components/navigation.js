import React from 'react';

const Navigation= ()=>{

    return(
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
                 Log In
                     </li>
                     <li className="item customLi">
                        Sign In
                     </li>
                     <li className="item customLi">
                         Contact
                     </li>
                </ul>
        </div>
    );

}
export default Navigation;