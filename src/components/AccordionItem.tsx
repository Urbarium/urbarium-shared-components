import React from 'react';
import styled from 'styled-components';
import colors from '../colors'
import fonts from '../fonts'
import Label from './Label';

const Frame = styled.div`
    border: 1px ${colors.passive} solid;
    border-radius: 18px;
    padding: 15px 25px;
`

const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const Index = styled.p`
    ${fonts.defaultLabel};
    color: ${colors.primary};
    margin: 10px 0px 5px 0px;
` 

const Body = styled.div`
    padding: 15px;;
    padding-bottom: 0px
    display: grid;
    grid-template-columns: ${props => props.columns};
`

export default ({children, index='0', title="", columns='auto'}) => 
    <Frame>
        <Header>
            <Index>{index + "."}</Index>
            <div style={{alignSelf:'flex-start'}}><Label>{title}</Label></div>
            <Label sub>12/10/2019</Label>
            <Label sub>15/10/2019</Label>
            <Label sub>Juan Jose Alfaro</Label>
        </Header>
        <Body columns={columns}>
            {children}
        </Body>
    </Frame>
