import React from 'react';
import Label from '../components/Label';
import InputText from '../components/InputText';
import InputDrop from '../components/InputDropdown';
import InputBox from '../components/InputTextBox';
import styled from 'styled-components';



const LabeledInput = styled.div`
    margin: 0px;
    padding: 0px;
    height: 100%;
`; 
const Item = styled.div`
    margin: 5px 5px 5px 0px;
    padding: 0px;
    height: 100%;
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


export default ({type, children, placeholder, label, sub, fill}) => (
    <LabeledInput>        
            {label ? <Item><Label sub={sub}>{label}</Label></Item> : ""}        
        <Item>
            {getInput(type, children, placeholder, fill)}
        </Item>
    </LabeledInput>
);