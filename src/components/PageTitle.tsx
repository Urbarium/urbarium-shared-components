import React from 'react';
import colors from '../colors';
import fonts from '../fonts';
import styled from 'styled-components';


const H1 = styled.h1`
    ${fonts.defaultTitle}
    color: $(colors.black)
`;

const Title = ({children}) => <H1>{children}</H1>;

export default Title;