import React from 'react';

import LottieView from 'lottie-react-native'; //for mobile view 
//import LottieView from 'react-native-web-lottie'; //for web view
import LottieAnimation from '../assets/animations/loader-movie.json';
import { LottieContainer } from '../styled-components/styles';

const Lottie = () => {
	return (
		<LottieContainer>
			<LottieView 
				source={LottieAnimation}
				autoPlay 
				loop
			/>
		</LottieContainer>
	);
};
export default Lottie;