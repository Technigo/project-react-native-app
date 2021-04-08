import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: space-evenly;
  background-color: black;
`;

export const Loading = styled.Text`
  text-align: center;
  font-size: 40px;
  color: #ff1e56;
  font-weight: bold;
`
export const RandomCoinTitle = styled.Text`
  font-size: 42px;
  text-align: center;
  color: #ffac41;
  font-weight: bold;
  font-family: "Recursive";
`;

export const CoinCard = styled.View`
  flex: 0.6;
  padding: 40px 20px;
  margin: 0px 20px 60px 20px;
  border: 1px solid white;
`;

export const CoinTitle = styled.Text`
  color: white;
  font-size: 28px;
  font-weight: bold;
  font-family: "Recursive";
`;

export const CoinText = styled.Text`
  color: white;
  font-size: 20px;
  padding: 3px 0;
  font-family: "Recursive";
`;

export const CoinSymbol = styled.Text`
  color: #ffac41;
  font-size: 26px;
  font-weight: bold;
  margin-bottom: 10px;
  font-family: "Recursive";
`;

export const Button = styled.TouchableOpacity`
  padding: 20px;
  background-color: #ff1e56;
  margin-top: 40px;
`;

export const ButtonText = styled.Text`
  font-size: 22px;
  color: white;
  font-weight: bold;
  text-align: center;
  font-family: "Recursive";
`;