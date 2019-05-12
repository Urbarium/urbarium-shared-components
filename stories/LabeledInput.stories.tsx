import React from 'react';
import { storiesOf } from '@storybook/react';
import LabeledInput from '../src/components/LabeledInput';
import Label from '../src/components/Label';

storiesOf('LabeledInput', module)
    .add('text input - sub label', ()=> ([
        <LabeledInput type="text" sub label="NOMBRE" placeholder="Nombre"/>,
        <LabeledInput type="text" sub label="APELLIDO" placeholder="Apellido"/>,
    ]))

    .add('text input - normal label', () => (
        <LabeledInput type="text" label="Teléfono" placeholder="0000 0000"/>
    ))

    .add('text input - no label', () => (
        <LabeledInput type="text" placeholder="some placeholder"/>
    ))

    .add('drop input - sub label', ()=> (
        <LabeledInput type="drop" sub label="Mano" placeholder="mano" children={["derecha", "izquierda"]}/>
    ))

    .add('drop input - normal label', ()=> (
        <LabeledInput type="drop" label="Mano" children={["derecha", "izquierda"]}/>
    ))

    .add('drop input - no label', ()=> (
        <LabeledInput type="drop" children={["derecha", "izquierda"]}/>
    ))