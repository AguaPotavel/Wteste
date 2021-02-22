import styled from 'styled-components/native';

const Text = styled.Text`
  font-family: 'Montserrat-Regular';
`;

export const Submit = styled.View`
  position: relative;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.View`
    height: 48px;
    width: 168px;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    position: relative;
    top: -40px
    background: rgba(255, 255, 255, 1);
    overflow: hidden;
    z-index:5;
`;

export const SubmitText = styled(Text)`
  position: relative;
  font-size: 16px;
  line-height: 20px;
  font-weight: 600;
  color: rgba(255, 255, 255, 1)
  text-transform: uppercase;
`;