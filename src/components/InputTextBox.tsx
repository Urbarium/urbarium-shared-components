import React from 'react';
import styled from 'styled-components';
import fonts from '../fonts';
import colors from '../colors';

const Input = styled.textarea`
 ${fonts.defaultInput}
  background: ${colors.background};
  box-sizing: border-box;
  width: ${props => props.fill ? " 100%;" : "360px"};
  height:${props => props.fill ? " 100%;" : "108px"};
  border-radius: 18px;
  border: 1px ${colors.passive} solid;
  padding-left: 15px;
  padding-top: 10px;
  margin: 0px;
  resize: none;
`

export default ({placeholder="", value=null, fill=false}) => <Input placeholder={placeholder} value={value} fill={fill}></Input>;


