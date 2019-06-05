import React from 'react';
import { storiesOf } from '@storybook/react'
import Input from  '../src/components/InputDropdown'


storiesOf('Input Fields/Dropdown Input', module)
    .add("No placeholder", () => (
        <Input options={['Izquierda', 'Derecha']}/>
    ))
    .add("With placeholder", () => (
        <Input placeholder='Provincia' options={['San Jose', 'Alajuela', 'Heredia', 'Cartago', 'Limon', 'Puntarenas', 'Guanacaste']}/>
    ))
    .add("Preselected", () => (
        <Input placeholder='Provincia' data={3} options={['San Jose', 'Alajuela', 'Heredia', 'Cartago', 'Limon', 'Puntarenas', 'Guanacaste']}/>
    ))