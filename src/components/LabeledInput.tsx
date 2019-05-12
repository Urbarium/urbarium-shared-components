import React from 'react';
import Label from '../components/Label';
import InputText from '../components/InputText';
import InputDrop from '../components/InputDropdown'
import styled from 'styled-components';



const LabeledInput = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0px;
    padding: 0px;
    grid-area: ${props => props.area}
`; 
const LabeledInputItem = styled.div`
    margin: 5px 5px 5px 0px;
    padding: 0px;
`;


const getInput = (type, placeholder, children) => {
    switch (type) {
        case "text": return <InputText placeholder={placeholder}/>
        case "drop": return (
            <InputDrop placeholder={placeholder}>
                {children.map((child) => <option value={child}>{child}</option>)}
            </InputDrop>)
        case "box": return "" // not implemented yet
    }
}


export default ({type, children, placeholder, label, sub, area}) => (
    <LabeledInput area={area}>
        <LabeledInputItem>
            {label ? <Label sub={sub}>{label}</Label> : ""}
        </LabeledInputItem>
        <LabeledInputItem>
            {getInput(type, placeholder, children)}
        </LabeledInputItem>
    </LabeledInput>
);