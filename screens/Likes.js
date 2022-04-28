import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
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
	Burger
} from '../styles/styled-components';

export const Likes = ({route, navigation, isLoggedIn, phrases, setPhrases}) => {
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
			<Container>
				<Burger onPress={() => navigation.openDrawer()}>
					<ButtonText>
						<Entypo name='menu' size={30} color='#000' />
					</ButtonText>
				</Burger>
				<Header1>Saved Screen</Header1>
				<View style={{height: '50%', width: '100%'}}>
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
		// </SafeArea>
	);
};
