import React from 'react';
import { storiesOf } from '@storybook/react';
import BeneficiariosSection from '../src/components/BeneficiariosSectionTest';
import AccTest from '../src/components/AccordionTest';


storiesOf('TEST PAGE', module)
    .add('TEST- Beneficiarios con Grid', () => (
        <BeneficiariosSection/>
    ))

    .add('TEST- accordion item', () => (
        <AccTest/>
    ))