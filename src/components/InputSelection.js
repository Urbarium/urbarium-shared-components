import React from 'react';
import styled from 'styled-components/macro';
import colors from '../colors';
import fonts from '../fonts';

const Input = styled.input`
    /* Nothing yet
     have to change the default checkbox image 
     but I don't have any assets yet */
`
const Label = styled.label`
    color: ${colors.option};
    ${props => props.font ? props.font : fonts.optionLabel}
`

const SmallDiv = styled.div`
    margin: 10px;
    margin-left: 0px;
`
const BigDiv = styled.div`
    display: grid;
    justify-content: start;
    grid-template-columns: repeat(auto-fill, minmax(150px, auto));
    grid-auto-flow: dense;
`
const getTaggedOptions = (options, name, right, radio, font) => (
    options.map((option, index) => (
        <SmallDiv>        
            {right ? <Label htmlFor={option} font={font}>{option}</Label> : ""}
            <Input name={name}  id={option} value={option} type={radio ? 'radio' : 'checkbox'}/>
            {right ? "" : <Label htmlFor={option} font={font}>{option}</Label>}
        </SmallDiv>
    ))
)

const InputSelection = ({options=['option1'], name='group1', right=false, radio=false, font=undefined}) => 
<BigDiv>{getTaggedOptions(options, name, right, radio, font)}</BigDiv>


export default InputSelection;