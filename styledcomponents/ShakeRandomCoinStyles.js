import styled from 'styled-components/native';

// Styles for page with random coin either via shake or button press
export const Container = styled.View`
  flex: 1;
  justify-content: center;
  background-color: black;
`;

export const Loading = styled.Text`
  text-align: center;
  font-size: 40px;
  color: #ff1e56;
  font-weight: bold;
  margin-bottom: 40px;
`
export const RandomCoinTitle = styled.Text`
  font-size: 48px;
  text-align: center;
  color: #ff1e56;
  font-weight: bold;
  font-family: "Trebuchet MS";
`;

export const CoinCard = styled.View`
  padding: 40px 20px;
  margin: 60px 20px 30px 20px;
  border: 1px solid white;
`;

export const CoinTitle = styled.Text`
  color: white;
  font-size: 28px;
  font-weight: bold;
  font-family: "Trebuchet MS";
`;

export const CoinSymbol = styled.Text`
  color: #ffac41;
  font-size: 26px;
  font-weight: bold;
  margin-bottom: 10px;
  font-family: "Trebuchet MS";
`;

export const CoinText = styled.Text`
  color: white;
  font-size: 20px;
  padding: 3px 0;
  font-family: "Trebuchet MS";
`;

export const Button = styled.TouchableOpacity`
  padding: 20px;
  background-color: #127c56;
  margin-top: 30px;
`;

export const ButtonText = styled.Text`
  font-size: 20px;
  color: white;
  font-weight: bold;
  text-align: center;
  font-family: "Trebuchet MS";
`;