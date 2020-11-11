import React from 'react';

import LottieView from 'lottie-react-native';
//import { Text, View} from 'react-native';
import styled from 'styled-components/native' 

const Container = styled.View `
	flex: 1;
	background-color: #FC98C4;
	justify-content: center; 
	align-items: center;
`

const Lottie = () => {
	return (
		<Container>
			<LottieView 
				source={require('../assets/animations/loader-movie.json')} 
				autoPlay 
			/>
		</Container>
		
	);
};
export default Lottie;
