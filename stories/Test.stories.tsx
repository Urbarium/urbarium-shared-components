import React from 'react';
import { storiesOf } from '@storybook/react';
import BeneficiariosSection from '../src/components/BeneficiariosSectionTest';
import AccTest from '../src/components/AccordionTest';
import ButtonExpand from '../src/components/ButtonArrow';


storiesOf('TEST PAGE', module)
    .add('TEST - Beneficiarios con Grid', () => (
        <BeneficiariosSection/>
    ))

    .add('TEST - accordion item', () => (
        <AccTest/>
    ))

    .add('TEST - Expand Button animation', () =>(
        <ButtonExpand/>
    ))