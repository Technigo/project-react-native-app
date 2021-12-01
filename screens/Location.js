// import React, { useState, useEffect} from "react";
// import { Text, Button, ActivityIndicator } from 'react-native'
// import styled from "styled-components/native";
// import * as Location from 'expo-location' 


// const CenteredView = styled.View`
// display: flex;
// align-items: center;
// margin: 0 auto;
// `

// const QuoteText = styled.Text`
//     font-weight: 700;
//     text-align: center;
//     padding: 32px;
//     background-color: #1a1a1a;
//     margin: 32px;
//     font-size: 18px;
//     color: #fff;
// `

// const ButtonText = styled.Text`
//     color: white;
// `

// const APIButton = styled.TouchableOpacity`
//     width: 50%;
//     background-color: #1a1a1a;
//     height: 48px;
//     display: flex;
//     justify-content: center;
//     padding: 16px;
//     border-radius: 8px;
//     margin: 16px;
// `


// export const ButtonApi = () => {
//     const [quote, setQuote] = useState ({})
//     const [loading, setLoading] = useState(false)
//     const [location, setLocation] = useState(null)

//     useEffect(() => {
//         generateQuote()
//     }, [])
   

//     const generateQuote = () => {
//         setLoading(true)
//         fetch("http://api.quotable.io/random")
//         .then((res) => res.json())
//         .then((quote) => setQuote(quote))
//         .finally(() => setLoading(false))
//     }

//     const getLocation = () => {
//         let data = Location.requestForegroundPermissionsAsync();
//         if (data.status !== 'granted') {
//             console.log('Permiission to access location was denied')
//       } else {
//           let location = Location.getCurrentLoacationPermissionsAsync({})
//           setLocation(location)
//       }

//       let location = await Location.getCurrentPositionAsync({});
//       setLocation(location);
//   }


//     }

//     if (loading) {
//         return <ActivityIndicator/>
//     }

//     return (
//         <CenteredView>
//             <CenteredView>
//                 <QuoteText>{quote.content}</QuoteText>
//             </CenteredView>
//             <Text>Author: {quote.author}</Text>
//             <APIButton onPress={generateQuote}>
//                 <ButtonText>Generate quote!</ButtonText>
//             </APIButton>
//         </CenteredView>

//     )
// }
