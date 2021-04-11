
import React, { useEffect, useState } from 'react';
import { Button, Text, View, Image} from 'react-native';
import styled from 'styled-components/native'

import HeaderFixed from './components/Header'

const App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const onNewDogImage = () => {
    window.location.reload(false);
  }

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => res.json())
        .then(json => setData(json))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
}, [])

  return (
    <View >
      <HeaderFixed />
      <View >
        {isLoading ? <Text>Loading...</Text> : 
        ( 
          <Container>
            <Image 
              source={{ uri: `${data.message}` }} 
              style={{ width: 300, height: 300 }} 
            />
            <Button
              title="Press for More"
              onPress={onNewDogImage}
            />
          </Container>
        )}
      </View>
    </View>
    
  );
};

export default App


const Container = styled.View`
  flex: 1;
  margin-top: 200px;
  justify-content: center;
  align-items: center;
`





