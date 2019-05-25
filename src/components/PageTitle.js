import React from 'react';
import fonts from '../fonts';
import styled from 'styled-components/macro';


const H1 = styled.h1`
    ${fonts.defaultTitle}
    color: $(colors.black)
`;

const Title = ({children}) => <H1>{children}</H1>;

export default Title;