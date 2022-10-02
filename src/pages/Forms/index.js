import React from 'react'
import { TextInformation, Body } from './styles'
import { Form } from '../../components/Form'

export const ShippingForm = () => {
  return (
    <>
      <Body>
        <TextInformation>
          <h1>Por favor, insira suas informações pessoais de contato</h1>
        </TextInformation>
      </Body>
      
        <Form />
      
    </> 
  );
}
