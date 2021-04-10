import React from 'react'
import { FontAwesome } from '@expo/vector-icons'; 
import styled from 'styled-components/native'

const SearchForm = ({setSearchWord, searchWord, onSubmit}) => {

  return (
    <FormWrapper>
      <FontAwesome name="search" size={30} color="white" />
      <Input 
        value={searchWord}
        onChangeText={text => setSearchWord(text)}
        onEndEditing={onSubmit}
        onSubmitEditing={onSubmit}
      />
    </FormWrapper>
  )

}

export default SearchForm

const Input = styled.TextInput`
  padding: 5px;
  font-size: 20px;
  margin: 10px 0 0 5px;
  background-color: #3A3C40;
  border-radius: 5px;
  width: 90%;
  color: white;

`

const FormWrapper = styled.View `
  flex-direction: row;
  justify-content: center;
  align-items: center;
`