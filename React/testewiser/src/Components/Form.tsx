import React, {FunctionComponent} from 'react';
import { LoginFormArea } from '../Styles/StylesDefault';

interface FunctionProps {
  submitFunction: Function;
}

function Form(props: any): JSX.Element {
  return (
    <LoginFormArea>
      {props.children}
    </LoginFormArea>
  );
}

export default Form;
