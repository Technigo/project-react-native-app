import React from 'react';
import { useState } from 'react'
import { FlatList, TouchableOpacity, StyleSheet, } from 'react-native';
import styled from 'styled-components/native';



// The prop "navigation" is important if you are trying to open/toggle the drawer
//  directly via Javascript
export const Home = ({ navigation }) => {
  const [profiles, setProfiles] = useState ([
    {id: 1001, name: 'Guest User', age: 'Not disclosed', nickname: 'Guest'},
  ])

  return (
    <>
      <HomeContainer>  
        <StyledText>Welcome</StyledText>
              <TouchableOpacity 
                onPress={() => navigation.navigate('Profile')}
                style={styles.TouchableOpacityContainer}>
                <TouchableOpacityText>Sign up</TouchableOpacityText>
              </TouchableOpacity>
      </HomeContainer>
      <NavigationContainer>
        <TouchableOpacity 
          title="Open navigation"  
          onPress={() => navigation.toggleDrawer()} 
          style={styles.TouchableOpacityContainer}>
            <TouchableOpacityText>open navigation</TouchableOpacityText>
        </TouchableOpacity>
      </NavigationContainer>
    </>
  );
};

// This is the main container for this screen

const HomeContainer = styled.SafeAreaView`
  flex: 1;  
  justify-content: center;
  align-content: center;
  align-items: center;
  background-color: #8ECAE6;
  padding: 40px;
`;
const StyledText = styled.Text`
  font-size: 28px;
  font-weight: 800;
  color: #023047;
  text-transform: uppercase;
  background-color: #FFB703;
  padding: 10px;
`;
const styles = StyleSheet.create({
  TouchableOpacityContainer: {
    padding: 10,
    backgroundColor: '#023047',
  }
});
const TouchableOpacityText = styled.Text`
  font-size: 20px;
  font-weight: 800;
  color: #8ECAE6;
  text-transform: uppercase;
`;
const NavigationContainer = styled.SafeAreaView`
  flex: 1;  
  justify-content: center;
  align-items: center;
  background-color: #219EBC;
`;
