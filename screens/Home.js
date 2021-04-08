import React from "react";
import { FlatList, SafeAreaView } from "react-native";
import styled from "styled-components/native";
import { useGetTrending } from "../hooks/FetchData";
import { MovieCover } from "../components/MovieCover";
import { ListHeaderTitle } from "../components/ListHeaderTitle";

// This is the main container for this screen
const HomeContainer = styled.View`
  height: 100%;
  background: #000;
  width: 100%;
`;

const MediaList = styled.ScrollView`
  width: 100%;
  height: 100%;
`;

export const Home = ({ navigation }) => {
  const { trendingList, error } = useGetTrending();

  return (
    <SafeAreaView style={{ backgroundColor: "#000" }}>
      <HomeContainer>
        <MediaList>
          <FlatList
            ListHeaderComponent={() => <ListHeaderTitle title="Movies" />}
            data={trendingList.filter((media) => media.media_type === "movie")}
            renderItem={({ item }) => {
              return (
                <MovieCover
                  navigation={navigation}
                  media_id={item.id}
                  poster_path={item.poster_path}
                />
              );
            }}
            numColumns={3}
            contentContainerStyle={{
              flex: 1,
              justifyContent: "space-between",
            }}
            keyExtractor={(item) => item.id}
            columnWrapperStyle={{
              justifyContent: "space-between",
            }}
          />
          <FlatList
            ListHeaderComponent={() => <ListHeaderTitle title="TV Series" />}
            data={trendingList.filter((media) => media.media_type === "tv")}
            renderItem={({ item }) => {
              return (
                <MovieCover
                  navigation={navigation}
                  media_id={item.id}
                  poster_path={item.poster_path}
                />
              );
            }}
            numColumns={3}
            contentContainerStyle={{
              flex: 1,
              justifyContent: "space-between",
            }}
            keyExtractor={(item) => item.id}
            columnWrapperStyle={{
              justifyContent: "space-between",
            }}
          />
        </MediaList>
      </HomeContainer>
    </SafeAreaView>
  );
};
