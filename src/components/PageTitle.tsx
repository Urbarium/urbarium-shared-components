import React from 'react';
import colors from '../colors';
import fonts from '../fonts';
import styled from 'styled-components';


const Title = styled.h1`
    ${fonts.defaultTitle}
    color: $(colors.black)
`;

export default ({children}) => <Title>{children}</Title>;