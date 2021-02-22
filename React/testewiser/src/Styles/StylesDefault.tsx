import styled from 'styled-components';

export const LoginFormArea = styled.div`
    display: flex;
    background-color: white;
    width:45%;
    justify-content: center;
    align-items: center;
    flex-direction: column
`;

export const Container = styled.div`
    display: flex;
    background-color:blue;
    flex:1;
    width:100vw;
    height:100%;
    justify-content: flex-end
`;

export const Background = styled.div`
    position: absolute;
    background-color: red;
    top: 0;
    bottom:0;
    left:0;
    right:35%;
    background-size: cover;
    background-image: url(background.jpeg);
`

export const Text = styled.span`
    font-family: 'Montserrat'
`
export const Title = styled(Text)`
    color: #383E71;

`
export const Description = styled(Text)`
    margin-top: 16px;
`

export const FormInput = styled.input`
    border: 1px solid;
    border-radius: 8px;
    padding-left: 20px;
`