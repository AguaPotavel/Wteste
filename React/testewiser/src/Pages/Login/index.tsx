import React, { useState } from "react";
import { DoLogin } from '../../store/ducks/actions';
import { useSelector, useDispatch } from 'react-redux';
import { Login } from '../../store/ducks/types';
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
  Footer,
  AlertText,
  Modal,
  ModalContent,
} from './Styles';


interface emailProps {
  value: string;
  error: boolean;
}

interface stateReducer {
  reducers: { data: Login };
}

export default function LoginScreen(): JSX.Element {
  const [email, setEmail] = useState({ value: '', error: false });
  const [password, setPassowrd] = useState('');
  const [modalIsOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();
  const { submitted, isValid } = useSelector(
    (state: stateReducer) => state.reducers.data,
  );

  function validateEmail(_email: emailProps) {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(_email.value) === false) {
      setEmail({ value: _email.value, error: true });
      return false;
    } else {
      return true;
    }
  }

  function submitForm() {
    if (validateEmail(email) === true) {
      dispatch(DoLogin({ email: email.value, password: password }));
      openModal();
    }
  }

  function closeModal(){
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (<>
    <Modal isOpen={modalIsOpen}>
      <ModalContent>
        {isValid ? <Title>Login Bem sucedido!</Title> : <Title>Login Recusado!</Title>}
        <SubmitButton onClick={closeModal}>
          <TextButton>Voltar</TextButton>
        </SubmitButton>
      </ModalContent>
    </Modal>
    <Card>
      <Form>
        <Title>Olá, seja<br />bem-vindo!</Title>
        <Description>Para acessar a plataforma, faça seu login.</Description>
        <InputContainer>
          <FormLabel>Email</FormLabel>
          <FormInput placeholder="user.name@mail.com"
            value={email.value}
            formatError={email.error}
            onChange={(event: any) =>
              setEmail({ value: event.target.value, error: false })
            } />
          {email.error ? (
            <AlertText validation={email.error}>
              Digite um e-mail válido;
            </AlertText>
          ) : null}
        </InputContainer>
        <InputContainer>
          <FormLabel>Senha</FormLabel>
          <FormInput placeholder="*******" type="password" formatError={false}
            onChange={(event: any) => setPassowrd(event.target.value)} />
        </InputContainer>
        <SubmitButton onClick={submitForm}>
          <TextButton>Entrar</TextButton>
        </SubmitButton>
        <Footer>
          Esqueceu seu Login ou senha? <br />
          Clique <span>aqui</span>
        </Footer>
      </Form>
    </Card>
  </>);
}
