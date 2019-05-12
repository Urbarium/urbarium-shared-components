import React from 'react';
import colors from '../colors';
import fonts from '../fonts';
import styled from 'styled-components';

const Input = styled.input`
  ${fonts.defaultInput}
  background: ${colors.white};
  box-sizing: border-box;
  width: 180px;
  height: 36px;
  border-radius: 20px;
  padding-left: 15px;
`;

export default ({placeholder, value}) => <Input type="text" placeholder={placeholder} value={value}></Input>;