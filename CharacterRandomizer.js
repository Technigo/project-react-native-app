import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';

//Note! Some comments are in Swedish, beacuse this app is mainly focused on swedish rpg.

//The Character-randomizer component

const CharacterRandomizer = () => {
	const [characterName, setCharacterName] = useState([]);

	//re-used the random selector from my cluedo-project. No need to reinvent the wheel :)
	const randomSelector = (array) => {
		return array[Math.floor(Math.random() * array.length)];
	};

	//sadly I could not find a api with only swedish names
	const API_URL =
		'https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole';

	useEffect(() => {
		fetch(API_URL)
			.then((res) => res.json())
			.then((names) => {
				const randomName = randomSelector(names);
				setCharacterName(randomName);
			});
	}, []);

	//folkslag
	const races = [
		'Human',
		'Insectoid',
		'Mutant',
		'Rese',
		'Robot',
		'Smallpeople',
		'Underground',
		'Ancient',
	];

	const randomRace = () => randomSelector(races);

	//can't use class because it's a reserved keyword
	const klass = ['Warrior', 'Magician', 'Thief'];

	const randomKlass = () => randomSelector(klass);
	//ödesmakt
	const faith = ['Order', 'Chaos', 'Balance'];

	const randomFaith = () => randomSelector(faith);
	//styrka
	const strenght = Math.floor(Math.random() * 18) + 3;
	//smidighet
	const dexterity = Math.floor(Math.random() * 18) + 3;
	//fysik
	const physics = Math.floor(Math.random() * 18) + 3;
	//perception
	const perception = Math.floor(Math.random() * 18) + 3;
	//viljestyrka
	const willpower = Math.floor(Math.random() * 18) + 3;
	//utstrålning
	const appearance = Math.floor(Math.random() * 18) + 3;
	//startkapital
	const startFunds = [
		'A handful worthless pinecones and stones',
		' 3 km',
		'1 sm',
		'5 sm',
		'10 sm',
		'15 sm',
		'20 sm',
		'30 sm',
	];

	const randomStartFunds = () => randomSelector(startFunds);

	//styling
	const TextContainer = styled.View`
		background-color: #dbc3a0;
		justify-content: center;
		align-items: flex-start;
		padding: 20px;
		margin-bottom: 10px;
		border-radius: 12px;
	`;

	const StyledText = styled.Text`
		font-size: 20px;
		text-align: left;
	`;

	return (
		<TextContainer>
			<StyledText>
				Name: {characterName.first} {characterName.last}
			</StyledText>
			<StyledText>Race: {randomRace()}</StyledText>
			<StyledText> Class: {randomKlass()}</StyledText>
			<StyledText> Faith: {randomFaith()}</StyledText>
			<StyledText> Strenght: {strenght}</StyledText>
			<StyledText> Dexterity: {dexterity}</StyledText>
			<StyledText> Physics: {physics}</StyledText>
			<StyledText> Perception: {perception}</StyledText>
			<StyledText> Willpower: {willpower}</StyledText>
			<StyledText> Appearance: {appearance}</StyledText>
			<StyledText>Starting funds: {randomStartFunds()}</StyledText>
		</TextContainer>
	);
};

export default CharacterRandomizer;
