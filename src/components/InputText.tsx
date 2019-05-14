import React from 'react';
import colors from '../colors';
import fonts from '../fonts';
import styled from 'styled-components';

const Input = styled.input`
  ${fonts.defaultInput}
  background: ${colors.background};
  box-sizing: border-box;
  width: 180px;
  height: 36px;
  border-radius: 18px;
  border: 1px ${colors.passive} solid;
  padding-left: 15px;
`;

export default ({placeholder="", value=null}) => <Input type="text" placeholder={placeholder} value={value}></Input>;