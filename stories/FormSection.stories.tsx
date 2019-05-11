import React from 'react';
import { storiesOf } from '@storybook/react';
import LabeledInputTest from '../src/components/LabeledInput';
import Label from '../src/components/Label';

storiesOf('Form Section TEST ONLY', module)
    .add('form section with several inputs', ()=> ([
        <Label>Beneficiario 1</Label>,
        <LabeledInputTest sub label="CÉDULA" placeholder="0 0000 0000"/>,
        <LabeledInputTest sub label="NOMBRE" placeholder="Nombre"/>,
        <LabeledInputTest sub label="PRIMER APELLIDO" placeholder="Primer Apellido"/>,
        <LabeledInputTest sub label="SEGUNDO APELLIDO" placeholder="Segundo Apellido"/>,
    ]))

    .add('form section with one input', () => (
        <LabeledInputTest label="Teléfono" placeholder="0000 0000"/>
    ))