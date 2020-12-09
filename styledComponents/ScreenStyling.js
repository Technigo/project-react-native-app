import styled from "styled-components/native";

export const ScreenContainer = styled.ImageBackground`
  flex: 1;
  align-items: center;
  justify-content: space-around;
  padding-top: 60px;
`;

export const Title = styled.Text`
  color: #f4f4f4;
  margin: 10% 0 20px;
  font-size: 30px;
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 3px;
  flex: 1;
`;

export const TextDescription = styled.Text`
  letter-spacing: 3;
  color: #f4f4f4;
  text-align: center;
  text-transform: uppercase;
  font-size: 16px;
  font-weight:bold;
  margin: 0 10px;  
  flex: 5;
`;

export const ScreenWrapper = styled.View`
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  flex: 5;
`;

export const ScreenButton = styled.TouchableOpacity`
  letter-spacing: 3px;
  align-items: center;
  background-color: #f4f4f4;
  padding: 20px;
  margin: 0 20px;
  border-radius: 40px;
`;

export const ScreenButtonText = styled.Text`
  font-size: 18px;
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
  padding: 0 20px;
  color:#524f4f;
`;

export const BallTextInput = styled.TextInput`
    height: 50px; 
    width: 350px;
    border-color: gray;
    background-color: #f4f4f4; 
    border-width: 1px;
    flex: 3;
    border-radius: 30px;
    font-size: 18px;
    text-align: center;
    color: grey;
`;

export const BallTitle = styled.Text`
  color: #f4f4f4;
  margin: 10% 0px 20px;
  font-size: 24px;
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 3px;
  flex: 1;
`;

export const BallTextDescription = styled.Text`
  letter-spacing: 3;
  color: #f4f4f4;
  text-align: center;
  text-transform: uppercase;
  font-size: 16px;
  font-weight:bold;
  margin: 0 10px;  
  flex: 5;
`;

