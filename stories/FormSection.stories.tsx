import React from 'react';
import { storiesOf } from '@storybook/react';
import LabeledInputTest from '../src/components/LabeledInput';
import BeneficiariosSection from '../src/components/BeneficiariosSectionTest';

storiesOf('TEST PAGE', module)
    .add('TEST- Beneficiarios con Grid', ()=> (
        <BeneficiariosSection/>
    ))
