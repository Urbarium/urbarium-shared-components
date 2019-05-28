import React from 'react';
import colors from '../colors';
import fonts from '../fonts';
import styled from 'styled-components';
import Arrow from './Arrow';

const Input = styled.select`
    ${props => props.font? props.font : fonts.defaultInput};
    background: ${colors.background};
    box-sizing: border-box;
    width: 190px;
    height: 30px;
    border-radius: 15px;
    border: 1px ${colors.passive} solid;
    padding-left: 15px;
    appearance: none;

`;
 const ArrowContainer = styled.div`
    width: 0px;
    height: 0px;
    position: relative;
    bottom: 15px;
    left: 170px;
 `


const getTaggedOptions = (options) => options.map(option => <option key={option}>{option}</option>)

export default ({placeholder='', options=['option1'], font=undefined}) => 
    <div class="dropdown-input-wrapper">
        <Input defaultValue = {placeholder} font={font}>
            {[<option disabled hidden key=''>{placeholder}</option>, 
            ...getTaggedOptions(options)]}
        </Input>
        <ArrowContainer>
            <Arrow width={8} color={colors.primary}/>
        </ArrowContainer>
    </div>