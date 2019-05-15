import React from 'react';
import {storiesOf} from '@storybook/react';
import Input from '../src/components/InputSelection';

storiesOf('InputSelection', module)
    .add('Checkbox - default', () => (
        <Input/>
    ))
    .add('Checkbox - box on right', () => (
        <Input right/>
    ))
    .add('Checkbox - with options', () => (
        <Input options={['Pizza', 'Breadsticks', 'Refresco 2L', 'Extra queso']}/>
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

    