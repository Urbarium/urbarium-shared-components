import React from 'react';
import styled from 'styled-components'
import LabeledInput from '../components/LabeledInput';
import Label from '../components/Label';


const Beneficiario = styled.div`
    margin: 15px 0px;
    padding: 0px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 3fr 3fr;
    grid-template-areas:
        "title       .         .   "
        "cedula      .         .   "
        "nombre apellido1 apellido2"
`

const Direction = styled.div`
    margin: 15px 0px;
    padding: 0px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 3fr 6fr;
    grid-template-areas:
        "title        .           .   "
        "provincia  canton    distrito"
        "direccion direccion direccion"
`

const Telefonos = styled.div`
    margin: 15px 0px;
    padding: 0px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    grid-template-areas:
        "telefono celular ."
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;

`

export default () => (
    <Wrapper>
        <Beneficiario>
            <Label area="title">Beneficiario 1</Label>
            <LabeledInput area="cedula" sub label="CÉDULA" placeholder="0 0000 0000"/>
            <LabeledInput area="nombre" sub label="NOMBRE" placeholder="Nombre"/>
            <LabeledInput area="apellido1" sub label="PRIMER APELLIDO" placeholder="Primer apellido"/>
            <LabeledInput area="apellido2" sub label="SEGUNDO APELLIDO" placeholder="Segundo apellido"/>
        </Beneficiario>
        <Direction>
            <Label area="title">Dirección</Label>
            <LabeledInput area="provincia" placeholder="Provincia"/>
            <LabeledInput area="canton" placeholder="Cantón"/>
            <LabeledInput area="distrito" placeholder="Distrito"/>
            <LabeledInput area="direccion" placeholder="Dirección exacta"/>
        </Direction>
        <Telefonos>
            <LabeledInput area="telefono" label="Telefono" placeholder="0000 0000"/>
            <LabeledInput area="celular" label="Celular" placeholder="0000 0000"/>
        </Telefonos>
    </Wrapper>
)