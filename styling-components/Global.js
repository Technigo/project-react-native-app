import styled from 'styled-components/native';

export const RoundedButton = styled.TouchableOpacity`
  width: 90%;
  padding: 30px;
  margin-top: 20px;
  border-radius: 20px;
  background: #fafafa;
  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.1);
`;

export const ActiveRoundedButton = styled(RoundedButton)`
  background: #454cd8;
`;

export const ButtonText = styled.Text`
  font-size: 24px;
  text-align: center;
`;

export const ActiveButtonText = styled(ButtonText)`
  color: #fff;
`;
