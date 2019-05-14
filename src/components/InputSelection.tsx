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

const Wrapper = styled.div`
    // Nothing yet
`
const getTaggedOptions = (options, name, right, radio) => (
    <Wrapper>
        {options.map((option, index) => ([            
            right ? <Label for={option}>{option}</Label> : "",
            <Input name={name}  id={option} value={option} type={radio ? 'radio' : 'checkbox'}/>,
            right ? "" : <Label for={option}>{option}</Label>
        ]))}
    </Wrapper>
)

export default ({options=['option1'], name='group1', right=false, radio=false}) => 
    <Wrapper>{getTaggedOptions(options, name, right, radio)}</Wrapper>