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
	Burger,
	WhiteBackground,
	RemoveButton,
	RemoveButtonText,
	BackgroundImage,
	Content,
	Header2
} from '../styles/styled-components';

const Likes = ({route, navigation, isLoggedIn, phrases, setPhrases, image}) => {
	return (
		<BackgroundImage source={image} resizeMode='cover'>
			<WhiteBackground>
				<Container>
					<Burger onPress={() => navigation.openDrawer()}>
						<ButtonText>
							<Entypo name='menu' size={30} color='#000' />
						</ButtonText>
					</Burger>
					<Header1>Saved phrases</Header1>
					<View style={{maxHeight: '50%', width: '100%'}}>
						{isLoggedIn 
							?   <LikedPhrases>
									{phrases.length 
										?   <Content style={{flex: 1, width: '100%', height: '100%'}}>
												{phrases?.map((phrase, index) => {
													return (
														<LikedPhrase key={index}>
															<PhraseListItem>
																{phrase}
															</PhraseListItem>
															<RemoveButton>
																<RemoveButtonText onPress={() => helpers.removePhrase(phrase, phrases, setPhrases)} remove={true}>
																	<Entypo name='trash' size={30} color='#000' />
																</RemoveButtonText>
															</RemoveButton>
														</LikedPhrase>
													)
												})}
											</Content>
										: <Header2>Go to feed to generate phrases to save</Header2> 
										}
									
								</LikedPhrases>
							:   <Header2>You are not logged in</Header2>}	
					</View>
				</Container>
			</WhiteBackground>
		</BackgroundImage>
	);
};

export default Likes;