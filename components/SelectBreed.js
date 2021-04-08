import React, {useState, useEffect} from 'react'
import styled from 'styled-components/native'
import {Picker} from '@react-native-picker/picker'

const Container = styled.View`
  
  background-color: red;
  justify-content: center;
  width: 230px;
  height: 100px;

`

export const SelectBreed = () => {
  const [selectedLanguage, setSelectedLanguage] = useState();

  return (
    <Container>
      <Picker
        selectedValue={selectedLanguage}
        onValueChange={(itemValue, itemIndex) =>
        setSelectedLanguage(itemValue)
        }>
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>
    </Container>
  )
}