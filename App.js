
import React, { useEffect, useState } from 'react';
import { Text, View, Image} from 'react-native';
// import styled from 'styled-components/native'


const App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch('https://api.thedogapi.com/v1/breeds?api_key=5047efac-32e9-4320-8f3d-a576899fc3ed')
  //     .then((res) => res.json())
  //     .then((json) => setData(json))
  //     .catch((error) => console.error(error))
  //     .finally(() => setLoading(false));
  // }, []);
  // console.log(data[0])


  // "weight": {
  //   "imperial": "6 - 13",
  //   "metric": "3 - 6"
  // },
  // "height": {
  //   "imperial": "9 - 11.5",
  //   "metric": "23 - 29"
  // },
  // "id": 1,
  // "name": "Affenpinscher",
  // "bred_for": "Small rodent hunting, lapdog",
  // "breed_group": "Toy",
  // "life_span": "10 - 12 years",
  // "temperament": "Stubborn, Curious, Playful, Adventurous, Active, Fun-loving",
  // "origin": "Germany, France",
  // "reference_image_id": "BJa4kxc4X",
  // "image": {
  //   "id": "BJa4kxc4X",
  //   "width": 1600,
  //   "height": 1199,
  //   "url": "https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg"
  // }

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => res.json())
        .then(json => setData(json))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
}, [])

  console.log(data.message)
  console.log(data)




  return (

    <View >
      {isLoading ? <Text>Loading...</Text> : 
      ( <View>
          <Text >Dogs:</Text>
          <Text >{data.message}</Text>
          <Image source={{ uri: `${data.message}` }} style={{ width: 305, height: 250 }} />
    

        </View>
      )}
    </View>
  );
};

export default App




// import React from 'react'

// const App = () => {
//   return (
//     <Container>
//       <Title>This Apppppp</Title>
//       <Title>Go to App.js and start coding</Title>
//       <Title>💅</Title>
//     </Container>
//   )
// }

// export default App

// Styled Components Example 

// import styled from 'styled-components/native'

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
