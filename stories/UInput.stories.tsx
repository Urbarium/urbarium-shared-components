import React from 'react';
import { storiesOf } from '@storybook/react';
import UInput from '../src/components/UInput';

storiesOf('UInput', module)
  .add('with placeholder', () => (
    <UInput placeholder="Primer Apellido"/>
  ))
  .add('with values', () => (
    <UInput value="Salas"/>
  ))
  .add('empty', () => (
    <UInput/>
  ))

  