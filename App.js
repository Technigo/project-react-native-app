import React from 'react';
import styled from 'styled-components/native';

import StepCounter from './components/StepCounter'

const Container = styled.View`
	flex: 1;
	
`;
const Text = styled.Text`
font-size: 24px;`


const App = () => { 
		return(	
			<Container>
				<StepCounter/>
			</Container>)
	
};

export default App;
