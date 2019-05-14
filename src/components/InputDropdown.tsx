import React from 'react';
import colors from '../colors';
import fonts from '../fonts';
import styled from 'styled-components';

const Input = styled.select`
    ${fonts.defaultInput};
    background: ${colors.background};
    box-sizing: border-box;
    width: 180px;
    height: 36px;
    border-radius: 20px;
    border: 1px ${colors.passive} solid;
    padding-left: 15px;
`;


const PlaceholderOption = styled.option`
    color: gray;
`

export default ({placeholder, children}) => 
    <Input>
        {[<option disabled selected hidden value="">{placeholder}</option>,
        ...children]}
    </Input>;