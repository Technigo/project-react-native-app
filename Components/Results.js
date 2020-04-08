import React, {useState, useEffect} from 'react'
import styled from 'styled-components/native'
import { StyleSheet, View, ScrollView  } from 'react-native'
import {Search} from '../Components/Search'
// import {Results} from '../Components/Search'
// import { useFonts } from '@use-expo/font'
// import {AppLoading} from 'expo'
const styles = StyleSheet.create({

  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  }
})

const Container = styled.View`
  flex: 1;
  flex-direction: column;
  background-color: #FA4960;
  justify-content: center;
  align-items: center;
`

const Title = styled.Text`
  font-size: 18px;
  color: #3B2F90;
  text-align: center; 
  margin: 10px;
`
const AdressTitle = styled.Text`
  font-size: 10px;
  color: #3B2F90;
  text-align: center;
`
const RatingTitle = styled.Text`
  font-size: 10px;
  color: #3B2F90;
  text-align: center;
`
// const MyButton = styled.Button`
//   align-items: center;
//   `
//   const MyButton = styled.Button`
//   align-items: center;
//   background-color: #f194ff;
//   `
// const MyTextInput = styled.TextInput`
//   width: 100; 
//   border-color: gray; 
//   border-width: 1;
//   background-color: 'white'; 
//   text-align: center;


// const styles = StyleSheet.create({
//   button: {
//     alignItems: "center",
//     backgroundColor: "#DDDDDD",
//     padding: 10
//   }


// })

export const Results = () => {
  const [nails, setNails] = useState([])
  

  useEffect(() => {
    fetch('https://maps.googleapis.com/maps/api/place/textsearch/json?query=nailsalon+in+Stockholm&key=AIzaSyBueKIP4VzTd2ksOIa-Gcd0p7ZbL5uWiFA')
    // fetch(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=nailsalon+in+${MyTextInput}&key=AIzaSyBueKIP4VzTd2ksOIa-Gcd0p7ZbL5uWiFA`)
    .then((res) => res.json ())
    .then((json) => {
      setNails(json.results)
    })
  }, []) 

    return (
      <Container>
        <ScrollView>
        {nails.map((nail) => (
      <View key={nail.name}>
      <Title>{nail.name}</Title>
      <AdressTitle>{nail.formatted_address}</AdressTitle>
      <RatingTitle>{nail.rating}/5 ⭐️</RatingTitle>
      <Title>. . . </Title>
      </View>
      
        ))}
        </ScrollView>
      </Container>
    )   
  }
  
 
//   return ( 
//   <Container>
//     {nails.map((nail) =>(
//     <Title>{nail.name}</Title>
//     <InterTitle>{nail.formatted_address}</InterTitle>
    
//     ))}

   





//     {/* <Title> Hello! </Title> 
//     <Title> Where are you? </Title> 
//     <Title> 💅💅💅 </Title>  */}
//     {/* <TextInput 
//       style={{ width: 100, borderColor: 'gray', borderWidth: 1, backgroundColor:'white', textAlign: 'center' }}
//       onChangeText = {text => onChangeText(text)} 
//       value = {value}/> 
//     <MyButton
//           title="Click Me!"
//           color= '#f194ff'
//           onPress={() => Alert.alert('Button with adjusted color pressed')}
//         /> */}
        

//     </Container>
//   )
// }

