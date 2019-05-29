import React from 'react';
import styled from 'styled-components/macro';
import colors from '../colors';
import fonts from '../fonts';


const Input = styled.input`
  ${props => props.font}
  background: ${colors.background};
  box-sizing: border-box;
  width: 190px;
  height: 30px;
  border-radius: 15px;
  border: 1px ${colors.passive} solid;
  padding-left: 15px;

  :focus {
    outline: none;
  }

  ::placeholder {
    color: ${colors.placeholder};
  }
`;

const InputTextBox = ({placeholder = "", font = fonts.defaultInput, data = undefined}) => (
  <Input
    type = "text"
    placeholder = {placeholder}
    defaultValue = {data}
    font = {font}
  />
);

export default InputTextBox;