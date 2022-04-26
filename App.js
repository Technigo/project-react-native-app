import React, {useState, useEffect} from 'react';
import styled from 'styled-components/native';
import { Text } from 'react-native';
import { ScrollView, Dimensions, View, Image } from 'react-native';
import Book from './src/Book';
//import * as Speech from 'expo-speech';
//import * as Sharing from 'expo-sharing';

const Container = styled.View`
	flex: 1;
	background-color: papayawhip;
	justify-content: center;
	align-items: center;
	padding: 40px;
`;

const Slider = styled.ScrollView`
	width: ${props => props.width};
	height: ${props => props.height};
`

const {width} = Dimensions.get('window');
const height = width * 0.6;

const App = () => {
	const [popularBooks, setPopularBooks] = useState([]);

	useEffect(() => {
		fetch('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=L5ECJx1A2ZJ7sZfl75Q1v5QmD1FooUTj')
		.then(res => res.json())
		.then(data => setPopularBooks(data.results.books))
	}, [])

	return (
		<Container>
			<Slider 
				horizontal 
				pagingEnabled 
				showsHorizontalScrollIndicator={false} 
				width={width}
				height={height}
			>
			{popularBooks.map(item =><Book book={item}/>)}
			</Slider>	
		</Container>
	);
};

export default App;

//Map over array, display the book

