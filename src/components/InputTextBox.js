import React from 'react';
import styled from 'styled-components/macro';
import colors from '../colors';
import fonts from '../fonts';


const Input = styled.input`
  ${props => props.font}
  background: ${colors.background};
  box-sizing: border-box;
  width: 190px;
  height: 30px;
  border-radius: 15px;
  border: 1px ${colors.passive} solid;
  padding-left: 15px;

  :focus {
    outline: none;
  }
`;

class InputTextBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data: this.props.data};
  };

  handleOnChange(event) {
    this.setState({data: event.target.value});
  };

  render() {
    return (
      <Input 
        type = "text" 
        placeholder = {this.props.placeholder} 
        value = {this.state.data} 
        font = {this.props.font}
        onChange = {(event) => this.handleOnChange(event)}
      />
    );
  };
}

InputTextBox.defaultProps = {
  placeholder: "",
  font: fonts.defaultInput,
  data: undefined,
};

export default InputTextBox;