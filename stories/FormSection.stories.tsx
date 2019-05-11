import React from 'react';
import { storiesOf } from '@storybook/react';
import LabeledInputTest from '../src/components/LabeledInput';
import BeneficiariosSection from '../src/components/BeneficiariosSection';

storiesOf('Form Sections TEST ONLY', module)
    .add('Beneficiarios', ()=> (
        <BeneficiariosSection/>
    ))