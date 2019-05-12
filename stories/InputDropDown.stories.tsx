import React from 'react';
import { storiesOf } from '@storybook/react'
import InputDrop from  '../src/components/InputDropdown'


storiesOf('InputDropdown')
    .add("no placeholder", () => (
        <InputDrop> 
            <option>Izquierda</option>
            <option>Derecha</option>
        </InputDrop>
    ))

    .add("with placeholder", () => (
        <InputDrop placeholder="Provincia"> 
            <option>San Jose</option>
            <option>Alajuela</option>
            <option>Heredia</option>
            <option>Cartago</option>
            <option>Limon</option>
            <option>Puntarenas</option>
            <option>Guancaste</option>
        </InputDrop>
    ))