import React from 'react'
import styled from 'styled-components/native'
import Moment from 'react-moment';
import { Button } from 'react-native'


const Container = styled.View`
  flex: 1;
  background-color: #FFF;
`

const DefaultContainer = styled.View`
  justify-content: center;
  align-items: center;
  background-color: #0074D9;
`

const CardTitle = styled(DefaultContainer)`
  height: 50px;
  border-bottom-width: 1px;
`

const Card = styled(DefaultContainer)`
  border-bottom-width: 1px;
`

const CardDescription = styled(DefaultContainer)`
  flex: 3;
`

const CardContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  background-color: #0074D9;
  border-bottom-width: 1px;
`

const TextDescription = styled.Text`
  margin-left: 10px;
  margin-right: 10px;
  color: #FFF;
`

const TextInfo = styled.Text`
  color: #FFF;
  margin: 10px;
`

export const DetailScreen = ({ route, navigation }) => {
  const { launch } = route.params

  return (
    <Container>

      <CardTitle>
        <TextInfo>{launch.mission_name}</TextInfo>
      </CardTitle>

      <CardContainer>
        <TextInfo>Launch Date: 
          <Moment unix format="YYYY/MM/DD" element={TextInfo}>{launch.launch_date_unix}</Moment>
        </TextInfo>
        <TextInfo>Rocket: {launch.rocket.rocket_name}</TextInfo>
      </CardContainer>

      <Card>
        <TextInfo>Type: {launch.rocket.second_stage.payloads[0].payload_type}</TextInfo>
      </Card>

      <CardDescription>
        <TextDescription>
          {launch.details}
        </TextDescription>
      </CardDescription>
      
      <Button
        title="Go to Launchpad"
        onPress={() => navigation.navigate('Launchpad')}
      />
    </Container>
  );
}