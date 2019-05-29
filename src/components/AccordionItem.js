import React from 'react';
import styled from 'styled-components/macro';
import colors from '../colors';
import fonts from '../fonts';
import Label from './Label';
import Arrow from './ButtonArrow';
import ButtonState from './ButtonState';
import { isArray } from 'util';

const Frame = styled.div`
    border: 1px ${colors.passive} solid;
    border-radius: 15px;
    padding: 15px 25px;
    margin: 5px 0px;
    max-width: 800px;
`;

const FlexDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
`;

const IndexP = styled.p`
    margin: 0px;
    margin-right: 10px;
    color: ${colors.primary};
    ${fonts.defaultLabel}
`;

const GridBody = styled.div`
    padding: 15px 25px;
    padding-bottom: 0px;
    display: grid;
    grid-template-columns: ${props => props.columns};
`;

const GridHeader = styled.div`
    display: grid;
    grid-template-columns: 5fr 2fr 2fr 2fr  2fr 0.5fr;
    align-items: center;
    justify-content: space-between;
`

const inputFont = {
    input: `
        ${fonts.defaultAccordionInput}
        color: ${colors.option};
    `,
    label: `
        ${fonts.defaultAccordionLabel}
        color: ${colors.black};
    `
};

const labelFont = `
    ${fonts.accLabel}
    color: ${colors.passive}
`;


class AccordionItem extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            closed: true,
        };
    };

    insertProps(children) {
        if (children) {
            if (isArray(children)) {
                return children.map((child) => React.cloneElement(child, {font: inputFont}))
            } else {
                return React.cloneElement(children, {font: inputFont})
            };
        };
    };

    handleClick() {
        this.setState({closed: !this.state.closed});
    };

    render() {
        return(
            <Frame>
                <GridHeader>
                    <FlexDiv>
                        <IndexP>{this.props.index+'.'}</IndexP>
                        <Label>{this.props.title}</Label>
                    </FlexDiv>
                    <Label font={labelFont}>{this.props.startDate}</Label>
                    <Label font={labelFont}>{this.props.endDate}</Label>
                    <Label font={labelFont}>{this.props.user}</Label>
                    <ButtonState state={this.props.state}/>
                    <Arrow onClick={() => this.handleClick()} />
                </GridHeader>
                {this.state.closed ? "" :
                    <GridBody columns={this.props.columns}>
                        {this.insertProps(this.props.children)}
                    </GridBody>
                }
            </Frame>
        );
    };
};

AccordionItem.defaultProps = {
    columns: "1fr",
    index: 0,
    title: "Titulo",
    startDate: "-",
    endDate: "-",
    user: "-",
    state: 1
};

export default AccordionItem;
