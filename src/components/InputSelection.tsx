import React from 'react';
import styled from 'styled-components';
import colors from '../colors';
import fonts from '../fonts';

const Input = styled.input`
    // Nothing yet
    // have to change the default checkbox image
`
const Label = styled.label`
    ${fonts.optionLabel}
    color: ${colors.option}    
`

const SmallWrapper = styled.div`
    margin: 10px;
    margin-left: 0px;
`
const BigWrapper = styled.div`
    display: grid;
    justify-content: start;    
    grid-template-columns: repeat(auto-fill, minmax(150px, auto));
    
`
const getTaggedOptions = (options, name, right, radio) => (
    options.map((option, index) => (
        <SmallWrapper>        
            {right ? <Label for={option}>{option}</Label> : ""}
            <Input name={name}  id={option} value={option} type={radio ? 'radio' : 'checkbox'}/>
            {right ? "" : <Label for={option}>{option}</Label>}
        </SmallWrapper>
    ))
)

export default ({options=['option1'], name='group1', right=false, radio=false}) => 
    <BigWrapper>{getTaggedOptions(options, name, right, radio)}</BigWrapper>