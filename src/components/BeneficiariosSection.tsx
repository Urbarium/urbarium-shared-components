import React from 'react';
import styled from 'styled-components';
import Input from './LabeledInput';
import Label from './Label';
import colors from '../colors';
import fonts from '../fonts';


// Single beneficiaro definition
const subLabelFont = {input: undefined, label: `${fonts.subLabel} color: ${colors.passive};`};
const FlexDiv = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
`;
const Beneficiario = (index) => (
    <div style={{padding: "10px"}}>
        <Label>{"Beneficiario " + index}</Label>
        <Input type="textbox" label="CEDULA" placeholder="0 0000 0000" font={subLabelFont}/>
        <FlexDiv>
            <Input type="textbox" label="NOMBRE" placeholder="Nombre" font={subLabelFont}/>
            <Input type="textbox" label="PRIMER APELLIDO" placeholder="Primer apellido" font={subLabelFont}/>
            <Input type="textbox" label="SEGUNDO APELLIDO" placeholder="Segundo apellido" font={subLabelFont}/>
        </FlexDiv>
    </div>
);


// Beneficiario button style
const BeneficiarioButton = styled.button`
    display: block;
    cursor: pointer;
    border: none;
    background-color: transparent;
    color: ${colors.primary}
    ${fonts.optionLabel}
`;

// Beneficiaros Section definiton
interface Props {};
interface State {benefList: JSX.Element[]};
class BeneficiariosSection extends React.Component<Props, State> { 
    constructor(props) {
        super(props);
        this.state = { benefList: [Beneficiario(1)]}
    }

    handleClickAdd() {
        const newList = this.state.benefList.slice();
        newList.push(Beneficiario(newList.length + 1))
        this.setState({
            benefList: newList,
        })
    }
    handleClickRemove() {
        const newList = this.state.benefList.slice();
        newList.pop()
        this.setState({
            benefList: newList,
        })
    }

    render() {
        return(
            <div>
                {this.state.benefList}
                {this.state.benefList.length > 1 ? 
                    <BeneficiarioButton onClick={() => this.handleClickRemove()}>Remover beneficiario -</BeneficiarioButton>
                    : null
                }
                <BeneficiarioButton onClick={() => this.handleClickAdd()}>Agregar beneficiario +</BeneficiarioButton>                
            </div>
        )
    }
};

export default BeneficiariosSection;