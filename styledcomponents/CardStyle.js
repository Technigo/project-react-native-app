import styled from 'styled-components/native';

export const Wallet = styled.View`
padding: 0 0 10px 12px;
display: flex;
flex-direction: row;
align-items: center;
background-color: #ff1e56;
`;

export const WalletImage = styled.Image`
margin-right: 7px;
width: 32px;
height: 32px;
`;

export const WalletText = styled.Text`
font-size: 16px;
color: black;
font-weight: bold;
font-family: "Recursive";
`;

export const Container = styled.ScrollView`
flex: 1;
background-color: #ff1e56;
`;

export const CoinCardBig = styled.View`
display: flex;
justify-content: space-between;
background-color: black;
border: 1px solid white;
padding: 3px;
margin: 5px;
`;

export const CoinCardTop = styled.View`
display: flex;
justify-content: space-between;
flex-direction: row;
padding: 4px;
`;

export const CoinCard = styled(CoinCardTop)`
padding-top: 0;
`;

export const CoinTitle = styled.Text`
color: white;
font-size: 16px;
font-family: "Recursive";
`;

export const CoinInfo = styled.Text`
color: white;
font-size: 15px;
font-family: "Recursive";
`;

export const CoinSymbol = styled.Text`
color: #ffac41;
font-size: 18px;
font-weight: bold;
font-family: "Recursive";
`;

export const ButtonContainer = styled.View`
display: flex;
flex-direction: row;
`;

export const Buy = styled.TouchableOpacity`
padding: 3px 5px;
background-color: #ff1e56;
border-radius: 2px;
${props =>
props.disabled ?
`
opacity: 0.5;
`:  `
opacity: 1;
`};
`;

export const Sell = styled(Buy)`
margin-left: 7px;
`;