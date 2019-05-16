import React from 'react';
import { storiesOf } from '@storybook/react';
import LabeledInput from '../src/components/LabeledInput';

storiesOf('LabeledInput', module)
    .add('textbox input - sub label', ()=> ([
        <LabeledInput type="textbox" sub label="NOMBRE" placeholder="Nombre"/>,
        <LabeledInput type="textbox" sub label="APELLIDO" placeholder="Apellido"/>,
    ]))

    .add('textbox input - normal label', () => (
        <LabeledInput type="textbox" label="Teléfono" placeholder="0000 0000"/>
    ))

    .add('textbox input - no label', () => (
        <LabeledInput type="textbox" placeholder="some placeholder"/>
    ))

    .add('dropdown input - sub label', ()=> (
        <LabeledInput type="dropdown" sub label="Mano" placeholder="mano" options={["derecha", "izquierda"]}/>
    ))

    .add('dropdown input - normal label', ()=> (
        <LabeledInput type="dropdown" label="Mano" options={["derecha", "izquierda"]}/>
    ))

    .add('dropdown input - no label', ()=> (
        <LabeledInput type="dropdown" options={["derecha", "izquierda"]}/>
    ))

    .add('textarea input - normal label', ()=> (
        <LabeledInput type="textarea" placeholder="this is placeholder text" label="Label"/>
    ))

    .add('textarea input - sub label', ()=> (
        <LabeledInput type="textarea" placeholder="introduzca su texto aqui" label="Label" sub/>
    ))

    .add('textarea input - no label', ()=> (
        <LabeledInput type="textarea" />
    ))

    .add('checkbox input - no label', ()=> (
        <LabeledInput type="checkbox" options={['Opcion 1', 'Opcion 2', 'Opcion 3']} />
    ))

    .add('checkbox input - sub label', ()=> (
        <LabeledInput type="checkbox" label='Seleccion multiple' sub  options={['Opcion 1', 'Opcion 2', 'Opcion 3']}/>
    ))

    .add('radio input - normal label', ()=> (
        <LabeledInput type="radio" label='Seleccion unica'  options={['Opcion 1', 'Opcion 2', 'Opcion 3']}/>
    ))