import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';

import { HeadingOne } from './styled/HeadingOne';

const PlaceContainer = styled.View`
  flex: 0.5;
`

export const Place = () => {
  return (
    <PlaceContainer>
      <HeadingOne>Elysium Planitia</HeadingOne>
    </PlaceContainer>
  )
};
