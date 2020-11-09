import React from 'react'

import { TouchableOpacity } from 'react-native-gesture-handler'

//import styled from 'styled-components/native'
import { Text, View} from 'react-native';

const HomePage = ({ navigation }) => {
return (
  <View>
    <TouchableOpacity
        onPress={() => navigation.navigate('Your location')}
      >
        <Text>Press Here</Text>
      </TouchableOpacity>

  </View>
)

}
export default HomePage