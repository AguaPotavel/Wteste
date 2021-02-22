import React, { FunctionComponent, useState } from 'react';
import { Image, StyleSheet,TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icons from 'react-native-vector-icons/dist/AntDesign';
import { ApplicationState } from '../store'
import { DoLogin } from '../store/ducks/actions'
// import { login } from '../Services/api'
import {useSelector, useDispatch} from 'react-redux';
import {
  Container,
  Title,
  TitleCard,
  Description,
  BackImage,
  Card,
  FormArea,
  FormLabel,
  FormInput,
  Submit,
  SubmitText,
  Button,
  AlertText,
  FooterText,
  FooterLink,
  LoginFeedback
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
    <LinearGradient locations={[0, 0.6]} style={[styles.linearGradient, { zIndex: 2 }]} colors={['rgba(105, 57, 153, 0.2)', '#130525']}></LinearGradient>
    <BackImage>
      <Image
        style={{ width: "100%" }}
        resizeMode={'cover'}
        source={require('../Assets/Images/background.png')}
      />
    </BackImage>
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
          {submitted && isValid ? <LoginFeedback style={{marginTop: 10, color: 'rgba(42, 232, 96, 1)', zIndex: 5}}>Login Efetuado</LoginFeedback > : null}
          {submitted && isValid == false ? <LoginFeedback style={{marginTop: 10, color: 'rgba(255, 55, 127, 1)', zIndex: 5}}>Login Recusado</LoginFeedback>: null}
        </FormArea>
      </Card>
      <Button>
          <TouchableOpacity style={styles.button} onPress={() => submitForm()}>
          <LinearGradient start={{ x: 0.25, y: 0.25 }} end={{ x: 1, y: 1.0 }} style={styles.linearGradient} colors={['#9D25B0', '#383E71']}></LinearGradient>
            <Submit>
              <SubmitText>entrar</SubmitText>
            </Submit>
          </TouchableOpacity>
        </Button>
        <View style={styles.footer}>
          <FooterText>Esqueceu seu login ou senha?</FooterText>
          <View style={styles.footerContent}>
            <FooterText>Clique</FooterText>
            <TouchableOpacity style={{ marginLeft: 5, zIndex: 10, }} onPress={() => { }}>
              <FooterLink>aqui</FooterLink>
            </TouchableOpacity>
          </View>
        </View>
    </Container>
  </>);
};

const styles = StyleSheet.create({
  linearGradient: {
    position: 'absolute',
    flex: 1,
    width: "100%",
    height: "100%"
  },
  formContainer: {
    position: 'relative',
  },
  iconClose: {
    position: 'absolute',
    bottom: 15,
    right: 17,
    zIndex: 2
  },
  button: {
    position: 'relative',
    left:0,
    right:0,
    width:"100%",
    height:"100%",
  },
  footer: {
    position: 'relative',
    height: 40,
    justifyContent:'center',
    alignItems:'center',
  },
  footerContent: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
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
