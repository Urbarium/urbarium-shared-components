import React from 'react';
import styled from 'styled-components/macro';
import fonts from '../fonts';
import colors from '../colors';

const TextArea = styled.textarea`
  ${props => props.font}
  background: ${colors.background};
  box-sizing: border-box;
  width: ${props => props.fill ? " 100%;" : "360px"};
  height:${props => props.fill ? " 100%;" : "108px"};
  border-radius: 15px;
  border: 1px ${colors.passive} solid;
  padding-left: 15px;
  padding-top: 10px;
  margin: 0px;
  resize: none;

  :focus {
    outline: none;
  }

  ::placeholder {
    color: ${colors.placeholder};
  }
`
const InputTextArea = ({placeholder = "", data = undefined, fill = false, font = fonts.defaultInput}) => (
  <TextArea
    placeholder = {placeholder}
    defaultValue = {data}
    fill = {fill}
    font = {font}
  />
);

export default InputTextArea;


