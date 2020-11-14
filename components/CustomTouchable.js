import React from 'react';
import styled from "styled-components/native";

const TouchableText = styled.Text`
  background-color: #f3ff03;
  font-size: 32px;
  color: ${props => props.textColor}
  text-align: center;
  padding: 25px;  
  border-radius: 50%;

`;

const CustomTouchableOpacity = styled.TouchableOpacity`
  flex: 3;
  width: 155px;
  height: 80px;
  margin: 10px;
  background-color: ${props => props.backgroundColor};
`
const CustomTouchable = props => (
    <CustomTouchableOpacity onPress={props.onPress} backgroundColor={props.backgroundColor}>
        <TouchableText textcolor={props.textColor}>{props.text}</TouchableText>
    </CustomTouchableOpacity>
)

export default CustomTouchable;