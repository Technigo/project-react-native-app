import React, {useState, useEffect} from 'react'
import styled from 'styled-components/native'
import {View, Text, ActivityIndicator, ScrollView, Button, Image} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'


const Container = styled.View`
  flex: 1;
  background-color: #FFF;
`

const Card = styled.View`
  flex: 1;
  height: 100px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #0074D9;
  border-bottom-width: 1px;
`

const Loading = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #0074D9;
  border-bottom-width: 1px;
`

const Title = styled.Text`
  color: #FFF;
  font-weight: bold;
`

const MissionImage = styled.Image`
  margin-right: 10px;
  width: 50px;
  height: 50px;
`

function LoadingScreen () {
  return (
    <Loading>
      <ActivityIndicator color={"#888"} />
    </Loading>  
  )
}

export const LaunchPadScreen = ({ navigation }) => {
  const [launches, setLaunches] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch('https://api.spacexdata.com/v3/launches/upcoming')
      .then((res) => res.json())
      .then((json) => setLaunches(json))
      .then(() => setIsLoading(false))
  }, [])

  return (
    <Container>
      {isLoading && <LoadingScreen />}

      {!isLoading && <ScrollView>
      {launches.map((launch) => (
              <Card key={launch.mission_name}>
                {/* <MissionImage source={{uri: `${launch.links.mission_patch_small}`,}} /> */}
                <MissionImage source={{uri: `${launch.links.mission_patch_small != null ? launch.links.mission_patch_small : `https://lh3.googleusercontent.com/proxy/E73hCYaKFmDEsnUlrSFA2PGAJGa353-Z1gGySU5yXqLGG_khL-lIOTLJ_21vYmtW9Na3aItsUljzb_om4io13x2p98_sVL0nePnfTRLmmuyIAXB-`}`,}} />
                <TouchableOpacity
                key={launch.mission_name}
                onPress={() => navigation.navigate('Detail', { launch })} // navigating to details screen with the clicked house info passed along
                >
                  <Title key={launch.mission_name}>{launch.mission_name}</Title>
                </TouchableOpacity>
              </Card>
            ))}
      </ScrollView>}
    </Container>
  )
}


