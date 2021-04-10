import React from "react";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import { useGetMediaDetail, useGetMediaVideos } from "../hooks/FetchData";
import { Dimensions, Share } from "react-native";
import { WebView } from "react-native-webview";
import { useSaveFavoriteMedia, useGetMediaId } from "../hooks/asyncStorage";

const windowWidth = Dimensions.get("window").width;

const MediaDetailContainer = styled.SafeAreaView`
  display: flex;
  height: 100%;
  background: #000;
`;

const MediaDetailHeader = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  margin: 15px;
`;

const VideoContainer = styled.View`
  width: 100%;
  height: 35%;
  background-color: #fff;
`;

const ContentWrapper = styled.View`
  width: 100%;
  padding: 3%;
`;

const MediaTitle = styled.Text`
  font-size: ${(windowWidth * 20) / 320}px;
  color: #fff;
`;

const MediaOverview = styled.Text`
  font-size: ${(windowWidth * 12) / 320}px;
  color: #fff;
  margin-top: ${(windowWidth * 15) / 320}px;
  text-align: justify;
`;

const MediaRating = styled.Text`
  font-size: ${(windowWidth * 14) / 320}px;
  color: #cc1d1d;
  font-weight: 700;
  margin-top: ${(windowWidth * 8) / 320}px;
`;

const ButtonsContainer = styled.View`
  margin-top: ${(windowWidth * 30) / 320}px;
  width: 100%;
  height: 15%;
  flex-direction: row;
`;

const ActionButton = styled.TouchableOpacity`
  width: 30%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const ActionButtonTitle = styled.Text`
  font-size: ${(windowWidth * 10) / 320}px;
  margin-top: ${(windowWidth * 1) / 320}px;
  color: #fff;
`;

export const MediaDetail = (props) => {
  const { detail } = useGetMediaDetail(props.route.params.media_id);
  const { videoKey } = useGetMediaVideos(props.route.params.media_id);
  const { storeData } = useSaveFavoriteMedia();
  const { idFound, getId } = useGetMediaId(props.route.params.media_id);

  const onShare = async () => {
    try {
      await Share.share({
        message: `https://www.youtube.com/watch?v=${videoKey}`,
      });
    } catch (error) {
      alert(error.message);
    }
  };

  const onSaveMedia = async () => {
    await storeData(props.route.params.media_id);
    await getId();
  };

  return (
    <MediaDetailContainer>
      <MediaDetailHeader onPress={() => props.navigation.goBack()}>
        <Ionicons name="chevron-back" color="#fff" size={30} />
      </MediaDetailHeader>
      <VideoContainer>
        {videoKey && (
          <WebView
            style={{ height: "100%", width: "100%" }}
            javaScriptEnabled={true}
            source={{
              uri: `https://www.youtube.com/embed/${videoKey}`,
            }}
          />
        )}
      </VideoContainer>

      <ContentWrapper>
        <MediaTitle>{detail && detail.title}</MediaTitle>
        <MediaRating>⭐ {detail && detail.vote_average} / 10</MediaRating>
        <MediaOverview>{detail && detail.overview}</MediaOverview>

        <ButtonsContainer>
          <ActionButton onPress={onSaveMedia}>
            <Ionicons
              name={idFound ? "heart-outline" : "add"}
              color="#fff"
              size={30}
            />
            <ActionButtonTitle>My Favorites</ActionButtonTitle>
          </ActionButton>

          <ActionButton onPress={onShare}>
            <Ionicons name="share-outline" color="#fff" size={30} />
            <ActionButtonTitle>Share</ActionButtonTitle>
          </ActionButton>
        </ButtonsContainer>
      </ContentWrapper>
    </MediaDetailContainer>
  );
};
