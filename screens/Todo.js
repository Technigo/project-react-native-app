import React, { useState } from 'react';
import { KeyboardAvoidingView, TextInput, View, TouchableOpacity, Platform, Keyboard } from 'react-native';
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
  const [item, setItem] = useState("");
  const [itemsList, setItemsList] = useState([]);
  //The array of items

  const handleAddItem = () => {
    Keyboard.dismiss();
    setItemsList([...itemsList, item])
    //This will change the state of the array ItemsList to 
    //the existing list but adding the new item
   /*  setItem(null); */
    //This will clear the input
  }

  const deleteItem = (index) => {
    let newList = [...itemsList];
    newList.splice(index,1);
    setItemsList(newList);
  } 

  return (
    <Container>
      <Wrapper>
        <SectionTitle>Places I want to visit</SectionTitle>
          <ListOfItems>
            {
              itemsList.map((singleItem, index) => {
                return (
                  <TouchableOpacity key={index} onPress={() => deleteItem(index)}> 
                    <Item text={singleItem} />
                  </TouchableOpacity>
                )
              })
            }
          </ListOfItems>
      </Wrapper>
      <InputWrapper /* Why is KeyboardAvoidingView not working? */
        behaviour={Platform.OS==="ios" ? "padding" : "height"}
      >
        <Input 
          placeholder={'Add something to your list...'} 
          value ={item} 
          onChangeText={text => setItem(text)}>
        </Input>
        {/* Everytime the text changes, it will grab whatever the text it is and will set 
        the item to be that text. The warning appeared when I added the onChangeText*/}
        <TouchableOpacity onPress={() => handleAddItem()}>
          <AddButton>
            <AddSign>+</AddSign>
          </AddButton>
        </TouchableOpacity>
      </InputWrapper>
    </Container>
  );
};
