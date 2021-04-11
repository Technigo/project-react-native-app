import React from 'react'
import { 
  Button, 
  View, 
  Text, 
  StyleSheet 
} from 'react-native'

import { Avatar } from 'react-native-elements'

export const Profile = ({  navigation, route }) => {
  const {userName} = route.params

  return (
    <>
      <View style={styles.container}>
        <Avatar 
          rounded
          source={{
            uri:'https://unsplash.com/photos/5xOap58b7yM',
          }}
        >
        </Avatar>
        <Text style={styles.mainText}>
          Welcome {userName} to your profile
        </Text>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 100
  },
  mainText: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
})

