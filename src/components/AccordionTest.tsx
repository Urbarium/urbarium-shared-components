import React from 'react';
import styled from 'styled-components';
import AccItem from './AccordionItem';
import Input from './LabeledInput';

export default () =>
<div>
    <AccItem index='2' title='En conformacion' columns='3fr 1fr'>
        <Input type='checkbox' label='Expediente' options={[
            'Bienes inmuebles',
            'Informe registral',
            'Reporte CSS',
            'Formulario de utilidad',
            'Nacimientos',
            'Declaraciones Juradas',
            'Justificación de propiedades',
            'Escritura de hipoteca',
            'Constancia Salarial',
            'Impuestos al día',
            'Estado Civil'
        ]}/>
        <Input type='checkbox' label='Avalúo' options={['Recibo de Pago']}/>
    </AccItem>
    <AccItem index='3' title='Enviado a entidad' columns='1fr 2fr'>
        <Input type='checkbox' options={[
            'Solicitud de cambio por aváluo',
            'Solicitud de cambios en trámites'
        ]}/>
    </AccItem>
</div>