import React from 'react';
import { storiesOf } from '@storybook/react';
import Input from '../src/components/InputTextBox';

storiesOf('InputTextBox', module)
  .add('with placeholder', () => (
    <Input placeholder="Primer Apellido"/>
  ))
  .add('with values', () => (
    <Input value="Salas"/>
  ))
  .add('empty', () => (
    <Input/>
  ))

  