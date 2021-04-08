import React from "react";
import { FlatList, SafeAreaView } from "react-native";
import styled from "styled-components/native";
import { useGetUpcoming } from "../hooks/FetchData";
import { MovieCover } from "../components/MovieCover";
import { ListHeaderTitle } from "../components/ListHeaderTitle";

// This is the main container for this screen
const UpcomingContainer = styled.View`
  height: 100%;
  background: #000;
  width: 100%;
`;

const MediaList = styled.ScrollView`
  width: 100%;
  height: 100%;
`;

export const Upcoming = ({ navigation }) => {
  const { upcomingList, error } = useGetUpcoming();

  return (
    <SafeAreaView style={{ backgroundColor: "#000" }}>
      <UpcomingContainer>
        <MediaList>
          <FlatList
            ListHeaderComponent={() => (
              <ListHeaderTitle title="Upcoming Movies" />
            )}
            data={upcomingList}
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
      </UpcomingContainer>
    </SafeAreaView>
  );
};
