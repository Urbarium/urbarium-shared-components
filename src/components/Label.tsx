import React from 'react'
import colors from '../colors'
import fonts from '../fonts'
import styled from 'styled-components'



const Label = styled.label`
    ${props => props.sub ? fonts.subLabel : fonts.defaultLabel};
    color: ${props => props.sub ? colors.passive : colors.black};    
    margin: 4px; 
`

export default ({children, sub}) => <Label sub={sub}>{children}</Label>