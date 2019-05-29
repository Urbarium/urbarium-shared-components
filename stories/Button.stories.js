import React from 'react';
import { storiesOf } from '@storybook/react';
import RoundButton from '../src/components/ButtonRound';
import ArrowButton from '../src/components/ButtonArrow';
import StateButton from '../src/components/ButtonState';

storiesOf('Buttons/Round Button', module)
  .add('Default (no text)', () => ([
    <RoundButton onClick={() => alert('I was clicked!')}></RoundButton>
  ]))
  .add('With text', () => ([
    <RoundButton onClick={() => alert('I was clicked!')}>CREAR BONO</RoundButton>
  ]));
  

storiesOf('Buttons/State Button', module)
  .add('Default', () => (
    <StateButton ></StateButton>
  ));
  storiesOf('Buttons/State Button', module)
  .add('State Set', () => (
    <StateButton state={2}></StateButton>
  ));

storiesOf('Buttons/Arrow Button', module)
  .add('Default', () =>(
    <ArrowButton onClick={undefined}/>
))



  
  