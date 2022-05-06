import React from 'react';
import styled from 'styled-components/native';
import TechyApi from './components/TechyApi';
import { ImageBackground } from 'react-native';

const Container = styled.View`
	flex: 1;

	justify-content: center;
	align-items: center;
	margin-top: 20px;
	`;

const Title = styled.Text`
	font-size: 16px;
	color: darkgreen;
`;

const ContainerText = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
	  
    width: 80%;
    padding-left: 20px;
    padding-right: 20px; 
	padding-top: 20px;   
`;

const Technician = styled.Image`
width: 40%;
height: 40%;
background: black;
margin-top: 20px;
padding: 10px;
`;


const App = () => {
	return (
		<Container>
			<Technician source={require('./assets/technicians-at-work.jpg')} />
			<ContainerText>
				<Title>Want to sound like you know what you are talking about? 
				Try these techy expressions:
				👩‍💻👩‍💻👩‍💻</Title>
					
			</ContainerText>
				<TechyApi> </TechyApi>			
		</Container>
	);
};

export default App;


//<ImageBackground
//style={{ flex: 1 }}
//resizeMode="cover"
//source={require("./assets/technicians-at-work.jpg")}>

//</ImageBackground>

//https://dev.to/amanhimself/using-styled-components-with-react-native-4k15

//const Technician = styled.img`
//width:30px;
//height: 20px;
//margin:15px; 
//`;

// <Technician source={require('./assets/technicians-at-work.jpg')} />
//const Technician = styled.Image`
//width: 44px;
//height: 44px;
//background: black;
//border-radius: 22px;
//margin-left: 20px;
//`;

//<ImageBackground
        		//style={{ flex: 1 }}
        		//resizeMode="cover"
        		//source={require("./assets/technicians-at-work.jpg")}>

		//</ImageBackground>