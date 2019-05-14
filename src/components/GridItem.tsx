import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
    grid-area: ${props => props.area ? props.area : ""};
    justify-self: ${props => props.justify ? props.justify : ""};
    align-self: ${props => props.align ? props.align : ""};
`
export default ({children, area="", justify="", align=""}) => <Div area={area} justify={justify} align={align}>{children}</Div>