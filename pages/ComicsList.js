import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components/native";
import { StyleSheet, Animated, useWindowDimensions } from "react-native";

import { COMICS_URL } from "../reusables/urls";
import { ComicCard } from "../components/ComicCard";

export const ComicsList = ({ navigation, setComicTitle }) => {
  const [comicList, setComicList] = useState([]);
  const [didMount, setDidMount] = useState(false);
  const scrollX = useRef(new Animated.Value(0)).current;
  const { width: windowWidth } = useWindowDimensions();

  useEffect(() => {
    fetch(COMICS_URL)
      .then((res) => res.json())
      .then((comics) => setComicList(comics.data.results));
  }, []);

  /*   useEffect(() => {
    setDidMount(true);
    return () => setDidMount(false);
  }, []);

  if (!didMount) {
    return null;
  }
  console.log(didMount); */

  const mapComics = (comic) => {
    console.log(comic.images[0])
    return (
      <ComicCard
        path={comic.images[0] && comic.images[0].path}
        title={comic.title}
        setComicTitle={setComicTitle}
        navigation={navigation}
        id={comic.id}
        key={comic.id}
      />
    );
  };

 
  return windowWidth < 768 ? (
    <MobileView>
      <ScrollContainer>
        <Animated.ScrollView
          horizontal={true}
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {
                    x: scrollX,
                  },
                },
              },
            ],
            { useNativeDriver: false}
          )}
          
          scrollEventThrottle={1}
        >
          {comicList.map((comic) => mapComics(comic))}
        </Animated.ScrollView>
        <Indicator>
          {comicList.map((comic, comicIndex) => {
            const width = scrollX.interpolate({
              inputRange: [
                windowWidth * (comicIndex - 1),
                windowWidth * comicIndex,
                windowWidth * (comicIndex + 1),
              ],
              outputRange: [8, 16, 8],
              extrapolate: "clamp",
            });
            return (
              <Animated.View
                key={comicIndex}
                style={[styles.normalDot, { width }]}
              />
            );
          })}
        </Indicator>
      </ScrollContainer>
    </MobileView>
  ) : (
    <WebView>
      {comicList.map((comic) => mapComics(comic))}
    </WebView>
  );
};


const ScrollContainer = styled.View`
  height: 300px;
  align-items: center;
  justify-content: center;
`;

const MobileView = styled.SafeAreaView`
  background-color: black;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

const WebView = styled.SafeAreaView`
  background-color: black;
  flex: 1;
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Indicator = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const styles = StyleSheet.create({
  normalDot: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: "silver",
    marginHorizontal: 4,
  },
});
