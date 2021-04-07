import React from 'react';
import styled from 'styled-components/native';


const HeaderTextContainer = styled.View`
  flex:0.2;
  justify-content: center;
  align-items: center;
  padding-top:20px;
`;

const HeaderAlert = styled.Text`
  font-size: 48px;
  font-weight: bold;
  color: black;
`;

const Header = () => {
  return (
    <HeaderTextContainer>
      <HeaderAlert>Random jokes</HeaderAlert>
    </HeaderTextContainer>
  )
}

export default Header;