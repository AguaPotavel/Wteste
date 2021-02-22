import React, { FunctionComponent, useState } from 'react';
import { StyleSheet,TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icons from 'react-native-vector-icons/dist/AntDesign';
import { DoLogin } from '../store/ducks/actions'
import {useSelector, useDispatch} from 'react-redux';
import Background from '../Components/Background';
import ButtonCard from '../Components/ButtonCard';
import Footer from '../Components/Footer';
import {
  Container,
  Title,
  TitleCard,
  Description,
  Card,
  FormArea,
  FormLabel,
  FormInput,
  AlertText,
  LoginFeedback,
} from '../Styles/StylesDefault'

interface emailProps {
  value: string,
  error: boolean
}

const LoginScreen: FunctionComponent = (navigation) => {
  const [email, setEmail] = useState({ value: '', error: false })
  const [password, setPassowrd] = useState('')

  const dispatch = useDispatch();
  const { submitted, isValid} = useSelector((state)=> state.reducers.data)
  
  function validateEmail(email:emailProps) {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(email.value) === false) {
      setEmail({ value: email.value, error: true })
      return false;
    }
    else {
      return true;
    }
  }

  async function submitForm() {
    if (validateEmail(email) == true) {
      dispatch(DoLogin({email: email.value, password: password}))
    }
  }

  return (<>
    <Background/>
    <Container>
      <Card validation={{submitted:submitted, isValid: isValid}}>
        <TitleCard>
          <Title>Olá, seja</Title>
          <Title>bem-vindo!</Title>
        </TitleCard>
        <Description>Para acessar a plataforma, faça seu login.</Description>
        <FormArea>
          <FormLabel>e-mail</FormLabel>
          <View style={styles.formContainer}>
            {email.error ? <View style={styles.iconClose}>
              <TouchableOpacity onPress={() => setEmail({ value: '', error: false })}>
                <Icons
                  name="close"
                  color="rgba(255, 55, 127, 1)"
                  size={16}
                />
              </TouchableOpacity>
            </View> : null}
            <FormInput placeholder={'user.name@mail.com'} value={email.value} formatError={email.error} onChangeText={(text:string) => setEmail({ value: text, error: false })} />
          </View>
          {email.error ? <AlertText alert={email.error}>Digite um e-mail válido;</AlertText> : null}
          <FormLabel>senha</FormLabel>
          <FormInput placeholder={'*******'} secureTextEntry={true} onChangeText={(text:string) => setPassowrd(text)} />
          {submitted && isValid ? <LoginFeedback style={{marginTop: 10, color: 'rgba(66, 245, 96, 1)', zIndex: 5}}>Login Efetuado</LoginFeedback > : null}
          {submitted && isValid == false ? <LoginFeedback style={{marginTop: 10, color: 'rgba(255, 55, 127, 1)', zIndex: 5}}>Login Recusado</LoginFeedback>: null}
        </FormArea>
      </Card>
      <ButtonCard submitFunction={submitForm}/>
      <Footer/>
    </Container>
  </>);
};

const styles = StyleSheet.create({
  formContainer: {
    position: 'relative',
  },
  iconClose: {
    position: 'absolute',
    bottom: 15,
    right: 17,
    zIndex: 2
  },
  loginFeedback:{
    width:'100%',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign:'center',
    backgroundColor:'red'
  }
})

export default LoginScreen;
