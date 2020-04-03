import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';

export default function RandomBeer({ beer, setPress }) {
	const [ style, setStyle ] = useState();
	const styleId = beer.style.id;
	const url = `http://api.brewerydb.com/v2/style/${styleId}/?key=aedb96e7de02d80914934f14a9e42cfd`;

	useEffect(() => {
		fetch(url).then((res) => res.json()).then((json) => setStyle(json.data.name)).catch((error) => {
			console.error(error);
		});
	});

	console.log(style + ' style efter');

	return (
		<View>
			<Text>NAME: {beer.name}</Text>
			<Text>ABV: {beer.abv}%</Text>
			<Text>STYLE: {style}</Text>
			{setPress(false)}
		</View>
	);
}
