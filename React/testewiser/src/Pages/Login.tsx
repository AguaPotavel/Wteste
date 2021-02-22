import React, { useState, useEffect } from "react";
import { Container, Title,Description, FormInput } from '../Styles/StylesDefault';
import Form from '../Components/Form';
import ButtonSubmit from '../Components/ButtonSubmit'

export default function Login(): JSX.Element {
  return (
     <Form>
       <Title>Olá, seja<br/>bem-vindo!</Title>
       <Description>Para acessar a plataforma, faça seu login.</Description>
       <FormInput placeholder="CUIAD"/>
     </Form>
  );
}
