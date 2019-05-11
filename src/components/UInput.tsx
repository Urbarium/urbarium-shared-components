import React from 'react';
import Colors from '../colors';
import styled from 'styled-components';
import fonts from '../fonts';

const Input = styled.input`
  ${fonts.defaultInput}
  background: ${Colors.white};
  box-sizing: border-box;
  width: 292px;
  height: 42px;
  border-radius: 20px;
  padding: 0 0 0 20px;
`

export default ({ type, placeholder, value}) => <Input type="type" placeholder={placeholder} value={value}></Input>;