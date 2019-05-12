import React from 'react';
import { storiesOf } from '@storybook/react';
import InputText from '../src/components/InputText';

storiesOf('InputText', module)
  .add('with placeholder', () => (
    <InputText placeholder="Primer Apellido"/>
  ))
  .add('with values', () => (
    <InputText value="Salas"/>
  ))
  .add('empty', () => (
    <InputText/>
  ))

  