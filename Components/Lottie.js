import React from 'react';

//import LottieView from 'lottie-react-native';
import LottieView from 'react-native-web-lottie'; 
import styled from 'styled-components/native';

import LottieAnimation from '../assets/animations/loader-movie.json';

const Lottie = () => {
	return (
		<Container>
			<LottieView 
				source={LottieAnimation}
				autoPlay 
				loop
			/>
		</Container>
	);
};
export default Lottie;

const Container = styled.View `
	flex: 1;
	background-color: #FC98C4;
	justify-content: center; 
	align-items: center;
`