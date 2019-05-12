import React from 'react';
import styled from 'styled-components'
import LabeledInput from '../components/LabeledInput';
import Label from '../components/Label';
import PageTitle from '../components/PageTitle';

const GridDiv = styled.div`
    margin: 15px 0px;
    padding: 0px;
    display: grid;
    max-width: 800px;
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
            <Label area="title">Beneficiario 1</Label>
            <LabeledInput area="cedula" type="text" sub label="CÉDULA" placeholder="0 0000 0000"/>
            <LabeledInput area="nombre" type="text" sub label="NOMBRE" placeholder="Nombre"/>
            <LabeledInput area="apellido1" type="text" sub label="PRIMER APELLIDO" placeholder="Primer apellido"/>
            <LabeledInput area="apellido2" type="text" sub label="SEGUNDO APELLIDO" placeholder="Segundo apellido"/>
        </Beneficiario>
        <Direction>
            <Label area="title">Dirección</Label>
            <LabeledInput area="provincia" type="drop" placeholder="Provincia" children={provincias}/>
            <LabeledInput area="canton" type="drop" placeholder="Cantón" children={cantones}/>
            <LabeledInput area="distrito" type="drop" placeholder="Distrito" children={distritos}/>
            <LabeledInput area="direccion" type="text" placeholder="Dirección exacta"/>
        </Direction>
        <Telefonos>
            <LabeledInput area="telefono" type="text" label="Telefono" placeholder="0000 0000"/>
            <LabeledInput area="celular" type="text" label="Celular" placeholder="0000 0000"/>
        </Telefonos>
    </Wrapper>
)



