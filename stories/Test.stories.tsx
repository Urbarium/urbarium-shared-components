import React from 'react';
import { storiesOf } from '@storybook/react';
import BeneficiariosSection from '../src/components/BeneficiariosSectionTest';
import AccTest from '../src/components/AccordionTest';
import Arrow from '../src/components/ButtonArrow';
import State from '../src/components/InputState';

storiesOf('TEST PAGE', module)
    .add('TEST - Beneficiarios con Grid', () => (
        <BeneficiariosSection/>
    ))

    .add('TEST - Accordion Menu', () => (
        <AccTest/>
    ))

    .add('TEST - Arrow Button animation', () =>(
        <Arrow onClick={undefined}/>
    ))

    .add('TEST - State', () => (
        <State ></State>
    ))
