import React, { useState, useEffect } from 'react'
import { View, Text, Image, ImageBackground, TouchableOpacity, ActivityIndicator, Vibration } from 'react-native'
import styled from 'styled-components/native'
import { Accelerometer } from 'expo-sensors'
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts, K2D_700Bold } from '@expo-google-fonts/k2d';


const ShakeApi = () => {
    const [data, setData] = useState({
        x: 0,
        y: 0,
        z: 0,
    });
    const [randomCoin, setRandomCoins] = useState([])
    const [loading, setLoading] = useState(false)
    const [subscription, setSubscription] = useState(null);
    const [fontsLoaded] = useFonts({
        K2D_700Bold,
    });

    useEffect(() => {
        generateQuote()
    }, [])

    useEffect(() => {
        Accelerometer.setUpdateInterval(1000);
        subscribe();
        return () => unsubscribe();
    }, []);

    useEffect(() => {
        if (isShakingEnough(data)) {
            Vibration.vibrate()
            generateQuote()
        }
    }, [data]); //every time the data property will change

    const subscribe = () => {
        setSubscription(
            Accelerometer.addListener(accelerometerData => {
                setData(accelerometerData);
            })
        );
    };

    const unsubscribe = () => {
        subscription && subscription.remove();
        setSubscription(null);
    };


    const generateQuote = () => {
        setLoading(true)
        fetch('https://api.coinstats.app/public/v1/coins?skip=0&limit=30&currency=SEK')
            .then((res) => res.json())
            .then((data) => {
                const randomCoin = data.coins[Math.floor(Math.random() * data.coins.length)]
                setRandomCoins(randomCoin)
            })
            .finally(() => setLoading(false))
    }
    const isShakingEnough = (data) => {
        const totalForce = Math.abs(data.x) + Math.abs(data.y) + Math.abs(data.z);
        return totalForce > 1.78; //boolean
    };

    if (loading || !fontsLoaded) {
        return <ActivityIndicator size="large" />
    }
    const separator = randomCoin.length !== 0 ? randomCoin.marketCap.toString().split('.') : ''
    const separatorOne = separator[0] ? separator[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",") : ''

    return (
        <ScreenBackground resizeMode='cover' source={require('../assets/phoneholding.jpg')}>
            <Container>
                <CoinCard>
                    <NameCoinCard>
                        <CoinTitle style={{ fontFamily: 'Questrial_400Regular' }}>{randomCoin.name}</CoinTitle>
                        <Image
                            style={{
                                height: 100,
                                width: 100,
                                borderRadius: 50,
                            }}
                            source={{ uri: `${randomCoin.icon}` }}
                        />
                        <CoinPrice>{Math.round(randomCoin.price * 1000) / 1000} $ <SymbolText>{randomCoin.symbol}</SymbolText></CoinPrice>
                        <MarketCap >Market Cap: {separatorOne} $</MarketCap>
                    </NameCoinCard>
                    <BackgroundColor colors={['rgba(149,149,149,0.2)', 'rgba(255,253,253,0.3)']}>
                        <InfoCard>
                            <CoinText style={{ fontFamily: 'K2D_700Bold' }}>1h:
                                <CoinChange amount={randomCoin.priceChange1h}> {randomCoin.priceChange1h} $</CoinChange>
                            </CoinText>
                            <CoinText style={{ fontFamily: 'K2D_700Bold' }}>1d:
                                <CoinChange amount={randomCoin.priceChange1d}> {randomCoin.priceChange1d} $</CoinChange>
                            </CoinText>
                            <CoinText style={{ fontFamily: 'K2D_700Bold' }}>1w:
                                <CoinChange amount={randomCoin.priceChange1w}> {randomCoin.priceChange1w} $</CoinChange>
                            </CoinText>
                        </InfoCard>
                    </BackgroundColor>

                </CoinCard>
            </Container>
        </ScreenBackground>
    )
}

export default ShakeApi

const Container = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: rgba(118, 142, 176, 0.8);
`
const InfoCard = styled.View`

`
const CoinCard = styled.View`
  display: flex;
  justify-content: space-around;
  flex: 1;
`;
const CoinPrice = styled.Text`
    font-size: 25px;
    padding: 5px 0;
    color: white;
    font-weight: 700;
    text-align: center;
`

const CoinTitle = styled.Text`
  color: whitesmoke;
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 0px;
  padding: 15px;
  margin-top: -15px;
`;
const SymbolText = styled.Text`
    color: orange;
    font-weight: bold;
    font-size: 25px;
`

const CoinText = styled(CoinTitle)`
  font-size: 30px;
  padding: 10px 0;
  text-align: center;
  letter-spacing: 1px;
`;
const MarketCap = styled.Text`
    font-size: 19px;
    color: lightgrey;
`

const CoinChange = styled(CoinText)`
  ${props => props.amount > 0
        ? `
  color: #076221;
  `: `
  color: #9a2112;
  `};
`;
const ScreenBackground = styled.ImageBackground`
	height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const NameCoinCard = styled.View`
    display: flex;
    align-items: center;
`
const BackgroundColor = styled(LinearGradient)`
  position: relative;
  min-width: 400px;
  max-height: 300px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  padding: 10px;
  margin-bottom: 230px;
`