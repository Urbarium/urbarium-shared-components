import React from 'react';
import styled from 'styled-components/macro';

const Arrow = styled.div`
    background-color: ${props => props.color};
    width: 0px;
    height: 0px;
    position: relative;
    top: 50%;
    left: 50%;

    ::after{
        position: absolute;                        
        content: "";
        width: ${props => props.size}px;
        height: ${props => props.size / 4}px;
        border-radius: ${props => props.size / 10}px;
        top: 50%;
        left: 50%;
        background-color: inherit;
        transform: translate(-79%, -50%) rotate(45deg);
    }

    ::before{
        position: absolute;                        
        content: "";
        width: ${props => props.size}px;
        height: ${props => props.size / 4}px;
        border-radius: ${props => props.size / 10}px;
        top: 50%;
        right: 50%;
        background-color: inherit;
        transform: translate(79%, -50%) rotate(-45deg); 
    }
`

export default ({size, color}) => <Arrow size={size} color={color}/>
