import React from 'react';
import { storiesOf } from '@storybook/react';
import LabeledInput from '../src/components/LabeledInput';

const customFont = {
    input: `
        font-size: 15px;
        font-weight: bold;
        color: red;
    `,
    label: `
        font-size: 25px;
        font-weight: bold;
        color: blue;
    `
}


storiesOf('LabeledInput', module)    
    .add('textbox input - normal label', () => (
        <LabeledInput type="textbox" label="Teléfono" placeholder="0000 0000"/>
    ))
    .add('textbox input - no label', () => (
        <LabeledInput type="textbox" placeholder="some placeholder"/>
    ))
    .add('textbox input - custom font', ()=> ([
        <LabeledInput type="textbox" font={customFont} label="NOMBRE" placeholder="Nombre"/>,
        <LabeledInput type="textbox" font={customFont} label="APELLIDO" placeholder="Apellido"/>,
    ]))
    
    .add('dropdown input - normal label', ()=> (
        <LabeledInput type="dropdown" label="Mano" options={["derecha", "izquierda"]}/>
    ))    
    .add('dropdown input - no label', ()=> (
        <LabeledInput type="dropdown" options={["derecha", "izquierda"]}/>
    ))
    .add('dropdown input - custom font', ()=> (
        <LabeledInput type="dropdown"  label="Mano" font={customFont} placeholder="mano" options={["derecha", "izquierda"]}/>
    ))

    .add('textarea input - normal label', ()=> (
        <LabeledInput type="textarea" placeholder="this is placeholder text" label="Label"/>
    ))        
    .add('textarea input - no label', ()=> (
        <LabeledInput type="textarea" />
    ))
    .add('textarea input - custom font', ()=> (
        <LabeledInput type="textarea" placeholder="introduzca su texto aqui" label="Label" font={customFont}/>
    ))

    .add('checkbox input - no label', ()=> (
        <LabeledInput type="checkbox" options={['Opcion 1', 'Opcion 2', 'Opcion 3']} />
    ))    
    .add('radio input - normal label', ()=> (
        <LabeledInput type="radio" label='Seleccion unica'  options={['Opcion 1', 'Opcion 2', 'Opcion 3']}/>
    ))
    .add('checkbox input - custom font', ()=> (
        <LabeledInput type="checkbox" label='Seleccion multiple'  options={['Opcion 1', 'Opcion 2', 'Opcion 3']} font={customFont}/>
    ))