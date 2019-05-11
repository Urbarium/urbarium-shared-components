import React from 'react';
import Colors from '../colors';
import fonts from '../fonts';
import styled from 'styled-components';

const Button = styled.button`
  ${fonts.defaultInput}
  background: ${Colors.action.primary};
  width: 292px;
  height: 42px;
  border-radius: 20px;
  color: ${Colors.white};
  cursor: pointer;
`;

export default ({onClick, children}) => <Button onClick={onClick}>{children}</Button>;