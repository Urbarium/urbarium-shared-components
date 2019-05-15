import React from 'react';
import { storiesOf } from '@storybook/react'
import Input from  '../src/components/InputDropdown'


storiesOf('InputDropdown', module)
    .add("no placeholder", () => (
        <Input options={['Izquierda', 'Derecha']}/>
    ))

    .add("with placeholder", () => (
        <Input placeholder='Provincia' options={['San Jose', 'Alajuela', 'Heredia', 'Cartago', 'Limon', 'Puntarenas', 'Guancaste']}/>
    ))