import React, { useState } from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { Submit, SubmitText } from '../styles/StylesDefault';
import { Container, TextInput, Label } from './styles';

const Button: React.ElementType<TouchableOpacityProps> = ({
    ...props
  }: TouchableOpacityProps) => {
    const [isFocused, setFocus] = useState(false);
    const isActive: boolean = value === '';
    return (
      <Container>
        <Label isActive={isFocused || isActive}>{placeholder}</Label>
        <TextInput
          {...props}
          onFocus={() => {
            setFocus(true);
          }}
          onBlur={() => {
            setFocus(false);
          }}
        />
      </Container>
    );
  };
  export default Input;