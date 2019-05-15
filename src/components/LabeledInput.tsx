import React from 'react';
import Label from './Label';
import InputText from './InputText';
import InputDrop from './InputDropdown';
import InputBox from './InputTextbox';
import InputSelection from './InputSelection';
import styled from 'styled-components';



const LabeledInput = styled.div`
    height: 100%;
    margin-bottom: 10px;
`; 



const getInput = (type, options, placeholder, fill, right) => {
    switch (type) {
        case "text": return <InputText placeholder={placeholder}/>
        case "box": return <InputBox placeholder={placeholder} fill={fill}/>
        case "drop": return <InputDrop options={options} placeholder={placeholder}/>        
        case "checkbox:" : return <InputSelection options={options} right={right}/>
        case "radio:" : return <InputSelection options={options} right={right} radio/>
    }
}

export default ({type, options=[], placeholder="", label="", sub=false, fill=false, right=false}) => (
    <LabeledInput>        
        {label ? <Label sub={sub}>{label}</Label>: ""}        
        {getInput(type, options, placeholder, fill, right)}
    </LabeledInput>
);