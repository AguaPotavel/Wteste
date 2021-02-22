import styled from 'styled-components/native';

const Text = styled.Text`
  font-family: 'Montserrat-Regular';
`;

export const Card = styled.View`
  position:relative;
  margin: 15px 0px;
  align-items: center;
  z-index: 3;
  background: rgba(255, 255, 255, 1);
  border-radius: 8px;
  padding-top:24px;
  padding-horizontal: 27px;
  border-color: ${(props) =>
    props.validation.submitted
      ? props.validation.isValid
        ? 'rgba(66, 245, 96, 1)'
        : 'rgba(255, 55, 127, 1)'
      : 'rgba(255, 255, 255, 0)'}
  border-width: 1px;
`;

export const Container = styled.View`
    position: absolute;
    top:0;
    right:0;
    left:0;
    bottom:0;
    flex:1;
    z-index:3
    justify-content: center;
    align-items: center;
    padding-top: 60px;
`;

export const Title = styled(Text)`
  position: relative;
  font-size: 24px;
  line-height: 32px;
  font-weight: 400;
  color: rgba(56, 62, 113, 1);
  text-align: center;
`;

export const LoginFeedback = styled(Text)`
  position: relative;
  font-size: 18px;
  line-height: 28px;
  font-weight: 400;
  color: rgba(56, 62, 113, 1);
  text-align: center;
`;

export const Description = styled(Text)`
  position: relative;
  font-size: 12px;
  line-height: 20px;
  font-weight: 600;
  color: rgba(152, 159, 219, 1);
  margin-top: 16px;
`;

export const TitleCard = styled.View`
  position: relative;
  justify-content: center;
  align-items: center;
  height: 64px;
`;

export const BackImage = styled.View`
  position: absolute;
  justify-content: center;
  background: rgba(152, 159, 219, 1);
  width: 100%;
`;

export const TextInput = styled.TextInput`
  height: 50px;
  border-bottom-width: 0.5px;
  font-size: 14px;
  color: #24272b;
`;

export const FormArea = styled.View`
  width: 256px;
  margin-bottom: 56px;
`;

export const FormLabel = styled(Text)`
  font-size: 10px;
  line-height: 48px;
  font-weight: 400;
  color: rgba(56, 62, 113, 1)
  text-transform: uppercase;
  margin-left: 10px;
  margin-bottom: -10px;
`;

export const FormInput = styled.TextInput`
  border: 1px solid;
  border-radius: 8px;
  padding-left: 20px;
  border-color: ${(props) =>
    props.formatError ? 'rgba(255, 55, 127, 1)' : 'rgba(152, 159, 219, 1)'};
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

export const AlertText = styled(Text)`
  font-size: 10px;
  line-height: 48px;
  font-weight: 400;
  color: ${(props) =>
    props.validation ? 'rgba(152, 159, 219, 1)' : 'rgba(255, 55, 127, 1)'};
  margin-left: 16px;
`;

export const FooterText = styled(Text)`
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  text-align: center;
  z-index: 3;
  color: rgba(255, 255, 255, 1);
`;

export const FooterLink = styled(FooterText)`
  text-decoration: underline;
`;
