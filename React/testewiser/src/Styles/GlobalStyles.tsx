import styled from 'styled-components';

export const Text = styled.span`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap');
    font-family: 'Montserrat'
`

export const Container = styled.div`
    display: flex;
    flex:1;
    width:100vw;
    height:100%;
    justify-content: flex-end;

    @media(max-width: 700px) {
        justify-content: center;
        align-itens: center;
    }
`;

export const Background = styled.div`
    position: absolute;
    top: 0;
    bottom:0;
    left:-15%;
    right:45%;
    background-size: cover;
    background-image: url(background.jpeg);

    &::after {
        content: '';
        position: absolute;
        background: linear-gradient(0, #130525 0%, rgba(105, 57, 153, 0) 100%);
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
      }
    
    @media(max-width: 1000px) {
        left: -40%;
        right: 50%;
    }

    @media(max-width: 900px) {
        left: -50%;
    }

    @media(max-width: 800px) {
        left: -60%;

    }

    @media(max-width: 700px) {
        left: 0%;
        right: 0%;
        width: 100%;
        display: block;
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-position: center;
        background-image: url(background.jpeg);
        &::after {
            content: '';
            position: absolute;
            background: linear-gradient(0deg, #130525 20%, rgba(105, 57, 153, 0) 100%);
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
          }
    }
`