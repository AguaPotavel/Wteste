import React, {FunctionComponent} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {FooterText, FooterLink} from '../../Styles/Login/FooterStyles';

const Footer: FunctionComponent = () => {
  return (
    <View style={styles.footer}>
      <FooterText>Esqueceu seu login ou senha?</FooterText>
      <View style={styles.footerContent}>
        <FooterText>Clique</FooterText>
        <TouchableOpacity
          style={{marginLeft: 5, zIndex: 10}}
          onPress={() => {}}>
          <FooterLink>aqui</FooterLink>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    position: 'relative',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Footer;
