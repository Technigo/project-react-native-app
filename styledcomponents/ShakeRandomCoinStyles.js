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
export const RandomCoinTitle = styled(Loading)`
  font-size: 48px;
  color: #ff1e56;
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

export const CoinSymbol = styled(CoinTitle)`
  color: #ffac41;
  margin-bottom: 10px;
`;

export const CoinText = styled(CoinTitle)`
  font-size: 22px;
  padding: 3px 0;
  font-weight: 400;
`;

export const CoinChange = styled(CoinText)`
  ${props =>
  props.percent ?
  `
  color: #bb2205;
  `:  `
  color: #127c56;
  `};
`;

export const Button = styled.TouchableOpacity`
  padding: 20px;
  background-color: #127c56;
  margin-top: 30px;
`;

export const ButtonText = styled(CoinTitle)`
  font-size: 20px;
  text-align: center;
`;