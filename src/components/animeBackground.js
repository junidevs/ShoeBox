import React from 'react';

const AnimeBackground = ({source})=>{

    return(
        <video className="videoBackground" src={source} autoPlay loop muted></video>
    );
}
export default AnimeBackground;