import React from 'react';
import {storiesOf} from '@storybook/react';
import InputSelection from '../src/components/InputSelection';

storiesOf('InputSelection', module)
    .add('Checkbox - default', () => (
        <InputSelection/>
    ))
    .add('Checkbox - box on right', () => (
        <InputSelection right/>
    ))
    .add('Checkbox - with options', () => (
        <InputSelection options={['Pizza', 'Breadsticks', 'Refresco 2L', 'Extra queso']}/>
    ))
    .add('Radio - default', () => (
        <InputSelection radio/>
    ))
    .add('Radio - box on right', () => (
        <InputSelection right radio/>
    ))
    .add('Radio - with options', () => (
        <InputSelection radio options={['Jamon', 'Peperoni', 'Suprema', 'Margarita']}/>
    ))

    