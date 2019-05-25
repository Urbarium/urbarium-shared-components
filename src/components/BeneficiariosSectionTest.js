import React from 'react';
import styled from 'styled-components'
import Input from './LabeledInput';
import Label from './Label';
import BeneficiariosSection from './BeneficiariosSection';

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

// static options test for dropdown menus
// this needs to change dynamically with the selected options
const provincias = ["San Jose", "Alajuela", "Heredia", "Cartago", "Puntarenas", "Limon", "Guanacaste"]
const cantones = ["San José", "Escazú", "Desamparados", "Puriscal", "Tarrazú", "Aserrí", "Mora", "Goicoechea", "Santa Ana", "BLABLA"]
const distritos = ["Carmen", "Merced", "Hospital", "Catedral", "BLABLA"]


// This is test component just to check how the everything would look together
// probably have to make this more modular
export default () => (
    <Wrapper>
            <BeneficiariosSection/>
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
    </Wrapper>
)



