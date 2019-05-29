import React from 'react';
import { storiesOf } from '@storybook/react';
import Input from '../src/components/InputTextBox';

storiesOf('Inputs Fields/TextBox Input', module)
  .add('With placeholder', () => (
    <Input placeholder="Primer Apellido"/>
  ))
  .add('With data', () => (
    <div> 
      <Input data="Salas"/>
    </div>
  ))
  .add('Empty', () => (
    <Input/>
  ))

  