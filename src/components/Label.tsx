import React from 'react';
import colors from '../colors';
import fonts from '../fonts';
import styled from 'styled-components/macro';



const P = styled.p`
    color: ${colors.black};
    ${props => props.font ? props.font : fonts.defaultLabel}
    margin: 10px 0px 5px 0px;
`;

const Label = ({children, font=undefined}) => <P font={font}>{children}</P>;


export default Label;