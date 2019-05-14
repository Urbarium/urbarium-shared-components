import React from 'react';
import styled from 'styled-components'
import Input from '../components/LabeledInput';
import Label from '../components/Label';
import PageTitle from '../components/PageTitle';
import Div from '../components/GridItem';

const GridDiv = styled.div`
    margin: 15px 0px;
    padding: 0px;
    display: grid;
    max-width: 800px;
    justify-items: start;
`

const Beneficiario = styled(GridDiv)`
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 3fr 3fr;
    grid-template-areas:
        "title       .         .   "
        "cedula      .         .   "
        "nombre apellido1 apellido2"
`

const Direction = styled(GridDiv)`
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 3fr 6fr;
    grid-template-areas:
        "title        .           .   "
        "provincia  canton    distrito"
        "direccion direccion direccion"
`

const Telefonos = styled(GridDiv)`
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    grid-template-areas:
        "telefono celular ."
`

const Wrapper = styled.div`
   // nothing yet
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
        <Beneficiario>
            <Div area="title">
                <Label>Beneficiario 1</Label>
            </Div>
            <Div area="cedula">
                <Input type="text" sub label="CÉDULA" placeholder="0 0000 0000"/>
            </Div>
            <Div area="nombre">
                <Input type="text" sub label="NOMBRE" placeholder="Nombre"/>
            </Div>
            <Div area="apellido1" justify="center">
                <Input area="apellido1" type="text" sub label="PRIMER APELLIDO" placeholder="Primer apellido"/>
            </Div>
            <Div area="apellido2" justify="end">
                <Input type="text" sub label="SEGUNDO APELLIDO" placeholder="Segundo apellido"/>
            </Div>
        </Beneficiario>

        <Direction>
         <Div area="title">
                <Label>Dirección</Label>
            </Div>
            <Div area="provincia">
                <Input type="drop" placeholder="Provincia" children={provincias}/>
            </Div>
            <Div area="canton" justify="center">
                <Input type="drop" placeholder="Cantón" children={cantones}/>
            </Div>
            <Div area="distrito" justify="end">
                <Input type="drop" placeholder="Distrito" children={distritos}/>
            </Div>
            <Div area="direccion" justify="stretch">
                <Input type="box" placeholder="Dirección exacta" fill></Input>
            </Div>
        </Direction>

        <Telefonos>
        <Div area="telefono">
            <Input type="text" label="Telefono" placeholder="0000 0000"/>
        </Div>
        <Div area="celular" justify="center">
            <Input type="text" label="Celular" placeholder="0000 0000"/>
        </Div>
            
            
        </Telefonos>
    </Wrapper>
)



