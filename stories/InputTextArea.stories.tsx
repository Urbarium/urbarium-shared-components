import React from 'react';
import {storiesOf} from '@storybook/react';
import Input from '../src/components/InputTextArea';


storiesOf('InputTextArea', module)
    .add('Fill available space', () =>([
        <p>Available Space</p>,
        <div style={{width: "500px", height: "200px", padding:"10px", border:" 1px dashed"}}><Input fill/></div>
    ]))
    .add('default size - With placeholder', () =>(
        <Input placeholder="Direccion exacta"/>
    ))
    .add('default size - With values', () =>(
        <Input value="Texto de prueba"></Input>
    ))
    .add('default size - Empty', () =>(
        <Input/>
    ))