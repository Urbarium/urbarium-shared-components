import React from 'react';
import styled from 'styled-components/macro';
import colors from '../colors'
import fonts from '../fonts'
import Label from './Label';
import Arrow from './ButtonArrow';
import { isArray } from 'util';

const Frame = styled.div`
    border: 1px ${colors.passive} solid;
    border-radius: 18px;
    padding: 15px 25px;
    margin: 5px 0px;
    max-width: 800px;
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
        ${fonts.defaultAccordionInput}
        color: ${colors.option};
    `,
    label: `
        ${fonts.defaultAccordionLabel}
        color: ${colors.black};
    `
};

const labelFont = `
    ${fonts.subLabel}
    color: ${colors.passive}
`;

interface Props {index: number, title: string, columns: string};
interface State {closed: boolean};
class AccordionItem extends React.Component<Props, State> {

    constructor(props){
        super(props)
        this.state = {
            closed: true,
        }
    }

    insertFont(children) {
        if (children) {
            if (isArray(children)) {
                return children.map((child) => React.cloneElement(child, {font: inputFont}))
            } else {
                return React.cloneElement(children, {font: inputFont})
            }
        }
    }

    handleClick() {
        this.setState({closed: !this.state.closed});
    }

    render() {
        return(
            <Frame>
                <FlexDiv>
                    <FlexDiv>
                        <IndexP>{this.props.index+'.'}</IndexP>
                        <Label>{this.props.title}</Label>
                    </FlexDiv>
                    <Label font={labelFont}>12/10/2019</Label>
                    <Label font={labelFont}>15/10/2019</Label>
                    <Label font={labelFont}>Juan Jose Alfaro</Label>
                    <Arrow onClick={() => this.handleClick()}/>
                </FlexDiv>
                {this.state.closed ? "" :
                    <GridBody columns={this.props.columns}>
                        {this.insertFont(this.props.children)}
                    </GridBody>
                }
            </Frame>
        )
    }
}

export default  AccordionItem;
