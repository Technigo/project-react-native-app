import styled from 'styled-components/native';

// All the styles for page with all the cryptocurrencies
export const Wallet = styled.View`
padding: 0 0 10px 12px;
display: flex;
flex-direction: row;
align-items: center;
background-color: black;
`;

export const WalletImage = styled.Image`
margin-right: 10px;
width: 32px;
height: 32px;
`;

export const WalletText = styled.Text`
font-size: 16px;
color: white;
font-weight: bold;
font-family: "Trebuchet MS";
`;

export const Container = styled.ScrollView`
flex: 1;
background-color: black;
`;

export const CoinCardContainer = styled.View`
display: flex;
justify-content: space-between;
background-color: black;
border: 1px solid white;
padding: 3px;
margin: 3px 6px;
`;

export const CoinCardTop = styled.View`
display: flex;
justify-content: space-between;
flex-direction: row;
padding: 4px;
`;

export const CoinCardBottom = styled(CoinCardTop)`
padding-top: 0;
`;

export const CoinTitle = styled.Text`
color: white;
font-size: 16px;
font-weight: bold;
font-family: "Trebuchet MS";
`;

export const CoinInfo = styled.Text`
color: white;
font-size: 15px;
font-family: "Trebuchet MS";
`;

export const CoinSymbol = styled.Text`
color: #ffac41;
font-size: 18px;
font-weight: bold;
font-family: "Trebuchet MS";
`;

export const ButtonContainer = styled.View`
display: flex;
flex-direction: row;
`;

export const BuyButton = styled.TouchableOpacity`
padding: 3px 5px;
background-color: #127c56;
border-radius: 2px;
${props =>
props.disabled ?
`
opacity: 0.3;
`:  `
opacity: 1;
`};
`;

export const SellButton = styled(BuyButton)`
margin-left: 7px;
background-color: #ff1e56;
`;