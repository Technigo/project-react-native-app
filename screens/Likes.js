import React, { useState, useEffect } from 'react';
import { View, ImageBackground } from 'react-native';
import { Entypo } from '@expo/vector-icons';

import helpers from '../modules/helpers';

import { 
	Container,
	Button,
	ButtonText,
	LikedPhrases,
	Header1,
	LikedPhrase,
	PhraseListItem, 
	Burger,
	WhiteBackground
} from '../styles/styled-components';

const Likes = ({route, navigation, isLoggedIn, phrases, image}) => {
	const { reload } = route.params || false;
	// const { phrases, setPhrases } = helpers.savedPhrases();

	// if (reload) {
	// 	reloadPhrases();
	// };

	// function reloadPhrases() {
	// 	setPhrases(helpers.getSavedPhrases());
	// };

	// useEffect(() => {
	// 	reloadPhrases()
	// }, []);
	
	return (
		// <SafeArea>
		<ImageBackground source={image} resizeMode='cover' style={{width: '100%', flex: 1}}>
        <WhiteBackground>
			<Container>
				<Burger onPress={() => navigation.openDrawer()}>
					<ButtonText>
						<Entypo name='menu' size={30} color='#000' />
					</ButtonText>
				</Burger>
				<Header1>Saved Screen</Header1>
				<View style={{maxHeight: '50%', width: '100%'}}>
					<LikedPhrases>
						<View style={{flex: 1, width: '100%', height: '100%'}}>
							{phrases?.map((phrase, index) => {
								return (
									<LikedPhrase key={index}>
										<PhraseListItem>
											{phrase}
										</PhraseListItem>
									</LikedPhrase>
								)
							})}
						</View>
					</LikedPhrases>
				</View>
				{/* <Button onPress={() => navigation.openDrawer()}>
					<ButtonText>
						Open
					</ButtonText>
				</Button> */}

				<Button onPress={() => navigation.toggleDrawer()}>
					<ButtonText>
					Toggle drawer
					</ButtonText>
				</Button>
				
			</Container>
		</WhiteBackground>
		</ImageBackground>
	);
};

export default Likes;