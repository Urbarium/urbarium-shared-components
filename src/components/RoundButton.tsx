import React from 'react';
import colors from '../colors';
import fonts from '../fonts';
import styled from 'styled-components';

const Button = styled.button`
  ${fonts.defaultInput}
  background: ${colors.action.primary};
  width: 292px;
  height: 42px;
  border-radius: 21px;
  border: 0px;
  color: ${colors.white};
  cursor: pointer;
`;

const RoundButton = ({onClick=null, children}) => <Button onClick={onClick} >{children}</Button>;

export default RoundButton;