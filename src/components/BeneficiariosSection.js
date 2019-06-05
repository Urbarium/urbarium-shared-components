import React from 'react';
import styled from 'styled-components';
import Input from './LabeledInput';
import Label from './Label';
import Button from './ButtonText';
import colors from '../colors';
import fonts from '../fonts';


// Single beneficiaro definition
const subLabelFont = `${fonts.subLabel} color: ${colors.passive};`

const FlexDiv = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
`;
const Beneficiario = (index) => (
    <div style={{margin: "20px 0"}}>
        <Label>{"Beneficiario " + index}</Label>
        <Input type="textbox" label="CEDULA" placeholder="0 0000 0000" labelFont={subLabelFont}/>
        <FlexDiv>
            <Input type="textbox" label="NOMBRE" placeholder="Nombre" labelFont={subLabelFont}/>
            <Input type="textbox" label="PRIMER APELLIDO" placeholder="Primer apellido" labelFont={subLabelFont}/>
            <Input type="textbox" label="SEGUNDO APELLIDO" placeholder="Segundo apellido" labelFont={subLabelFont}/>
        </FlexDiv>
    </div>
);

// Beneficiaros Section definiton
class BeneficiariosSection extends React.Component{ 
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
                    <Button onClick={() => this.handleClickRemove()}>Remover beneficiario -</Button>
                    : null
                }
                <Button onClick={() => this.handleClickAdd()}>Agregar beneficiario +</Button>                
            </div>
        )
    }
};

export default BeneficiariosSection;