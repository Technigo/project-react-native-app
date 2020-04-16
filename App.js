import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';
import Weather from './components/Weather';
import Compass from './components/Compass';
import Heading from './components/Heading';
import MyLocation from './components/MyLocation';

const Container = styled.View`
	flex: 1;
	background-color: black;
	justify-content: center;
	align-items: center;
`;

const ImageContainer = styled.ImageBackground`
	flex: 1;
	resize-mode: cover;
	justify-content: center;
`;

const ScrollContainer = styled.ScrollView.attrs({
  contentContainerStyle: props => {
    return {
			height: 1200,
			width: 450,
      alignItems: 'center',
      justifyContent: 'center'
    }
  }
})``

const App = () => {
	const [ myCord, setMyCord ] = useState({ latitude: 0, longitude: 0 });
	const [ count, setCount ] = useState(0);
	return (
		<Container>
			<ScrollContainer>
				<ImageContainer source={require('./assets/ForestBackground.jpg')}>
					<Heading />
					<Compass />
					{(myCord.latitude !== 0 || myCord.longitude !== 0) && <Weather myCord={myCord} />}
          <MyLocation myCord={myCord} setMyCord={setMyCord} />
				</ImageContainer>
			</ScrollContainer>
		</Container>
	);
};

export default App;

