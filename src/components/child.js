import React from 'react';
import PropTypes from 'prop-types';
const Child = (props)=>{
   
    return(

        <div>
            <input type="text" onChange={(e)=> props.change(e.target.value)}></input>
            <button>{props.name}</button>
        </div>
    );
}
Child.defaultProps= {
    name:"JuniDevs",
}
Child.propTypes = {
    name:PropTypes.string,
}
export default Child;