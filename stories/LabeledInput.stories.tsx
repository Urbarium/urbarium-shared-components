import React from 'react';
import { storiesOf } from '@storybook/react';
import LabeledInputTest from '../src/components/LabeledInput';
import Label from '../src/components/Label';

storiesOf('LabeledInput', module)
    .add('with sub label', ()=> ([
        <LabeledInputTest sub label="CÉDULA" placeholder="0 0000 0000"/>,
        <LabeledInputTest sub label="NOMBRE" placeholder="Nombre"/>,
    ]))

    .add('with normal label', () => (
        <LabeledInputTest label="Teléfono" placeholder="0000 0000"/>
    ))

    .add('no label', () => (
        <LabeledInputTest placeholder="some placeholder"/>
    ))