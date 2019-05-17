import React from 'react';
import styled from 'styled-components/macro';
import colors from '../colors'
import fonts from '../fonts'
import Label from './Label';
import Arrow from './ButtonArrow';

const Frame = styled.div`
    border: 1px ${colors.passive} solid;
    border-radius: 18px;
    padding: 15px 25px;
    margin: 5px 0px;
`;

const FlexDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const IndexP = styled.p`
    margin: 10px 5px 5px 0px;    
    color: ${colors.primary};
    ${fonts.defaultLabel}
`;

const GridBody = styled.div`
    padding: 15px;
    padding-bottom: 0px;
    display: grid;
    grid-template-columns: ${props => props.columns};
`;

const inputFont = {
    input: `
        ${fonts.defaultAccordionLabel}
        color: ${colors.option};
    `,
    label: `
        ${fonts.defaultAccordionInput}
        color: ${colors.black};
    `
}

const labelFont = `
    ${fonts.subLabel}
    color: ${colors.passive}
`
const AccordionItem = ({children, index=0, title="", columns='auto'}) => 
    <Frame>
        <FlexDiv>
            <FlexDiv>
                <IndexP>{index+'.'}</IndexP>
                <Label>{title}</Label>
            </FlexDiv>
            <Label font={labelFont}>12/10/2019</Label>
            <Label font={labelFont}>15/10/2019</Label>
            <Label font={labelFont}>Juan Jose Alfaro</Label>
            <Arrow/>
        </FlexDiv>
        <GridBody columns={columns}>
            {children}
        </GridBody>
    </Frame>

export default  AccordionItem;
