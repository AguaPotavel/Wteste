import React, { useState, useEffect } from "react";
import {
  Title,
  Description,
  FormInput,
  Form,
  InputContainer,
  FormLabel,
  SubmitButton,
  TextButton,
  Card,
  Footer } from './Styles';

export default function Login(): JSX.Element {
  return (
    <Card>
      <Form>
        <Title>Olá, seja<br />bem-vindo!</Title>
        <Description>Para acessar a plataforma, faça seu login.</Description>
        <InputContainer>
          <FormLabel>Email</FormLabel>
          <FormInput placeholder="user.name@mail.com" />
        </InputContainer>
        <InputContainer>
          <FormLabel>Senha</FormLabel>
          <FormInput placeholder="*******" />
        </InputContainer>
        <SubmitButton>
          <TextButton>Entrar</TextButton>
        </SubmitButton>
        <Footer>
          Esqueceu seu Login ou senha? <br/>
          Clique <span>aqui</span>
        </Footer>
      </Form>
    </Card>
  );
}
