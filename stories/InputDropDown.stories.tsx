import React from 'react';
import { storiesOf } from '@storybook/react'
import InputDrop from  '../src/components/InputDropdown'


storiesOf('InputDropdown', module)
    .add("no placeholder", () => (
        <InputDrop options={['Izquierda', 'Derecha']}/>
    ))

    .add("with placeholder", () => (
        <InputDrop placeholder='Provincia' options={['San Jose', 'Alajuela', 'Heredia', 'Cartago', 'Limon', 'Puntarenas', 'Guancaste']}/>
    ))