import React from 'react';
import { storiesOf } from '@storybook/react';
import LabeledInputTest from '../src/components/LabeledInput';
import BeneficiariosSection from '../src/components/BeneficiariosSection';

storiesOf('TEST PAGE', module)
    .add('Beneficiarios Section', ()=> (
        <BeneficiariosSection/>
    ))