import React from 'react';
import Colors from '../colors';
import styled from 'styled-components';
import { defaultFont } from '../fonts';

const MyInput = styled.input`
  ${defaultFont}
  background: ${Colors.white};
  width: 292px;
  height: 42px;
  border-radius: 20px;
`

export default () => <MyInput type="text"></MyInput>;