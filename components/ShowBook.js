import React, { useEffect, useState } from "react";
import { Button, ActivityIndicator } from "react-native";
import styled from "styled-components/native";
import homeBackground from "../assets/background.jpg";
import placeholder from "../assets/placeholder1.png"

const Separator = styled.View`
  margin: 16px 0;
`;

const Group = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

const ResultContainer = styled.ImageBackground`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 50px 25px 25px 25px;
`;

const HeaderText = styled.Text`
  font-size: 24px;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  text-align: center;
`;

const AuthorText = styled(HeaderText)`
  font-size: 14px;
`;

const TitleText = styled(AuthorText)`
  font-weight: 700;
`;

const ImageContainer = styled.Image`
  height: 250px;
  width: 165px;
  margin: 15px;
`;

export const ShowBook = ({ navigation, route }) => {
  let randomNumber = 0;
  const [book, setBook] = useState([]);
  const [loader, setLoader] = useState(true);

  const chooseRandomBook = (nr) => {
    return Math.floor(Math.random() * nr);
  };

  const navigateToHomeScreen = () => {
    navigation.navigate("Home");
  };

  const navigateToReadMore = () => {
    navigation.navigate("ReadMore", {
      data: book,
    });
  };

  useEffect(() => {
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=search+"${route.params.data}"&maxResults=40`
    )
      .then((respons) => respons.json())
      .then((json) => {
        setLoader(false);
        {json.totalItems === 0
          ? null
          : ( 
            randomNumber = chooseRandomBook(json.items.length),
            setBook(json.items[randomNumber].volumeInfo),
            console.log(json),
            console.log(json.items[randomNumber].volumeInfo)
            )
        }      
      });
  }, []);

  return (
    
    <ResultContainer source={homeBackground}>
      {loader && (
        <>
          <HeaderText>Wait, I think I have the perfect book for you!</HeaderText>
          <Separator />
          <ActivityIndicator size="large" color="#e4b77d" />
        </>
      )}

      {!loader && !book.title && (
        <><HeaderText>Sorry, I do not have a book that matches "{route.params.data}"</HeaderText>
        <Separator />
        <Button
              color="#43464B"
              title="Give it another try"
              onPress={navigateToHomeScreen}
            ></Button></>
      )}
      
      {!loader && book.title && (
        <>
          <HeaderText>I recommend this book!</HeaderText>
          <Separator />
          <TitleText>{book.title}</TitleText>
          {book.authors === undefined ? (
            <AuthorText>Unknown author</AuthorText>
          ) : (
            <AuthorText>by {book.authors}</AuthorText>
          )}
          {book.imageLinks === undefined ? (
            <ImageContainer source={ placeholder }/>
          ) : (
            <ImageContainer source={{ uri: `${book.imageLinks.thumbnail}` }} />
          )}
          <Separator />
          <Group>
            <Button
              color="#43464B"
              title="Read more"
              onPress={navigateToReadMore}
            ></Button>
            <Button
              color="#43464B"
              title="Give it another try"
              onPress={navigateToHomeScreen}
            ></Button>
          </Group>
        </>      
      )}
    </ResultContainer>
  );
};
