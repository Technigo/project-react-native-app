import React from "react";
import styled from "styled-components/native";
import homeBackground from "../assets/background.jpg";
import { Share } from "react-native";
import placeholder from "../assets/placeholder1.png";

import { StarRating } from "./StarRating";

const ResultContainer = styled.ImageBackground`
  flex: 1;
  padding: 50px 15px 30px 15px;
`;

const GroupImageAndText = styled.View`
  flex-direction: row;
  width: 75%;
  padding: 0 5px;
`;

const GroupAuthorAndTitle = styled.View`
  flex-direction: column;
  justify-content: flex-end;
`;

const GroupButtons = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin-top: 20px;
`;

const ImageContainer = styled.Image`
  height: 125px;
  width: 83px;
  margin-right: 10px;
  margin-bottom: 0;
  justify-content: flex-end;
`;

const InfoText = styled.Text`
  background: rgba(0, 0, 0, 0.5);
  font-size: 14px;
  color: #fff;
  flex-wrap: wrap;
  padding-bottom: 2px;
`;

const TitleText = styled(InfoText)`
  font-size: 15px;
  font-weight: 700;
`;

const ScrollViewContainer = styled.ScrollView`
  padding: 20px 15px 0 15px;
  height: 150px;
`;

const DescriptionText = styled(InfoText)`
  background: rgba(0, 0, 0, 0.5);
  text-align: justify;
`;

const StyledButton = styled.TouchableOpacity`
  height: 40px;
  width: 46%;
  padding: 5px 4px;
  background: #43464b;
  border-radius: 15px;
  border: 1px solid white;
  align-items: center;
  justify-content: center;
`;

const ButtonText = styled.Text`
  color: #fff;
  text-transform: uppercase;
  text-align: center;
`;

export const ReadMore = ({ navigation, route }) => {
  const book = route.params.data;

  const navigateToHomeScreen = () => {
    navigation.navigate("Home");
  };

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: `I really think you should read this book. ${book.title} by ${book.authors}.`,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          alert("Successfully shared.");
        } else {
          alert("Could not share message.");
        }
      } else if (result.action === Share.dismissedAction) {
        alert("Could not share message.");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <ResultContainer source={homeBackground}>
      <GroupImageAndText>
        {book.imageLinks === undefined ? (
          <ImageContainer source={placeholder} />
        ) : (
          <ImageContainer source={{ uri: `${book.imageLinks.thumbnail}` }} />
        )}
        <GroupAuthorAndTitle>
          <TitleText>{book.title}</TitleText>
          {book.subtitle ? <InfoText>- {book.subtitle}</InfoText> : null}

          {book.authors === undefined ? (
            <InfoText>Unknown author</InfoText>
          ) : (
            <InfoText>by {book.authors}</InfoText>
          )}

          {book.categories === undefined ? null : (
            <InfoText>Category: {book.categories}</InfoText>
          )}
          {book.language === undefined ? null : (
            <InfoText>Language: "{book.language}"</InfoText>
          )}
          {book.pageCount ? <InfoText>{book.pageCount} pages</InfoText> : null}
          {book.publisher && book.publishedDate ? (
            <InfoText>
              {book.publisher}, {book.publishedDate}
            </InfoText>
          ) : null}
        </GroupAuthorAndTitle>
      </GroupImageAndText>
      <StarRating
        averageRating={book.averageRating}
        ratingsCount={book.ratingsCount}
      />
      <ScrollViewContainer>
        {book.description ? (
          <DescriptionText>{book.description}</DescriptionText>
        ) : (
          <DescriptionText>This book has no description.</DescriptionText>
        )}
      </ScrollViewContainer>
      <GroupButtons>
        <StyledButton onPress={onShare}>
          <ButtonText>Recommend book</ButtonText>
        </StyledButton>
        <StyledButton onPress={navigateToHomeScreen}>
          <ButtonText>Give it another try</ButtonText>
        </StyledButton>
      </GroupButtons>
    </ResultContainer>
  );
};
