import React from 'react';
import styled from 'styled-components'
import Input from './LabeledInput';
import Label from './Label';
import PageTitle from './PageTitle';
import RoundButton from './ButtonRound';
import fonts from '../fonts';
import colors from '../colors';

const FlexDiv = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
`
const TallDiv = styled.div`
    height: 100px;
`
const GridDiv = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
`
const Wrapper = styled.div`
    width: 100%;    
    max-width: 800px;
    display: flex;
    flex-direction: column;
    position:absolute;
`

const customFont = {
    input: undefined,
    label: `${fonts.subLabel} color: ${colors.passive}; `
}

// static options test for dropdown menus
// this needs to change dynamically with the selected options
const provincias = ["San Jose", "Alajuela", "Heredia", "Cartago", "Puntarenas", "Limon", "Guanacaste"]
const cantones = ["San José", "Escazú", "Desamparados", "Puriscal", "Tarrazú", "Aserrí", "Mora", "Goicoechea", "Santa Ana", "BLABLA"]
const distritos = ["Carmen", "Merced", "Hospital", "Catedral", "BLABLA"]


// This is test component just to check how the everything would look together
// probably have to make this more modular
export default () => (
    <Wrapper>
        <PageTitle>Jose Andres Montero - 207050086</PageTitle>
            <Label>Beneficiario 1</Label>
            <Input type="textbox" font={customFont} label="CÉDULA" placeholder="0 0000 0000"/>
            <FlexDiv>
                <Input type="textbox" font={customFont} label="NOMBRE" placeholder="Nombre"/>
                <Input type="textbox" font={customFont} label="PRIMER APELLIDO" placeholder="Primer apellido"/>
                <Input type="textbox" font={customFont} label="SEGUNDO APELLIDO" placeholder="Segundo apellido"/>
            </FlexDiv>

            <Label>Dirección</Label>
            <FlexDiv>
                <Input type="dropdown" placeholder="Provincia" options={provincias}/>
                <Input type="dropdown" placeholder="Cantón" options={cantones}/>
                <Input type="dropdown" placeholder="Distrito" options={distritos}/>
            </FlexDiv>
            <TallDiv>
                <Input type="textarea" placeholder="Dirección exacta" fill></Input>
            </TallDiv>
            <GridDiv>
                <Input type="textbox" label="Telefono" placeholder="0000 0000"/>
                <div style={{justifySelf:'center'}}>
                    <Input type="textbox" label="Celular" placeholder="0000 0000"/>
                </div>
            </GridDiv>
            <div style={{position:'relative',}}>
                <div style={{position:'absolute',right:'0px'}}>
                    <RoundButton>GUARDAR Y CONTINUAR</RoundButton>
                </div>
            </div>
    </Wrapper>
)



