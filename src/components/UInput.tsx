import React from 'react';
import Colors from '../colors';
import styled from 'styled-components';
import fonts from '../fonts';

const Input = styled.input`
  ${fonts.defaultInput}
  background: ${Colors.white};
  width: 292px;
  height: 42px;
  border-radius: 20px;
  padding: 0 0 0 20px;
`

export default ({placeholder, value}) => <Input type="text" placeholder={placeholder} value={value}></Input>;