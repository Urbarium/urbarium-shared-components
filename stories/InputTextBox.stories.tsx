import React from 'react';
import {storiesOf} from '@storybook/react';
import InputTextBox from '../src/components/InputTextbox';


storiesOf('InputTextBox', module)
    .add('Fill available space', () =>([
        <p>Available Space</p>,
        <div style={{width: "500px", height: "200px", padding:"10px", border:" 1px dashed"}}><InputTextBox fill/></div>
    ]))
    .add('default size - With placeholder', () =>(
        <InputTextBox placeholder="Direccion exacta"/>
    ))
    .add('default size - With values', () =>(
        <InputTextBox value="Texto de prueba"></InputTextBox>
    ))
    .add('default size - Empty', () =>(
        <InputTextBox/>
    ))