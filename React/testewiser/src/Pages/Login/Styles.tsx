import styled from 'styled-components';

import { Text } from '../../Styles/GlobalStyles';


interface inputProps {
    formatError: boolean;
}

interface TextProps {
    validation: boolean;
}

interface ModalProps {
    isOpen: boolean;
}

export const LoginFormArea = styled.div`
    display: flex;
    background-color: white;
    width:45%;
    justify-content: center;
    align-items: center;
    flex-direction: column
`;

export const Button = styled.div`
    width: 100%;
    height: 48px;
    background: linear-gradient(267.79deg, #383E71 0%, #9D25B0 99.18%);
    box-shadow: 0px 10px 25px #CF99DB;
    border-radius: 8px;
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;
    justify-content: center;
    align-items: center;
    
    @media(max-width: 700px) {
        height: 48px;
    }
`;

export const ButtonText = styled(Text)`
    color: #fff;
    text-transform:uppercase;
    font-size: 16px;
    font-weight: 600;
    line-height: 20px;
`

export const Title = styled(Text)`
    font-size: 40px;
    font-weight: 400;
    line-height: 48px;
    font-style: normal;
    text-shadow: 0 4px 4px;
    color: #383E71;
    width: 100%;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: black;

    @media(max-width: 700px) {
        font-size: 24px;
        font-weight: 400;
        line-height: 32px;
        font-style: normal;
        text-shadow: 0 0 0;
        text-align: center;
        color: #383E71;
        -webkit-text-stroke-width: 0px;
        margin-top: 80px;
    }
`
export const Description = styled(Text)`
    font-size: 16px;
    font-weight: 600;
    line-height: 20px;
    color: #989FDB;
    margin-bottom: 43px;
    margin-top: 16px;

    @media(max-width: 700px) {
        font-size: 12px;
        font-weight: 600;
        line-height: 20px;
        color: #989FDB;
        margin-bottom: 20px;
    }

`

export const TextButton = styled(Text)`
    color: #fff;
    text-transform:uppercase;
    font-size: 16px;
    font-weight: 600;
    line-height: 20px;
`

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;


export const FormInput = styled.input<inputProps>`
    height: 48px;
    border-radius: 8px;
    border-color: ${(props) =>
        props.formatError ? 'rgba(255, 55, 127, 1)' : 'rgba(152, 159, 219, 1)'};

    padding-left: 17px;
    color: rgba(152, 159, 219, 1);
    
    &:focus {
        outline: none;
    }
`;

export const FormLabel = styled.div`
    text-transform: uppercase;
    font-size: 10px;
    font-weight: 400;
    line-height: 48px;
    color: rgba(56, 62, 113, 1);
    padding-left: 11px;
    margin-bottom: -8px;
`;


export const Form = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    margin-right: 20px;
    width: 297px;

    @media(max-width: 768px) {
        width: 297px;
    }

    @media(max-width: 700px) {
        width: 311px;
        background: #fff;
        height: 357px;
        margin-right: 0px;
        padding: 20px;
        border-radius: 8px;
    }
`;

export const Card = styled.div`
    display: flex;
    width: 45%;
    justify-content:center;
    align-items: center;
    z-index: 99;
    
    @media(max-width: 1000px) {
        width: 50%
    }

    @media(max-width: 768px) {
        width: 50%
    }

    @media(max-width: 700px) {
        width: 100%
    }
`;

export const SubmitButton = styled.a`
    width: 100%;
    height: 48px;
    background: linear-gradient(267.79deg, #383E71 0%, #9D25B0 99.18%);
    box-shadow: 0px 10px 25px #CF99DB;
    border-radius: 8px;
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;
    justify-content: center;
    align-items: center;
    transition: 0.3s;
    display: flex;

    @media(max-width: 700px) {
        position:relative;
        bottom: -25px;
        width: 168px;
        line-height: 40px;
        box-shadow: 0px 0px 0px #CF99DB;
        display: block;

        &:hover {
            cursor: pointer;
          }
    }

    &:hover {
        cursor: pointer;
        box-shadow: 5px 10px 15px 5px #CF99DB;
      }
`;


export const Footer = styled.div`
    width: 100%;
    font-size: 14px;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: rgba(152, 159, 219, 1);
    span {
        color: rgba(150, 38, 172, 1);
        font-size: 14px;
        text-decoration: underline;
    }

    @media(max-width: 700px) {
        color: #fff;
        position: relative;
        bottom: -74px;

        span {
            color: rgba(150, 38, 172, 1);
            font-size: 14px;
            text-decoration: underline;
        }
    }
`;

export const AlertText = styled(Text)<TextProps>`
  font-size: 10px;
  line-height: 48px;
  font-weight: 400;
  color: ${(props) =>
    props.validation ? 'rgba(255, 55, 127, 1)': 'rgba(152, 159, 219, 1)'};
  margin-left: 16px;
`;


export const Modal = styled.div<ModalProps>`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: ${(props) =>
        props.isOpen ? 'flex' : 'none'};
    z-index: 9999;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    margin-right: 20px;
    width: 297px;
    height: 297px;
    background: #fff;
    padding: 20px;
    border-radius: 10px;
`;


