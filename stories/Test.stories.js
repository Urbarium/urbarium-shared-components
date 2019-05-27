import React from 'react';
import { storiesOf } from '@storybook/react';
import BeneficiariosPage from '../src/components/BeneficiariosPageTest';
import AccordionMenuPage from '../src/components/AccordionMenuPageTest';
import Arrow from '../src/components/Arrow';

storiesOf('PAGE TESTS', module)
    .add('TEST - Beneficiarios Page test con Grid', () => (
        <BeneficiariosPage/>
    ))

    .add('TEST - Accordion Menu', () => (
        <AccordionMenuPage/>
    ))