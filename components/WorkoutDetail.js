import React, { useEffect } from 'react';
import styled from 'styled-components/native';

export const WorkoutDetail = ({route, navigation}) => {
  const { workout } = route.params;

  useEffect(()=> {
    navigation.setOptions({headerShown:false});
  });
  
  return (
    <Container>
      <GifImage source={{uri: 'https://media4.giphy.com/media/tn8zWeNYA73G0/200.webp?cid=ecf05e47x13nr03fqr4i6gvj673lsj1w6nim7jgp9ayiopsi&rid=200.webp'}} />
      <DoTraining>What are you waiting for?</DoTraining>
      <DoTraining>Just go away {workout.type}!</DoTraining>
      <BackButton onPress={() => navigation.goBack()}>
        <TextButton>Go Back!</TextButton>
      </BackButton>
    </Container>
  );
};

const BackButton = styled.TouchableOpacity`
  padding: 10px;
  background-color: #fff;
  padding: 10px;
  border: 2px solid #C8553D;
  margin: 15px;
  width: 180px;
  border-radius: 8px;
  box-shadow: 2px 2px 6px #959695;
`

const TextButton = styled.Text`
  text-align: center;
  justify-content: center;
  align-items: center;
  color: #C8553D;
  font-family: 'Inter-Regular';  
  font-size: 18px;
  letter-spacing: 1px;
`

const Container = styled.View`
  padding: 0px 10px;
  align-items: center;
  flex: 1;
  background-color: #FFD5C2;
`

const DoTraining = styled.Text`
  font-family: 'Inter-Regular';    
  font-size: 26px;
  text-align: center;
  padding: 10px;
  color: #C8553D;
  text-shadow: 0.5px 0.5px 1px #fff;
  text-transform: uppercase;
`

const GifImage = styled.Image`
  width: 200px;
  height: 200px;
  margin: 20px;
`