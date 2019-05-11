import React from 'react'
import Label from '../components/Label'
import UInput from '../components/UInput'
import styled from 'styled-components'



const LabeledInput = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0px;
    padding: 0px;
    grid-area: ${props => props.area}
` 
const LabeledInputItem = styled.div`
    margin: 5px 5px 5px 0px;
    padding: 0px;
`

export default ({placeholder, label, sub, area}) => (
    <LabeledInput area={area}>
        <LabeledInputItem>
            {label ? <Label sub={sub}>{label}</Label> : ""}
        </LabeledInputItem>
        <LabeledInputItem>
            <UInput placeholder={placeholder}/>
        </LabeledInputItem>
    </LabeledInput>
)