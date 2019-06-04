import React from 'react';
import styled from 'styled-components/macro';
import Label from './Label';
import InputTextBox from './InputTextBox';
import InputDropdown from './InputDropdown';
import InputTextArea from './InputTextArea';
import InputSelection from './InputSelection';
import InputCheckbox from './InputCheckbox';


const Div = styled.div`
    height: 100%;
    margin-bottom: 10px;
`; 

const getInput = (type, data, options, placeholder, fill, right, font) => {
    switch (type) {
        case "textbox": return <InputTextBox data={data} placeholder={placeholder} font={font}/>
        case "textarea": return <InputTextArea data={data} placeholder={placeholder} fill={fill} font={font}/>
        case "dropdown": return <InputDropdown data={data} options={options} placeholder={placeholder} font={font}/>
        case "checkbox": return <InputCheckbox data={data} options={options} right={right} font={font}/>
        case "radio": return <InputSelection data={data} options={options} right={right} font={font} radio/>
        default: return null;
    }
}

const LabeledInput = ({
    type = "",
    data = undefined,
    options = [], 
    placeholder = "", 
    label = "", 
    font = {input: undefined, label: undefined}, 
    fill = false, 
    right = false
}) => (
    <Div>        
        {label ? <Label font={font.label}>{label}</Label> : null}        
        {getInput(type, data, options, placeholder, fill, right, font.input)}
    </Div>
);

export default LabeledInput;