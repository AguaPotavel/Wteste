import React, { FunctionComponent } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Button, Submit, SubmitText } from '../Styles/StylesDefault'
import LinearGradient from 'react-native-linear-gradient';

const ButtonCard: FunctionComponent = ({submitFunction}) => {
    return (<>
        <Button>
          <TouchableOpacity style={styles.button} onPress={() => submitFunction()}>
          <LinearGradient start={{ x: 0.25, y: 0.25 }} end={{ x: 1, y: 1.0 }} style={styles.linearGradient} colors={['#9D25B0', '#383E71']}></LinearGradient>
            <Submit>
              <SubmitText>entrar</SubmitText>
            </Submit>
          </TouchableOpacity>
        </Button>
    </>)
}

const styles = StyleSheet.create({
    button: {
        position: 'relative',
        left:0,
        right:0,
        width:"100%",
        height:"100%",
      },
      linearGradient: {
        position: 'absolute',
        flex: 1,
        width: "100%",
        height: "100%"
      },
})

export default ButtonCard