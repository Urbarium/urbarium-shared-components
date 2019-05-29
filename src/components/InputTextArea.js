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
`

class InputTextArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data: this.props.data};
  };

  handleOnChange(event) {
    this.setState({data: event.target.value});
  };

  render() {
    return(
      <TextArea
        placeholder = {this.props.placeholder}
        value = {this.state.data}
        fill = {this.props.fill}
        font = {this.props.font}
        onChange = {(event) => this.handleOnChange(event)}
      />
    );
  };
};

InputTextArea.defaultProps = {
  placeholder: "",
  data: undefined,
  fill: undefined,
  font: fonts.defaultInput,
};

export default InputTextArea;


