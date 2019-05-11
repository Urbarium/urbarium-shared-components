import React from 'react';
import Colors from '../colors';
import { defaultFont } from '../fonts';
import styled from 'styled-components';

const MyButton = styled.button`
  ${defaultFont}
  background: ${Colors.action.primary};
  width: 292px;
  height: 42px;
  border-radius: 20px;
  color: ${Colors.white};
`;

export default ({ onClick, children }) => <MyButton onClick={onClick}>{children}</MyButton>;