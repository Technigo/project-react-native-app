import React, { useState, useEffect } from 'react'

import styled from 'styled-components/native' 
import { Text, ScrollView} from 'react-native';
import Constants from "expo-constants";
//import { render } from 'react-dom';

const MovieList = ({ navigation }) => {
  const [movieList, setMovieList] = useState([])

  const API_KEY = '175ffd5710eba9b52b1d7f46de42a152';
  const API_URL = `https://api.themoviedb.org	/3/movie/now_playing?api_key=${API_KEY}&language=en-US`;

  useEffect(() => {
  fetch(API_URL)
    .then(res => res.json())
    .then(json => setMovieList(json.results))
  }, [])

  console.log(movieList)

  //const Item = ({ title }) => (
     // <Button 
     //onPress={() => navigation.navigate('Movie detail', {itemId: movieList.id})}
     // >
      //<View>{title}</View>
     // </Button>
  //);
  
  // const renderItem = ({ item }) => (
  //   <Button       
  //       onPress={() => navigation.navigate('Movie detail', {itemId: movieList.id,})}
  //     >
  //     <Item title={item.original_title} />
  //   </Button>
    
  //);

return (
  <ScrollView>
    {movieList.map((movie) => (
      <Button
      key={movie.id}
      onPress={() => navigation.navigate('Movie detail', {itemId: movie.id,})}
      //onPress={() => navigation.navigate('Movie detail', { movie })}
      >
      <Text>{movie.original_title}</Text>
      </Button>
    ))}
  </ScrollView>
)}

export default MovieList

//  <FlatList 
  //     data={movieList}
  //     renderItem={renderItem}
  //     //keyExtractor={item => item.id}
  //   /> 
// const Title = styled.View`
//     background-color: #f9c2ff;
//     padding: 20px;
//     margin: 20px;
//     flex: 1;
// `

// const Container = styled.View `
//     flex: 1;
//     justify-content: center;
//     background-color: #F6E5C0;
// `

const Button = styled.TouchableOpacity `
    align-items: center;
    background-color: #f9c2ff;
    padding: 20px;
    margin-bottom: 10px;

    justify-content: center;
`





// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: Constants.statusBarHeight,
//     marginHorizontal: 16
//   },
//   item: {
//     backgroundColor: "#f9c2ff",
//     padding: 20,
//     marginVertical: 8
//   },
//   header: {
//     fontSize: 32,
//     backgroundColor: "#fff"
//   },
//   title: {
//     fontSize: 24
//   }
// })







//}
//export default Space