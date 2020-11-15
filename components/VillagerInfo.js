import React from 'react'
import { View, Image } from 'react-native'
import styled from 'styled-components/native'

import { Title } from './Title'
import { BodyTextStyle } from './BodyTextStyle'

const profileImage = styled.Image`
  height: 200px;
  width: 200px;
  border-radius: 50%;
  overflow: hidden;
`

const VillagerInfo = ({ navigation, route }) => {
  return (
    <View>
      <Title>{route.params.thingtopass}</Title>
      <Title>{villager.name}</Title>
      <Image source={villager.icon_uri} style={profileImage} />
      <BodyTextStyle>
        Catch Phrase: {villager.catch-phrase}
      </BodyTextStyle>
      <BodyTextStyle>
        Personality: {villager.personality}
      </BodyTextStyle>
      <BodyTextStyle>
        Hobby: {villager.hobby}
      </BodyTextStyle>
      <BodyTextStyle>
        Birthday: {villager.birthday-string}
      </BodyTextStyle>
      <BodyTextStyle>
        {villager.saying}
      </BodyTextStyle>
    </View>
  )
}

export default VillagerInfo