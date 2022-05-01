import React, {useState} from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
import { Entypo } from '@expo/vector-icons';


import { 
	Container, 
	ButtonText, 
	Button, 
	Header1, 
	Burger, 
	WhiteBackground, 
	BackgroundImage,
	Content,
	Header2
} from '../styles/styled-components';

import helpers from '../modules/helpers';

const Feed = ({ navigation, isLoggedIn, setPhrases, image }) => {
	const [phrase, setPhrase] = useState(null);
	const [loading, setLoading] = useState(false);
	const [disableButton, setDisableButton] = useState(true);

	const onPressphrase = async () => {
		setLoading(true)
		setPhrase(await helpers.getPhrase());
		setLoading(false);
		setDisableButton(false);
	}

	const onSavePhrase = () => {
		if (phrase) {
		setPhrases(phrases => [...phrases, phrase]);
		setDisableButton(true);
		}
	} 

	return (
		<BackgroundImage source={image} resizeMode='cover'>
			<WhiteBackground>
				<Container>
					<Burger onPress={() => navigation.openDrawer()}>
						<ButtonText>
						<Entypo name='menu' size={30} color='#000' />
						</ButtonText>
					</Burger>
					<Header1>Feed Screen</Header1>
					<Content>
						{loading ? <ActivityIndicator size="small" color="hsl(200, 100%, 50%)" />: 
							<Header2>
								{phrase}
							</Header2>
						}
						<Button onPress={onPressphrase} accentColor={true}>
						<ButtonText
							accentColor={true}>
							New phrase
						</ButtonText>
						</Button>
						<Button disabled={(disableButton || !isLoggedIn)} onPress={onSavePhrase} accentColorDisabled={(disableButton || !isLoggedIn)}>
							<ButtonText accentColor={true}>
								Save
							</ButtonText>
						</Button>
					</Content>
				</Container>
			</WhiteBackground>
		</BackgroundImage>
	);
};

export default Feed;
