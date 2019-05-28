import React from 'react';
import colors from '../colors';
import fonts from '../fonts';
import styled from 'styled-components/macro';

const Input = styled.input`
  ${props => props.font ? props.font : fonts.defaultInput}
  background: ${colors.background};
  box-sizing: border-box;
  width: 190px;
  height: 30px;
  border-radius: 15px;
  border: 1px ${colors.passive} solid;
  padding-left: 15px;
`;

const InputTextBox = ({placeholder="", value=undefined, font=undefined}) => 
  <Input type="text" placeholder={placeholder} value={value} font={font}></Input>;

export default  InputTextBox;