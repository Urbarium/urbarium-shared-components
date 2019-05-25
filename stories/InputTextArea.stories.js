import React from 'react';
import {storiesOf} from '@storybook/react';
import Input from '../src/components/InputTextArea';


storiesOf('Inputs Fields/TextArea Input', module)    
    .add('default size - With placeholder', () =>(
        <Input placeholder="Direccion exacta"/>
    ))
    .add('default size - With values', () =>(
        <Input value="Texto de prueba"></Input>
    ))
    .add('default size - Empty', () =>(
        <Input/>
    ))
    .add('Filling available space', () =>([
        <p style={{color: "red"}}>Available Space</p>,
        <div style={{width: "600px", height: "200px", padding:"10px", border:" 1px red dashed"}}><Input fill/></div>
    ]))