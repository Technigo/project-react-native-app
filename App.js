import React, { useState } from 'react'

import styled from 'styled-components/native'
import { Entypo } from '@expo/vector-icons';


import backgroundImage from './assets/banana.png';


import IntentionsItem from './components/IntentionsItem';
import IntentionInput from './components/IntentionInput';



const Container = styled.ImageBackground`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 40px;
  width: 100%;
`;

const Title = styled.Text`
  font-size: 50px;
  color: #383E42;
  text-align: center;
  margin-top: 150px;
`;

const ButtonAdd = styled.TouchableOpacity`
  padding: 10px;
  border-radius: 50px;
  border: 2px green;
  margin: 15px;
`;

const StyledList = styled.FlatList`
  width: 100%;
`;


const App = () => {
  // const [enteredIntention, setEnteredIntention] = useState('');
  const [dailyIntentions, setDailyIntentions] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addIntentionHandler = IntentionTitle => {       //getting user input and storing it
    // console.log(enteredIntention);
      setDailyIntentions(currentIntentions => [
        ...currentIntentions,
        { id: Math.random().toString(), value: IntentionTitle }
      ]);       //takes existing intentions in old array adding intentions in new array
      setIsAddMode(false);  
    };

    // deletes list item when pressed
  const removeIntentionHandler = intentionId => {
    setDailyIntentions(currentIntentions => {
      return currentIntentions.filter(intention => intention.id !== intentionId);
    });
  };

  const cancelIntentionAddHandler = () => {
    setIsAddMode(false);
  };  

  return (
      <Container source={backgroundImage}>
          <Title>Tiny Daily Intentions App</Title>
          {/* when button pressed add an entered intention */}
          <ButtonAdd title="Add new Intention" onPress={() =>setIsAddMode(true)}>
            <Entypo name="add-to-list" size={30} color="#383E42" /> 
          </ButtonAdd>  
          <IntentionInput 
            visible={isAddMode} 
            onAddIntention={addIntentionHandler} 
            onCancel={cancelIntentionAddHandler}
          />
        <StyledList
            keyExtractor={(item, index) => item.id}
            data={dailyIntentions}
            renderItem={itemData => (
          <IntentionsItem
            id={itemData.item.id}
            onDelete={removeIntentionHandler}
            title={itemData.item.value}
            />
          )}
        />
      </Container> 
);
};

export default App;
