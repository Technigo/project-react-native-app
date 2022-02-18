import React, { useState } from 'react'
import { Picker } from '@react-native-picker/picker'
import styled from 'styled-components/native'

const Container = styled.View`
  background-color: #fff;
  justify-content: center;
  align-items: center;
`

export const Select = () => {
  const [selectedLanguage, setSelectedLanguage] = useState()
  return (
    <Container>
      <Picker selectedValue={selectedLanguage} onValueChange={(itemValue, itemIndex) => setSelectedLanguage(itemValue)}>
        <Picker.Item label='Java' value='java' />
        <Picker.Item label='JavaScript' value='js' />
      </Picker>
    </Container>
  )
}
