import React from 'react';
import styled from 'styled-components';
import fonts from '../fonts';
import colors from '../colors';

const TextArea = styled.textarea`
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

const InputTextArea = ({placeholder="", value=undefined, fill=false}) => 
  <TextArea placeholder={placeholder} value={value} fill={fill}></TextArea>;

export default InputTextArea;


