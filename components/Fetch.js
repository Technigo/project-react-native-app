import React, { useEffect } from 'react';
import { View } from 'react-native';

export default function Fetch({ setBeer }) {
	const url = 'http://api.brewerydb.com/v2/beer/random/?key=aedb96e7de02d80914934f14a9e42cfd';

	useEffect(() => {
		fetch(url).then((res) => res.json()).then((json) => setBeer(json.data)).catch((error) => {
			console.error(error);
		});
	}, []);

	return <View />;
}
