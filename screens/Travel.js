import React, { useState } from 'react';
import { KeyboardAvoidingView, TextInput, Platform } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

import Item from '../components/Item'

// This is the main container for this screen
const Container = styled.View`
  flex:1;
  background-color: #0d47a1;
`;

const Wrapper = styled.View`
  padding-top:80px;
  padding-horizontal:20px;
`;

const SectionTitle = styled.Text`
  font-size:24px;
  color:#fff;
`;

const ListOfItems = styled.Text`
  margin-top:30px;
`; 


const InputWrapper = styled.KeyboardAvoidingView`
  position:absolute;
  bottom:60px;
  width:100%;
  flex-direction:row;
  justify-content:space-around;
  align-items:center;
`;

const Input = styled.TextInput`
  padding-vertical:15px;
  padding-horizontal:15px;
  background-color: #fff;
  border-radius:60px;
  border-color: #C0C0C0;
  border-width:1px;
  width:250px;
`

const AddButton = styled.View`
  width:60px;
  height:60px;
  background-color:#fff;
  border-radius:60;
  justify-content:center;
  align-items:center;
  border-color: #C0C0C0;
  border-width:1px;


`;

const AddSign = styled.Text`

`;


export const Travel = () => {
  const [item, setItem] = useState();
  const [itemsList, setItemsList] =useState([]);
  //The array of items

  const handleAddItem = () => {
    setItemsList([...itemsList], item)
    //This will change the state of the array ItemsList to 
    //the existing list but adding the new item
  }

  return (
    <Container>
      <Wrapper>
        <SectionTitle>Places I want to visit</SectionTitle>
          <ListOfItems>
            <Item itemName={'Item 1'}/>
            <Item itemName={'Item 2'}/>
            <Item itemName={'Item 3'}/>
            <Item itemName={'Item 4'}/>
            <Item itemName={'Item 5'}/>
          </ListOfItems>
      </Wrapper>
      
      <InputWrapper
        behaviour={Platform.OS==="ios" ? "padding" : "height"}
        >
        <Input placeholder={'Add something to your list...'} value ={item} onChangeText={text => setItem(text)}></Input>
        {/* Everytime the text changes, it will grab whatever the text it is and will set 
        the item to be that text.
        The warning appeared when I added the onChangeText*/}
        <TouchableOpacity onPress={() => handleAddItem()}>
          {/* When pressed it will call the function addItem. The error appeared after adding this*/}
          <AddButton>
            <AddSign>+</AddSign>
          </AddButton>
        </TouchableOpacity>
      </InputWrapper>
      
  
    </Container>
  );
};
