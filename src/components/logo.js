import React from 'react';
import styled from 'styled-components';

const Container = styled.nav`
text-align:center;
color: white;
`;

const Logo = ({source,width,height,className})=>{
    return(   
            <Container className="navbar mainNav ">
                <a className="anim navbar-brand" href="/">
                    <img src={source} alt="" width={width} height={height} className={className}/>
                     ShoeBoxxx
                </a>

</Container>
);
}
export default Logo;