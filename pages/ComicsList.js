import React, { useEffect, useState, useRef  } from "react";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import {
  SafeAreaView,
  ScrollView,
  Text,
  StyleSheet,
  View,
  ImageBackground,
  Animated,
  useWindowDimensions
} from "react-native";


import { COMICS_URL } from "../reusables/urls";
import { ComicCard } from "../components/ComicCard";

const Scroll = styled.ScrollView`
    flex: 1 1 auto;
		display:flex;`

const Wrapper = styled.View`
  background-color: black;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Title = styled.Text`
  color: red;
  font-weight: bold;
  font-size: 24px;
  padding: 10px;
  text-align: center;
  background-color: black;
  margin: 0;
`;

export const ComicsList = ({ navigation, comicsId, setComicsId }) => {
  const [comicList, setComicList] = useState([]);
  const [didMount, setDidMount] = useState(false); 
  const scrollX = useRef(new Animated.Value(0)).current;

  const { width: windowWidth } = useWindowDimensions();
  const dimensions =useWindowDimensions();

  useEffect(() => {
    fetch(COMICS_URL)
      .then((res) => res.json())
      .then((comics) => setComicList(comics.data.results));
  }, []);

    useEffect(() => {
     setDidMount(true);
     return () => setDidMount(false);
  }, [])
  
  if(!didMount) {
    return null;
  }
  console.log(didMount)

  
  return (
    dimensions.width<768?(
    <SafeAreaView style={styles.container}>
      <View style={styles.scrollContainer}>
        <Scroll
          horizontal={true}
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event([
            {
              nativeEvent: {
                contentOffset: {
                  x: scrollX
                }
              }
            }
          ])}
          scrollEventThrottle={1}
        >
          {comicList.map((comic, comicIndex) => {
            return (
          <ComicCard path={comic.images[0].path} title={comic.title} comicIndex={comicIndex} setComicsId={setComicsId} navigation={navigation} id={comic.id}/>
            );
          })}
        </Scroll>
        <View style={styles.indicatorContainer}>
          {comicList.map((comic, comicIndex) => {
            const width = scrollX.interpolate({
              inputRange: [
                windowWidth * (comicIndex - 1),
                windowWidth * comicIndex,
                windowWidth * (comicIndex + 1)
              ],
              outputRange: [8, 16, 8],
              extrapolate: "clamp"
            });
            return (
              <Animated.View
                key={comicIndex}
                style={[styles.normalDot, { width }]}
              />
            );
          })}
        </View>
      </View>
    </SafeAreaView>) :
    (<Wrapper>{comicList.map((comic, comicIndex) => {
      return (
    <ComicCard path={comic.images[0].path} title={comic.title} comicIndex={comicIndex} setComicsId={setComicsId} navigation={navigation} id={comic.id}/>
      );
    })}</Wrapper>)
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  scrollContainer: {
    height: 300,
    alignItems: "center",
    justifyContent: "center"
  },
  card: {
    flex: 1,
    marginVertical: 4,
    marginHorizontal: 16,
    borderRadius: 5,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center"
  },
  textContainer: {
    backgroundColor: "rgba(0,0,0, 0.7)",
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 5
  },
  infoText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold"
  },
  normalDot: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: "silver",
    marginHorizontal: 4
  },
  indicatorContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  }
});
/*   return (
    <Scroll>
      <Title>MARVEL</Title>
      <Wrapper>
        {comicList.map((comic) => (
          <ComicCard
            setComicsId={setComicsId}
            comicsId={comicsId}
            navigation={navigation}
            {...comic}
            key={comic.id}
            path={comic.images[0].path}
          />
        ))}
      </Wrapper>
    </Scroll>
  );
}; */
