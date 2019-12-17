// import React, { useEffect, useState } from "react"
// import styled from "styled-components/native"
// import { View } from 'react native'
// import { Text } from 'react native'

// const apiKey = `563492ad6f917000010000016674d16c530e444482c459f1837b2a47`
// const url = "https://api.pexels.com/v1/search?query=example+health&per_page=15&page=1"

// const App = () => {
//   const [photos, setPhotos] = useState([])
//   useEffect(() => {
//     fetch(url, { headers: { Authorization: apiKey } })
//       .then(res => res.json())
//       .then(json => {
//         setPhotos(json.photos)
//         console.log(json)
//       })
//   }, []);

/*const App = () => {*/
// return (
// // <Container>
//   {/* return ( */}
//   {/* {photos.map((photo) => (
//     <View>{photo.url}</View> */}
//   {/* //   `<View key={photo.id}>{photo.photographer}</View>`
//   // ))} */}

//   {/* <Title>Petra, this is your cool app!</Title>
//   <Title>Go to App.js and start coding</Title>
//   <Title>💅💅💅</Title>  */}
// {/* </Container > */}
//   )
// }
// export default class DisplayAnImage extends Component {
//   render() {
//     return (
//       <View>
//         <Image
//           style={{ width: 50, height: 50 }}
//           source={{ uri: 'https://api.pexels.com/v1/search?query=example+health&per_page=15&page=1' }}
//         />
//        }}
//       </View>
//     );
//   }
// }

// const Container = styled.View`
//   flex: 1;
//   background-color: papayawhip;
//   justify-content: center;
//   align-items: center;
// `
// const Title = styled.Text`
//   font-size: 24px;
//   color: palevioletred;
// `
// export default App

//trying another app-solution below 

import React from "react"
import { StyleSheet, Text, View, Button } from "react-native"
import Header from "./components/Header"
import Counter from "./components/Counter"

export default function App() {
  return (
    <View style={styles.container}>
      <Header title='Hello gourgeous!' />
      <Counter />
      <Header title='See you soon!' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "purple",
    alignItems: "center",
    justifyContent: "space-around",
  }
})

// return (
//   <ImageBackground source={...} style={{width: '100%', height: '100%'}}>
//     <Text>Inside</Text>
//   </ImageBackground>
// );


// => {
//   return (
//     <Container>
//       <Title>This is your cool app!</Title>
//       <Title>Go to App.js and start coding</Title>
//       <Title>💅💅💅</Title>
//     </Container>
//   )
// }

// const Container = styled.View`
//   flex: 1;
//   background-color: papayawhip;
//   justify-content: center;
//   align-items: center;
// `

// const Title = styled.Text`
//   font-size: 24px;
//   color: palevioletred;
// `

// export default App
