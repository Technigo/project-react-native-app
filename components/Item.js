import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styled from 'styled-components/native';


const ItemContainer = styled.View`
  background-color:#fff;
  width:300px;
  padding:15px;
  border-radius:10px;
  flex-direction:row;
  align-items:center;
  justify-content:space-between;
  margin-bottom:20px;
`;

const ItemName = styled.Text`
max-width: 80%;

`;


const ItemLeft = styled.View`
 flex-direction: row;
 align-items: center;
 

`;

const Circular = styled.View`
width:12px;
height:12px;
border-color:#55bcf6;
border-width:2px;
border-radius:5px;

`;

const Square = styled.View`
  width:24px;
  height:24px;
  background-color:#55bcf6;
  opacity:0.4;
  border-radius:5px;
  margin-right:15px;

`;

const Item = (props) => {
  return (
      <ItemContainer>
        <ItemLeft>
          <Square></Square>
          <ItemName>{props.itemName}</ItemName>
        </ItemLeft>
        <Circular></Circular>
      </ItemContainer>
    )
}

export default Item;