import React from 'react'
import { Text } from 'react-native'
import styled from 'styled-components/native'

const SearchForm = ({setSearchWord, searchWord, onSubmit}) => {

  return (
    <FormWrapper>
      <Text>🔍</Text>
      <Input 
        value={searchWord}
        onChangeText={text => setSearchWord(text)}
        onEndEditing={onSubmit}
        placeholder="Search here ..."
      />
    </FormWrapper>
  )

}

export default SearchForm

const Input = styled.TextInput`
  padding: 5px;
  font-size: 20px;
  margin: 10px 0;
  background-color: #fff;
  width: 90%;
`

const FormWrapper = styled.View `
  flex-direction: row;
  justify-content: center;
  align-items: center;
`