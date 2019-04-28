import React from 'react';
import { storiesOf } from '@storybook/react';
import RoundButton from '../src/components/RoundButton';

storiesOf('RoundButton', module)
  .add('CREAR BONO', () => ([
    <RoundButton>CREAR BONO</RoundButton>,
    <RoundButton>COLSULTAR BONOS</RoundButton>,
    <RoundButton>OBSERVAR MÉTRICAS</RoundButton>
  ]))