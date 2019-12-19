import React, { useEffect, useState } from "react";
import styled from "styled-components"
import { Image, View, Text, ScrollView } from 'react-native';
import Header from "./components/Header"


// import { ButtonCss } from "./components/ButtonCss"
// import { Button } from "./components/Button"

const apiKey = `563492ad6f917000010000016674d16c530e444482c459f1837b2a47`
const url = "https://api.pexels.com/v1/search?query=example+health&per_page=15&page=1"
const App = () => {

  const [photos, setPhotos] = useState([])
  useEffect(() => {
    fetch(url, { headers: { Authorization: apiKey } })
      .then(res => res.json())
      .then(json => {
        setPhotos(json.photos)
        console.log(json)
      })
  }, [])


  return (
    <Container><ScrollView>
      <Header title='The most popular photos' />
      {photos.map((photo) => (
        <View key={photo.id}>
          <Text>Photographer: {photo.photographer}</Text>
          <Image
            source={{ uri: photo.src.original }}
            style={{ width: 300, height: 300 }} />
        </View>
      ))}
    </ScrollView></Container>
  )
}
export default App

const Container = styled.View`
  paddingHorizontal: 60;
  paddingVertical: 20;
  flexWrap: wrap;
  flexDirection: row;
  background-color: peachpuff;
  justifyContent: space-between;
  alignContent: center;
`

// export default class App extends Component {
//   imagePressed() {
//     Alert.alert('image pressed the photo')
//   }
//   render() {
//     return (
//       <View style={styles.container}>
//         <TouchableOpacity onPress={() => imagePressed()}>
//           <Image
//             style={{ height: 200, width: 200 }}
//             source={require({ uri: photo.src.photographer })}
//           />
//         </TouchableOpacity>
//       </View>
//     );
//   }
// }

