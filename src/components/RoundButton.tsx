import React from 'react';
import Colors from '../colors';
import fonts from '../fonts';
import styled from 'styled-components';

const Button = styled.button`
  ${fonts.defaultInput}
  background: ${Colors.action.primary};
  width: 180px;
  height: 42px;
  border-radius: 20px;
  color: ${Colors.white};
  cursor: pointer;
  ${props => props.style}
`;

export default ({onClick, children, style}) => <Button onClick={onClick} style={style}>{children}</Button>;