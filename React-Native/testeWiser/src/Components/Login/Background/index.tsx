import React, {FunctionComponent} from 'react';
import {StyleSheet, Image} from 'react-native';
import {BackImage} from './Styles';
import LinearGradient from 'react-native-linear-gradient';

const Background: FunctionComponent = () => {
  return (
    <>
      <LinearGradient
        locations={[0, 0.6]}
        style={[styles.linearGradient, {zIndex: 2}]}
        colors={['rgba(105, 57, 153, 0.2)', '#130525']}
      />
      <BackImage>
        <Image
          style={{width: '100%'}}
          resizeMode={'cover'}
          source={require('../../../Assets/Images/background.png')}
        />
      </BackImage>
    </>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    position: 'absolute',
    flex: 1,
    width: '100%',
    height: '100%',
  },
});

export default Background;
