import React from 'react';
import colors from '../colors';
import fonts from '../fonts';
import styled from 'styled-components/macro';



const P = styled.p`
    ${props => props.sub ? fonts.subLabel : fonts.defaultLabel}
    color: ${props => props.sub ? colors.passive : colors.black};
    margin: 10px 0px 5px 0px;
`;

const Label = ({children, sub=false}) => <P sub={sub}>{children}</P>;


export default Label;