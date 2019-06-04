import React from 'react';
import { storiesOf } from '@storybook/react';
import BeneficiariosPage from '../src/components/BeneficiariosPageTest';
import AccordionMenuPage from '../src/components/AccordionMenuPageTest';
import InputCheckbox from '../src/components/InputCheckbox';

storiesOf('PAGE TESTS', module)
    .add('TEST - Beneficiarios Page test con Grid', () => (
        <BeneficiariosPage/>
    ))

    .add('TEST - Accordion Menu', () => (
        <AccordionMenuPage/>
    ))

    .add('TEST - Input Checkbox New!!!', () => (
        <InputCheckbox  options={["Pepsi", "Coca", "Fanta"]} data={[2]}/>
    ))