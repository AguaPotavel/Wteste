import styled from 'styled-components/native';

const Text = styled.Text`
  font-family: 'Montserrat-Regular';
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
