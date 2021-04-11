import React from 'react';
import { View, Text, Button } from 'react-native';
import styled from 'styled-components/native';

const NotificationsContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const CarContainer = styled.View `
  width: 100%;
  height: 100%;
`;

const Image = styled.ImageBackground `
  width: 100%;
  height: 100%;
  resize-mode: cover; 
  position: absolute; 
`; 

const CarTitles = styled.View `
  margin-top: 30%;
  width: 100%;
  align-items: center;
`;

const Title = styled.Text `
  font-size: 40px;
  font-weight: 500;
`;

const SubTitle = styled.Text `
  font-size: 16px; 
  color: #5c5e63;
`; 

const NavButton = styled.View `
  justify-content:space-around;
  padding-top: 400px;
`;

export const ModelX = ({navigation}) => {
  return (
    <NotificationsContainer>
      <CarContainer>
        <Image source={require('../assets/images/ModelX.jpeg')} />
        <CarTitles>
          <Title>Model X</Title>
          <SubTitle>Starting at $55,000</SubTitle>
          <NavButton>
            <Button title="Choose a different car" color='white' onPress={() => navigation.openDrawer()} />
          </NavButton>   
        </CarTitles>

      </CarContainer>   
    </NotificationsContainer>
  );
};
