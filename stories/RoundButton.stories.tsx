import React from 'react';
import { storiesOf } from '@storybook/react';
import RoundButton from '../src/components/RoundButton';

import { action, configureActions } from '@storybook/addon-actions';

storiesOf('RoundButton', module)
  .add('CREAR BONO', () => ([
    <RoundButton onClick={action('button-click')}>CREAR BONO</RoundButton>,
    <RoundButton onClick={action('button-click')}>COLSULTAR BONOS</RoundButton>,
    <RoundButton onClick={action('button-click')}>OBSERVAR MÉTRICAS</RoundButton>
  ]))