import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
	drinkCard: {
		width: 350,
		height: 470,
		backgroundColor: 'rgba(255, 255, 255, 0.5)',
		alignItems: 'center',
		display: 'flex',
		justifyContent: 'space-between',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 3,
		},
		shadowOpacity: 0.27,
		shadowRadius: 4.65,
		elevation: 6,
	},
	drinkImage: {
		marginTop: 10,
		width: 320,
		height: 310,
	},
	textWrapper: {
		width: 320,
		height: 100,
	},
});

const RandomDrink = () => {
	const [drink, setDrink] = useState({});

	const generateDrink = () => {
		const options = {
			method: 'GET',
			headers: {
				'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com',
				'X-RapidAPI-Key': '7e0631af1amsh1b47753e6b95daep1be03djsn4f7401f08aef',
			},
		};

		fetch('https://the-cocktail-db.p.rapidapi.com/random.php', options).then(
			(res) => res.json()
		);
		//.then((data) => setDrink(data));
		//.then((res) => console.log(res));
		// .catch((err) => console.error(err));
	};

	useEffect(() => {
		generateDrink();
	});

	return (
		<View>
			{drink.drinks.map((item) => (
				<View key={item.idDrink}>
					<Image source={{ uri: item.strDrinkThumb }} />
					<ScrollView>
						<Text>Drink: {item.strDrink}</Text>
						<Text>Use a: {item.strGlass}</Text>
						<Text>Instructions: {item.strInstructions}</Text>
					</ScrollView>
				</View>
			))}
		</View>
	);
};

export default RandomDrink;
