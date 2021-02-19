import React from 'react'
import styled from 'styled-components/native'
import { NavigationContainer } from '@react-navigation/native';

import { Tabs } from './Tabs'

const Body = styled.SafeAreaView`
  flex: 1;
  margin-top: 0;
`

const App = () => {
  return (
  <Body>
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  </Body>
  );
}

export default App
