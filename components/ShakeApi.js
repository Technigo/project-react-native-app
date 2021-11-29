import React, {useState, useEffect} from 'react';
// importing core componenets from react native
import { View, Text, ActivityIndicator} from 'react-native';
import styled from 'styled-components/native';
import { Accelerometer } from 'expo-sensors';

const QuoteText = styled.Text`
	font-weight: 700;
`;

const ShakeApi = () => {

	const [quote, setQuote] = useState({});
	const [loading, setLoading] = useState(false);
	// representation of our phone 3 demension
	// tracking the current position of the phone
	const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });

	// communication that we have between sensor that checks where our phone is located and our code
	// subscription is about our code telling from now on (maybe todays date) I would like to contantly get information about the position of the phone
  const [subscription, setSubscription] = useState(null);


	useEffect(() => {
		generateQuote();
	}, []);

	useEffect(() => {
		Accelerometer.setUpdateInterval(1000);
    subscribe();
    return () => unsubscribe();
  }, []);

	useEffect(() => {
    if(isShakingEnough(data)) {
			generateQuote()
		}
  }, [data]);

	const generateQuote = () => {
		setLoading(true);
		fetch('http://api.quotable.io/random')
			.then((res) => res.json())
			.then((quote) => setQuote(quote))
			.finally(() => setLoading(false))
	};

	if(loading) {
		return <ActivityIndicator />
	}

	const isShakingEnough = (data) => {
		const totalForce = Math.abs(data.x) + Math.abs(data.y) + Math.abs(data.z);
		return totalForce > 1.78;
	};
	// this function asks iphone please from now on keep me updated 
  const subscribe = () => {
    setSubscription(
      Accelerometer.addListener(accelerometerData => {
        setData(accelerometerData);
      })
    );
  };
// dont inform me about the subscription 
  const unsubscribe = () => {
    subscription && subscription.remove();
    setSubscription(null);
  };



	const { x, y, z } = data;

	return (
		<View>
			<Text>data x: {x}</Text>
			<Text>data y: {y}</Text>
			<Text>data z: {z}</Text>
			<QuoteText>Quote: {quote.content}</QuoteText>
			<Text>Author: {quote.author}</Text>
		</View>
	)
};

export default ShakeApi;

	// slow and fast is responsible for telling accelometer how often should it check when position changes
  //const _slow = () => {
  //  Accelerometer.setUpdateInterval(1000);
  //};

  //const _fast = () => {
  //  Accelerometer.setUpdateInterval(16);
  //};