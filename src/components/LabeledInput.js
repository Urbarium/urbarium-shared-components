import React from 'react';
import Label from './Label';
import InputTextBox from './InputTextBox';
import InputDropdown from './InputDropdown';
import InputTextArea from './InputTextArea';
import InputSelection from './InputSelection';
import styled from 'styled-components';

const Div = styled.div`
    height: 100%;
    margin-bottom: 10px;
`; 

const getInput = (type, options, placeholder, fill, right, font) => {
    switch (type) {
        case "textbox": return <InputTextBox placeholder={placeholder} font={font}/>
        case "textarea": return <InputTextArea placeholder={placeholder} fill={fill} font={font}/>
        case "dropdown": return <InputDropdown options={options} placeholder={placeholder} font={font}/>
        case "checkbox": return <InputSelection options={options} right={right} font={font}/>
        case "radio": return <InputSelection options={options} right={right} font={font} radio/>
        default: return null;
    }
}

const LabeledInput = ({
    type = "", 
    options = [], 
    placeholder = "", 
    label = "", 
    font = {input: undefined, label: undefined}, 
    fill = false, 
    right = false
}) => (
    <Div>        
        {label ? <Label font={font.label}>{label}</Label>: ""}        
        {getInput(type, options, placeholder, fill, right, font.input)}
    </Div>
);

export default LabeledInput;