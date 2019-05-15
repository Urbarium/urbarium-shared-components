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

const getInput = (type, options, placeholder, fill, right) => {
    switch (type) {
        case "text": return <InputTextBox placeholder={placeholder}/>
        case "box": return <InputTextArea placeholder={placeholder} fill={fill}/>
        case "drop": return <InputDropdown options={options} placeholder={placeholder}/>
        case "checkbox" : return <InputSelection options={options} right={right}/>
        case "radio" : return <InputSelection options={options} right={right} radio/>        
    }
}

const LabeledInput = ({type="", options=[], placeholder="", label="", sub=false, fill=false, right=false}) => (
    <Div>        
        {label ? <Label sub={sub}>{label}</Label>: ""}        
        {getInput(type, options, placeholder, fill, right)}
    </Div>
);

export default LabeledInput;