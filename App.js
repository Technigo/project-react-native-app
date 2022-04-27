import React, { useState } from 'react';
import { View, Button } from 'react-native';
import styled from 'styled-components/native';

// import ButtonApi from './components/ButtonApi';
import ShakeApi from './components/ShakeApi';
import Header from './components/Header';

// const Container = styled.View`
// 	flex: 1;
// 	background-color: papayawhip;
// 	justify-content: center;
// 	align-items: center;
// 	background-color: pink;
// `;


const App = () => {

	const [color, setColor] = useState({color: 'pink',});
  
    const randomHex =() =>{
      console.log("Func Called");
      let letters = "0123456789ABCDEF";
      let random = "#";
      for (let i = 0; i < 6; i++) {
          random += letters[Math.floor(Math.random() * 16)];
      }
      setColor({
        color: random,
      });
      console.log("New color: "+color.color);
    };


	return (
		<View style={[styles.container, {backgroundColor: color.color }]}>
			<Header />
			{/* <ButtonApi /> */}
			<ShakeApi />
			<Button title="Color" onPress={randomHex}/>
		</View>
	);
}

var styles = {
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    }
  }

export default App;
