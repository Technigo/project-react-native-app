import data from '../albums.json';
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

const Albums = () => {
	const [album, setAlbum] = useState({});
	console.log(data.items[2].name);

	const generateAlbum = () => {
		fetch('../albums.json')
			.then((res) => res.json())
			.then((data) => setAlbum(data));
	};

	useEffect(() => {
		generateAlbum();
	});

	return (
		<View>
			<Text>{JSON.stringify(data.items[2].name)} </Text>
		</View>
	);
};

export default Albums;
