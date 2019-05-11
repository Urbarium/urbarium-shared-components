import React from 'react'
import Label from '../components/Label'
import UInput from '../components/UInput'
import styled from 'styled-components'



const LabeledInput = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0px;
    padding: 0px;
` 
const LabeledInputItem = styled.div`
    margin: 7px;
`

export default ({placeholder, label, sub}) => (
    <LabeledInput>
        <LabeledInputItem>
            <Label sub={sub}>{label}</Label>
        </LabeledInputItem>
        <LabeledInputItem>
            <UInput placeholder={placeholder}/>
        </LabeledInputItem>
    </LabeledInput>
)