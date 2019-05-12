import React from 'react';
import { storiesOf } from '@storybook/react';
import LabeledInputTest from '../src/components/LabeledInput';
import BeneficiariosSection from '../src/components/BeneficiariosSection';

storiesOf('TEST ONLY', module)
    .add('Beneficiarios Section', ()=> (
        <BeneficiariosSection/>
    ))