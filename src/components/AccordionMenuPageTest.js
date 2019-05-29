import React from 'react';
import AccItem from './AccordionItem';
import Input from './LabeledInput';
import Label from './Label';

export default () =>
<div>
    <AccItem index={1} title='Vista preliminar solicitada' columns='' startDate="12/10/2019" endDate="15/10/2019" user="Juan Jose Alfaro" state={3}>
        <Label>Is this one suppose to be empty? I can't tell from whats shown on Invision</Label>
    </AccItem>
    <AccItem index={2} title='En conformacion' columns='3fr 1fr' startDate="15/10/2019" user="Kimberly Matarrita" state={2}>
        <Input 
            type='checkbox' 
            label='Expediente' 
            options={[
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
            ]}
            data={[1,2,3,4,5,7,8,9,11]}/>
        <Input type='checkbox' label='Avalúo' options={['Recibo de Pago']} data={[1]}/>
    </AccItem>
    <AccItem index={3} title='Enviado a entidad' columns='1fr 2fr' state={2}>
        <Input type='checkbox' options={[
            'Solicitud de cambio por aváluo',
            'Solicitud de cambios en trámites'
        ]}/>
    </AccItem>
    <AccItem index={8} title='Postulada a Bahnvi' columns='1fr 2fr'>
        <Input type='checkbox' options={[
            'Inconsistencias',
            'Declaratoria emitida'
        ]}/>
        <Input type='textarea' placeholder='Notas' fill/>
    </AccItem>
    <AccItem index={9} title='Preparación de documentos para APC' columns='1fr 2fr'>
            <Input type='checkbox' options={[
                'Planos en Sharepoint',
                'Documentos en Sharepoint',
            ]}/>
            <Input type='dropdown' placeholder='Adjuntar documento' options={['Esto deberia ser un boton de archivo, no de dropdown']}/>
    </AccItem>
</div>