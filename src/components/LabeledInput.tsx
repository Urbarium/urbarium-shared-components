import React from 'react';
import Label from './Label';
import InputText from './InputText';
import InputDrop from './InputDropdown';
import InputBox from './InputTextbox';
import styled from 'styled-components';



const LabeledInput = styled.div`
    height: 100%;
`; 
const Item = styled.div`
    height: 100%;
    margin: 5px 5px 5px 0px;
`;


const getInput = (type, children, placeholder, fill) => {
    switch (type) {
        case "text": return <InputText placeholder={placeholder}/>
        case "drop": return (
            <InputDrop placeholder={placeholder}>
                {children.map((child) => <option value={child}>{child}</option>)}
            </InputDrop>)
        case "box": return <InputBox placeholder={placeholder} fill={fill}></InputBox>
    }
}


export default ({type, children=[], placeholder="", label="", sub=false, fill=false}) => (
    <LabeledInput>        
            {label ? <Item><Label sub={sub}>{label}</Label></Item> : ""}        
        <Item>
            {getInput(type, children, placeholder, fill)}
        </Item>
    </LabeledInput>
);