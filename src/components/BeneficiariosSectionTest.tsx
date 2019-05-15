import React from 'react';
import styled from 'styled-components'
import Input from './LabeledInput';
import Label from './Label';
import PageTitle from './PageTitle';
import RoundButton from './RoundButton';

const Flex = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
`
const TallDiv = styled.div`
    height: 100px;
`
const Grid = styled.div`
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
        <PageTitle>Jose Andres Montero - 207050086</PageTitle>
            <Label>Beneficiario 1</Label>
            <Input type="text" sub label="CÉDULA" placeholder="0 0000 0000"/>
            <Flex>
                <Input type="text" sub label="NOMBRE" placeholder="Nombre"/>
                <Input type="text" sub label="PRIMER APELLIDO" placeholder="Primer apellido"/>
                <Input type="text" sub label="SEGUNDO APELLIDO" placeholder="Segundo apellido"/>
            </Flex>

            <Label>Dirección</Label>
            <Flex>
                <Input type="drop" placeholder="Provincia" options={provincias}/>
                <Input type="drop" placeholder="Cantón" options={cantones}/>
                <Input type="drop" placeholder="Distrito" options={distritos}/>
            </Flex>
            <TallDiv>
                <Input type="box" placeholder="Dirección exacta" fill></Input>
            </TallDiv>
            <Grid>
                <Input type="text" label="Telefono" placeholder="0000 0000"/>
                <div style={{justifySelf:'center'}}>
                    <Input type="text" label="Celular" placeholder="0000 0000"/>
                </div>
            </Grid>
            <div style={{position:'relative',}}>
                <div style={{position:'absolute',right:'0px'}}>
                    <RoundButton>GUARDAR Y CONTINUAR</RoundButton>
                </div>
            </div>
    </Wrapper>
)



