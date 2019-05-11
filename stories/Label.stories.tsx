import React from 'react';
import { storiesOf } from '@storybook/react';
import Label from '../src/components/Label'

storiesOf('Label', module)
    .add('default', () => (
        <Label>Beneficiario 1</Label>
    ))

    .add('sub label', () => ([
        <Label sub>CÉDULA</Label>,
        <Label sub>NOMBRE</Label>,
    ]))