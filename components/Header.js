import React from 'react';
import styled from 'styled-components/native';

import fox from '../assets/fox.png';

const HeaderContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Icon = styled.Image`
  width: 24px;
  height: 24px;
`;

const Title = styled.Text`
  font-size: 24px;
  color: brown;
  padding: 0 5px;
`

const Header = () => {
  return (
    <HeaderContainer>
      <Icon source={fox} />
      <Title>Fox generator</Title>
      <Icon source={fox} />
    </HeaderContainer>
  );
};

export default Header;