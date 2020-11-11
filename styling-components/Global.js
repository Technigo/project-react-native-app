import styled from 'styled-components/native';

// Buttons ----------------------------------------------------------------
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

// Cards/wrappers ----------------------------------------------------------------
export const Card = styled.View`
  background: #fff;
  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.1);
  width: 90%;
  border-radius: 20px;
  padding: 50px;
  margin-bottom: 30px;
`;

export const FlexWrapper = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
`;

// Textboxes ----------------------------------------------------------------
// 32px, centered
export const Text_C32 = styled.Text`
  font-size: 32px;
  text-align: center;
`;
