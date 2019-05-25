import React from 'react';
import {storiesOf} from '@storybook/react';
import Input from '../src/components/InputSelection';

storiesOf('Inputs Fields/Selection Input', module)
    .add('Checkbox - default', () => (
        <Input/>
    ))
    .add('Checkbox - box on right', () => (
        <Input right/>
    ))
    .add('Checkbox - with options', () => (
        <Input options={['Pizza', 'Breadsticks', 'Refresco 2L', 'Extra queso']}/>
    ))
    .add('Checkbox - custom font', () => (
        <Input options={['Pizza Mediana', 'Breadsticks', 'Refresco 2L', 'Extra queso']} font={'font-family:Sans-Serif;font-size:1.2em;color:navy;'}/>
    ))
    .add('Radio - default', () => (
        <Input radio/>
    ))
    .add('Radio - box on right', () => (
        <Input right radio/>
    ))
    .add('Radio - with options', () => (
        <Input radio options={['Jamon', 'Peperoni', 'Suprema', 'Margarita']}/>
    ))
    .add('Radio - custom font', () => (
        <Input radio options={['Jamon', 'Peperoni', 'Suprema', 'Margarita']} font={';font-size:25px;color:red;'}/>
    ))

    